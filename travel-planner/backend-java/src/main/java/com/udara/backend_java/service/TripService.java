package com.udara.backend_java.service;

import com.udara.backend_java.model.Trip;
import com.udara.backend_java.repository.TripRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TripService {
    private final TripRepository tripRepository;

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    public Trip saveTrip(Trip trip) {
        return tripRepository.save(trip);
    }
}
