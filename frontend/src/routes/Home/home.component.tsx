import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Container, Card, CardHeader, CardBody, CardFooter } from './home.style';
import { useQuery } from 'react-query';

type StoryType = "REAL" | "PARANORMAL";

interface Story {
    id: string;
    title: string;
    description: string;
    type: StoryType;
    audio: any;
}

interface Query {
    isLoading: boolean;
    error: any;
    data: Array<Story>;
}

const Home = () => {

    const { isLoading, error, data: stories }: Query = useQuery('repoData', () =>
        fetch('http://localhost:8080').then(res =>
            res.json()
        )
    );

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    const renderCards = () => (
        stories?.map(story => (
            <Card key={story.id}>
                <CardHeader>
                    {story.title}
                </CardHeader>
                
                <CardBody>
                    <p>{story.description}</p>
                </CardBody>

                <CardFooter>
                    Audio missing...
                </CardFooter>
            </Card>
        ))
    );

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>
                Bed Time Horrors
            </h2>

            <Grid>
                <Row center="xs">
                    <Col xs={8}>
                        <Container>
                            {renderCards()}
                        </Container>
                    </Col>
                </Row>
            </Grid>
        </>
    );
};

export default Home;
