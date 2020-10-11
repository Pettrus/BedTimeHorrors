package com.bedtimehorrors.bedtimehorrors.model

import javax.persistence.*

@Entity
@Table(name = "story")
data class Story(
        @Id @GeneratedValue val id: Long? = null,
        @Column val title: String,
        @Column(columnDefinition = "TEXT") val narrative: String,
        @Column val audio: String,
        @Column(name = "audio_length") val audioLength: String,
        @Column(name = "original_story_link") val originalStoryLink: String,
        @Column(name = "created_date") val createdDate: Long? = null
)