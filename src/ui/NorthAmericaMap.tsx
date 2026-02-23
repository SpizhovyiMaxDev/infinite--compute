import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import mapGeoJson from "../data/north-america.json";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const markers: Array<{ name: string; position: [number, number] }> = [
  { name: "Newfoundland", position: [55.5, -65.0] },
  { name: "Alberta", position: [52, -115] },
  { name: "Central US", position: [34, -101] },
];

const customIcon = L.divIcon({
  className: "",
  html: `
    <style>
      .marker-plus {
        color: #1a1a1a;
        background-color: #f5f5f5;
        padding: 0.5vw 0.6vw;
        transform: rotate(-11deg);
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        border:none;
      }
      .marker-plus:hover {
        background-color: #7fda7b;
        transform: rotate(-11deg) scale(1.1);
      }
    </style>
    <button class="marker-plus">+</button>
  `,
});

function MapBoundsSetter() {
  const map = useMap();

  useEffect(() => {
    function updateBounds() {
      const geoJsonLayer = L.geoJSON(mapGeoJson as any);
      const bounds = geoJsonLayer.getBounds();

      map.fitBounds(bounds, {
        padding: [10, 10],
        maxZoom: 6,
        animate: false,
      });
    }

    updateBounds();

    window.addEventListener("resize", updateBounds);
    return () => {
      window.removeEventListener("resize", updateBounds);
    };
  }, [map]);

  return null;
}

function NorthAmericaMap() {
  const defaultStyles = {
    fillColor: "#E8E8E8",
    weight: 1,
    color: "#CCCCCC",
    fillOpacity: 1,
  };

  const hoverStyles = {
    weight: 2,
    color: "#7fda7b",
    fillOpacity: 1,
    className: "hovered-province",
  };

  function handleEachFeature(_feature: any, layer: any) {
    layer.setStyle(defaultStyles);
    layer.on("mouseover", () => layer.setStyle(hoverStyles));
    layer.on("mouseout", () => layer.setStyle(defaultStyles));
  }

  function handleMarkerClick(city: string) {
    console.log(city);
  }

  return (
    <div className="overflow-hidden">
      <div className="relative z-1 flex justify-center items-center">
        <div className="relative z-1 rotate-11">
          <MapContainer
            minZoom={1.45}
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            keyboard={false}
            boxZoom={false}
            attributionControl={false}
            className="min-w-screen w-full min-h-360 !bg-transparent max-[32em]:h-auto max-[32em]:min-h-200"
          >
            <MapBoundsSetter />
            <GeoJSON data={mapGeoJson as any} onEachFeature={handleEachFeature} />
            {markers.map((marker) => {
              return (
                <Marker
                  key={marker.name}
                  position={marker.position}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => handleMarkerClick(marker.name),
                  }}
                />
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default NorthAmericaMap;
