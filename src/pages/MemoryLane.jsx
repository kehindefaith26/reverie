import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/Images/Polaroid image 1.webp';
import img2 from '../assets/Images/Polaroid image 2.webp';
import img3 from '../assets/Images/Polaroid image 3.webp';
import img4 from '../assets/Images/Polaroid image 4.webp';
import img5 from '../assets/Images/Polaroid image 5.webp';
import goldDivider from '../assets/golddivider.webp';
import goldMask from '../assets/textures/gold-mask.webp';

import Sparkles from '../components/Sparkles';

const MemoryLane = () => {
    const navigate = useNavigate();
    const [showTitle, setShowTitle] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [showSkip, setShowSkip] = useState(false);
    const [showNext, setShowNext] = useState(false);

    useEffect(() => {
        const t0 = setTimeout(() => setShowTitle(true), 100);
        const t1 = setTimeout(() => setShowTitle(false), 2500);
        const t2 = setTimeout(() => setShowImages(true), 5000);
        const t3 = setTimeout(() => setShowSkip(true), 5500);
        const t4 = setTimeout(() => setShowNext(true), 9000);

        return () => {
            clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
        };
    }, []);

    const polaroids = [
        {
            src: img1,
            caption: 'Uniwellness',
            mobileAlign: 'self-start ml-[10%]',
            mobileRot: 'rotate-[-6deg]',
            desktopPos: 'md:top-[10%] md:left-[5%]',
            desktopRot: 'md:rotate-[4deg]',
        },
        {
            src: img2,
            caption: 'Brand week',
            mobileAlign: 'self-end mr-[10%]',
            mobileRot: 'rotate-[6deg]',
            desktopPos: 'md:bottom-[5%] md:left-[4%]',
            desktopRot: 'md:rotate-[-15deg]',
        },
        {
            src: img3,
            caption: 'Hangout',
            mobileAlign: 'self-start ml-[10%]',
            mobileRot: 'rotate-[-6deg]',
            desktopPos: 'md:top-[5%] md:right-[26%]',
            desktopRot: 'md:rotate-[-15deg]',
        },
        {
            src: img4,
            caption: 'Techfest',
            mobileAlign: 'self-end mr-[10%]',
            mobileRot: 'rotate-[6deg]',
            desktopPos: 'md:top-[45%] md:left-[40%]',
            desktopRot: 'md:rotate-[15deg]',
        },
        {
            src: img5,
            caption: 'Beach hangout',
            mobileAlign: 'self-start ml-[10%]',
            mobileRot: 'rotate-[-6deg]',
            desktopPos: 'md:bottom-[15%] md:right-[10%]',
            desktopRot: 'md:rotate-[8deg]',
        },
    ];

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Sparkles Layer */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <Sparkles />
            </div>

            {/* Header Section */}
            <AnimatePresence>
                {showTitle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
                    >
                        <h1
                            className="font-header text-5xl md:text-7xl text-center pb-4"
                            style={{
                                backgroundImage: `url(${goldMask})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                backgroundSize: 'contain',
                            }}
                        >
                            A Trip Down<br />Memory Lane
                        </h1>
                        <img src={goldDivider} alt="divider" className="w-48 md:w-64" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Skip Button */}
            <AnimatePresence>
                {showSkip && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => navigate('/tickets')}
                        className="fixed top-8 right-8 z-50 text-cream/70 hover:text-gold text-sm flex items-center gap-2 group cursor-pointer"
                    >
                        <span className="lowercase tracking-widest">Skip</span>
                        <span className="group-hover:translate-x-1 transition-transform text-gold text-xl">››</span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Polaroid Gallery */}
            {showImages && (
                <div className="relative w-full min-h-screen z-20 pt-20 pb-32 md:py-0">
                    <div className="w-full h-full flex flex-col space-y-0 md:h-screen md:block md:relative">
                        {polaroids.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: index * 0.8,
                                    duration: 0.8,
                                    ease: "easeOut"
                                }}
                                className={`
                                    relative z-10 hover:z-50 transition-all duration-300
                                    ${item.mobileAlign}
                                    ${index > 0 ? '-mt-8' : ''}
                                    md:absolute md:mt-0
                                    ${item.desktopPos}
                                `}
                            >
                                <div className={`
                                    w-40 md:w-60
                                    transform transition-transform duration-300 hover:scale-110
                                    ${item.mobileRot}
                                    ${item.desktopRot}
                                `}>
                                    <img
                                        src={item.src}
                                        alt={`Memory ${index + 1}`}
                                        className="w-full h-auto block drop-shadow-2xl"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Next Button */}
            <AnimatePresence>
                {showNext && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="fixed bottom-8 right-8 z-50"
                    >
                        <motion.button
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            onClick={() => navigate('/tickets')}
                            className="
                            bg-gradient-to-r from-[#C7A86D] to-[#E8DAB2] 
                            text-burgundy font-bold text-lg 
                            py-3 px-12 rounded-full 
                            shadow-[0_0_20px_rgba(199,168,109,0.3)] 
                            hover:shadow-[0_0_30px_rgba(199,168,109,0.5)] 
                            hover:scale-105 transition-all duration-300
                        "
                        >
                            Next
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default MemoryLane;