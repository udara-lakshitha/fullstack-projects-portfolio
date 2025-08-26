import React from 'react';
import './App.css';

type WeatherReport = {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
};

const mockReports: WeatherReport[] = [
  { city: 'London', temperature: 18, condition: 'Cloudy', humidity: 75 },
  { city: 'Colombo', temperature: 30, condition: 'Sunny', humidity: 60 },
  { city: 'Tokyo', temperature: 22, condition: 'Rainy', humidity: 80 },
];

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Weather Dashboard</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {mockReports.map((report) => (
          <div
            key={report.city}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
              minWidth: '200px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h2>{report.city}</h2>
            <p>Temperature: {report.temperature}°C</p>
            <p>Condition: {report.condition}</p>
            <p>Humidity: {report.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;