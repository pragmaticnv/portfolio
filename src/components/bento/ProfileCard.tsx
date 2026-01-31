"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProfileCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="row-span-2 col-span-1 md:col-span-2 bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 flex flex-col justify-between"
        >
            <div className="flex flex-col gap-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
                    {/* Placeholder for profile image, using a gradient for now if no image */}
                    <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-purple-500" />
                    {/* <Image src="/profile.jpg" alt="Profile" fill className="object-cover" /> */}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">NIKHIL VASHISHTHA</h2>
                    <p className="text-zinc-500 dark:text-zinc-400">A HUMAN WITH SOO MANY DREAMS</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                    Passionate about building polished web experiences. I love combining technical depth with visual aesthetic.
                </p>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
