package com.sko.domain.demo.repository;

import com.sko.domain.demo.entity.Demo;
import com.sko.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemoRepository extends JpaRepository<Demo, Long> {

    List<Demo> findByAuthor(User author);
}

