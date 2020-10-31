package com.bedtimehorrors.bedtimehorrors.service

import com.bedtimehorrors.bedtimehorrors.repository.StoryRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class StoryService(val storyRepository: StoryRepository) {

    fun retrieveStories() = storyRepository.findAll()

    fun getStoryById(uuid: UUID) = storyRepository.findById(uuid)
}