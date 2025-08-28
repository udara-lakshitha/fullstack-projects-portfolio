import TripCard from "../components/TripCard";
import MapComponent from "../components/MapComponent";

const dummyTrips = [
  { id: 1, name: "Colombo City Tour", location: "Colombo" },
  { id: 2, name: "Kandy Hills", location: "Kandy" },
  { id: 3, name: "Galle Fort Visit", location: "Galle" },
];

export default function TripsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {dummyTrips.map((trip) => (
          <TripCard key={trip.id} name={trip.name} location={trip.location} />
        ))}
      </div>
      <div className="h-64">
        <MapComponent markers={dummyTrips.map(() => ({ lat: 6.9271, lng: 79.8612 }))} />
      </div>
    </div>
  );
}