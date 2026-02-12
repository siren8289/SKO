package com.sko.domain.pattern.controller;

import com.sko.common.response.ApiResponse;
import com.sko.domain.pattern.dto.CategoryResponse;
import com.sko.domain.pattern.service.PatternQueryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final PatternQueryService patternQueryService;

    public CategoryController(PatternQueryService patternQueryService) {
        this.patternQueryService = patternQueryService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<CategoryResponse>>> list() {
        List<CategoryResponse> categories = patternQueryService.getCategories();
        return ResponseEntity.ok(ApiResponse.ok(categories));
    }
}

