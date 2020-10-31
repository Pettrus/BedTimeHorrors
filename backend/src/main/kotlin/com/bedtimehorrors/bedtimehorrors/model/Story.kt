package com.bedtimehorrors.bedtimehorrors.model

import com.bedtimehorrors.bedtimehorrors.enum.StoryType
import org.hibernate.annotations.GenericGenerator
import org.jetbrains.annotations.NotNull
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "story")
data class Story(
        @Id
        @GeneratedValue
        @GenericGenerator(name="system-uuid", strategy = "uuid")
        val id: UUID? = null,

        @Column
        @NotNull
        val title: String,

        @Column(columnDefinition = "TEXT")
        @NotNull
        val narrative: String,

        @Column
        @NotNull
        val audio: String,

        @Column
        @NotNull
        val storyType: StoryType,

        @Column
        @NotNull
        val imageLink: String,

        @Column(length = 10)
        @NotNull
        val audioLength: String,

        @Column
        val originalStoryLink: String
)