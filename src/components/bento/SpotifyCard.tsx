"use client";

import { motion } from "framer-motion";

const SpotifyCard = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            // Added overflow-hidden to ensure the iframe's corners don't poke out if they weren't rounded, 
            // though the iframe has its own border-radius style. 
            // Keeping the container height adaptable or fixed. 
            // Bento grids usually have fixed heights. The previous card had min-h-[180px]. 
            // The iframe wants height="100%", so we need to ensure the parent has height.
            // We'll trust the grid layout (row-span) or just give it a class.
            className="col-span-1 md:col-span-1 bg-black rounded-xl shadow-lg border border-zinc-800 overflow-hidden h-full min-h-[180px] md:min-h-[220px]"
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
