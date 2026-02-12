package com.sko.domain.stats.dto;

import java.time.LocalDate;

public record ActivityPoint(
        LocalDate date,
        long count
) {
}

