package com.udara.smartweather.backend_java.service;

import com.udara.smartweather.backend_java.dto.WeatherDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class WeatherService {
    @Value("${OPENWEATHER_API_KEY}")
    private String apiKey;

    private final RestTemplate restTemplate=new RestTemplate();

    public WeatherDTO getWeather(String city) {
        String url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
        Map response = restTemplate.getForObject(url,Map.class);
        WeatherDTO dto = new WeatherDTO();
        dto.setCity(city);
        Map main = (Map)response.get("main");
        dto.setTemperature(Double.parseDouble(main.get("temp").toString()));
        dto.setHumidity(Double.parseDouble(main.get("humidity").toString()));
        Map weather = (Map)((List)response.get("weather")).get(0);
        dto.setDescription(weather.get("description").toString());
        return dto;
    }
}
