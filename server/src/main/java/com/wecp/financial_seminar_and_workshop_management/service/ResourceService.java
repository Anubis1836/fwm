package com.wecp.financial_seminar_and_workshop_management.service;


import com.wecp.financial_seminar_and_workshop_management.entity.Event;
import com.wecp.financial_seminar_and_workshop_management.entity.Resource;
import com.wecp.financial_seminar_and_workshop_management.repository.EventRepository;
import com.wecp.financial_seminar_and_workshop_management.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


<<<<<<< HEAD
public class ResourceService {

    // implement service methods here
=======
@Service
public class ResourceService {

    @Autowired private ResourceRepository resourceRepository;
    @Autowired private EventRepository eventRepository;

    public Resource addToEvent(Long eventId, Resource resource) {
        Event e = eventRepository.findById(eventId).orElseThrow();
        resource.setEvent(e);
        return resourceRepository.save(resource);
    }
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
}
