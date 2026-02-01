"use client";

import { motion } from "framer-motion";
import interestsData from "@/data/interests.json";
import { Trophy, PenTool, Brain, Music, Layout, Gamepad2, Video, Code } from "lucide-react";

const iconMap: Record<string, any> = {
    "Sports": Trophy,
    "Creative": PenTool,
    "Strategy": Brain,
    "Music": Music,
    "Tech": Code,
    "Gaming": Gamepad2,
};

// Specific overrides if needed, or stick to categories
const getIcon = (interestName: string, category: string) => {
    if (interestName.includes("Cricket")) return Trophy;
    if (interestName.includes("Writing")) return PenTool;
    if (interestName.includes("Chess")) return Brain;
    if (interestName.includes("Flute")) return Music;
    if (interestName.includes("Web")) return Layout;
    if (interestName.includes("Gaming")) return Gamepad2;
    if (interestName.includes("Content")) return Video;
    if (interestName.includes("Hackathons")) return Code;
    return iconMap[category] || Code;
};

const InterestsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {interestsData.map((interest, index) => {
                const Icon = getIcon(interest.name, interest.category);

                return (
                    <motion.div
                        key={interest.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col gap-2 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold">{interest.name}</h3>
                            <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors">
                                <Icon className="w-5 h-5 text-blue-300 group-hover:text-blue-100" />
                            </div>
                        </div>
                        <span className="text-xs text-white/40 uppercase tracking-wider font-medium">{interest.category}</span>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            {interest.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default InterestsGrid;
