package com.udara.smartweather.backend_java.service;

import com.udara.smartweather.backend_java.dto.WeatherReportDto;
import com.udara.smartweather.backend_java.entity.WeatherReport;
import com.udara.smartweather.backend_java.repo.WeatherReportRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class WeatherReportService {
    @Autowired
    private final WeatherReportRepository repository;

    public List<WeatherReportDto> getAllReports() {
        return repository.findAll()
                .stream()
                .map(r -> new WeatherReportDto(
                        r.getId(),
                        r.getCity(),
                        r.getTemperature(),
                        r.getDescription(),
                        r.getRecordedAt()))
                .collect(Collectors.toList());
    }

    public WeatherReportDto createReport(WeatherReport report) {
        WeatherReport saved = repository.save(report);
        return new WeatherReportDto(
                saved.getId(),
                saved.getCity(),
                saved.getTemperature(),
                saved.getDescription(),
                saved.getRecordedAt()
        );
    }
}
