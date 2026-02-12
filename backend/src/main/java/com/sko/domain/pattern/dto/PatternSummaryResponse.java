package com.sko.domain.pattern.dto;

public record PatternSummaryResponse(
        Long id,
        String code,
        String name,
        String description,
        String categoryCode,
        String categoryName,
        String difficulty,
        int likes,
        int views
) {
}

