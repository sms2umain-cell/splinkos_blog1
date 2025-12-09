
const GamesSection = () => {
  const gameCategories = [
    {
      title: 'Pokies',
      categoryId: 'pokies',
      icon: 'ri-game-line',
      description: 'Explore the most popular Australian pokies with high RTP',
      image: 'https://splinkos.com/media/1204904f4529654b72b14.png',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      title: 'Slots',
      categoryId: 'slots',
      icon: 'ri-trophy-line',
      description: 'Experience the perfect blend of classic and modern slots',
      image: 'https://splinkos.com/media/08e7261c952965f6cd8df.png',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Live Casino',
      categoryId: 'live-casino',
      icon: 'ri-live-line',
      description: 'Live dealers bring authentic casino experience 24/7',
      image: 'https://splinkos.com/media/63e3b81c95296fbae3c43.png',
      gradient: 'from-red-500 to-pink-600',
    },
    {
      title: 'Sports Betting',
      categoryId: 'sports',
      icon: 'ri-football-line',
      description: 'Professional sports betting with competitive odds',
      image: 'https://splinkos.com/media/7f200e9a4529615fd7fd0.png',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Fishing Games',
      categoryId: 'fishing',
      icon: 'ri-anchor-line',
      description: 'Exciting fishing arcade games with big rewards',
      image: 'https://splinkos.com/media/30ecb99a4529663a6b32d.png',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Table Games',
      categoryId: 'table',
      icon: 'ri-stack-line',
      description: 'Classic casino table games including blackjack and roulette',
      image: 'https://splinkos.com/media/b9074f8a45296557eb8fb.png',
      gradient: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover 6,500+ premium games across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameCategories.map((category, index) => (
            <a 
              key={index}
              href={`/games?category=${category.categoryId}`}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <i className={`${category.icon} text-3xl text-white`}></i>
                  </div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <span className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors cursor-pointer">
                  Explore Now
                  <i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://t.ly/splinkosBlog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            View All Games
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
