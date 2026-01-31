"use client";

import ProfileCard from "@/components/bento/ProfileCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-8 pt-24">
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </main>
  );
}
