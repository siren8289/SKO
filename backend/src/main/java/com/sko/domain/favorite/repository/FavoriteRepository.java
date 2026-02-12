package com.sko.domain.favorite.repository;

import com.sko.domain.demo.entity.Demo;
import com.sko.domain.favorite.entity.Favorite;
import com.sko.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUser(User user);

    Optional<Favorite> findByUserAndDemo(User user, Demo demo);
}

