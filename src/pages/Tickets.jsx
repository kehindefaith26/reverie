import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import goldDivider2 from '../assets/golddivider2.webp';
import goldMask from '../assets/textures/gold-mask.webp';
import img1 from '../assets/Images/Placeholderimg1.webp';
import img2 from '../assets/Images/Placeholderimg2.webp';
import img3 from '../assets/Images/Placeholderimg3.webp';
import img4 from '../assets/Images/Placeholderimg4.webp';
import img5 from '../assets/Images/Placeholderimg5.webp';

// Components
import Sparkles from '../components/Sparkles';

const Tickets = () => {
    const navigate = useNavigate();

    const hasViewed = sessionStorage.getItem('hasViewedTicketsIntro');
    const shouldSkip = !!hasViewed;

    const [introPhase, setIntroPhase] = useState(shouldSkip ? 'done' : 'intro');
    const [showContent, setShowContent] = useState(shouldSkip);

    // Data Configuration
    const tickets = [
        {
            id: 'solo',
            title: "The Dreamer",
            price: "₦17,000",
            btnText: "Reserve a single ticket",
            img: img1,
            type: 'solo',
            position: '50% 30%',
            desc: "This is for the independent soul ready to capture the spotlight. Step out of the shadows and embrace the magic of the evening on your own terms. Tonight is an open canvas, waiting for you to write a bold new chapter in gold."
        },
        {
            id: 'moonlight',
            title: "Midnight Waltz",
            price: "₦33,000",
            btnText: "Reserve a couple ticket",
            img: img2,
            type: 'pair',
            position: '50% 30%',
            desc: "A rhythm shared by two souls in perfect sync. Step onto the floor together and let the music guide your steps through a night painted in deep burgundy and shadow. It is not just a dance; it is a memory etched in time, just for you."
        },
        {
            id: 'twilight',
            title: "Gilded Romance",
            price: "₦36,000",
            btnText: "Reserve a couple ticket",
            img: img3,
            type: 'pair',
            position: '50% 20%',
            desc: "Wrapped in gold and glory, this is the ultimate experience for the couple that embodies radiance. Walk the red carpet hand-in-hand and lose yourselves in a fairytale evening where every glance and every toast feels like a scene from a classic movie."
        },
        {
            id: 'royal',
            title: "The Sovereign",
            price: "₦20,000",
            btnText: "Reserve an executive ticket",
            img: img4,
            type: 'executive',
            position: '50% 15%',
            desc: "Reserved for the leaders, the visionaries, and the true icons of our time. Experience the night from the height of luxury, with exclusive privileges tailored for those who do not just attend the party, they command the room and define the moment."
        },
        {
            id: 'legacy',
            title: "The Eternal",
            price: "₦20,000",
            btnText: "Reserve an alumni ticket",
            img: img5,
            type: 'legacy',
            position: '50% 10%',
            desc: "For those with roots that run deep and a legacy that stands tall. This is a reserved honor for the legends who paved the way, returning to toast to the past and witness the beautiful dream they started so many years ago."
        }
    ];

    // Animation Choreography
    useEffect(() => {
        if (shouldSkip) return;

        const t1 = setTimeout(() => setIntroPhase('fading'), 3000);

        const t2 = setTimeout(() => {
            setIntroPhase('done');
            setShowContent(true);
            sessionStorage.setItem('hasViewedTicketsIntro', 'true');
        }, 4000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [shouldSkip]);

    return (
        <div className="relative w-full min-h-screen bg-[#6A1B1A] overflow-x-hidden">

            {/* Sparkles Layer */}
            <motion.div
                animate={{ opacity: introPhase === 'fading' || introPhase === 'done' ? 0 : 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none fixed"
            >
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: introPhase === 'fading' || introPhase === 'done' ? 0 : 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0 bg-main-gradient pointer-events-none"
                />
                <Sparkles />
            </motion.div>

            {/* INTRO SEQUENCE */}
            <AnimatePresence>
                {introPhase !== 'done' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: introPhase === 'fading' ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
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
                            Let's Make<br />New Memories
                        </h1>
                        <img src={goldDivider2} alt="divider" className="w-48 md:w-64" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* TICKET CONTENT */}
            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 w-full flex flex-col pb-20"
                >
                    {tickets.map((item, index) => (
                        <div key={item.id} className="w-full flex flex-col">
                            {/* 1. Image Area */}
                            <div className="relative w-full h-[50vh] md:h-[60vh]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: item.position || 'center' }}
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#6A1B1A] via-[#6A1B1A]/80 to-transparent pointer-events-none" />
                            </div>

                            {/* 2. Content Area */}
                            <div className="w-full px-6 md:px-16 lg:px-24 -mt-12 md:-mt-20 relative z-20">
                                <h2 className="font-script text-5xl md:text-6xl text-white mb-4 drop-shadow-md">
                                    {item.title}
                                </h2>
                                <p className="font-lato text-white text-base md:text-lg w-full md:w-[100%] mb-6 leading-relaxed opacity-90 text-justify">
                                    {item.desc}
                                </p>
                                <p className="font-header text-white text-3xl md:text-4xl mb-8">
                                    Price: {item.price}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(199,168,109,0.6)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/details', { state: { ticket: item } })}
                                    className="bg-gold text-burgundy font-bold py-4 rounded-full shadow-[0_0_15px_rgba(199,168,109,0.4)] uppercase tracking-wider outline-none w-[90%] mx-auto block md:w-auto md:mx-0 md:px-12 md:inline-block"
                                >
                                    {item.btnText}
                                </motion.button>
                            </div>

                            {/* Separator */}
                            {index < tickets.length - 1 && (
                                <div className="px-6 md:px-16 lg:px-24">
                                    <hr className="border-t-[3px] border-gold/30 my-12 w-full" />
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Tickets;