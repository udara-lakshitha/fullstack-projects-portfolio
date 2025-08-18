package com.taskhub.backend.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI taskHubOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("TaskHub API")
                        .description("TaskHub backend REST API documentation")
                        .version("v1.0"))
                .externalDocs(new ExternalDocumentation()
                        .description("TaskHub Project Docs")
                        .url("https://github.com/udara-lakshitha/fullstack-projects-portfolio/tree/main/taskhub"));
    }
}
