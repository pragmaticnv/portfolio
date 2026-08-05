"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, GraduationCap, Plane, Headphones, Layers, Mail, Sparkles, FileText, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: Layers, href: "/projects", label: "Projects" },
    { icon: GraduationCap, href: "/education", label: "Education" },
    { icon: Plane, href: "/travel", label: "Travel" },
    { icon: Headphones, href: "/interests", label: "Interests" },
    { icon: Mail, href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    return (
        <>
            {/* Top Notification Banner */}
            <AnimatePresence>
                {isBannerVisible && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white border-b border-white/10 shadow-md"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-row items-center justify-between gap-2 text-xs md:text-sm">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <span className="p-1 rounded-md bg-white/20 backdrop-blur-sm shrink-0 hidden sm:inline-flex">
                                    <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                                </span>
                                <p className="font-medium truncate sm:whitespace-normal">
                                    <span className="font-bold">Updates Underway:</span> Many achievements are still being added! Feel free to read my resume in the meantime.
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-2 shrink-0">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-xs transition-colors backdrop-blur-sm border border-white/30 shadow-sm"
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    <span className="hidden xs:inline">Read </span>Resume
                                    <ExternalLink className="w-3 h-3 opacity-80" />
                                </a>
                                <button
                                    onClick={() => setIsBannerVisible(false)}
                                    aria-label="Dismiss banner"
                                    className="p-1 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation Bar */}
            <motion.div 
                animate={{ top: isBannerVisible ? "46px" : "16px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed left-0 right-0 z-40 flex justify-center pointer-events-none px-4"
            >
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="pointer-events-auto flex items-center gap-1 md:gap-2 bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-card-border rounded-full px-2 md:px-3 py-1.5 md:py-2 shadow-lg"
                >
                    {navItems.map((item) => (
                        <NavItem key={item.label} item={item} />
                    ))}
                    <div className="w-[1px] h-4 bg-card-border mx-1 hidden md:block" />
                    <ThemeToggle />
                </motion.nav>
            </motion.div>
        </>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 ${isActive
                    ? "bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/20 dark:border-blue-500/30"
                    : "hover:bg-card border border-transparent"
                    }`}
            >
                <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-blue-600 dark:text-blue-400" : "text-muted-text group-hover:text-foreground"
                        }`}
                />
                <span className={`text-sm font-medium transition-colors duration-300 hidden md:block ${isActive ? "text-blue-600 dark:text-blue-100" : "text-muted-text group-hover:text-foreground"}`}>
                    {item.label}
                </span>
            </motion.div>
        </Link>
    );
}

