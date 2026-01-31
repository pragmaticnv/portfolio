"use client";

import ProfileCard from "@/components/bento/ProfileCard";
import Link from "next/link";
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Profile Card Spanning full width on mobile, 2 cols on desktop */}
          <ProfileCard />

          {/* Navigation Cards */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4 md:gap-6">
            <Link href="/education" className="block h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-full bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 flex flex-col justify-center items-center text-center cursor-pointer group"
              >
                <span className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 text-blue-600 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6M2 16h20M12 12v9M2 10l10-6 10 6" /></svg>
                </span>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">View Education</h3>
              </motion.div>
            </Link>
          </div>

          <div className="col-span-1 md:col-span-1">
            <Link href="/travel" className="block h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-full bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 flex flex-col justify-center items-center text-center cursor-pointer group"
              >
                <span className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-3 text-green-600 dark:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                </span>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-green-500 transition-colors">See My Travels</h3>
              </motion.div>
            </Link>
          </div>

          <div className="col-span-1 md:col-span-2">
            <Link href="/interests" className="block h-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-between px-8 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                  </span>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-purple-500 transition-colors">Check My Interests</h3>
                </div>
                <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
