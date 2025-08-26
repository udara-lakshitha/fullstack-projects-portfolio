package com.udara.smartweather.backend_java.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class WeatherReportDto {
    private Long id;
    private String city;
    private Double temperature;
    private String description;
    private LocalDateTime recordedAAt;
}
