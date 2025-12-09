
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome to SPLINKOS',
      subtitle: 'World-Class Online Casino Platform',
      description: 'Sign up now & get FREE $20 | 6,500+ Games & Fast Cashouts',
      cta: 'Claim Your Bonus',
    },
    {
      title: 'Live Casino Experience',
      subtitle: 'Real Dealers, Real Excitement',
      description: 'Enjoy authentic casino gaming with professional live dealers 24/7',
      cta: 'Play Live Now',
    },
    {
      title: 'Sports Betting Arena',
      subtitle: 'Bet on Your Favorite Sports',
      description: 'Competitive odds on football, basketball, tennis and more',
      cta: 'Start Betting',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="https://splinkos.com/media/ee2f31ce50a86881013b0.gif" 
              alt="SPLINKOS" 
              className="h-24 md:h-32 mb-8 mx-auto"
            />
          </div>

          <div className="space-y-6 animate-slide-up">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl md:text-4xl font-bold text-white mb-4">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://t.ly/splinkosBlog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                {slides[currentSlide].cta}
              </a>
              <a 
                href="#games" 
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-400 text-cyan-400 text-lg font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all whitespace-nowrap cursor-pointer"
              >
                Explore Games
              </a>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentSlide === index 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-4xl text-cyan-400"></i>
      </div>
    </section>
  );
};

export default HeroSection;
