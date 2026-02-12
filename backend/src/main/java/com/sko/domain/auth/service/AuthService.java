package com.sko.domain.auth.service;

import com.sko.common.exception.BusinessException;
import com.sko.common.exception.ErrorCode;
import com.sko.domain.auth.dto.LoginRequest;
import com.sko.domain.auth.dto.MeResponse;
import com.sko.domain.auth.dto.SignUpRequest;
import com.sko.domain.auth.dto.TokenResponse;
import com.sko.domain.user.entity.User;
import com.sko.domain.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 간단한 이메일/비밀번호 기반 로그인 구현 (데모용으로 평문 비교).
     * 실제 서비스에서는 반드시 해시(PasswordEncoder)와 JWT 발급을 사용해야 합니다.
     */
    public TokenResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BusinessException(ErrorCode.AUTH_INVALID_CREDENTIALS));

        if (!user.getPassword().equals(request.password())) {
            throw new BusinessException(ErrorCode.AUTH_INVALID_CREDENTIALS);
        }

        // 현재는 JWT 발급 없이 고정 토큰 문자열을 반환합니다.
        return new TokenResponse("mock-access-token", "mock-refresh-token");
    }

    /**
     * 회원가입 후 액세스/리프레시 토큰을 반환합니다.
     * 현재는 비밀번호를 평문으로 저장하는 데모용 구현입니다.
     */
    public TokenResponse signup(SignUpRequest request) {
        userRepository.findByEmail(request.email()).ifPresent(user -> {
            throw new BusinessException(ErrorCode.AUTH_EMAIL_ALREADY_USED);
        });

        User user = new User(
                request.email(),
                request.name(),
                request.password(), // 데모용: 실제로는 PasswordEncoder 로 해시해야 함
                null
        );
        userRepository.save(user);

        // 현재는 JWT 발급 없이 고정 토큰 문자열을 반환합니다.
        return new TokenResponse("mock-access-token", "mock-refresh-token");
    }

    /**
     * 현재 로그인 유저 정보를 반환합니다.
     * 아직 보안 컨텍스트가 없으므로, 데모용으로 첫 번째 사용자를 반환합니다.
     */
    public MeResponse getMe() {
        User user = userRepository.findAll().stream()
                .findFirst()
                .orElseThrow(() -> new BusinessException(ErrorCode.UNAUTHORIZED));

        return new MeResponse(user.getId(), user.getName(), user.getEmail(), user.getAvatarUrl());
    }
}

