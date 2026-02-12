package com.sko.domain.stats.controller;

import com.sko.common.response.ApiResponse;
import com.sko.domain.stats.dto.ActivitySeriesResponse;
import com.sko.domain.stats.dto.StatsSummaryResponse;
import com.sko.domain.stats.service.StatsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/stats")
public class StatsController {

    private final StatsService statsService;

    public StatsController(StatsService statsService) {
        this.statsService = statsService;
    }

    @GetMapping("/summary")
    public ResponseEntity<ApiResponse<StatsSummaryResponse>> summary() {
        StatsSummaryResponse summary = statsService.getSummary();
        return ResponseEntity.ok(ApiResponse.ok(summary));
    }

    @GetMapping("/activity")
    public ResponseEntity<ApiResponse<List<ActivitySeriesResponse>>> activity() {
        List<ActivitySeriesResponse> series = statsService.getActivitySeries();
        return ResponseEntity.ok(ApiResponse.ok(series));
    }
}

