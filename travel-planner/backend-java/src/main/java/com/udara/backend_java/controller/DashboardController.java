package com.udara.backend_java.controller;

import com.udara.backend_java.model.Trip;
import com.udara.backend_java.service.TripService;
import lombok.Getter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {
    private final TripService tripService;

    public DashboardController(TripService tripService) {
        this.tripService = tripService;
    }

    @GetMapping
    public DashboardResponse getDashboardData() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        List<Trip> trips = tripService.getTrips(username);
        int totalTrips = trips.size();

        // You can add more statistics here
        return new DashboardResponse(totalTrips, trips);
    }

    @Getter
    public static class DashboardResponse {
        private final int totalTrips;
        private final List<Trip> trips;

        public DashboardResponse(int totalTrips, List<Trip> trips) {
            this.totalTrips = totalTrips;
            this.trips = trips;
        }

    }
}
