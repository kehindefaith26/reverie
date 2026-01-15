import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import goldDivider from '../assets/golddivider.png';
import Sparkles from '../components/Sparkles';

const Landing = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-x-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <Sparkles />

            <div className="relative z-10 flex flex-col items-center w-full px-4">
                <motion.div variants={itemVariants} className="flex flex-col items-center w-full">
                    <h1 className="font-header text-5xl md:text-7xl drop-shadow-lg p-2 bg-[url('/src/assets/textures/gold-mask.png')] bg-cover bg-center bg-clip-text text-transparent">
                        REVERIE
                    </h1>

                    <div className="flex justify-center w-full mt-0 mb-8">
                        <img
                            src={goldDivider}
                            alt="Gold Divider"
                            className="w-64 md:w-96 h-auto object-contain drop-shadow-[0_0_8px_rgba(199,168,109,0.6)]"
                        />
                    </div>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="font-body text-xl md:text-3xl text-cream mb-16 italic tracking-wide"
                >
                    ... A Night to Remember
                </motion.p>

                <motion.button
                    variants={itemVariants}
                    className="bg-gold text-burgundy font-body font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_15px_rgba(199,168,109,0.4)] hover:shadow-[0_0_25px_rgba(199,168,109,0.6)] outline-none"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/memory-lane')}
                >
                    Relive the Moments
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Landing;