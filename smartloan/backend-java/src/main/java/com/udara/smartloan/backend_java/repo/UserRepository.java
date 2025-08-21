package com.udara.smartloan.backend_java.repo;

import com.udara.smartloan.backend_java.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
