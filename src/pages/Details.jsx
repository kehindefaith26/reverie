import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backBtn from '../assets/backbutton.png';
import wavyLines from '../assets/wavylines.webp';
import discoBall from '../assets/discolball.webp';
import goldMask from '../assets/textures/gold-mask.webp';

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { ticket } = location.state || {};

    // Form State
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        partnerName: '',
        role: '',
        generation: '',
        suggestions: ''
    });

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Redirect if no ticket data found
    useEffect(() => {
        if (!ticket) navigate('/tickets');
    }, [ticket, navigate]);

    if (!ticket) return null;

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Validation & Navigation
    const handleProceed = () => {
        // 1. Basic Validation (Common fields)
        if (!formData.fullName || !formData.email || !formData.phone) {
            alert("Please fill in all required fields.");
            return;
        }

        // 2. Dynamic Validation (Ticket specific)
        if (ticket.type === 'pair' && !formData.partnerName) {
            alert("Please enter your partner's name.");
            return;
        }
        if (ticket.type === 'executive' && !formData.role) {
            alert("Please enter your role.");
            return;
        }
        if (ticket.type === 'legacy' && !formData.generation) {
            alert("Please enter your generation.");
            return;
        }

        // 3. Success - Navigate
        // We pass formData along in case you need it on the next page/backend
        navigate('/payment', { state: { ticket, formData } });
    };

    return (
        <div className="relative w-full min-h-screen bg-main-gradient overflow-x-hidden flex flex-col">

            {/* Navigation */}
            <div className="absolute top-6 left-6 z-50">
                <button
                    onClick={() => navigate('/tickets')}
                    className="focus:outline-none hover:scale-105 transition-transform duration-300"
                >
                    <img src={backBtn} alt="Back" className="w-8 md:w-10" />
                </button>
            </div>

            {/* Header */}
            <div className="w-full pt-24 pb-8 px-6 text-center z-20">
                <h1
                    className="font-header text-5xl md:text-6xl mb-2"
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
                <p className="font-lato text-white text-lg md:text-xl tracking-wide opacity-90">
                    Ready for an Unforgettable Night?
                </p>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-lg mx-auto px-6 pb-32 md:pb-80 z-20 relative">
                <form className="flex flex-col space-y-5">

                    {/* Full Name */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-white font-lato text-sm uppercase tracking-wide ml-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. John Doe"
                            className="w-full bg-transparent border border-gold rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-white/20 font-lato font-light"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-white font-lato text-sm uppercase tracking-wide ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. johndoe@example.com"
                            className="w-full bg-transparent border border-gold rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-white/20 font-lato font-light"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-white font-lato text-sm uppercase tracking-wide ml-1">Phone number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 123-456-7890"
                            className="w-full bg-transparent border border-gold rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-white/20 font-lato font-light"
                        />
                    </div>

                    {/* Dynamic Fields */}
                    {ticket.type === 'pair' && (
                        <div className="flex flex-col space-y-2">
                            <label className="text-white font-lato text-sm uppercase tracking-wide ml-1 text-gold">Partner's Full Name</label>
                            <input
                                type="text"
                                name="partnerName"
                                value={formData.partnerName}
                                onChange={handleChange}
                                placeholder="Who are you bringing?"
                                className="w-full bg-transparent border border-gold rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-white/20 font-lato font-light"
                            />
                        </div>
                    )}
                    {ticket.type === 'executive' && (
                        <div className="flex flex-col space-y-2">
                            <label className="text-white font-lato text-sm uppercase tracking-wide ml-1 text-gold">Role</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="e.g. LCVP MKT"
                                className="w-full bg-transparent border border-gold rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-white/20 font-lato font-light"
                            />
                        </div>
                    )}
                    {ticket.type === 'legacy' && (
                        <div className="flex flex-col space-y-2">
                            <label className="text-white font-lato text-sm uppercase tracking-wide ml-1 text-gold">Generation</label>
                            <input
                                type="text"
                                name="generation"
                                value={formData.generation}
                                onChange={handleChange}
                                placeholder="e.g. Gen 20.21"
                                className="w-full bg-transparent border border-gold rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-white/20 font-lato font-light"
                            />
                        </div>
                    )}

                    {/* Suggestions */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-white font-lato text-sm uppercase tracking-wide ml-1">Any Suggestions for us?</label>
                        <textarea
                            rows="4"
                            name="suggestions"
                            value={formData.suggestions}
                            onChange={handleChange}
                            placeholder="let us know!"
                            className="w-full bg-transparent border border-gold rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder-white/20 font-lato font-light resize-none"
                        ></textarea>
                    </div>

                    {/* Proceed Button */}
                    <div className="pt-4 flex justify-center">
                        <button
                            type="button"
                            onClick={handleProceed}
                            className="
                            bg-gradient-to-r from-[#C7A86D] to-[#E8DAB2] 
                            text-burgundy font-bold text-lg 
                            py-3 px-12 rounded-full 
                            shadow-[0_0_20px_rgba(199,168,109,0.3)] 
                            hover:shadow-[0_0_30px_rgba(199,168,109,0.5)] 
                            hover:scale-105 transition-all duration-300
                        "
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </form>
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

export default Details;