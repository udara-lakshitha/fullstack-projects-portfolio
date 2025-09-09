package com.ai_loan_platform.backend.repository;

import com.ai_loan_platform.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
