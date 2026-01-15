import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backBtn from '../assets/backbutton.png';
import wavyLines from '../assets/wavylines.webp';
import discoBall from '../assets/discolball.webp';
import goldMask from '../assets/textures/gold-mask.webp';
import goldDivider2 from '../assets/golddivider2.webp';
import Sparkles from '../components/Sparkles';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { ticket } = location.state || {};

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Redirect if no ticket selected
    useEffect(() => {
        if (!ticket) {
            navigate('/tickets');
        }
    }, [ticket, navigate]);

    if (!ticket) return null;

    // WhatsApp Link Logic
    const whatsappNumber = "2348026892941";
    const whatsappMessage = `Hello, I have made payment for the ${ticket.title} ticket. Here is my receipt.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="relative w-full min-h-screen bg-main-gradient overflow-x-hidden flex flex-col font-lato text-white">

            {/* Sparkles Layer */}
            <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none">
                <Sparkles />
            </div>

            {/* Navigation */}
            <div className="absolute top-6 left-6 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="focus:outline-none hover:scale-105 transition-transform duration-300"
                >
                    <img src={backBtn} alt="Back" className="w-8 md:w-10" />
                </button>
            </div>

            {/* Main Content */}
            <div className="relative z-20 w-full flex flex-col items-center pt-24 px-6 pb-32 md:pb-80">

                <h1
                    className="font-header text-5xl md:text-6xl mb-2 text-center"
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

                <h2 className="font-header text-3xl md:text-5xl text-white mb-6 text-center drop-shadow-md">
                    Seal the Memory
                </h2>

                <p className="text-center text-base md:text-lg max-w-lg leading-relaxed opacity-90 mb-8">
                    The memories are waiting.<br />
                    Complete your registration below to join us for a night of nostalgia...
                </p>

                <img src={goldDivider2} alt="divider" className="w-48 md:w-80 mb-12 opacity-90" />

                {/* Payment Card */}
                <div className="
                    w-full max-w-lg 
                    bg-white/5 backdrop-blur-md 
                    border-[1.5px] border-dashed border-gold/50 
                    rounded-2xl p-8 md:p-12 
                    text-center shadow-2xl
                ">
                    <p className="mb-6 text-base md:text-lg">
                        Please pay the sum of <span className="font-bold text-gold">{ticket.price}</span> to the account details below.
                    </p>

                    <div className="space-y-2 mb-8">
                        <p className="text-sm uppercase tracking-wide opacity-80">Account Name</p>
                        <p className="text-xl font-bold">Aminat Olorunkemi Giwa</p>

                        <p className="text-sm uppercase tracking-wide opacity-80 pt-2">Account Number</p>
                        <p className="text-2xl font-bold text-gold tracking-widest">1003348429</p>

                        <p className="text-sm uppercase tracking-wide opacity-80 pt-2">Bank</p>
                        <p className="text-xl font-bold">Lotus Bank</p>
                    </div>

                    <p className="text-sm md:text-base opacity-90 leading-relaxed">
                        Kindly send proof of payment to{' '}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold underline underline-offset-4 hover:text-white transition-colors font-bold cursor-pointer"
                        >
                            this number
                        </a>
                        <br />so we can confirm your payment
                    </p>
                </div>

                {/* Finish Button */}
                <div className="mt-12">
                    <button
                        onClick={() => navigate('/confirmation')}
                        className="
                            bg-gradient-to-r from-[#C7A86D] to-[#E8DAB2] 
                            text-burgundy font-bold text-lg 
                            py-3 px-12 rounded-full 
                            shadow-[0_0_20px_rgba(199,168,109,0.3)] 
                            hover:shadow-[0_0_30px_rgba(199,168,109,0.5)] 
                            hover:scale-105 transition-all duration-300
                        "
                    >
                        Finish Payment
                    </button>
                </div>

            </div>

            {/* Footer Visuals */}
            <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
                <img src={wavyLines} alt="Decoration" className="w-full object-cover" />

                <img
                    src={discoBall}
                    alt="Disco Ball"
                    className="
                        absolute 
                        animate-spin-slow
                        right-7 
                        bottom-[3%] 
                        w-20 
                        md:right-[11%] 
                        md:bottom-[3%] 
                        md:w-40
                    "
                />
            </div>

        </div>
    );
};

export default Payment;