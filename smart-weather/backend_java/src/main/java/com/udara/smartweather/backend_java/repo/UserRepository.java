package com.udara.smartweather.backend_java.repo;

import com.udara.smartweather.backend_java.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
