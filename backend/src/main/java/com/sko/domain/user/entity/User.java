package com.sko.domain.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    private String password;

    private String avatarUrl;

    protected User() {
    }

    public User(String email, String name, String password, String avatarUrl) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.avatarUrl = avatarUrl;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void updateProfile(String name, String avatarUrl) {
        this.name = name;
        this.avatarUrl = avatarUrl;
    }
}

