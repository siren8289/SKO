package com.sko.domain.demo.dto;

public record DemoSummaryResponse(
        Long id,
        String title,
        String description,
        String categoryCode,
        String patternCode,
        String authorName,
        int likes,
        int views
) {
}

