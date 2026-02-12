package com.sko.domain.pattern.dto;

public record PatternSearchRequest(
        String query,
        String categoryCode,
        String difficulty,
        String sort,   // popular, recent 등
        Integer page,
        Integer size
) {
}

