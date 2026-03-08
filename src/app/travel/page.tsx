"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import IndiaMap from "@/components/IndiaMap";
import travelData from "@/data/travel.json";

const PINS = [
    { id: 1, color: "#10b981", state: "Punjab" },
    { id: 2, color: "#3b82f6", state: "Himachal Pradesh" },
    { id: 3, color: "#8b5cf6", state: "Uttar Pradesh" },
    { id: 4, color: "#f97316", state: "Jammu & Kashmir" }
];

export default function TravelPage() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col items-center pt-24 pb-20 px-6 transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Back Button */}
            <div className="absolute top-8 left-8 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-card-border bg-card hover:bg-white/10 dark:hover:bg-white/5 transition-all text-sm font-medium backdrop-blur-md text-foreground"
                >
                    &larr; <span className="text-muted-text group-hover:text-foreground">Back to Home</span>
                </Link>
            </div>

            {/* Header section */}
            <header className="text-center mb-16 z-10 w-full max-w-6xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-emerald-400 mb-4"
                >
                    My Travels
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-text text-lg md:text-xl"
                >
                    Places that shaped me
                </motion.p>
            </header>

            {/* Main Experience Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start z-10">

                {/* Optimized Map (Left Side - 66%) */}
                <div className="lg:col-span-8 flex justify-center perspective-none">
                    <IndiaMap activeCardId={activeId} onHoverPin={setActiveId} />
                </div>

                {/* Right Side Panel (33%) */}
                <aside className="lg:col-span-4 flex flex-col gap-6">
                    {travelData.map((trip, idx) => {
                        const pinConfig = PINS.find(p => p.id === trip.id);
                        const isActive = activeId === trip.id;

                        return (
                            <motion.div
                                key={trip.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.15 }}
                                onMouseEnter={() => setActiveId(trip.id)}
                                onMouseLeave={() => setActiveId(null)}
                                whileHover={{ y: -6 }}
                                className={`
                                    relative flex gap-4 p-5 bg-card border border-card-border rounded-2xl backdrop-blur-md transition-all duration-300 group
                                    ${isActive ? 'border-emerald-500/30 ring-1 ring-emerald-500/20 bg-emerald-500/5' : ''}
                                `}
                                style={{
                                    borderLeft: `4px solid ${pinConfig?.color || '#10b981'}`
                                }}
                            >
                                {/* Photo Thumbnail */}
                                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border border-white/10">
                                    <Image
                                        src={trip.image}
                                        alt={trip.place}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-emerald-300 transition-colors">
                                            {trip.place.split(',')[0]}
                                        </h3>
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                                            {trip.visited}
                                        </span>
                                    </div>
                                    <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                                        {trip.description}
                                    </p>
                                </div>

                                {/* Active Glow */}
                                {isActive && (
                                    <div
                                        className="absolute inset-0 rounded-2xl blur-xl -z-10 opacity-20 transition-opacity"
                                        style={{ backgroundColor: pinConfig?.color }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </aside>
            </div>

            {/* Bottom Stats Section */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                {[
                    { label: "States Visited", value: "7+", color: "emerald" },
                    { label: "Years of Memories", value: "19+", color: "blue" },
                    { label: "More Coming Soon ✈️", value: "", color: "violet" }
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-full py-4 px-8 flex items-center justify-center gap-3 group hover:bg-white/10 transition-all border-emerald-500/20 hover:border-emerald-500/40"
                    >
                        <span className={`text-xl font-bold text-${stat.color}-400`}>
                            {stat.value}
                        </span>
                        <span className="text-sm font-medium text-muted-text">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
