
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.4),transparent_70%)]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Win Big?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join SPLINKOS today and experience world-class gaming with <strong className="text-cyan-400">6,500+ games</strong>, <strong className="text-pink-400">fast withdrawals</strong>, and <strong className="text-purple-400">24/7 support</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="https://t.ly/splinkosBlog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-black rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Join Now & Get $20 Free
          </a>
          
          <a 
            href="https://t.ly/splinkosBlog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white/10 backdrop-blur-sm border-2 border-cyan-400 text-cyan-400 text-xl font-black rounded-full hover:bg-cyan-400 hover:text-black transition-all whitespace-nowrap cursor-pointer"
          >
            Login to Play
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-cyan-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>6,500+</div>
            <div className="text-gray-400 text-sm">Games Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-pink-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>24/7</div>
            <div className="text-gray-400 text-sm">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-purple-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>$20</div>
            <div className="text-gray-400 text-sm">Welcome Bonus</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-green-400 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>Fast</div>
            <div className="text-gray-400 text-sm">Withdrawals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
