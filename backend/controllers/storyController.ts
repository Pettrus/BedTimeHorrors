import type { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from "../database/db.ts";
import type { Story } from "../models/story.ts";

const storyCollection = db.collection('story');

export const getAllStories = async (ctx: RouterContext) => {
    const stories = await storyCollection.find();

    ctx.response.body = stories;
};

/* export const createTestStory = async (ctx: RouterContext) => {
    const file = await Deno.readFile('/home/surttep/Projetos/horror-reddit-client/out.mp3');

    const storyToSave: Story = {
        title: 'Teste',
        description: 'Teste 2',
        storyType: 'REAL',
        audio: ''
    };

    await storyCollection.insertOne(storyToSave);

    ctx.response.body = 'FOI';
}; */
