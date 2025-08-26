package com.udara.smartweather.backend_java.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "weather_reports")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WeatherReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;
    private Double temperature;
    private String description;
    private LocalDateTime recordedAt = LocalDateTime.now();
}
