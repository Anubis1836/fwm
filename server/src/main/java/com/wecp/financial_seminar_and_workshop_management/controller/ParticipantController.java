package com.wecp.financial_seminar_and_workshop_management.controller;


import com.wecp.financial_seminar_and_workshop_management.entity.Enrollment;
import com.wecp.financial_seminar_and_workshop_management.entity.Event;
import com.wecp.financial_seminar_and_workshop_management.entity.Feedback;
import com.wecp.financial_seminar_and_workshop_management.service.EnrollmentService;
import com.wecp.financial_seminar_and_workshop_management.service.EventService;
import com.wecp.financial_seminar_and_workshop_management.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


<<<<<<< HEAD
public class ParticipantController {



    @GetMapping("/api/participant/events")
    public ResponseEntity<List<Event>> getEvents() {
        // Get all events
=======
@RestController
public class ParticipantController {

    @Autowired private EventService eventService;
    @Autowired private EnrollmentService enrollmentService;
    @Autowired private FeedbackService feedbackService;

    @GetMapping("/api/participant/events")
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllOrdered());
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
    }

    @PostMapping("/api/participant/event/{eventId}/enroll")
    public ResponseEntity<Enrollment> enrollInEvent(@RequestParam Long userId, @PathVariable Long eventId) {
<<<<<<< HEAD
     // Enroll in event
=======
        return ResponseEntity.ok(enrollmentService.enroll(userId, eventId));
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
    }

    @GetMapping("/api/participant/event/{id}/status")
    public ResponseEntity<Event> viewEventStatus(@PathVariable Long id) {
<<<<<<< HEAD
        // view event by event id
    }

    @PostMapping("/api/participant/event/{eventId}/feedback")
    public ResponseEntity<Feedback> provideFeedback(@RequestParam Long userId, @PathVariable Long eventId, @RequestBody Feedback feedback) {
        // Provide feedback for event
    }
}
=======
        return ResponseEntity.ok(eventService.getById(id));
    }

    @PostMapping("/api/participant/event/{eventId}/feedback")
    public ResponseEntity<Feedback> provideFeedback(@RequestParam Long userId,
                                                    @PathVariable Long eventId,
                                                    @RequestBody Feedback feedback) {
        return ResponseEntity.ok(feedbackService.addFeedback(userId, eventId, feedback));
    }
}
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
