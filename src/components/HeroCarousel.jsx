import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Assets
import heroOffice from '../assets/hero-office.png';
import heroLab from '../assets/hero-lab.png';
import heroSchool from '../assets/hero-school.png';

const slides = [
  {
    id: 1,
    image: heroOffice,
    title: "Smart Digital Solutions for Business Growth",
    subtext: "Empower your enterprise with cutting-edge software tailored to streamline operations and drive efficiency.",
    buttonPrimary: "Explore Solutions",
    buttonSecondary: "Contact Us"
  },
  {
    id: 2,
    image: heroLab,
    title: "Transform Your Laboratory Operations",
    subtext: "Experience the next generation of LIMS. precision, unexpected reliability for modern scientific environments.",
    buttonPrimary: "View Imara LIMS",
    buttonSecondary: "Book Demo"
  },
  {
    id: 3,
    image: heroSchool,
    title: "Imara School: The Future of Education",
    subtext: "A comprehensive management system designing to bridge the gap between administration, teachers, and students.",
    buttonPrimary: "Learn More",
    buttonSecondary: "Get Started"
  }
];

const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [swiper, setSwiper] = React.useState(null);

    const handleSlideChange = (s) => {
        setActiveIndex(s.realIndex);
    };

    return (
    <div className="relative h-screen w-full bg-slate-900 overflow-hidden">
        <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect={'fade'}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            className="h-full w-full"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    {({ isActive }) => (
                        <div className="relative h-full w-full">
                            {/* Background Image with Slow Zoom Effect */}
                            <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                                 style={{ backgroundImage: `url(${slide.image})` }}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />

                            {/* Content Container */}
                            <div className="relative h-full container mx-auto px-4 flex items-center">
                                <div className="max-w-4xl pl-4 md:pl-20 text-white">
                                    <AnimatePresence mode='wait'>
                                        {isActive && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={{
                                                    hidden: {},
                                                    visible: {
                                                        transition: {
                                                            staggerChildren: 0.2
                                                        }
                                                    }
                                                }}
                                            >
                                                <motion.h1 
                                                    variants={{
                                                        hidden: { y: 30, opacity: 0 },
                                                        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                                                    }}
                                                    className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                                                >
                                                    {slide.title}
                                                </motion.h1>
                                                
                                                <motion.p 
                                                    variants={{
                                                        hidden: { y: 20, opacity: 0 },
                                                        visible: { y: 0, opacity: 0.9, transition: { duration: 0.8, ease: "easeOut" } }
                                                    }}
                                                    className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed"
                                                >
                                                    {slide.subtext}
                                                </motion.p>
                                                
                                                <motion.div 
                                                    variants={{
                                                        hidden: { y: 20, opacity: 0 },
                                                        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                                    }}
                                                    className="flex flex-wrap gap-4"
                                                >
                                                    {slide.id === 2 ? (
                                                        <a 
                                                            href="https://imaralims.com/" 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="bg-nuvemite-cyan hover:bg-cyan-400 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 inline-block"
                                                        >
                                                            {slide.buttonPrimary}
                                                        </a>
                                                    ) : (
                                                        <button className="bg-nuvemite-cyan hover:bg-cyan-400 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1">
                                                            {slide.buttonPrimary}
                                                        </button>
                                                    )}
                                                    
                                                    <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold transition-all backdrop-blur-sm">
                                                        {slide.buttonSecondary}
                                                    </button>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>

        {/* Hero Navigator */}
        <div className="absolute bottom-10 left-0 w-full z-20">
            <div className="container mx-auto px-4 pl-4 md:pl-20">
                <div className="flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiper?.slideToLoop(index)}
                            className="group relative h-1.5 w-16 bg-white/20 rounded-full overflow-hidden transition-all hover:h-2 focus:outline-none"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {/* Progress bar fill for active slide */}
                            {index === activeIndex && (
                                <motion.div 
                                    className="absolute top-0 left-0 h-full bg-nuvemite-cyan"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 6, ease: "linear" }}
                                />
                            )}
                            {/* Hover effect fill */}
                            <div className={`absolute top-0 left-0 h-full w-full bg-white transition-opacity duration-300 ${index === activeIndex ? 'opacity-0' : 'opacity-0 group-hover:opacity-50'}`} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroCarousel;
