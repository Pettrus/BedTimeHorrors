package com.bedtimehorrors.bedtimehorrors.repository

import com.bedtimehorrors.bedtimehorrors.model.Story
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface StoryRepository: JpaRepository<Story, UUID> {
}