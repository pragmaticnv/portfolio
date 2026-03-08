"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Trophy, Cpu, Github, Globe } from "lucide-react";
import projectsData from "@/data/projects.json";

// Accent colors for subtle glow effects
const projectAccents = [
    "from-blue-500/20 to-transparent",
    "from-emerald-500/20 to-transparent",
    "from-violet-500/20 to-transparent",
    "from-orange-500/20 to-transparent",
    "from-pink-500/20 to-transparent",
    "from-cyan-500/20 to-transparent",
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen px-6 pb-40 pt-24 relative overflow-hidden bg-black text-white">
            {/* Background Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-violet-900/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-16"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>
                </motion.div>

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        Selected Works
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        A curated collection of my most impactful projects across full-stack development, IoT, and AI.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-40 md:gap-64">
                    {projectsData.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-64 text-center border-t border-white/5 pt-20"
                >
                    <h2 className="text-3xl font-bold mb-6">Let's build something epic</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
    const accentColor = projectAccents[index % projectAccents.length];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
        >
            {/* Numbering / Background Gradient */}
            <div className={`absolute -inset-8 bg-gradient-to-br ${accentColor} opacity-20 blur-3xl -z-10`} />

            {/* Left Content (Info) */}
            <div className="lg:col-span-12 flex flex-col gap-8">
                <div className="flex flex-wrap items-center gap-4">
                    <span className="text-zinc-600 font-mono text-lg">0{index + 1}</span>
                    {"award" in project && project.award && (
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold backdrop-blur-sm">
                            <Trophy className="w-3 h-3" />
                            {project.award}
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold hover:text-blue-400 transition-colors cursor-default">
                        {project.title}
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-4xl">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech: string) => (
                        <div
                            key={tech}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors"
                        >
                            <Cpu className="w-3 h-3 text-zinc-500" />
                            <span className="text-xs font-medium text-zinc-300">{tech}</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {"github" in project && project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all font-semibold"
                        >
                            <Github className="w-5 h-5" />
                            View Source
                        </motion.a>
                    )}
                    {"live" in project && project.live && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all font-semibold"
                        >
                            <Globe className="w-5 h-5" />
                            Live Demo
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
