"use client";

import Link from "next/link";
import SpotifyCard from "@/components/bento/SpotifyCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import interestsData from "@/data/interests.json";
import { ArrowLeft, ChevronRight, Trophy, PenTool, Brain, Music, Layout, Gamepad2, Video, Code } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, any> = {
    "Sports": Trophy,
    "Creative": PenTool,
    "Strategy": Brain,
    "Music": Music,
    "Tech": Code,
    "Gaming": Gamepad2,
};

// Helper to get icon
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

export default function InterestsPage() {
    const [activeId, setActiveId] = useState(interestsData[0].id);
    const activeInterest = interestsData.find((i) => i.id === activeId) || interestsData[0];

    const scrollContainer = (direction: 'left' | 'right') => {
        const container = document.getElementById('interests-carousel');
        if (container) {
            const scrollAmount = 360; // Card width + gap
            container.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className="min-h-screen px-4 pb-20 pt-24 flex flex-col items-center overflow-hidden">

            {/* Header / Nav */}
            <div className="w-full max-w-7xl flex flex-col items-start mb-8 lg:px-8">
                <Link
                    href="/"
                    className="text-white/60 hover:text-white font-medium flex items-center gap-2 transition-colors border border-white/10 bg-white/5 px-4 py-2 rounded-full mb-6"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white">
                    My Interests
                </h1>
                <p className="text-zinc-400 mt-2 max-w-xl">
                    Explore my hobbies and passions. Click on a card to learn more.
                </p>
            </div>

            {/* 1. The Carousel Section (Master) */}
            <div className="w-full max-w-[1920px] relative">
                {/* Navigation Arrow */}
                <button
                    onClick={() => scrollContainer('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all hidden md:flex items-center justify-center text-white shadow-xl"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                <div
                    id="interests-carousel"
                    className="flex overflow-x-auto gap-6 px-4 md:px-12 py-8 snap-x snap-mandatory scrollbar-hide pb-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {interestsData.map((interest) => (
                        <motion.div
                            key={interest.id}
                            onClick={() => setActiveId(interest.id)}
                            layoutId={`card-${interest.id}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                scale: activeId === interest.id ? 1.05 : 1,
                                borderColor: activeId === interest.id ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)'
                            }}
                            transition={{ duration: 0.3 }}
                            className={`
                                relative flex-shrink-0 w-[300px] h-[450px] md:w-[350px] md:h-[500px] 
                                rounded-3xl overflow-hidden cursor-pointer snap-center
                                border-2 border-transparent transition-all duration-300 shadow-2xl
                            `}
                        >
                            {/* Background Image */}
                            <Image
                                src={interest.image}
                                alt={interest.name}
                                fill
                                className="object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${activeId === interest.id ? 'from-black/80 via-black/20 to-transparent' : 'from-black/90 via-black/40 to-black/10'} transition-all duration-300`} />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start transform transition-transform duration-300">
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white mb-3 uppercase tracking-wider border border-white/10">
                                    {interest.category}
                                </span>
                                <h3 className={`text-2xl font-bold text-white mb-1 ${activeId === interest.id ? 'text-shadow-lg' : ''}`}>
                                    {interest.name}
                                </h3>
                            </div>

                            {/* Active Glow Border Effect (Overlay) */}
                            {activeId === interest.id && (
                                <motion.div
                                    layoutId="active-glow"
                                    className="absolute inset-0 rounded-3xl border-2 border-white/40 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 2. The Details Section (Detail) */}
            <div className="w-full max-w-4xl px-4 mt-8 min-h-[300px] flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {activeInterest.name}
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
                                {activeInterest.longDescription}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 3. Floating Spotify Widget */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="fixed bottom-6 right-6 z-50 w-[300px] hidden md:block"
            >
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <div className="p-3 border-b border-white/5 flex items-center gap-2">
                        <span className="text-green-500 text-xs">●</span>
                        <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Soundtrack</span>
                    </div>
                    <div className="p-0">
                        <SpotifyCard /> {/* Assuming SpotifyCard fits or we might need to adjust styles via CSS if it has fixed dimensions */}
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
