"use client";

import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "Tailwind CSS", "Python", "C++", "Arduino", "IoT", "Framer Motion", "TypeScript", "Node.js"
];

const InfiniteMarquee = () => {
    return (
        <div className="relative w-full overflow-hidden py-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
            {/* Gradient Masks for fade effect at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/20 to-transparent z-10"></div>

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {/* Repeated list for seamless loop */}
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                    <span
                        key={index}
                        className="mx-8 text-xl font-medium text-white/50 hover:text-white transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteMarquee;
