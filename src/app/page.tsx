"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DonutChart from "@/components/DonutChart";
import Spotlight from "@/components/Spotlight";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import Tilt from "react-parallax-tilt";

// ─── Fade-up helper ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any },
});

const fadeUpView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
};

// ─── Achievements data ──────────────────────────────────────────────
const achievements = [
  {
    emoji: "🏆",
    title: "3rd Place · Escape The Vincii '26",
    sub: "100+ teams · ₹20,000 prize",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    emoji: "🎓",
    title: "IIT Delhi Hackathon",
    sub: "National Participant · Build for Rural India",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    emoji: "♟",
    title: "Chess Rating 1600+",
    sub: "Undefeated at CU Tournament",
    glow: "rgba(139,92,246,0.15)",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-foreground pb-0 relative overflow-x-hidden bg-background transition-colors duration-300">
      <Spotlight />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden bg-background">
        {/* Background Radial Glow (Left Side) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-900/40 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* LEFT SIDE: Content (40%) */}
        <div className="w-full md:w-[40%] flex flex-col items-center justify-center px-6 md:px-12 z-20 pt-24 md:pt-0">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Profile Photo Card */}
            <motion.div
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
              }}
              className="mb-8"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={2500}
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56 p-[2px] rounded-2xl overflow-visible group">
                  {/* Rotating Gradient Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)",
                    }}
                  />

                  {/* Photo Container */}
                  <div className="relative w-full h-full bg-background rounded-2xl overflow-hidden z-10 border border-foreground/10">
                    <Image
                      src="/profilephoto_refined.png"
                      alt="Nikhil Vashishtha"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Pulsing Blue Glow Dot */}
                  <div className="absolute -bottom-1 -right-1 z-20 w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-foreground to-blue-400 dark:from-blue-200 dark:via-white dark:to-blue-300"
            >
              Nikhil Vashishtha
            </motion.h1>

            {/* Role line */}
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="text-lg text-blue-600/70 dark:text-blue-200/70 font-medium mb-1"
            >
              Full-Stack Developer · Hackathon Winner
            </motion.p>

            {/* Location */}
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="text-sm text-zinc-500 dark:text-zinc-400 mb-6"
            >
              📍 Mohali · Chandigarh University
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="flex items-center gap-4 flex-wrap justify-center md:justify-start"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.2)", backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-foreground/10 text-foreground font-semibold text-sm transition-all bg-foreground/5 backdrop-blur-sm shadow-sm"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Action Photo (60%) */}
        <div className="hidden md:block w-[60%] h-screen relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" }
            }}
            className="w-full h-full relative"
          >
            {/* Drift Animation Container */}
            <motion.div
              animate={{ x: [0, -12, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full relative"
            >
              <Image
                src="/hackathon_actual.jpg"
                alt="Hackathon Coding"
                fill
                className="object-cover object-center"
                priority
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── TECH MARQUEE ─────────────────────────────────────────── */}
      <div className="w-full relative z-20 border-y border-foreground/5 bg-background/50 backdrop-blur-sm">
        <InfiniteMarquee />
      </div>

      {/* ── ABOUT + SKILLS ───────────────────────────────────────── */}
      <section className="py-28 px-6 relative z-10 bg-background transition-colors duration-300">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — About */}
          <motion.div {...fadeUpView}>
            <h2 className="text-4xl font-bold mb-6 text-foreground/90">About Me</h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              First-year CSE student at Chandigarh University. I build full-stack
              applications, win hackathons, and integrate AI + IoT to solve real
              problems. Currently seeking internship opportunities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              With a strong foundation in Physics &amp; Electronics, I bridge the
              gap between hardware and software — whether it&apos;s designing circuits
              or architecting full-stack apps.
            </p>
          </motion.div>

          {/* Right — Donut charts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-8 justify-items-center"
          >
            <DonutChart percentage={85} color="#3b82f6" label="Electronics & IoT" delay={0.1} />
            <DonutChart percentage={70} color="#10b981" label="Frontend Dev" delay={0.3} />
            <DonutChart percentage={90} color="#8b5cf6" label="Leadership" delay={0.5} />
          </motion.div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS STRIP ───────────────────────────────────── */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeUpView}
            className="text-4xl font-bold text-center mb-12 text-foreground/90"
          >
            Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 60px ${a.glow}`,
                }}
                className="bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 cursor-default"
              >
                <span className="text-3xl">{a.emoji}</span>
                <h3 className="text-base font-semibold text-foreground leading-snug">{a.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{a.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
