"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trophy, Cpu, Github, Globe, X, Eye } from "lucide-react";
import { useState } from "react";
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

    return (
        <main className="min-h-screen px-6 pb-32 pt-24 relative overflow-hidden bg-black text-white">
            {/* Background Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-violet-900/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        My Projects
                    </h1>
                    <p className="text-base text-zinc-400 max-w-xl leading-relaxed">
                        A collection of my most impactful projects across full-stack development, IoT, and AI.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-24 md:gap-32">
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
                    className="mt-40 text-center border-t border-white/5 pt-20"
                >
                    <h2 className="text-2xl font-bold mb-6">Let's build something epic</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform text-sm"
                    >
                        Get in Touch
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
        >
            <div className={`absolute -inset-6 bg-gradient-to-br ${accentColor} opacity-15 blur-2xl -z-10`} />

            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                    <span className="text-zinc-700 font-mono text-base">0{index + 1}</span>
                    {"award" in project && project.award && (
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                            <Trophy className="w-2.5 h-2.5" />
                            {project.award}
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold hover:text-blue-400 transition-colors cursor-default tracking-tight">
                        {project.title}
                    </h2>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                        <div
                            key={tech}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10"
                        >
                            <Cpu className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">{tech}</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-2">
                    {"github" in project && project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium text-xs text-zinc-300"
                        >
                            <Github className="w-4 h-4" />
                            Github Repo
                        </motion.a>
                    )}
                    {"live" in project && project.live && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all font-medium text-xs"
                        >
                            <Globe className="w-4 h-4" />
                            Visit Demo
                        </motion.a>
                    )}
                    <button
                        onClick={onViewDetails}
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium text-xs text-zinc-300"
                    >
                        <Eye className="w-4 h-4" />
                        View Details
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
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
                <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="mb-8">
                        {"award" in project && project.award && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-bold tracking-wider uppercase">
                                <Trophy className="w-3 h-3" />
                                {project.award}
                            </div>
                        )}
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Overview</h3>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        {project.features && (
                            <div>
                                <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Key Features</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {project.features.map((feature: string) => (
                                        <li key={feature} className="flex items-start gap-2 text-zinc-400 text-sm">
                                            <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-white/5">
                        {"github" in project && project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm"
                            >
                                <Github className="w-4 h-4" />
                                Github Repo
                            </a>
                        )}
                        {"live" in project && project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm"
                            >
                                <Globe className="w-4 h-4" />
                                Visit Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
