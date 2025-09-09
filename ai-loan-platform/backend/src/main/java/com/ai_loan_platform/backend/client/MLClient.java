package com.ai_loan_platform.backend.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Component
public class MLClient {
    private final WebClient webClient;

    public MLClient(@Value("${ml.service.url}") String mlServiceUrl) {
        this.webClient = WebClient.builder().baseUrl(mlServiceUrl).build();
    }

    public Map<String, Object> predict(Map<String, Object> features) {
        return webClient.post()
                .bodyValue(features)
                .retrieve()
                .bodyToMono(Map.class)
                .block();
    }
}
