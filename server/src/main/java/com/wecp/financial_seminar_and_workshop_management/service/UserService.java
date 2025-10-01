package com.wecp.financial_seminar_and_workshop_management.service;

import com.wecp.financial_seminar_and_workshop_management.entity.User;
import com.wecp.financial_seminar_and_workshop_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
=======
import org.springframework.security.core.authority.AuthorityUtils;
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

<<<<<<< HEAD

public class UserService  {

    // implement service methods here
=======
@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> getProfessionals() {
        return userRepository.findByRoleOrderByIdAsc("PROFESSIONAL");
    }

    public User getById(Long id) {
        return userRepository.findById(id).orElseThrow();
    }

    public User getByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User u = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new org.springframework.security.core.userdetails.User(
                u.getUsername(),
                u.getPassword(),
                AuthorityUtils.createAuthorityList(u.getRole()));
    }
>>>>>>> 5442920660eae2787a3df7ebd32d28530e7e493b
}
