package com.sko.domain.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record SignUpRequest(
        @NotBlank String name,
        @Email @NotBlank String email,
        @NotBlank String password
) {
}

