type TripCardProps = { name: string; location: string };

export default function TripCard({ name, location }: TripCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-500">{location}</p>
    </div>
  );
}