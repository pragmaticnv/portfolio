"use client";

import { motion } from "framer-motion";
import travelData from "@/data/travel.json";
import Image from "next/image";

const TravelGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {travelData.map((trip, index) => (
                <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="flex flex-col bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                    {/* Top Half: Cover Image */}
                    <div className="relative h-[200px] w-full overflow-hidden">
                        <Image
                            src={trip.image}
                            alt={trip.place}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Bottom Half: Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                                {trip.place}
                            </h3>
                            <span className="text-sm font-medium text-foreground/50 bg-foreground/10 px-2 py-1 rounded-full">
                                {trip.visited}
                            </span>
                        </div>

                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow mt-2">
                            {trip.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default TravelGrid;
