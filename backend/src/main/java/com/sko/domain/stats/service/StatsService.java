package com.sko.domain.stats.service;

import com.sko.domain.stats.dto.ActivitySeriesResponse;
import com.sko.domain.stats.dto.StatsSummaryResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatsService {

    /**
     * 대시보드/차트에 필요한 통계 데이터를 제공하는 서비스입니다.
     * 현재는 실제 집계 로직 없이 기본값을 반환합니다.
     */

    public StatsSummaryResponse getSummary() {
        // 추후 이벤트 로그/집계 테이블에서 실제 값을 계산합니다.
        return new StatsSummaryResponse(0, 0, 0, 0);
    }

    public List<ActivitySeriesResponse> getActivitySeries() {
        // 추후 기간별(일/주/월) 활동량 시계열 데이터를 반환합니다.
        return List.of();
    }
}

