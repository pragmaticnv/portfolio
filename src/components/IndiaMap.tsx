"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import travelData from "@/data/travel.json";

// GeoJSON source for India states
const INDIA_GEO_URL = "https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Indian_States";

const PINS = [
    { id: 1, name: "Amritsar, Punjab", coordinates: [74.8723, 31.6340], color: "#10b981", icon: "🛕", state: "Punjab" },
    { id: 2, name: "Shimla, Himachal Pradesh", coordinates: [77.1734, 31.1048], color: "#3b82f6", icon: "❄️", state: "Himachal Pradesh" },
    { id: 3, name: "Lucknow, Uttar Pradesh", coordinates: [80.9462, 26.8467], color: "#8b5cf6", icon: "🏛️", state: "Uttar Pradesh" },
    { id: 4, name: "Vaishno Devi, Jammu & Kashmir", coordinates: [74.9490, 33.0308], color: "#f97316", icon: "🚩", state: "Jammu & Kashmir" }
];

const IndiaMap = ({ activeCardId, onHoverPin }: { activeCardId: number | null, onHoverPin: (id: number | null) => void }) => {
    const [hoveredTrip, setHoveredTrip] = useState<any | null>(null);

    return (
        <div
            className="relative w-full h-[700px] flex items-center justify-center pt-5 transition-all duration-500"
        >
            {/* Optimized Map Container (Static 2D for Performance) */}
            <div className="relative w-full h-full flex items-center justify-center">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 1200, // Increased scale
                        center: [80, 22]
                    }}
                    className="w-full h-full drop-shadow-[0_20px_50px_rgba(16,185,129,0.1)]"
                >
                    <Geographies geography={INDIA_GEO_URL}>
                        {({ geographies }: { geographies: any[] }) =>
                            geographies.map((geo: any) => {
                                const stateName = geo.properties.NAME_1 || geo.properties.st_nm;
                                const pin = PINS.find(p => p.state === stateName);
                                const isVisited = !!pin;
                                const isActive = activeCardId === pin?.id;

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={isActive ? `${pin?.color}40` : "var(--card)"}
                                        stroke="var(--card-border)"
                                        strokeWidth={0.5}
                                        style={{
                                            default: { outline: "none", transition: "all 300ms" },
                                            hover: { fill: isVisited ? `${pin?.color}40` : "var(--accent-glow)", outline: "none" },
                                            pressed: { outline: "none" }
                                        }}
                                        className={isVisited ? "filter drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]" : ""}
                                    />
                                );
                            })
                        }
                    </Geographies>

                    {PINS.map((pin) => (
                        <Marker key={pin.id} coordinates={pin.coordinates as [number, number]}>
                            <g
                                onMouseEnter={() => {
                                    const trip = travelData.find(t => t.id === pin.id);
                                    setHoveredTrip({ ...trip, ...pin });
                                    onHoverPin(pin.id);
                                }}
                                onMouseLeave={() => {
                                    setHoveredTrip(null);
                                    onHoverPin(null);
                                }}
                                className="cursor-pointer"
                            >
                                {/* Ripple Animation - Simplified for performance */}
                                <motion.circle
                                    r={activeCardId === pin.id ? 15 : 10}
                                    fill={pin.color}
                                    initial={{ scale: 1, opacity: 0.4 }}
                                    animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                />

                                {/* Pin Base Circle */}
                                <circle
                                    r={activeCardId === pin.id ? 8 : 6}
                                    fill={pin.color}
                                    className="filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-all"
                                />

                                {/* Icon Overlay */}
                                <text
                                    textAnchor="middle"
                                    y={3}
                                    style={{ fontSize: "10px", pointerEvents: "none" }}
                                >
                                    {pin.icon}
                                </text>
                            </g>
                        </Marker>
                    ))}
                </ComposableMap>

                {/* Simplified Tooltip Card */}
                <AnimatePresence>
                    {hoveredTrip && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-card backdrop-blur-xl border border-card-border rounded-2xl p-4 shadow-2xl w-60 pointer-events-none"
                        >
                            <h4 className="text-foreground font-bold text-lg">{hoveredTrip.place}</h4>
                            <p className="text-muted-text text-xs mb-2">{hoveredTrip.visited}</p>
                            <p className="text-muted-text/90 text-[10px] leading-relaxed line-clamp-2">
                                {hoveredTrip.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Status Label */}
            <div className="absolute top-0 right-0 p-4 text-emerald-500/30 text-[10px] uppercase tracking-widest pointer-events-none">
                Interactive Map · Performance Optimized
            </div>
        </div>
    );
};

export default IndiaMap;
