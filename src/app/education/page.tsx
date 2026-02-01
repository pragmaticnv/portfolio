"use client";

import Link from "next/link";
import EducationCard from "@/components/bento/EducationCard";
import { motion } from "framer-motion";

export default function EducationPage() {
    return (
        <main className="min-h-screen px-4 pb-20 pt-24 flex justify-center">
            <div className="w-full flex flex-col items-center">
                <div className="mb-12 self-start md:self-center md:mb-16">
                    <Link
                        href="/"
                        className="text-white/60 hover:text-white font-medium flex items-center gap-2 transition-colors border border-white/10 bg-white/5 px-4 py-2 rounded-full"
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                        My Education
                    </h1>
                    <p className="text-zinc-400 mb-12 text-center max-w-2xl">
                        A timeline of my academic journey and the milestones that shaped my technical foundation.
                    </p>

                    <EducationCard />
                </motion.div>
            </div>
        </main>
    );
}
