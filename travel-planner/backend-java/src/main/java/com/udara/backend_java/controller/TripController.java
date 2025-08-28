package com.udara.backend_java.controller;

import com.udara.backend_java.dto.TripDTO;
import com.udara.backend_java.model.Trip;
import com.udara.backend_java.service.TripService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    private final TripService tripService;

    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @PostMapping
    public Trip createTrip(@RequestBody TripDTO tripDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return tripService.createTrip(tripDTO, username);
    }

    @GetMapping
    public List<Trip> getTrips() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return tripService.getTrips(username);
    }
}
