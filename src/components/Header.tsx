"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, GraduationCap, Plane, Headphones, Mail } from "lucide-react";
import { useState } from "react";

const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: GraduationCap, href: "/education", label: "Education" },
    { icon: Plane, href: "/travel", label: "Travel" },
    { icon: Headphones, href: "/interests", label: "Interests" },
    { icon: Mail, href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="pointer-events-auto flex items-center gap-2 bg-black/20 backdrop-blur-xl border border-white/5 rounded-full px-4 py-2 shadow-2xl"
            >
                {navItems.map((item) => (
                    <NavItem key={item.label} item={item} />
                ))}
            </motion.nav>
        </div>
    );
}

function NavItem({ item }: { item: typeof navItems[0] }) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = item.icon;

    return (
        <Link href={item.href} className="relative group">
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full hover:bg-white/10 transition-colors"
            >
                <Icon className="w-5 h-5 text-zinc-200" />
            </motion.div>

            {/* Tooltip */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 2 }}
                    className="absolute top-full left-1/2 mt-2 px-2 py-1 bg-zinc-800 dark:bg-zinc-700 text-white text-xs rounded-md whitespace-nowrap pointer-events-none"
                >
                    {item.label}
                </motion.div>
            )}
        </Link>
    );
}
