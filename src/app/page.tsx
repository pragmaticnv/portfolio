"use client";

import ProfileCard from "@/components/bento/ProfileCard";
import MapCard from "@/components/bento/MapCard";
import EducationCard from "@/components/bento/EducationCard";
import SpotifyCard from "@/components/bento/SpotifyCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 md:p-24 flex justify-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">My Portfolio</h1>
          <p className="text-zinc-500 mb-8">Welcome to my Digital Garden.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 md:gap-6">
          {/* Profile Card needs to spans 2 columns ideally if we have more items, or just standard */}
          {/* Let's make Profile Card prominent */}
          <ProfileCard />

          {/* Stack Map and others */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4 md:gap-6">
            <MapCard />
            <SpotifyCard />
          </div>

          <EducationCard />

          {/* Project card placeholder to fill grid eventually */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-8 shadow-lg text-white"
          >
            <h2 className="text-2xl font-bold mb-2">Projects Dashboard</h2>
            <p className="opacity-90">View all my recent work in detail &rarr;</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
