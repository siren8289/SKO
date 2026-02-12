package com.sko.domain.favorite.entity;

import com.sko.domain.demo.entity.Demo;
import com.sko.domain.user.entity.User;
import jakarta.persistence.*;

@Entity
@Table(name = "favorites")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "demo_id")
    private Demo demo;

    protected Favorite() {
    }

    public Favorite(User user, Demo demo) {
        this.user = user;
        this.demo = demo;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Demo getDemo() {
        return demo;
    }
}

