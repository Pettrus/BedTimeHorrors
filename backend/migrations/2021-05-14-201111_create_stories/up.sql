CREATE TYPE story_type_enum AS ENUM ('real', 'supernatural');

CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    plot TEXT NOT NULL,
    original_post VARCHAR(150),
    story_type story_type_enum NOT NULL,
    poster VARCHAR,
    audio VARCHAR NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);