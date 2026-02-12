package com.sko.common.exception;

public enum ErrorCode {

    // Common
    INTERNAL_SERVER_ERROR("예상치 못한 오류가 발생했습니다."),
    INVALID_REQUEST("잘못된 요청입니다."),
    NOT_FOUND("리소스를 찾을 수 없습니다."),
    UNAUTHORIZED("인증이 필요합니다."),
    FORBIDDEN("권한이 없습니다."),

    // Auth
    AUTH_INVALID_CREDENTIALS("이메일 또는 비밀번호가 올바르지 않습니다."),
    AUTH_EMAIL_ALREADY_USED("이미 사용 중인 이메일입니다."),

    // Domain specific 예시는 필요 시 추가
    PATTERN_NOT_FOUND("패턴을 찾을 수 없습니다."),
    DEMO_NOT_FOUND("데모를 찾을 수 없습니다.");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}

