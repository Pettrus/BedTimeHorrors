import React, { useContext, useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { 
    Card, CardMedia, Container, CardContent, Typography, Grid, CardActions,
    DialogTitle, Dialog, IconButton, DialogContent, DialogContentText, CardActionArea
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ChatIcon from '@material-ui/icons/Chat';
import AudioPlayerContext from '../../context/audio-player-context';
import { useQuery } from 'react-query';

type StoryType = "REAL" | "PARANORMAL";

interface Story {
    id: string;
    title: string;
    narrative: string;
    type: StoryType;
    audio: any;
    
}

interface Query {
    isLoading: boolean;
    error: any;
    data: Array<Story>;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    media: {
        height: 140,
    },
}));

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [previewStory, setPreviewStory] = useState<Story | null>(null);

    const { audioSrc, setAudioSrc } = useContext(AudioPlayerContext);

    const { isLoading, error, data: stories }: Query = useQuery('repoData', () =>
        fetch('http://localhost:8080/story').then(res =>
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
        setAudioSrc('https://storage.googleapis.com/bedtimehorrors/output.mp3');
    }

    function selectPreviewStory(story: Story) {
        setPreviewStory(story);
    }

    const renderModal = () => (
        <Dialog
            open={previewStory != null}
            onClose={() => setPreviewStory(null)}
        >
            <DialogTitle>{previewStory?.title}</DialogTitle>

            <DialogContent>
                <DialogContentText style={{ textAlign: 'justify' }}>
                    {previewStory?.narrative}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );

    const renderCard = (story: Story) => (
        <Grid item key={story.id} xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />

                    <CardContent>
                        <Typography>
                            {story.title}
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary">
                            3:02 min
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon onClick={() => playStory()} style={{ color: '#c48c33' }} />
                        </IconButton>

                        <IconButton aria-label="description" onClick={() => selectPreviewStory(story)}>
                            <ChatIcon />
                        </IconButton>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
    );

    return (
        <Container>
            {renderModal()}

            <Grid container spacing={2}>
                {stories.map(story => renderCard(story))}
            </Grid>
        </Container>
    );
};

export default Home;
