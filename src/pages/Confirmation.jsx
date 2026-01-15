import goldDivider2 from '../assets/golddivider2.png';
import goldMask from '../assets/textures/gold-mask.png';
import Sparkles from '../components/Sparkles';

const Confirmation = () => {
    return (
        <div className="relative w-full min-h-screen bg-main-gradient overflow-x-hidden flex flex-col items-center justify-center font-lato text-white">

            {/* Sparkles Layer */}
            <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none">
                <Sparkles />
            </div>

            {/* Main Content */}
            <div className="relative z-20 w-full flex flex-col items-center px-6 py-24 text-center">

                <h1
                    className="font-header text-4xl md:text-5xl mb-6"
                    style={{
                        backgroundImage: `url(${goldMask})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        backgroundSize: 'contain',
                    }}
                >
                    REVERIE
                </h1>

                <h2 className="font-header text-3xl md:text-5xl text-white mb-6 drop-shadow-lg">
                    Your Place in History<br />is Secured.
                </h2>

                <img src={goldDivider2} alt="divider" className="w-48 md:w-80 mb-10 opacity-90" />

                <div className="max-w-lg space-y-6 text-lg md:text-xl leading-relaxed opacity-90 font-light">
                    <p>
                        The time machine is set. The red carpet is waiting.
                    </p>
                    <p>
                        Prepare to step back into a night of elegance, laughter, and unforgettable moments. We have saved a dance just for you.
                    </p>
                    <p className="font-header text-2xl md:text-3xl text-gold pt-4">
                        Until then, keep dreaming in gold.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Confirmation;