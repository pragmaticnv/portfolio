"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Phone, ArrowLeft } from "lucide-react";

const socialLinks = [
    {
        name: "Email Me",
        icon: Mail,
        href: "mailto:nikhilvashishthacu@gmail.com",
        gradient: "from-red-500 to-orange-500", // Gmail-ish
    },
    {
        name: "Connect",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/nikhilvashishthaa",
        gradient: "from-blue-600 to-blue-400", // LinkedIn Blue
    },
    {
        name: "My Code",
        icon: Github,
        href: "https://github.com/pragmaticnv",
        gradient: "from-gray-600 to-black", // GitHub Dark
    },
    {
        name: "Follow Me",
        icon: Instagram,
        href: "https://instagram.com/nikhilvashishthaa",
        gradient: "from-purple-500 via-pink-500 to-orange-500", // Instagram
    },
    {
        name: "Chat on WhatsApp",
        icon: Phone,
        href: "https://wa.me/917088080611",
        gradient: "from-green-500 to-emerald-600", // WhatsApp
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 flex justify-center items-center">
            <div className="max-w-5xl w-full flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="self-start mb-8 lg:mb-12"
                >
                    <Link
                        href="/"
                        className="text-slate-300 hover:text-white font-medium flex items-center gap-2 transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                    >
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                        Let's Connect
                    </h1>
                    <p className="text-slate-400 mb-12 max-w-lg mx-auto text-lg">
                        Feel free to reach out for collaborations, project discussions, or just to say hi!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            // Center the last item if it's the 5th one (index 4)
                            const isLast = index === socialLinks.length - 1;

                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                                group relative overflow-hidden
                                bg-slate-900/40 backdrop-blur-md border border-white/10 
                                rounded-2xl p-8 
                                flex flex-col items-center justify-center gap-4 
                                shadow-lg hover:shadow-2xl transition-all duration-300
                                ${isLast ? 'sm:col-span-2 md:col-span-1 md:col-start-2' : ''}
                            `}
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${social.gradient} transition-opacity duration-500`} />

                                    {/* Glowing Icon Border */}
                                    <div className={`
                                p-4 rounded-full bg-white/5 border border-white/10 
                                group-hover:border-white/30 group-hover:bg-white/10 
                                transition-all duration-300
                                relative z-10
                            `}>
                                        <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                                    </div>

                                    <div className="flex flex-col items-center relative z-10">
                                        <span className="font-semibold text-lg text-white/90 group-hover:text-white">
                                            {social.name}
                                        </span>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
