package com.sko.domain.favorite.service;

import com.sko.domain.favorite.dto.FavoriteResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {

    /**
     * 즐겨찾기 추가/삭제 및 조회를 담당하는 서비스입니다.
     * 현재는 실제 저장 없이 빈 결과만 반환합니다.
     */

    public List<FavoriteResponse> listMyFavorites() {
        // 추후 현재 로그인 사용자의 즐겨찾기 목록을 조회합니다.
        return List.of();
    }

    public void addFavorite(Long demoId) {
        // 추후 즐겨찾기 엔티티를 생성/저장합니다.
    }

    public void removeFavorite(Long demoId) {
        // 추후 해당 데모에 대한 즐겨찾기를 제거합니다.
    }
}

