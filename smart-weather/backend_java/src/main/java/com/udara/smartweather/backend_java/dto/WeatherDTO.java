package com.udara.smartweather.backend_java.dto;

import lombok.Data;

@Data
public class WeatherDTO {
    private String city;
    private String description;
    private double temperature;
    private double humidity;
}
