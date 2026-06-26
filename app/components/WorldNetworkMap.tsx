"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const ANTARCTICA_ID = 10;
const ZAMBIA_ID = 894;

export default function WorldNetworkMap() {
  return (
    <div className="relative w-full select-none" style={{ cursor: "default" }}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 180, center: [10, 20] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => parseInt(geo.id as string, 10) !== ANTARCTICA_ID)
              .map((geo) => {
                const id = parseInt(geo.id as string, 10);
                const isZambia = id === ZAMBIA_ID;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#ffffff"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none", fill: isZambia ? "#15803d" : "#c8c8d0" },
                      hover:   { outline: "none", fill: isZambia ? "#166534" : "#b0b0bc" },
                      pressed: { outline: "none", fill: isZambia ? "#166534" : "#b0b0bc" },
                    }}
                  />
                );
              })
          }
        </Geographies>

      </ComposableMap>
    </div>
  );
}
