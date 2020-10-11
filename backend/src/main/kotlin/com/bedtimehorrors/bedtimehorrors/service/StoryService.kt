package com.bedtimehorrors.bedtimehorrors.service

import com.bedtimehorrors.bedtimehorrors.repository.StoryRepository
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service

@Service
class StoryService(val storyRepository: StoryRepository) {

    fun retrieveStories() = storyRepository.findAll()
}