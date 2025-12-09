const PromotionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl border border-cyan-500/30 p-12 md:p-16 text-center backdrop-blur-sm">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-sm mb-6 animate-pulse">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">FREE $20</span> Bonus
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Sign up now and start playing with a <strong className="text-cyan-400">FREE $20 credit</strong> on us. No deposit required!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 rounded-2xl p-6 border border-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-add-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Sign Up</h3>
              <p className="text-gray-400 text-sm">Create your free account in seconds</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gift-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Claim Bonus</h3>
              <p className="text-gray-400 text-sm">Receive $20 credit instantly</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 border border-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gamepad-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Start Playing</h3>
              <p className="text-gray-400 text-sm">Enjoy 6,500+ games immediately</p>
            </div>
          </div>

          <a 
            href="https://splinkos.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-black rounded-full hover:from-pink-400 hover:to-purple-500 transition-all shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <span className="hidden md:inline">Claim Your $20 Bonus Now</span>
            <span className="md:hidden">Claim Now</span>
          </a>

          <p className="text-gray-400 text-sm mt-6">
            Terms and conditions apply. 18+ only. Gamble responsibly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
