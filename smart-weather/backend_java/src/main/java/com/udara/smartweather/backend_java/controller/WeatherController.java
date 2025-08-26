package com.udara.smartweather.backend_java.controller;

import com.udara.smartweather.backend_java.dto.WeatherDTO;
import com.udara.smartweather.backend_java.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/weather")
@RequiredArgsConstructor
public class WeatherController {

    private final WeatherService weatherService;

    @GetMapping("/live/{city}")
    public WeatherDTO getLiveWeather(@PathVariable String city){
        return weatherService.getWeather(city);
    }
}
