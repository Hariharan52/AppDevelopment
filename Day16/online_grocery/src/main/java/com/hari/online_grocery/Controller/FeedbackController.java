package com.hari.online_grocery.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hari.online_grocery.Model.Feedback;
import com.hari.online_grocery.Service.FeedbackService;


@RestController
@RequestMapping("/api/feedback")
@CrossOrigin("*")
public class FeedbackController {
	 @Autowired
	    private FeedbackService feedbackService;

	    @PostMapping
	    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
	        Feedback createdFeedback = feedbackService.createFeedback(feedback);
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdFeedback);
	    }

	    @GetMapping
	    public List<Feedback> getAllFeedback() {
	        return feedbackService.getAllFeedback();
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteFeedback(@PathVariable Long id) {
	        feedbackService.deleteFeedback(id);
	        return ResponseEntity.ok("Feedback deleted successfully");
	    }

}
