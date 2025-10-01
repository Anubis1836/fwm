package com.wecp.financial_seminar_and_workshop_management.controller;



import com.wecp.financial_seminar_and_workshop_management.entity.Event;
import com.wecp.financial_seminar_and_workshop_management.entity.Resource;
import com.wecp.financial_seminar_and_workshop_management.entity.User;
import com.wecp.financial_seminar_and_workshop_management.service.EventService;
import com.wecp.financial_seminar_and_workshop_management.service.ResourceService;
import com.wecp.financial_seminar_and_workshop_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


<<<<<<< HEAD
public class InstitutionController {



    // Create Event
    @PostMapping("/api/institution/event")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        // create event
    }

    // Update Event
    @PutMapping("/api/institution/event/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        // update event
    }

    // Get Events
    @GetMapping("/api/institution/events")
    public ResponseEntity<List<Event>> getInstitutionsEvents(@RequestParam Long institutionId) {
        // get events of institution
=======

@RestController
public class InstitutionController {

    @Autowired private EventService eventService;
    @Autowired private ResourceService resourceService;
    @Autowired private UserService userService;

    @PostMapping("/api/institution/event")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        return ResponseEntity.ok(eventService.create(event));
    }

    @PutMapping("/api/institution/event/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {
        return ResponseEntity.ok(eventService.update(id, updatedEvent));
    }

    @GetMapping("/api/institution/events")
    public ResponseEntity<List<Event>> getEvents(@RequestParam Long institutionId) {
        return ResponseEntity.ok(eventService.getForInstitution(institutionId));
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
    }

    @PostMapping("/api/institution/event/{eventId}/resource")
    public ResponseEntity<Resource> addResourceToEvent(@PathVariable Long eventId, @RequestBody Resource resource) {
<<<<<<< HEAD
        // add resource to event
=======
        return ResponseEntity.ok(resourceService.addToEvent(eventId, resource));
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
    }

    @GetMapping("/api/institution/event/professionals")
    public ResponseEntity<List<User>> getProfessionalsList() {
<<<<<<< HEAD
      // get professionals list
=======
        return ResponseEntity.ok(userService.getProfessionals());
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
    }

    @PostMapping("/api/institution/event/{eventId}/professional")
    public ResponseEntity<?> assignProfessionalToEvent(@PathVariable Long eventId, @RequestParam Long userId) {
<<<<<<< HEAD
     // assign professional to event
=======
        return ResponseEntity.ok(eventService.assignProfessional(eventId, userId));
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
    }
}
