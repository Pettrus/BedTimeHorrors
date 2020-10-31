import React, { useContext } from 'react';
import { 
    Container, Grid, Chip, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import AudioPlayerContext from '../../context/audio-player-context';
import { Face, BlurOn, PlayArrow, Reddit, ArrowBackIos } from '@material-ui/icons';

type StoryType = "REAL" | "PARANORMAL";

interface Story {
    id: string;
    title: string;
    narrative: string;
    storyType: StoryType;
    imageLink: string;
    audio: string;
    audioLength: string;
    originalStoryLink: string;
}

interface Query {
    isLoading: boolean;
    error: any;
    data: Story;
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white'
    },
    image: {
        borderRadius: '7px',
        width: '100%'
    },
    text: {
        marginLeft: '1.5em',
        textAlign: "justify"
    },
    button: {
        backgroundColor: '#c48c33',
        marginTop: '1em'
    },
    chip: {
    },
    originalPost: {
        marginLeft: '1em',
    },
    back: {
        marginBottom: '1em'
    }
}));

const Detail = () => {
    const classes = useStyles();
    const { storyId }: any = useParams();
    const { setAudioSrc } = useContext(AudioPlayerContext);

    const { isLoading, error, data: story }: Query = useQuery('story', () =>
        fetch(`${process.env.REACT_APP_API_URL}/story/${storyId}`).then(res =>
            res.json()
        )
    );

    if (isLoading == null || isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    function playStory() {
        setAudioSrc(story.audio);
    }

    const renderStoryTypeChip = () => (
        story.storyType === 'REAL' ? (
            <Chip
                icon={<Face />}
                label="Real"
                color="primary"
            />
        ) : (
            <Chip
                icon={<BlurOn />}
                label="Paranormal"
                color="secondary"
            />
        )
    )

    return (
        <Container className={classes.root}>
            <div className={classes.back}>
                <Link to="/">
                    <Button
                        startIcon={<ArrowBackIos />}
                        className={classes.back}>
                        Back
                    </Button>
                </Link>
            </div>

            <Grid container>
                <Grid xs={12} md={4} lg={3}>
                    <img src={story.imageLink} className={classes.image} />

                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => playStory()}
                        className={classes.button}
                        startIcon={<PlayArrow />}
                    >
                        Play
                    </Button>
                </Grid>

                <Grid xs={12} md={8} lg={7} className={classes.text}>
                    <div className={classes.chip}>
                        {renderStoryTypeChip()}

                        <Chip
                            icon={<Reddit />}
                            label="Original Post"
                            component="a"
                            className={classes.originalPost}
                            href={story.originalStoryLink}
                            target="_blank"
                            clickable
                        />
                    </div>

                    <h2>{story.title}</h2>

                    <div dangerouslySetInnerHTML={{ __html: story.narrative }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Detail;
