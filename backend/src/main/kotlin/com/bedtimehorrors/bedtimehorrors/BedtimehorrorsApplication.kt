package com.bedtimehorrors.bedtimehorrors

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication

@SpringBootApplication
@EntityScan
class BedtimehorrorsApplication

fun main(args: Array<String>) {
	runApplication<BedtimehorrorsApplication>(*args)
}
