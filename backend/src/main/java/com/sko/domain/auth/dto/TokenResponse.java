package com.sko.domain.auth.dto;

public record TokenResponse(
        String accessToken,
        String refreshToken
) {
}

