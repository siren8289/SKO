package com.sko.domain.user.dto;

public record UserResponse(
        Long id,
        String name,
        String email,
        String avatarUrl
) {
}

