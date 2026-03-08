"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Trophy, Cpu, Github, Globe, X, Eye } from "lucide-react";
import { useState, useRef } from "react";
import NextImage from "next/image";
import projectsData from "@/data/projects.json";

const projectAccents = [
    "from-blue-500/20 to-transparent",
    "from-emerald-500/20 to-transparent",
    "from-violet-500/20 to-transparent",
    "from-orange-500/20 to-transparent",
    "from-pink-500/20 to-transparent",
    "from-cyan-500/20 to-transparent",
];

function ProjectItem({ project, index, onViewDetails }: { project: any; index: number; onViewDetails: () => void }) {
    const accentClass = projectAccents[index % projectAccents.length];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
        >
            {/* Background Number */}
            <div className="absolute -left-12 -top-12 text-[120px] md:text-[240px] font-black text-foreground/[0.03] select-none z-0 hidden md:block">
                0{index + 1}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
                <div className="lg:col-span-5 space-y-4 md:space-y-6">
                    {"award" in project && project.award && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[8px] md:text-[10px] font-black tracking-widest uppercase">
                            <Trophy className="w-3 h-3 md:w-3.5 h-3.5" />
                            {project.award}
                        </div>
                    )}
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h2>
                    <p className="text-sm md:text-lg text-muted-text leading-relaxed font-medium">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-3 py-1 rounded-lg bg-foreground/5 border border-card-border text-[9px] font-bold text-muted-text uppercase tracking-widest">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className={`relative aspect-[16/10] rounded-2xl md:rounded-[2rem] overflow-hidden border border-foreground/10 bg-gradient-to-br ${accentClass} group/img shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]`}>
                        {project.image ? (
                            <NextImage
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Cpu className="w-12 h-12 text-foreground/20" />
                            </div>
                        )}

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm z-20">
                            <div className="flex gap-4">
                                {"github" in project && project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="p-3 md:p-4 rounded-full bg-foreground text-background hover:scale-110 transition-transform shadow-xl"
                                        title="View GitHub"
                                    >
                                        <Github className="w-5 h-5 md:w-6 h-6" />
                                    </Link>
                                )}
                                {"live" in project && project.live && (
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="p-3 md:p-4 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform shadow-xl"
                                        title="Live Demo"
                                    >
                                        <Globe className="w-5 h-5 md:w-6 h-6" />
                                    </Link>
                                )}
                                <button
                                    onClick={onViewDetails}
                                    className="p-3 md:p-4 rounded-full bg-zinc-600 text-white hover:scale-110 transition-transform shadow-xl"
                                    title="View Details"
                                >
                                    <Eye className="w-5 h-5 md:w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Floating Tech Icons Overlay (Decorative) */}
                        <div className="absolute top-6 right-6 flex flex-col gap-3 group-hover:translate-x-2 transition-transform duration-500 opacity-20">
                            <Cpu className="w-8 h-8 md:w-12 h-12 text-foreground" />
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 justify-end items-center">
                        <button
                            onClick={onViewDetails}
                            className="inline-flex items-center gap-2 text-muted-text hover:text-foreground text-[10px] md:text-xs font-black uppercase tracking-[.25em] transition-all group/btn"
                        >
                            <span className="border-b border-transparent group-hover/btn:border-foreground pb-1">Detailed Case Study</span>
                            <Cpu className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                        </button>
                    </div>
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
                className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-4xl bg-background/50 border border-foreground/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-2xl"
            >
                {/* Background Accent Grid in Modal */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

                <div className="p-6 md:p-16 max-h-[90vh] overflow-y-auto custom-scrollbar">
                    <button
                        onClick={onClose}
                        className="absolute top-4 md:top-8 right-4 md:right-8 p-2 md:p-3 rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all group z-10"
                    >
                        <X className="w-4 h-4 md:w-5 h-5 group-hover:rotate-90 transition-transform" />
                    </button>

                    <div className="mb-8 md:mb-12">
                        {"award" in project && project.award && (
                            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1 mb-4 md:mb-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[8px] md:text-[10px] font-black tracking-widest uppercase">
                                <Trophy className="w-3 h-3 md:w-4 h-4" />
                                {project.award}
                            </div>
                        )}
                        <h2 className="text-3xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-[1.1] text-foreground">{project.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-foreground/5 border border-card-border text-[8px] md:text-[10px] font-black text-muted-text uppercase tracking-[0.2em] shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                        <div className="lg:col-span-7 space-y-8 md:space-y-10">
                            <div>
                                <h3 className="text-muted-text/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6">Execution Overview</h3>
                                <p className="text-muted-text text-base md:text-xl leading-relaxed font-medium">
                                    {project.longDescription || project.description}
                                </p>
                            </div>

                            {project.features && (
                                <div>
                                    <h3 className="text-muted-text/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6">Project Capabilities</h3>
                                    <ul className="space-y-3 md:space-y-4">
                                        {project.features.map((feature: string) => (
                                            <li key={feature} className="flex items-center gap-3 md:gap-4 text-muted-text text-sm md:text-base group">
                                                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 group-hover:scale-150 transition-transform" />
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-5 border-l border-card-border pl-8 md:pl-12 hidden lg:block">
                            <h3 className="text-muted-text/60 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Metadata</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-muted-text text-xs font-bold mb-1">Status</p>
                                    <p className="text-foreground font-black uppercase tracking-widest text-xs">Completed</p>
                                </div>
                                <div>
                                    <p className="text-muted-text text-xs font-bold mb-1">Role</p>
                                    <p className="text-foreground font-black uppercase tracking-widest text-xs">Lead Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-4 mt-12 md:mt-20 pt-8 md:pt-10 border-t border-foreground/10">
                        {"github" in project && project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-foreground text-background font-black text-[10px] md:text-xs uppercase tracking-widest transition-transform hover:scale-[1.02]"
                            >
                                <Github className="w-4 h-4 md:w-5 h-5" />
                                Github Repo
                            </a>
                        )}
                        {"live" in project && project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-blue-600 text-white font-black text-[10px] md:text-xs uppercase tracking-widest transition-transform hover:scale-[1.02]"
                            >
                                <Globe className="w-4 h-4 md:w-5 h-5" />
                                Visit Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

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
        <main ref={containerRef} className="min-h-screen px-6 pb-32 pt-24 relative overflow-hidden bg-background text-foreground transition-colors duration-300 selection:bg-blue-500/30">
            {/* --- PREMIUM BACKGROUND OVERLAY --- */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                {/* Geometric Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.03] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 dark:brightness-100 contrast-150" />

                {/* Ambient Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 dark:bg-blue-900/10 blur-[180px] rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-violet-600/5 dark:bg-violet-900/10 blur-[180px] rounded-full" />

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
                            className="absolute w-1 h-1 bg-foreground rounded-full opacity-20"
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
                <div className="absolute left-[-40px] top-64 bottom-40 w-[1px] bg-foreground/5 hidden xl:block">
                    <motion.div
                        style={{ scaleY }}
                        className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-500 via-violet-500 to-transparent origin-top shadow-[0_0_15px_rgba(59,130,246,0.3)]"
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
                        className="group inline-flex items-center gap-2 text-muted-text hover:text-foreground transition-colors"
                    >
                        <div className="p-1.5 rounded-full bg-foreground/5 border border-card-border group-hover:border-foreground/20 transition-all">
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
                        Portfolio Pipeline
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-muted-text/60 transition-colors duration-300">
                        My Projects
                    </h1>
                    <p className="text-base md:text-lg text-muted-text max-w-2xl leading-relaxed font-medium">
                        Crafting digital experiences through high-performance code and innovative design. Explore evolution in full-stack engineering and IoT.
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
                    className="mt-32 md:mt-48 text-center border-t border-foreground/5 pt-16 md:pt-24"
                >
                    <p className="text-muted-text font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">Collaboration</p>
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-text transition-colors">
                        Interested in working together?
                    </h2>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-2 px-8 md:px-10 py-3 md:py-4 rounded-full bg-foreground text-background font-extrabold transition-all overflow-hidden"
                    >
                        <span className="relative z-10 text-xs md:text-sm">Start a Project</span>
                        <motion.div
                            className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
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
