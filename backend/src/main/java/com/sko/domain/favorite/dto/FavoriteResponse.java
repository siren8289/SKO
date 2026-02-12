package com.sko.domain.favorite.dto;

public record FavoriteResponse(
        Long demoId,
        String title,
        String description,
        String categoryCode,
        String authorName
) {
}

