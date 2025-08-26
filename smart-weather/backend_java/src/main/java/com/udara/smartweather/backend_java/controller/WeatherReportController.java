package com.udara.smartweather.backend_java.controller;

import com.udara.smartweather.backend_java.dto.WeatherReportDto;
import com.udara.smartweather.backend_java.entity.WeatherReport;
import com.udara.smartweather.backend_java.service.WeatherReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*")
public class WeatherReportController {
    @Autowired
    private WeatherReportService service;

    @GetMapping
    public List<WeatherReportDto> getAllReports() {
        return service.getAllReports();
    }

    @PostMapping
    public WeatherReportDto createReport(@RequestBody WeatherReport report) {
        return service.createReport(report);
    }
}
