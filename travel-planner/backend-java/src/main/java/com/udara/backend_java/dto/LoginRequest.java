package com.udara.backend_java.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}
