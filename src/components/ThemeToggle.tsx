"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
    }

    const toggleTheme = () => {
        if (theme === "dark") setTheme("light");
        else if (theme === "light") setTheme("system");
        else setTheme("dark");
    };

    const getIcon = () => {
        if (theme === "dark") return <Moon className="w-4 h-4 text-blue-400" />;
        if (theme === "light") return <Sun className="w-4 h-4 text-amber-500" />;
        return <Monitor className="w-4 h-4 text-zinc-400" />;
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors"
            title={`Current theme: ${theme}. Click to switch.`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {getIcon()}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
}
