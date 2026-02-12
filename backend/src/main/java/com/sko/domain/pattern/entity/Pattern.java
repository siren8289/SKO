package com.sko.domain.pattern.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "patterns")
public class Pattern {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String code;

    @Column(nullable = false)
    private String name;

    @Column(length = 2000)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    private String difficulty;

    private int likes;

    private int views;

    protected Pattern() {
    }

    public Pattern(String code, String name, String description, Category category, String difficulty) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.category = category;
        this.difficulty = difficulty;
    }

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Category getCategory() {
        return category;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public int getLikes() {
        return likes;
    }

    public int getViews() {
        return views;
    }
}

