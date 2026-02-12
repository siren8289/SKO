package com.sko.domain.pattern.service;

import com.sko.domain.pattern.dto.CategoryResponse;
import com.sko.domain.pattern.dto.PatternDetailResponse;
import com.sko.domain.pattern.dto.PatternSearchRequest;
import com.sko.domain.pattern.dto.PatternSummaryResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatternQueryService {

    /**
     * 패턴/카테고리 조회 및 검색을 담당하는 서비스입니다.
     * 현재는 빈 결과/널을 반환하는 스텁으로만 구성되어 있습니다.
     */

    public Page<PatternSummaryResponse> search(PatternSearchRequest request) {
        // 추후 PatternRepository를 사용해 검색/필터/정렬을 수행합니다.
        return new PageImpl<>(List.of());
    }

    public PatternDetailResponse getDetail(String code) {
        // 추후 특정 패턴의 상세 정보를 조회합니다.
        return null;
    }

    public List<CategoryResponse> getCategories() {
        // 추후 카테고리 목록을 조회합니다.
        return List.of();
    }
}

