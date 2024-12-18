"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function App() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const position = { lat: 53.54992, lng: 10.00678 };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={API_KEY}>
        <Map defaultCenter={position} defaultZoom={10}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}

export default App;
