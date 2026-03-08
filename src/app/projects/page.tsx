"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Trophy, Cpu } from "lucide-react";
import projectsData from "@/data/projects.json";

// Color accent per project index for variety
const accentColors = [
    { border: "hover:border-blue-500/60", glow: "hover:shadow-blue-500/20", tag: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
    { border: "hover:border-emerald-500/60", glow: "hover:shadow-emerald-500/20", tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
    { border: "hover:border-violet-500/60", glow: "hover:shadow-violet-500/20", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20" },
    { border: "hover:border-amber-500/60", glow: "hover:shadow-amber-500/20", tag: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
    { border: "hover:border-pink-500/60", glow: "hover:shadow-pink-500/20", tag: "bg-pink-500/10 text-pink-300 border-pink-500/20" },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen px-4 pb-24 pt-24 flex flex-col items-center relative">

            {/* Subtle ambient glow */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-900/20 blur-[120px]" />
            </div>

            <div className="w-full max-w-5xl">

                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors border border-white/10 bg-white/5 px-4 py-2 rounded-full"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </motion.div>

                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mb-14 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-violet-200 mb-3">
                        My Projects
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto text-base">
                        A collection of things I&apos;ve built — from hardware devices to full-stack platforms. Each one a lesson.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => {
                        const accent = accentColors[index % accentColors.length];
                        const isLargeCard = index === 0; // SafeMap gets featured treatment

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8 }}
                                className={`
                                    group relative flex flex-col
                                    bg-white/[0.04] backdrop-blur-md
                                    border border-white/10 ${accent.border}
                                    rounded-2xl p-7 gap-5
                                    shadow-xl ${accent.glow} hover:shadow-2xl
                                    transition-all duration-300
                                    ${isLargeCard ? "md:col-span-2" : ""}
                                `}
                            >
                                {/* Top row: number + award badge */}
                                <div className="flex items-start justify-between gap-3">
                                    <span className="text-xs font-mono text-white/20 mt-0.5">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {"award" in project && project.award && (
                                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                                            <Trophy className="w-3 h-3" />
                                            {project.award}
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <div>
                                    <h2 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors mb-2 leading-snug">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech stack pills */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border ${accent.tag}`}
                                        >
                                            <Cpu className="w-3 h-3 opacity-60" />
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link button */}
                                {"link" in project && project.link && (
                                    <div className="mt-auto pt-2">
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            View on GitHub
                                        </motion.a>
                                    </div>
                                )}

                                {/* Decorative corner glow on hover */}
                                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255,255,255,0.04), transparent 60%)" }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-zinc-500 text-sm mb-4">Want to build something together?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-xl shadow-blue-900/30"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
