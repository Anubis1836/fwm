package com.wecp.financial_seminar_and_workshop_management.repository;


import com.wecp.financial_seminar_and_workshop_management.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import java.util.List;

public interface FeedbackRepository {
    // implement repository
=======
public interface FeedbackRepository extends JpaRepository<Feedback, Long>{
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
}
