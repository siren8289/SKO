package com.sko.domain.demo.dto;

public record DemoDetailResponse(
        Long id,
        String title,
        String description,
        String categoryCode,
        String patternCode,
        String authorName,
        String code,
        int likes,
        int views
) {
}

