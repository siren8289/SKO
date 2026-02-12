package com.sko.domain.favorite.controller;

import com.sko.common.response.ApiResponse;
import com.sko.domain.favorite.dto.FavoriteResponse;
import com.sko.domain.favorite.service.FavoriteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<FavoriteResponse>>> list() {
        List<FavoriteResponse> favorites = favoriteService.listMyFavorites();
        return ResponseEntity.ok(ApiResponse.ok(favorites));
    }

    @PutMapping("/{demoId}")
    public ResponseEntity<ApiResponse<Void>> add(@PathVariable Long demoId) {
        favoriteService.addFavorite(demoId);
        return ResponseEntity.ok(ApiResponse.ok(null));
    }

    @DeleteMapping("/{demoId}")
    public ResponseEntity<ApiResponse<Void>> remove(@PathVariable Long demoId) {
        favoriteService.removeFavorite(demoId);
        return ResponseEntity.ok(ApiResponse.ok(null));
    }
}

