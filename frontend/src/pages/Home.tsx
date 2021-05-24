import React from 'react';
import StoryCard from '../components/StoryCard';

const Home = () => {

    return (
        <div className="container mx-auto my-4">
            <div className="grid grid-cols-3 gap-4">
                <StoryCard title="Teste" text="Teste" image="meh" />
                <StoryCard title="Teste" text="Teste" image="meh" />
                <StoryCard title="Teste" text="Teste" image="meh" />
                <StoryCard title="Teste" text="Teste" image="meh" />
                <StoryCard title="Teste" text="Teste" image="meh" />
            </div>
        </div>
    );
};

export default Home;