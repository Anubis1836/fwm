package com.wecp.financial_seminar_and_workshop_management.repository;



import com.wecp.financial_seminar_and_workshop_management.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

<<<<<<< HEAD
public interface EventRepository {
    // implement repository
=======
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByInstitutionIdOrderByIdAsc(Long institutionId);
    List<Event> findAllByOrderByIdAsc();
    List<Event> findByProfessionals_IdOrderByIdAsc(Long userId);
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
}
