package com.hari.online_grocery.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hari.online_grocery.Model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}