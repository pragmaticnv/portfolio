"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DonutChart from "@/components/DonutChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pb-24">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[190px] h-[190px] mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-50 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
            <Image
              src="/profilephoto.png"
              alt="Nikhil Vashishtha"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400"
        >
          Nikhil Vashishtha
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light"
        >
          Welcome to My Personal Portfolio
        </motion.p>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-zinc-100/50 dark:bg-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
              With a strong foundation in Physics & Electronics, I bridge the gap between hardware and software.
              I'm deeply passionate about Coding and creating intuitive digital experiences.
              Whether it's designing circuits or architecting full-stack applications, I love solving complex problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Dashboard */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            My Skillset
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
            <DonutChart
              percentage={85}
              color="#3b82f6" // blue-500
              label="Electronics & IoT"
              delay={0.2}
            />
            <DonutChart
              percentage={70}
              color="#10b981" // emerald-500 (using green for frontend)
              label="Frontend Dev"
              delay={0.4}
            />
            <DonutChart
              percentage={90}
              color="#8b5cf6" // violet-500
              label="Leadership"
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
