"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 border-t border-white/5 bg-black relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2"
                >
                    <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">Designed & Engineered</p>
                    <h3 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-zinc-500">
                        Built by Nikhil Vashishtha
                    </h3>
                </motion.div>

                <div className="mt-4 flex items-center gap-4 text-zinc-600 text-[10px] font-medium tracking-widest uppercase">
                    <span>&copy; {new Date().getFullYear()}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}
