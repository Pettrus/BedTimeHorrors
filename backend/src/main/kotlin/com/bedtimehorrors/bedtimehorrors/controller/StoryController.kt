package com.bedtimehorrors.bedtimehorrors.controller

import com.bedtimehorrors.bedtimehorrors.service.StoryService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/story")
class StoryController(val storyService: StoryService) {

    @GetMapping
    fun getAllStories() = storyService.retrieveStories()
}