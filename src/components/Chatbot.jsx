import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronRight, Minimize2, Bot, Maximize2, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import nuvemiteIcon from '../assets/nuvemite-icon.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hello! Welcome to Nuvemite. Book a demo today to see how we can transform your business. How can I assist you?' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // --- AI Logic Engine (Local) ---
    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        // 1. LEADERSHIP
        if (lowerInput.includes('ceo') || lowerInput.includes('colman') || lowerInput.includes('founder')) {
            return "Our CEO & Founder is Colman Mwakio. He leads our vision to innovate for humanity.";
        }
        if (lowerInput.includes('cto') || lowerInput.includes('david') || lowerInput.includes('kimari')) {
            return "Our CTO is David Kimari. He ensures our technology stack is world-class and secure.";
        }
        if (lowerInput.includes('cfo') || lowerInput.includes('mary') || lowerInput.includes('namunyak')) {
            return "Mary Namunyak is our CFO, managing financial strategy and sustainability.";
        }
        if (lowerInput.includes('daniel') || lowerInput.includes('nyagah') || lowerInput.includes('developer')) {
            return "Daniel Nyagah is our Senior Developer, architecting robust software solutions.";
        }
        if (lowerInput.includes('team') || lowerInput.includes('leader')) {
            return "We are led by a dynamic quartet: Colman Mwakio (CEO), David Kimari (CTO), Mary Namunyak (CFO), and Daniel Nyagah (Senior Dev).";
        }

        // 2. PRODUCTS (Ecosystem)
        if (lowerInput.includes('lims')) {
            return "Imara LIMS is our Laboratory Information Management System. It features sample management, workflow automation, and compliance tracking.";
        }
        if (lowerInput.includes('school') || lowerInput.includes('education')) {
            return "Imara School is our comprehensive management system for academic institutions, covering student info, fees, library, and more.";
        }
        if (lowerInput.includes('hms') || lowerInput.includes('hospital')) {
            return "Our Hospital Management System (HMS) handles patient registration, doctor scheduling, pharmacy, and billing integration.";
        }
        if (lowerInput.includes('property') || lowerInput.includes('hseni')) {
            return "Our Property Management system simplifies tenant leases, rent billing, and maintenance tracking.";
        }
        if (lowerInput.includes('kmacho') || lowerInput.includes('survey') || lowerInput.includes('data')) {
            return "Kmacho Data is our mobile data collection platform with offline entry, GPS tracking, and analytics.";
        }
        if (lowerInput.includes('ecosystem') || lowerInput.includes('product')) {
            return "Our EcosystemHub features specialized modules: Imara LIMS, Imara School, HMS, Property Management, Inventory System, Accounting, Kmacho Data, and Logistics.";
        }

        // 3. SERVICES
        if (lowerInput.includes('software') || lowerInput.includes('development')) {
            return "We build robust, scalable custom software applications tailored to your specific business challenges.";
        }
        if (lowerInput.includes('integration') || lowerInput.includes('api')) {
            return "We specialize in System Integration, connecting your disparate tools into a unified, efficient ecosystem.";
        }
        if (lowerInput.includes('marketing') || lowerInput.includes('seo')) {
            return "Our Digital Marketing services use data-driven strategies to increase your online visibility and engagement.";
        }
        if (lowerInput.includes('branding') || lowerInput.includes('print')) {
            return "We offer high-quality bulk printing and strategic brand identity design services.";
        }
        if (lowerInput.includes('service') || lowerInput.includes('offer')) {
            return "We offer: Software Development, System Integration, Digital Transformation, E-commerce, Printing & Branding, Bulk SMS, Digital Marketing, and ICT Consulting.";
        }

        // 4. VISION / MISSION / ABOUT
        if (lowerInput.includes('mission') || lowerInput.includes('purpose')) {
            return "Our mission is to provide timely, innovative, and sustainable IT solutions among global citizens.";
        }
        if (lowerInput.includes('vision')) {
            return "We aim to be a global leader in information technology delivering practical and viable innovations.";
        }
        if (lowerInput.includes('value') || lowerInput.includes('dna')) {
            return "Our core values (DNA) are Quality, Customer Satisfaction, Dependability, Trustworthiness, Integrity, Innovation, Practical Solutions, and Participation.";
        }

        // 5. CONTACT / GENERAL
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
            return "You can email us at info@nuvemite.com or visit our Contact page. We are based in Nairobi, Kenya.";
        }
        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello there! Ask me about our CEO, our products like Imara LIMS, or our services.";
        }
        if (lowerInput.includes('thank')) {
            return "You're very welcome! Let me know if you need anything else.";
        }
        
        // 6. FALLBACK
        return "I'm a local AI trained on Nuvemite's content. I can tell you about our Team (CEO, CTO...), Products (LIMS, School...), or Services. Try asking 'Who is the CEO?' or 'Tell me about LIMS'.";
    };

    const handleSend = async () => {
        if (!inputText.trim()) return;

        // User Message
        const userMsg = { id: Date.now(), type: 'user', text: inputText };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate Network Delay for "Thinking"
        setTimeout(() => {
            const botResponseText = generateResponse(userMsg.text);
            const botMsg = { id: Date.now() + 1, type: 'bot', text: botResponseText };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    const suggestions = ['Who is the CEO?', 'Imara LIMS', 'Our Services', 'Contact Us'];

    const handleSuggestionClick = (text) => {
        setInputText(text);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col transition-all duration-300 ${
                            isLandscape 
                            ? 'w-[90vw] sm:w-[600px] h-[500px]' 
                            : 'w-[350px] sm:w-[380px] h-[500px]'
                        }`}
                    >
                        {/* Header */}
                        <div className="bg-slate-900 p-4 flex items-center justify-between text-white relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="p-1.5 bg-white/10 rounded-full backdrop-blur-sm">
                                    <img src={nuvemiteIcon} alt="AI" className="w-6 h-6 object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Nuvemite AI</h3>
                                    <p className="text-xs text-slate-300 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 relative z-10">
                                <button 
                                    onClick={() => setIsLandscape(!isLandscape)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    title={isLandscape ? "Switch to Portrait" : "Switch to Landscape"}
                                >
                                    {isLandscape ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                </button>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 bg-slate-50 p-4 overflow-y-auto min-h-0 flex flex-col">
                            <div className="space-y-4 flex-1">
                                {messages.map((msg) => (
                                    <div 
                                        key={msg.id} 
                                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div 
                                            className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                                msg.type === 'user' 
                                                ? 'bg-blue-600 text-white rounded-tr-none' 
                                                : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1">
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Suggestions */}
                        <div className="bg-white px-4 py-2 border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
                            {suggestions.map((sug, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSuggestionClick(sug)}
                                    className="whitespace-nowrap px-3 py-1 bg-slate-100 hover:bg-slate-200 text-xs text-slate-600 rounded-full transition-colors border border-slate-200"
                                >
                                    {sug}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask anything..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-700"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputText.trim()}
                                    className={`absolute right-2 p-2 rounded-lg transition-all ${
                                        inputText.trim() 
                                        ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700' 
                                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    }`}
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mt-2 text-center">
                                <p className="text-[10px] text-slate-400">
                                    Powered by <span className="font-semibold text-slate-500">Nuvemite Technologies</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button (FAB) */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-14 h-14 rounded-full shadow-lg shadow-blue-900/20 flex items-center justify-center transition-colors duration-300 z-50 ${
                    isOpen ? 'bg-slate-800 text-white' : 'bg-[#00D4FF] text-slate-900'
                }`}
            >
                <div className="absolute inset-0 rounded-full border border-white/20" />
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Notification Dot */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="w-full h-full rounded-full animate-ping bg-red-400 absolute opacity-75" />
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
