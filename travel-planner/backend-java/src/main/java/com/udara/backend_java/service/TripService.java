package com.udara.backend_java.service;

import com.udara.backend_java.dto.TripDTO;
import com.udara.backend_java.model.Trip;
import com.udara.backend_java.model.User;
import com.udara.backend_java.repository.TripRepository;
import com.udara.backend_java.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripService {
    private final TripRepository tripRepository;
    private final UserRepository userRepository;

    public TripService(TripRepository tripRepository, UserRepository userRepository) {
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
    }

    public Trip createTrip(TripDTO dto, String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
        Trip trip = new Trip();
        trip.setName(dto.getName());
        trip.setLocation(dto.getLocation());
        trip.setLatitude(dto.getLatitude());
        trip.setLongitude(dto.getLongitude());
        trip.setUser(user);
        return tripRepository.save(trip);
    }

    public List<Trip> getTrips(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
        return tripRepository.findByUserId(user.getId());
    }
}
