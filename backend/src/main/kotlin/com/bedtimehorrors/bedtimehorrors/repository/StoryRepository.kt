package com.bedtimehorrors.bedtimehorrors.repository

import com.bedtimehorrors.bedtimehorrors.model.Story
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface StoryRepository: PagingAndSortingRepository<Story, String> {
}