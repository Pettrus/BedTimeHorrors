type StoryType = "REAL" | "PARANORMAL";

interface Story {
    title: string;
    description: string;
    type: StoryType;
    audio: any;
    createdDate: any;
}