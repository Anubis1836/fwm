package com.wecp.financial_seminar_and_workshop_management.repository;

import com.wecp.financial_seminar_and_workshop_management.entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

<<<<<<< HEAD
import java.util.List;

public interface EnrollmentRepository {
    // implement repository
=======

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long>{
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
}
