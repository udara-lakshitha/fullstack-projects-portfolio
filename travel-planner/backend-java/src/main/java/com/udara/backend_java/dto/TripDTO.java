package com.udara.backend_java.dto;

import lombok.Data;

@Data
public class TripDTO {
    private String name;
    private String location;
    private Double latitude;
    private Double longitude;
}
