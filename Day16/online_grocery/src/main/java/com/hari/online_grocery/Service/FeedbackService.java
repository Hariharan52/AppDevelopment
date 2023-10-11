package com.hari.online_grocery.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hari.online_grocery.Model.Feedback;
import com.hari.online_grocery.Repository.FeedbackRepository;

@Service
public class FeedbackService {
	
	 @Autowired
	    private FeedbackRepository feedbackRepository;

	    public Feedback createFeedback(Feedback feedback) {
	        return feedbackRepository.save(feedback);
	    }

	    public List<Feedback> getAllFeedback() {
	        return feedbackRepository.findAll();
	    }

	    public void deleteFeedback(Long id) {
	        feedbackRepository.deleteById(id);
	    }

}
