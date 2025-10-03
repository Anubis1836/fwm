package com.wecp.financial_seminar_and_workshop_management.controller;



import com.wecp.financial_seminar_and_workshop_management.entity.Event;
import com.wecp.financial_seminar_and_workshop_management.entity.Feedback;
import com.wecp.financial_seminar_and_workshop_management.service.EventService;
import com.wecp.financial_seminar_and_workshop_management.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


<<<<<<< HEAD
public class ProfessionalController {

    @GetMapping("/api/professional/events")
    public ResponseEntity<List<Event>> viewAssignedEvents(@RequestParam Long userId) {
        // view assigned events
=======
@RestController
public class ProfessionalController {

    @Autowired private EventService eventService;
    @Autowired private FeedbackService feedbackService;

    @GetMapping("/api/professional/events")
    public ResponseEntity<List<Event>> viewAssignedEvents(@RequestParam Long userId) {
        return ResponseEntity.ok(eventService.getForProfessional(userId));
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
    }

    @PutMapping("/api/professional/event/{id}/status")
    public ResponseEntity<Event> updateEventStatus(@PathVariable Long id, @RequestParam String status) {
<<<<<<< HEAD
        // update event status
    }

    @PostMapping("/api/professional/event/{eventId}/feedback")
    public ResponseEntity<Feedback> provideFeedback(@PathVariable Long eventId, @RequestParam Long userId, @RequestBody Feedback feedback) {
        // provide feedback
    }
}

=======
        return ResponseEntity.ok(eventService.updateStatus(id, status));
    }

    @PostMapping("/api/professional/event/{eventId}/feedback")
    public ResponseEntity<Feedback> provideFeedback(@PathVariable Long eventId,
                                                    @RequestParam Long userId,
                                                    @RequestBody Feedback feedback) {
        return ResponseEntity.ok(feedbackService.addFeedback(userId, eventId, feedback));
    }
}
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
