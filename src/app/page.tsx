"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DonutChart from "@/components/DonutChart";
import Spotlight from "@/components/Spotlight";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <main className="min-h-screen text-white pb-0 relative overflow-x-hidden">
      <Spotlight />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative z-10">

        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[240px] h-[240px] mb-10 group cursor-pointer" // Slightly larger container for the plate
          >
            <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/20 shadow-2xl transform rotate-3 transition-transform group-hover:rotate-0"></div>

            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10 shadow-inner z-10 bg-black/50">
              <Image
                src="/profilephoto.png"
                alt="Nikhil Vashishtha"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative elements on the plate */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full blur-md animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/50 rounded-full"></div>
          </motion.div>
        </Tilt>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40" // More vertical gradient for metallic feel
        >
          Nikhil Vashishtha
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-blue-200/80 font-light tracking-wide mb-12"
        >
          Welcome to My Personal Portfolio
        </motion.p>
      </section>

      {/* Infinite Tech Marquee (Bottom Plate) */}
      <div className="w-full relative z-20">
        <InfiniteMarquee />
      </div>

      {/* About Section */}
      <section className="py-24 px-8 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white/90">About Me</h2>
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300">
              With a strong foundation in Physics & Electronics, I bridge the gap between hardware and software.
              I'm deeply passionate about Coding and creating intuitive digital experiences.
              Whether it's designing circuits or architecting full-stack applications, I love solving complex problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Dashboard */}
      <section className="py-24 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-white/90"
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
              color="#10b981" // emerald-500
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
