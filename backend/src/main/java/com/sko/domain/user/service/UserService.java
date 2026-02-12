package com.sko.domain.user.service;

import com.sko.domain.user.dto.UpdateProfileRequest;
import com.sko.domain.user.dto.UserResponse;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    /**
     * 사용자 프로필 조회/수정을 담당하는 서비스입니다.
     * 현재는 실제 인증 정보 없이 고정된 사용자 데이터를 반환합니다.
     */

    public UserResponse getMe() {
        // 추후 SecurityContext에서 현재 로그인 유저를 조회해 반환합니다.
        return new UserResponse(1L, "Test User", "user@example.com", null);
    }

    public UserResponse updateProfile(UpdateProfileRequest request) {
        // 추후 현재 로그인 유저의 프로필을 업데이트한 뒤 변경된 정보를 반환합니다.
        return new UserResponse(1L, request.name(), "user@example.com", request.avatarUrl());
    }
}

