"use client";

import Link from "next/link";
import TravelGrid from "@/components/bento/TravelGrid";
import { motion } from "framer-motion";

export default function TravelPage() {
    return (
        <main className="min-h-screen px-4 pb-20 pt-24 flex justify-center bg-background text-foreground transition-colors duration-300">
            <div className="w-full flex flex-col items-center">
                <div className="mb-12 self-start md:self-center md:mb-16">
                    <Link
                        href="/"
                        className="text-foreground/60 hover:text-foreground font-medium flex items-center gap-2 transition-colors border border-foreground/10 bg-foreground/5 px-4 py-2 rounded-full"
                    >
                        &larr; Back to Home
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col items-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-200 dark:to-white">
                        My Travels
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-center max-w-2xl">
                        Exploring the world, one city at a time. Here are some of the memorable places I've visited.
                    </p>

                    <TravelGrid />
                </motion.div>
            </div>
        </main>
    );
}
