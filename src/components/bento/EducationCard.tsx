"use client";

import { motion } from "framer-motion";
import educationData from "@/data/education.json";
import Image from "next/image";

const EducationGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {educationData.map((edu, index) => (
                <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="flex flex-col bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                    {/* Top Half: Cover Image */}
                    <div className="relative h-[200px] w-full overflow-hidden">
                        <Image
                            src={edu.image}
                            alt={edu.school}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Bottom Half: Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                                {edu.school}
                            </h3>
                            <span className="text-sm font-medium text-foreground/50 bg-foreground/10 px-2 py-1 rounded-full">
                                {edu.year}
                            </span>
                        </div>

                        <h4 className="text-md text-blue-600 dark:text-blue-200 mb-4 font-medium">{edu.degree}</h4>

                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
                            {edu.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default EducationGrid;
