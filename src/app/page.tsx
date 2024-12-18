"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function App() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const position = { lat: 35.67929, lng: 139.76901 };
  return (
    <div className="h-screen w-full">
      <APIProvider apiKey={API_KEY}>
        <Map defaultCenter={position} defaultZoom={7}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}

export default App;
