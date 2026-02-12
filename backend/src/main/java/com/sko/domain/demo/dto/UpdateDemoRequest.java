package com.sko.domain.demo.dto;

public record UpdateDemoRequest(
        String title,
        String description,
        String categoryCode,
        String patternCode,
        String code
) {
}

