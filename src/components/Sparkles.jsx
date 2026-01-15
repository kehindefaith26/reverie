import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Sparkles = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const newSparkles = Array.from({ length: 60 }).map((_, i) => {
            return {
                id: i,
                x: Math.random() * 100, // Horizontal position (0-100%)
                y: Math.random() * 100, // Vertical position (within the container)
                size: Math.random() * 4 + 2, // Size: 2px - 6px
                delay: Math.random() * 5, // Random start time
                duration: Math.random() * 3 + 2, // Twinkle speed (2s - 5s)
                glowIntensity: Math.random() * 0.5 + 0.5,
            };
        });
        setSparkles(newSparkles);
    }, []);

    return (
        <div
            // 1. HEIGHT FIX: Reduced to 40vh (stops well before the Header)
            // 2. MASK: Soft fade at the bottom so it doesn't look like a hard cut
            className="fixed top-0 left-0 w-full h-[40vh] pointer-events-none z-0"
            style={{
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
            }}
        >
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute rounded-full bg-gold"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        width: sparkle.size,
                        height: sparkle.size,
                        // THE GLOW (Kept strong)
                        boxShadow: `
                            0 0 ${sparkle.size * 2}px ${sparkle.size}px rgba(199, 168, 109, ${sparkle.glowIntensity}),
                            0 0 ${sparkle.size * 4}px ${sparkle.size * 2}px rgba(199, 168, 109, ${sparkle.glowIntensity * 0.5})
                        `,
                    }}
                    // THE NEW ANIMATION: Pure Fade In/Out (No movement)
                    animate={{
                        opacity: [0, 1, 0],   // Invisible -> Bright -> Invisible
                        scale: [0.5, 1, 0.5], // Grow slightly as it brightens
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default Sparkles;