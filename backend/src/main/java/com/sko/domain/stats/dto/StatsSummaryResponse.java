package com.sko.domain.stats.dto;

public record StatsSummaryResponse(
        long totalDemos,
        long totalFavorites,
        long totalViews,
        long totalLikes
) {
}

