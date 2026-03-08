"use client";

import { motion } from "framer-motion";

const SpotifyCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-1 bg-background rounded-xl shadow-lg border border-foreground/10 overflow-hidden h-full min-h-[180px] md:min-h-[220px]"
        >
            <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/5rwWAGMTJCzJC2rgE9fNHS?utm_source=generator"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="h-full w-full"
            />
        </motion.div>
    );
};

export default SpotifyCard;
