import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, CardMedia, Container, CardContent, Typography, Grid, CardActionArea
} from '@material-ui/core';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

type StoryType = "REAL" | "PARANORMAL";

interface Story {
    id: string;
    title: string;
    narrative: string;
    type: StoryType;
    imageLink: string;
    audio: string;
    audioLength: string;
    originalStoryLink: string;
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
        height: 140
    },
    button: {
        backgroundColor: '#c48c33'
    },
    appBar: {
        position: 'relative',
        backgroundColor: '#262626'
    },
    dialogContent: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2)
    },
    originalPost: {
        marginLeft: theme.spacing(2)
    }
}));

const Home = () => {
    const classes = useStyles();

    const { isLoading, error, data: stories }: Query = useQuery('stories', () =>
        fetch(`${process.env.REACT_APP_API_URL}/story`).then(res =>
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

    const renderCard = (story: Story) => (
        <Grid item key={story.id} xs={12} sm={6} md={4} lg={4}>
            <Link to={`/story/${story.id}`}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={story.imageLink}
                            title={story.title}
                        />

                        <CardContent>
                            <Typography>
                                {story.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );

    return (
        <Container>
            <Grid container spacing={2}>
                {stories.map(story => renderCard(story))}
            </Grid>
        </Container>
    );
};

export default Home;
