package com.sko.domain.pattern.controller;

import com.sko.common.response.ApiResponse;
import com.sko.domain.pattern.dto.PatternDetailResponse;
import com.sko.domain.pattern.dto.PatternSearchRequest;
import com.sko.domain.pattern.dto.PatternSummaryResponse;
import com.sko.domain.pattern.service.PatternQueryService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/patterns")
public class PatternController {

    private final PatternQueryService patternQueryService;

    public PatternController(PatternQueryService patternQueryService) {
        this.patternQueryService = patternQueryService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<PatternSummaryResponse>>> list(PatternSearchRequest request) {
        Page<PatternSummaryResponse> page = patternQueryService.search(request);
        return ResponseEntity.ok(ApiResponse.ok(page));
    }

    @GetMapping("/{code}")
    public ResponseEntity<ApiResponse<PatternDetailResponse>> detail(@PathVariable String code) {
        PatternDetailResponse detail = patternQueryService.getDetail(code);
        return ResponseEntity.ok(ApiResponse.ok(detail));
    }
}

