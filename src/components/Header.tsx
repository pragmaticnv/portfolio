"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, GraduationCap, Plane, Headphones, Layers, Mail } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: GraduationCap, href: "/education", label: "Education" },
    { icon: Plane, href: "/travel", label: "Travel" },
    { icon: Headphones, href: "/interests", label: "Interests" },
    { icon: Layers, href: "/projects", label: "Projects" },
    { icon: Mail, href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
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
    const pathname = usePathname();
    const isActive = pathname === item.href;
    const Icon = item.icon;

    return (
        <Link href={item.href} className="relative group">
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                    ? "bg-blue-600/20 border border-blue-500/30"
                    : "hover:bg-white/5 border border-transparent"
                    }`}
            >
                <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-blue-400" : "text-zinc-400 group-hover:text-white"
                        }`}
                />
                <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? "text-blue-100" : "text-zinc-400 group-hover:text-white"}`}>
                    {item.label}
                </span>

                {/* Active glow dot removed for cleaner look with text */}
            </motion.div>
        </Link>
    );
}
