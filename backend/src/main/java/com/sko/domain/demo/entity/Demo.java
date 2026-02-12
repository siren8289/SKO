package com.sko.domain.demo.entity;

import com.sko.domain.user.entity.User;
import jakarta.persistence.*;

@Entity
@Table(name = "demos")
public class Demo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 2000)
    private String description;

    private String categoryCode;

    private String patternCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id")
    private User author;

    @Column(length = 4000)
    private String code; // 간단히 JSON/text 로 보관 (실제에선 별도 테이블/스토리지 추천)

    private int likes;

    private int views;

    protected Demo() {
    }

    public Demo(String title, String description, String categoryCode, String patternCode, User author, String code) {
        this.title = title;
        this.description = description;
        this.categoryCode = categoryCode;
        this.patternCode = patternCode;
        this.author = author;
        this.code = code;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCategoryCode() {
        return categoryCode;
    }

    public String getPatternCode() {
        return patternCode;
    }

    public User getAuthor() {
        return author;
    }

    public String getCode() {
        return code;
    }

    public int getLikes() {
        return likes;
    }

    public int getViews() {
        return views;
    }
}

