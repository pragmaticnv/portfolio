"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, Brain, Cpu, Terminal, Trophy } from "lucide-react";
import educationData from "@/data/education.json";

const CERTIFICATIONS = [
    {
        title: "Introduction to Generative AI",
        issuer: "LinkedIn Learning",
        year: "2025",
        icon: "🤖",
        accent: "#0ea5e9",
        skills: ["LLMs", "Prompt Engineering", "AI Workflows"],
        description: "Mastery of LLM fundamentals applied directly in SafeMap AI and other projects."
    },
    {
        title: "Introduction to Psychology",
        issuer: "Coursera",
        year: "2025",
        icon: "🧠",
        accent: "#f59e0b",
        skills: ["UX Psychology", "Human Behaviour", "User Design"],
        description: "Understanding human cognition applied to UX design and empathetic interface building."
    }
];

const ACHIEVEMENTS = [
    {
        title: "3rd Place — Escape The Vincii '26",
        subtitle: "CGC Mohali · Feb 2026",
        detail: "100+ teams · Won ₹20,000 cash prize for SafeMap AI",
        badge: "3rd / 100+",
        icon: "🏆",
        accent: "#f59e0b"
    },
    {
        title: "National Participant",
        subtitle: "IIT Delhi — Build for Rural India",
        detail: "Presented Women's Safety SOS IoT device",
        badge: "National",
        icon: "🎓",
        accent: "#10b981"
    },
    {
        title: "Finalist — Build for Bharat",
        subtitle: "Chandigarh University · 3-Day Intensive",
        detail: "High-stakes hackathon for Indian solutions",
        badge: "Finalist",
        icon: "⚡",
        accent: "#3b82f6"
    },
    {
        title: "3rd Place — Quantum Computing",
        subtitle: "Departmental Presentation Competition",
        detail: "Researched and presented qubit-based computation",
        badge: "3rd Place",
        icon: "⚛️",
        accent: "#8b5cf6"
    },
    {
        title: "Chess Rating 1600+",
        subtitle: "Undefeated at CU Tournament (2–0)",
        detail: "Defeated players rated 1600 and 1300",
        badge: "1600+ ELO",
        icon: "♟",
        accent: "#ec4899"
    }
];

const STATS = [
    { label: "SGPA", value: "8.0", sub: "Semester 1", color: "#3b82f6" },
    { label: "Hackathons", value: "4+", sub: "Competed", color: "#10b981" },
    { label: "Projects", value: "5+", sub: "In production", color: "#8b5cf6" },
    { label: "Chess ELO", value: "1600+", sub: "Competitive", color: "#ec4899" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as any
        }
    }
};

const SectionLabel = ({ text }: { text: string }) => (
    <div className="w-full flex items-center justify-center my-16 gap-6 overflow-hidden">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <span className="text-muted-text text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase whitespace-nowrap">
            {text}
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-card-border to-transparent" />
    </div>
);

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-background text-foreground px-6 pb-20 pt-28 flex flex-col items-center relative overflow-hidden transition-colors duration-300">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/10 dark:bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-900/5 dark:bg-violet-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            {/* Back Button */}
            <div className="absolute top-8 left-8 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-card-border bg-card hover:bg-foreground/5 transition-all text-sm font-medium backdrop-blur-md text-foreground"
                >
                    &larr; <span className="text-muted-text group-hover:text-foreground">Back to Home</span>
                </Link>
            </div>

            {/* Header */}
            <header className="w-full max-w-6xl text-center flex flex-col items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 mb-4"
                >
                    <GraduationCap className="w-4 h-4 text-blue-400/70" />
                    <span className="text-blue-400/70 tracking-[0.2em] text-[10px] uppercase font-bold">Academic Journey</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-foreground to-blue-400 dark:from-blue-200 dark:via-white dark:to-blue-300 mb-6 drop-shadow-2xl"
                >
                    My Education
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-muted-text text-lg md:text-xl max-w-2xl leading-relaxed"
                >
                    A timeline of institutions, certifications, and milestones that built my technical foundation.
                </motion.p>
            </header>

            {/* Section 1: Education Cards */}
            <section className="w-full max-w-7xl mb-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {educationData.map((edu: any) => (
                        <motion.div
                            key={edu.id}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            className="group relative flex flex-col rounded-2xl border border-card-border bg-card backdrop-blur-sm overflow-hidden transition-all duration-300"
                        >
                            {/* Accent Gradient Top Bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: `linear-gradient(90deg, transparent, ${edu.accent}, transparent)` }}
                            />

                            {/* Image Part */}
                            <div className="relative h-44 overflow-hidden">
                                <Image
                                    src={edu.image}
                                    alt={edu.school}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent dark:from-black/80 dark:via-black/20 dark:to-transparent" />

                                <span
                                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border"
                                    style={{ backgroundColor: `${edu.accent}30`, borderColor: `${edu.accent}50` }}
                                >
                                    {edu.tag}
                                </span>

                                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-2 py-1 rounded-md bg-background/60 backdrop-blur-md border border-card-border transition-colors">
                                    <Calendar className="w-3 h-3 text-muted-text" />
                                    <span className="font-mono text-[10px] text-muted-text">{edu.year}</span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
                                {/* Inset glow on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"
                                    style={{ backgroundColor: edu.accent }}
                                />

                                <span
                                    className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block"
                                    style={{ color: edu.accent }}
                                >
                                    {edu.grade || "General Score"}
                                </span>

                                <h3 className="text-xl font-bold text-foreground mb-1 leading-tight">{edu.school}</h3>
                                <p className="text-sm text-muted-text mb-4 font-medium">{edu.degree}</p>

                                <p className="text-xs text-muted-text/80 leading-relaxed mb-6 flex-grow">
                                    {edu.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {edu.highlights.map((highlight: string, hIdx: number) => (
                                        <span
                                            key={hIdx}
                                            className="px-2 py-1 rounded-md text-[10px] font-medium border"
                                            style={{
                                                backgroundColor: `${edu.accent}10`,
                                                borderColor: `${edu.accent}20`,
                                                color: edu.accent
                                            }}
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <SectionLabel text="Certifications & Achievements" />

            {/* Section 2: Two Column Layout */}
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">

                {/* Certifications (Left) */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                        <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        Professional Certs
                    </h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="flex flex-col gap-6"
                    >
                        {CERTIFICATIONS.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, x: -24 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                                }}
                                whileHover={{ x: 4 }}
                                className="relative flex gap-5 p-5 bg-white/[0.03] border border-white/8 rounded-2xl group transition-all"
                            >
                                <div
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[60%] opacity-40"
                                    style={{ backgroundColor: cert.accent }}
                                />

                                <div
                                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-2xl rounded-xl border border-white/10"
                                    style={{ backgroundColor: `${cert.accent}15` }}
                                >
                                    {cert.icon}
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-sm font-bold text-foreground leading-tight">{cert.title}</h3>
                                        <span className="font-mono text-muted-text text-[9px] uppercase tracking-tighter ml-2">{cert.year}</span>
                                    </div>
                                    <span
                                        className="text-[11px] font-bold mb-3 block"
                                        style={{ color: cert.accent }}
                                    >
                                        {cert.issuer}
                                    </span>
                                    <p className="text-[11px] text-muted-text leading-relaxed mb-4">
                                        {cert.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cert.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="px-2 py-0.5 rounded-full border border-card-border bg-background text-[9px] text-muted-text">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Achievements (Right) */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        Milestones & Recognition
                    </h2>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.08 } }
                        }}
                        className="flex flex-col gap-5"
                    >
                        {ACHIEVEMENTS.map((ach, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ y: -4 }}
                                className="group relative bg-card border border-card-border rounded-2xl p-5 overflow-hidden transition-all"
                            >
                                {/* Glow orb */}
                                <div
                                    className="absolute -top-10 -right-10 w-24 h-24 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"
                                    style={{ backgroundColor: ach.accent }}
                                />

                                <div className="flex items-start gap-5">
                                    <div
                                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-xl rounded-xl border border-white/10"
                                        style={{ backgroundColor: `${ach.accent}15` }}
                                    >
                                        {ach.icon}
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="text-sm font-bold text-foreground">{ach.title}</h3>
                                            <span
                                                className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest border"
                                                style={{
                                                    backgroundColor: `${ach.accent}15`,
                                                    borderColor: `${ach.accent}25`,
                                                    color: ach.accent
                                                }}
                                            >
                                                {ach.badge}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-muted-text mb-1">{ach.subtitle}</p>
                                        <p className="text-[11px] text-muted-text/80 font-medium">{ach.detail}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Section 3: Bottom Stats Bar */}
            <section className="w-full max-w-5xl mt-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {STATS.map((stat, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-card-border bg-card hover:bg-white/10 transition-all text-center"
                        >
                            <span
                                className="text-3xl font-bold mb-1 transition-transform group-hover:scale-110 duration-300"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </span>
                            <span className="text-xs font-bold text-foreground uppercase tracking-widest mb-1">{stat.label}</span>
                            <span className="text-[9px] text-muted-text font-bold uppercase">{stat.sub}</span>
                        </div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}
