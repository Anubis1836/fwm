package com.wecp.financial_seminar_and_workshop_management.repository;


import com.wecp.financial_seminar_and_workshop_management.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

<<<<<<< HEAD
public interface UserRepository  {
    // implement repository
=======
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    List<User> findByRoleOrderByIdAsc(String role);
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
}
