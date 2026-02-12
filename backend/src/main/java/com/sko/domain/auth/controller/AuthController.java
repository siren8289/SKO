package com.sko.domain.auth.controller;

import com.sko.common.response.ApiResponse;
import com.sko.domain.auth.dto.LoginRequest;
import com.sko.domain.auth.dto.MeResponse;
import com.sko.domain.auth.dto.SignUpRequest;
import com.sko.domain.auth.dto.TokenResponse;
import com.sko.domain.auth.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<TokenResponse>> login(@RequestBody @Valid LoginRequest request) {
        TokenResponse tokenResponse = authService.login(request);
        return ResponseEntity.ok(ApiResponse.ok(tokenResponse));
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<TokenResponse>> signup(@RequestBody @Valid SignUpRequest request) {
        TokenResponse tokenResponse = authService.signup(request);
        return ResponseEntity.ok(ApiResponse.ok(tokenResponse));
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<MeResponse>> me() {
        MeResponse me = authService.getMe();
        return ResponseEntity.ok(ApiResponse.ok(me));
    }
}

