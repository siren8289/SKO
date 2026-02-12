package com.sko.common.response;

import com.sko.common.exception.ErrorCode;

public record ErrorResponse(
        String code,
        String message
) {
    public static ErrorResponse of(ErrorCode errorCode) {
        return new ErrorResponse(errorCode.name(), errorCode.getMessage());
    }

    public static ErrorResponse of(String code, String message) {
        return new ErrorResponse(code, message);
    }
}

