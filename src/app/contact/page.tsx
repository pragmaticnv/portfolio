"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, Phone, Twitter, ArrowLeft } from "lucide-react";

const socialLinks = [
    {
        name: "Email",
        icon: Mail,
        href: "mailto:nikhilvashishthacu@gmail.com",
        color: "group-hover:shadow-[0_0_20px_rgba(234,67,53,0.5)] group-hover:border-red-500/50", // Gmail Red-ish
        textColor: "group-hover:text-red-400",
        colSpan: "col-span-2 md:col-span-3"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/nikhilvashishthaa",
        color: "group-hover:shadow-[0_0_20px_rgba(10,102,194,0.5)] group-hover:border-blue-500/50", // LinkedIn Blue
        textColor: "group-hover:text-blue-400",
        colSpan: "col-span-1"
    },
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/pragmaticnv",
        color: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:border-white/50", // GitHub White/Black
        textColor: "group-hover:text-white",
        colSpan: "col-span-1"
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://instagram.com/nikhilvashishthaa",
        color: "group-hover:shadow-[0_0_20px_rgba(214,41,118,0.5)] group-hover:border-pink-500/50", // Insta Gradient (Pinkish)
        textColor: "group-hover:text-pink-400",
        colSpan: "col-span-1"
    },
    {
        name: "WhatsApp",
        icon: Phone,
        href: "https://wa.me/7088080611",
        color: "group-hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] group-hover:border-green-500/50", // Whatsapp Green
        textColor: "group-hover:text-green-400",
        colSpan: "col-span-1"
    },
    {
        name: "Twitter/X",
        icon: Twitter,
        href: "https://x.com/goat45_",
        color: "group-hover:shadow-[0_0_20px_rgba(29,161,242,0.5)] group-hover:border-sky-500/50", // Twitter Blue
        textColor: "group-hover:text-sky-400",
        colSpan: "col-span-1"
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white p-8 pt-24 flex justify-center">
            <div className="max-w-2xl w-full">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="text-zinc-400 hover:text-white font-medium flex items-center gap-2 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                        Let's Connect
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${social.colSpan} group relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 ${social.color}`}
                                >
                                    <Icon className={`w-8 h-8 text-zinc-400 transition-colors duration-300 ${social.textColor}`} />
                                    <span className={`font-medium text-zinc-400 transition-colors duration-300 ${social.textColor}`}>
                                        {social.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
