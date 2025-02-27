// src/components/MapCard.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FaCrosshairs } from "react-icons/fa";

const RecenterButton = ({ center }: { center: [number, number] }) => {
  const map = useMap();

  const recenterMap = () => {
    map.setView(center, 13, { animate: true });
  };

  return (
    <button
      onClick={recenterMap}
      className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 flex items-center justify-center"
    >
      <FaCrosshairs className="text-gray-800" size={20} />
    </button>
  );
};

const MapCard = () => {
  const location = {
    latitude: -7.918414618105032,
    longitude: 112.61190597240446,
  };

  return (
    <div className="bg-[var(--base-color)] p-4 rounded-xl shadow-md text-white w-full max-w-[22rem] mx-auto mt-6 overflow-hidden flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold text-center mb-3 w-full">Find Me</h2>
      <div className="text-gray-300 text-base mb-4">
        <p>Location: Malang, Indonesia</p>
      </div>
      <div className="relative w-full flex flex-col items-center">
        <MapContainer
          center={[location.latitude, location.longitude]}
          zoom={13}
          style={{ width: "100%", height: "250px" }}
          className="rounded-lg overflow-hidden z-0" // Set z-index of map to 0 (behind)
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              <span
                style={{
                  fontSize: "10px",
                  width: "130px", // Set a fixed width for the popup
                  display: "inline-block",
                  lineHeight: "1.3",
                }}
              >
                Perum Istana Kepuh Regency Blok H 161, Kepuharjo, Karangploso
                Kabupaten Malang, Jawa Timur, Indonesia
              </span>
            </Popup>
          </Marker>

          {/* GPS Recenter Button */}
          <div className="absolute top-2 right-2 z-[1000]">
            <RecenterButton center={[location.latitude, location.longitude]} />
          </div>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapCard;
