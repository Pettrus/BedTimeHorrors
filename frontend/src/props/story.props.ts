type StoryType = "REAL" | "PARANORMAL";

export interface Story {
    id: string;
    title: string;
    narrative: string;
    storyType: StoryType;
    imageLink: string;
    audio: string;
    audioLength: string;
    originalStoryLink: string;
}

export interface Query {
    isLoading: boolean;
    error: any;
    data: Array<Story>;
}

export interface QueryDetail {
    isLoading: boolean;
    error: any;
    data: Story;
}