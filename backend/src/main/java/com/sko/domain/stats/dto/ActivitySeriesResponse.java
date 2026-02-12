package com.sko.domain.stats.dto;

import java.util.List;

public record ActivitySeriesResponse(
        String metric,          // views, likes, demosCreated 등
        List<ActivityPoint> points
) {
}

