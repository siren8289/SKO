package com.sko.domain.demo.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateDemoRequest(
        @NotBlank String title,
        @NotBlank String description,
        String categoryCode,
        String patternCode,
        String code
) {
}

