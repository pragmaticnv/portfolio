"use client";

import { motion } from "framer-motion";

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "C++",
    "Three.js",
    "Arduino",
    "IoT",
    "Framer Motion",
    "Node.js",
    "Firebase",
    "Tailwind CSS",
    "WebGL",
    "OpenAI API",
];

// Double the list for seamless infinite loop
const doubled = [...skills, ...skills];

const InfiniteMarquee = () => {
    return (
        <div className="relative w-full overflow-hidden py-5 bg-white/[0.03] backdrop-blur-sm border-y border-white/[0.06]">
            {/* Left fade mask */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent" />
            {/* Right fade mask */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 28,
                }}
            >
                {doubled.map((skill, index) => (
                    <span
                        key={index}
                        className="mx-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:text-white hover:border-white/25 transition-colors cursor-default select-none"
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteMarquee;
