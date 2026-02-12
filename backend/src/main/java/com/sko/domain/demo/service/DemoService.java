package com.sko.domain.demo.service;

import com.sko.domain.demo.dto.CreateDemoRequest;
import com.sko.domain.demo.dto.DemoDetailResponse;
import com.sko.domain.demo.dto.DemoSummaryResponse;
import com.sko.domain.demo.dto.UpdateDemoRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DemoService {

    /**
     * Demo 관련 비즈니스 로직을 담당하는 서비스입니다.
     * 현재는 구현 전 단계라, 빈 결과/널을 반환하는 안전한 스텁만 제공합니다.
     */

    public Page<DemoSummaryResponse> listPublic(int page, int size) {
        // 추후 DemoRepository를 사용해 공개 데모 목록을 페이징 조회합니다.
        return new PageImpl<>(List.of());
    }

    public Page<DemoSummaryResponse> listMyDemos(int page, int size) {
        // 추후 현재 로그인 사용자의 데모만 필터링하여 반환합니다.
        return new PageImpl<>(List.of());
    }

    public DemoDetailResponse getDetail(Long id) {
        // 추후 특정 데모의 상세 정보를 조회합니다.
        return null;
    }

    public DemoDetailResponse create(CreateDemoRequest request) {
        // 추후 요청 정보를 기반으로 Demo 엔티티를 생성/저장합니다.
        return null;
    }

    public DemoDetailResponse update(Long id, UpdateDemoRequest request) {
        // 추후 해당 데모를 수정하고 변경된 정보를 반환합니다.
        return null;
    }

    public void delete(Long id) {
        // 추후 해당 데모를 삭제합니다.
    }
}

