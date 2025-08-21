package com.udara.smartloan.backend_java.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping("/")
    public String health() {
        return "SmartLoan Backend Running ✅";
    }

}
