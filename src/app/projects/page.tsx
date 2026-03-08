"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Trophy, Cpu, Github, Globe, X, Eye } from "lucide-react";
import { useState, useRef } from "react";
import projectsData from "@/data/projects.json";

const projectAccents = [
    "from-blue-500/20 to-transparent",
    "from-emerald-500/20 to-transparent",
    "from-violet-500/20 to-transparent",
    "from-orange-500/20 to-transparent",
    "from-pink-500/20 to-transparent",
    "from-cyan-500/20 to-transparent",
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main ref={containerRef} className="min-h-screen px-6 pb-32 pt-24 relative overflow-hidden bg-black text-white selection:bg-blue-500/30">
            {/* --- PREMIUM BACKGROUND OVERLAY --- */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                {/* Geometric Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                {/* Ambient Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[180px] rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-violet-900/10 blur-[180px] rounded-full" />

                {/* Floating Particles (Fake Parallax) */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -40, 0],
                                x: [0, 20, 0],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto relative">
                {/* --- SCROLL PROGRESS LINE --- */}
                <div className="absolute left-[-40px] top-64 bottom-40 w-[1px] bg-white/5 hidden xl:block">
                    <motion.div
                        style={{ scaleY }}
                        className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-500 via-violet-500 to-transparent origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    />
                </div>

                {/* Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8 md:mb-12 relative z-10"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                    >
                        <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                            <ArrowLeft className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium tracking-wide uppercase">Back</span>
                    </Link>
                </motion.div>

                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 md:mb-32 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
                        Portfolio Pipeline
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-700">
                        My Projects
                    </h1>
                    <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed font-medium">
                        Crafting digital experiences through high-performance code and innovative design. Explore a decade of evolution in full-stack engineering and IoT.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-24 md:gap-48 relative z-10">
                    {projectsData.map((project, index) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            index={index}
                            onViewDetails={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-48 text-center border-t border-white/5 pt-24"
                >
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">Collaboration</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                        Interested in working together?
                    </h2>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-black font-extrabold transition-all overflow-hidden"
                    >
                        <span className="relative z-10 text-sm">Start a Project</span>
                        <motion.div
                            className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        />
                    </Link>
                </motion.div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}

function ProjectItem({ project, index, onViewDetails }: { project: any; index: number; onViewDetails: () => void }) {
    const accentColor = projectAccents[index % projectAccents.length];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
        >
            {/* Massive Background Number - Hidden on mobile, adjusted positioning on desktop */}
            <div className="absolute -left-12 -top-12 text-[10rem] md:text-[14rem] font-black text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-4 hidden md:block">
                0{index + 1}
            </div>

            <div className={`absolute -inset-10 bg-gradient-to-br ${accentColor} opacity-10 blur-3xl -z-10 transition-opacity duration-700 group-hover:opacity-20`} />

            <div className="flex flex-col gap-6 md:gap-8 relative">
                <div className="flex flex-wrap items-center gap-4">
                    {"award" in project && project.award && (
                        <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[8px] md:text-[10px] font-black tracking-widest uppercase backdrop-blur-md">
                            <Trophy className="w-2.5 h-2.5 md:w-3 h-3" />
                            {project.award}
                        </div>
                    )}
                </div>

                <div className="space-y-4 md:space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black group-hover:text-blue-400 transition-colors cursor-pointer tracking-tight leading-[1.1]" onClick={onViewDetails}>
                        {project.title}
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-xl leading-relaxed max-w-4xl font-medium">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                        <div
                            key={tech}
                            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                        >
                            <Cpu className="w-3 h-3 md:w-3.5 h-3.5 text-zinc-500" />
                            <span className="text-[8px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{tech}</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4">
                    {"github" in project && project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2.5 px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-[10px] md:text-xs text-zinc-200 uppercase tracking-wider"
                        >
                            <Github className="w-3.5 h-3.5 md:w-4 h-4" />
                            Github
                        </motion.a>
                    )}
                    {"live" in project && project.live && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2.5 px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 transition-all font-black text-[10px] md:text-xs uppercase tracking-wider"
                        >
                            <Globe className="w-3.5 h-3.5 md:w-4 h-4" />
                            Live
                        </motion.a>
                    )}
                    <button
                        onClick={onViewDetails}
                        className="flex items-center gap-2.5 px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-[10px] md:text-xs text-zinc-200 uppercase tracking-wider"
                    >
                        <Eye className="w-3.5 h-3.5 md:w-4 h-4" />
                        Details
                    </button>
                </div>
            </div>
        </motion.section>
    );
}

function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-4xl bg-zinc-950/50 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-2xl"
            >
                {/* Background Accent Grid in Modal */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

                <div className="p-10 md:p-16 max-h-[90vh] overflow-y-auto custom-scrollbar">
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                    >
                        <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    </button>

                    <div className="mb-12">
                        {"award" in project && project.award && (
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-black tracking-widest uppercase">
                                <Trophy className="w-4 h-4" />
                                {project.award}
                            </div>
                        )}
                        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">{project.title}</h2>
                        <div className="flex flex-wrap gap-2.5">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-7 space-y-10">
                            <div>
                                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Execution Overview</h3>
                                <p className="text-zinc-300 text-xl leading-relaxed font-medium">
                                    {project.longDescription || project.description}
                                </p>
                            </div>

                            {project.features && (
                                <div>
                                    <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Project Capabilities</h3>
                                    <ul className="space-y-4">
                                        {project.features.map((feature: string) => (
                                            <li key={feature} className="flex items-center gap-4 text-zinc-400 text-base group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-5 border-l border-white/5 pl-12 hidden lg:block">
                            <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Metadata</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-zinc-500 text-xs font-bold mb-1">Status</p>
                                    <p className="text-white font-black uppercase tracking-widest text-xs">Completed</p>
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-xs font-bold mb-1">Role</p>
                                    <p className="text-white font-black uppercase tracking-widest text-xs">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-20 pt-10 border-t border-white/10">
                        {"github" in project && project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-widest transition-transform hover:scale-[1.02]"
                            >
                                <Github className="w-5 h-5" />
                                Github Repo
                            </a>
                        )}
                        {"live" in project && project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest transition-transform hover:scale-[1.02]"
                            >
                                <Globe className="w-5 h-5" />
                                Visit Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
