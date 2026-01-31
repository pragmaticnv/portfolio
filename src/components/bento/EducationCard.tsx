"use client";

import { motion } from "framer-motion";
import educationData from "@/data/education.json";

const EducationCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700"
        >
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4">Education</h3>
            <div className="space-y-4">
                {educationData.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-blue-500 pl-4 py-1">
                        <h4 className="text-md font-medium text-zinc-900 dark:text-zinc-100">{edu.school}</h4>
                        <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                            <span>{edu.degree}</span>
                            <span>{edu.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default EducationCard;
