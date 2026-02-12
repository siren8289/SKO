package com.sko.domain.demo.controller;

import com.sko.common.response.ApiResponse;
import com.sko.domain.demo.dto.CreateDemoRequest;
import com.sko.domain.demo.dto.DemoDetailResponse;
import com.sko.domain.demo.dto.DemoSummaryResponse;
import com.sko.domain.demo.dto.UpdateDemoRequest;
import com.sko.domain.demo.service.DemoService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/demos")
public class DemoController {

    private final DemoService demoService;

    public DemoController(DemoService demoService) {
        this.demoService = demoService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<DemoSummaryResponse>>> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        Page<DemoSummaryResponse> demos = demoService.listPublic(page, size);
        return ResponseEntity.ok(ApiResponse.ok(demos));
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<Page<DemoSummaryResponse>>> myDemos(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ) {
        Page<DemoSummaryResponse> demos = demoService.listMyDemos(page, size);
        return ResponseEntity.ok(ApiResponse.ok(demos));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<DemoDetailResponse>> detail(@PathVariable Long id) {
        DemoDetailResponse detail = demoService.getDetail(id);
        return ResponseEntity.ok(ApiResponse.ok(detail));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<DemoDetailResponse>> create(
            @RequestBody @Valid CreateDemoRequest request
    ) {
        DemoDetailResponse created = demoService.create(request);
        return ResponseEntity.ok(ApiResponse.ok(created));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse<DemoDetailResponse>> update(
            @PathVariable Long id,
            @RequestBody UpdateDemoRequest request
    ) {
        DemoDetailResponse updated = demoService.update(id, request);
        return ResponseEntity.ok(ApiResponse.ok(updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        demoService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok(null));
    }
}

