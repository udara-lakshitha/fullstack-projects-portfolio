package com.udara.smartweather.backend_java.repo;

import com.udara.smartweather.backend_java.entity.WeatherReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherReportRepository extends JpaRepository<WeatherReport, Long> {
}
