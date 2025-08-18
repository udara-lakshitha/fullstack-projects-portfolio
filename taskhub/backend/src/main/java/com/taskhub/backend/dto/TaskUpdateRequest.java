package com.taskhub.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskUpdateRequest {
    private String title;
    private String description;
    private Boolean completed;
}
