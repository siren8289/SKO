package com.sko.domain.auth.dto;

public record MeResponse(
        Long id,
        String name,
        String email,
        String avatarUrl
) {
}

