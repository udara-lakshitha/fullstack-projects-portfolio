package com.udara.backend_java.service;

import com.udara.backend_java.dto.TripDTO;
import com.udara.backend_java.model.Trip;
import com.udara.backend_java.repository.TripRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripService {
    private final TripRepository tripRepository;

    public TripService(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    public Trip createTrip(TripDTO tripDTO) {
        Trip trip = new Trip();
        trip.setDestination(tripDTO.getDestination());
        trip.setStartDate(tripDTO.getStartDate());
        trip.setEndDate(tripDTO.getEndDate());
        trip.setNotes(tripDTO.getNotes());
        return tripRepository.save(trip);
    }

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }
}
