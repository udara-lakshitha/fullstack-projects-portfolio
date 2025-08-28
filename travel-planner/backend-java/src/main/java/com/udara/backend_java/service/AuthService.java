package com.udara.backend_java.service;

import com.udara.backend_java.config.JwtUtils;
import com.udara.backend_java.dto.LoginRequest;
import com.udara.backend_java.dto.SignupRequest;
import com.udara.backend_java.model.User;
import com.udara.backend_java.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    public String login(LoginRequest request) {
        User user = userRepository.findByUserName(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return jwtUtils.generateJwtToken(user);
    }

    public User register(SignupRequest request) {
        if (userRepository.findByUserName(request.getUsername()).isPresent()) {
            throw new RuntimeException("Username already taken");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        return userRepository.save(user);
    }
}
