package com.sko.domain.pattern.dto;

public record CategoryResponse(
        Long id,
        String code,
        String name,
        String description,
        String color
) {
}

