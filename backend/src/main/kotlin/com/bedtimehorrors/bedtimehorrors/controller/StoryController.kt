package com.bedtimehorrors.bedtimehorrors.controller

import com.bedtimehorrors.bedtimehorrors.service.StoryService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/story")
class StoryController(val storyService: StoryService) {

    @GetMapping
    fun getAllStories() = storyService.retrieveStories()

    @GetMapping("/{uuid}")
    fun getStoryByUUID(@PathVariable uuid: UUID) = storyService.getStoryById(uuid)
}