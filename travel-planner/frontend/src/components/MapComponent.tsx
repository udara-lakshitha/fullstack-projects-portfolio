type MapComponentProps = { markers?: { lat: number; lng: number }[] };

export default function MapComponent({ markers }: MapComponentProps) {
  return (
    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
      <p>Google Map Placeholder</p>
    </div>
  );
}