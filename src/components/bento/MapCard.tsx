"use client";

import { motion } from "framer-motion";
import travelData from "@/data/travel.json";

const MapCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-1 bg-background rounded-xl p-6 shadow-lg border border-foreground/10 overflow-hidden relative"
        >
            <h3 className="text-lg font-semibold text-foreground mb-2">Travel Map</h3>
            <div className="flex flex-col gap-2">
                {travelData.slice(0, 3).map((trip) => (
                    <div key={trip.id} className="flex justify-between items-center text-sm">
                        <span className="text-zinc-600 dark:text-zinc-400">{trip.place}</span>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">{trip.visited}</span>
                    </div>
                ))}
            </div>
            {/* Decorative map background placeholder */}
            <div className="absolute -bottom-10 -right-10 opacity-10">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
            </div>
        </motion.div>
    );
};

export default MapCard;
