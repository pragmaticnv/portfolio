"use client";

import Link from "next/link";
import MapCard from "@/components/bento/MapCard";
import { motion } from "framer-motion";

export default function TravelPage() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-8 pb-8 pt-24 md:p-24 flex justify-center">
            <div className="max-w-2xl w-full">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-2 transition-colors"
                    >
                        &larr; Back to Home
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">My Travels</h1>
                    <MapCard />
                </motion.div>
            </div>
        </main>
    );
}
