package com.wecp.financial_seminar_and_workshop_management.repository;

import com.wecp.financial_seminar_and_workshop_management.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import java.util.List;

public interface EnrollmentRepository {
    // implement repository
=======

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long>{
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
}
