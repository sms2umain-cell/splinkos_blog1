import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/base/SEOHead';

const GamesPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [scrolled, setScrolled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      // 滚动到内容区域
      setTimeout(() => {
        const element = document.getElementById('games-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [categoryParam]);

  const gameCategories = [
    {
      id: 'pokies',
      title: 'Australian Pokies',
      icon: 'ri-game-line',
      description: 'My personal favorite! I\'ve spent countless hours testing pokies at SPLINKOS, and I can confidently say they have one of the best selections in Australia.',
      image: 'https://readdy.ai/api/search-image?query=colorful%20slot%20machine%20reels%20spinning%20with%20bright%20lights%20and%20golden%20coins%20casino%20atmosphere%20vibrant%20colors&width=800&height=500&seq=games-pokies&orientation=landscape',
      gradient: 'from-pink-500 to-purple-600',
      features: [
        'Over 2,000+ premium pokies games',
        'High RTP rates (96%+ on most games)',
        'Progressive jackpots reaching millions',
        'Free spins and bonus rounds',
        'Mobile-optimized gameplay'
      ],
      myTake: 'What I love about SPLINKOS pokies is the variety. Whether you\'re into classic 3-reel games or modern video slots with multiple paylines, there\'s something for everyone. I\'ve had my best wins on their progressive jackpot pokies!'
    },
    {
      id: 'slots',
      title: 'Video Slots',
      icon: 'ri-trophy-line',
      description: 'Video slots at SPLINKOS offer an incredible blend of entertainment and winning potential. I\'ve tested hundreds of them!',
      image: 'https://readdy.ai/api/search-image?query=modern%20video%20slot%20machine%20screen%20with%20colorful%20symbols%20and%20winning%20combinations%20bright%20casino%20lights&width=800&height=500&seq=games-slots&orientation=landscape',
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Themed slots from top providers',
        'Megaways and cluster pays mechanics',
        'Buy bonus feature options',
        'Demo mode available',
        'Regular new releases'
      ],
      myTake: 'SPLINKOS partners with the best game providers like Pragmatic Play, NetEnt, and Play\'n GO. I particularly enjoy their Megaways slots - the potential for massive wins keeps me coming back!'
    },
    {
      id: 'live-casino',
      title: 'Live Casino',
      icon: 'ri-live-line',
      description: 'Nothing beats the thrill of live dealers! SPLINKOS live casino brings the authentic casino experience right to your screen.',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20casino%20dealer%20at%20elegant%20table%20with%20cards%20and%20chips%20studio%20lighting%20luxury%20atmosphere&width=800&height=500&seq=games-live&orientation=landscape',
      gradient: 'from-red-500 to-pink-600',
      features: [
        '24/7 live dealer availability',
        'HD streaming quality',
        'Multiple camera angles',
        'Chat with dealers and players',
        'VIP tables for high rollers'
      ],
      myTake: 'I spend most of my evenings at SPLINKOS live blackjack tables. The dealers are professional and friendly, and the streaming quality is crystal clear. It\'s as close to a real casino as you can get online!'
    },
    {
      id: 'sports',
      title: 'Sports Betting',
      icon: 'ri-football-line',
      description: 'As a sports enthusiast, I appreciate SPLINKOS comprehensive sports betting platform. The odds are competitive and the markets are extensive.',
      image: 'https://readdy.ai/api/search-image?query=sports%20betting%20screen%20showing%20football%20match%20odds%20and%20statistics%20modern%20interface%20green%20field%20background&width=800&height=500&seq=games-sports&orientation=landscape',
      gradient: 'from-green-500 to-emerald-600',
      features: [
        'Pre-match and live betting',
        'Competitive odds on all sports',
        'Cash out options available',
        'Detailed statistics and analysis',
        'Mobile betting app'
      ],
      myTake: 'SPLINKOS sports betting section covers everything from AFL to international football. I love their live betting feature - being able to place bets while watching the game adds so much excitement!'
    },
    {
      id: 'fishing',
      title: 'Fishing Games',
      icon: 'ri-anchor-line',
      description: 'Fishing games might seem unusual, but they\'re incredibly fun! SPLINKOS has introduced me to this exciting arcade-style gaming category.',
      image: 'https://readdy.ai/api/search-image?query=colorful%20underwater%20fishing%20arcade%20game%20with%20tropical%20fish%20and%20treasure%20bright%20ocean%20scene%20vibrant%20colors&width=800&height=500&seq=games-fishing&orientation=landscape',
      gradient: 'from-blue-500 to-cyan-600',
      features: [
        'Skill-based gameplay',
        'Multiplayer tournaments',
        'Progressive prize pools',
        'Various weapon upgrades',
        'Stunning underwater graphics'
      ],
      myTake: 'I was skeptical at first, but fishing games at SPLINKOS are addictive! They combine skill with luck, and the multiplayer aspect makes it social and competitive. Great for a change of pace!'
    },
    {
      id: 'table',
      title: 'Table Games',
      icon: 'ri-stack-line',
      description: 'Classic casino table games are where strategy meets luck. SPLINKOS offers all the traditional favorites with modern twists.',
      image: 'https://readdy.ai/api/search-image?query=elegant%20casino%20table%20with%20roulette%20wheel%20cards%20and%20chips%20luxury%20green%20felt%20golden%20lighting&width=800&height=500&seq=games-table&orientation=landscape',
      gradient: 'from-purple-500 to-indigo-600',
      features: [
        'Blackjack, Roulette, Baccarat',
        'Multiple game variations',
        'Strategy guides available',
        'Low and high stake tables',
        'Practice mode for beginners'
      ],
      myTake: 'SPLINKOS table games section is perfect for strategy lovers. I\'ve spent hours perfecting my blackjack strategy here. The variety of game variations keeps things interesting, and the practice mode is great for learning!'
    }
  ];

  const filteredGames = selectedCategory === 'all' 
    ? gameCategories 
    : gameCategories.filter(game => game.id === selectedCategory);

  return (
    <>
      <SEOHead
        title="SPLINKOS Games Australia | 6500+ Pokies Slots Live Casino Sports Betting"
        description="SPLINKOS games Australia 6500+ pokies slots live casino sports betting fishing games. Play premium Australian pokies, live dealers, table games, sports betting at SPLINKOS. High RTP games, progressive jackpots."
        keywords="SPLINKOS games, Australian pokies, online slots Australia, live casino Australia, sports betting Australia, fishing games"
        canonicalUrl="https://splinkos.online/games"
        ogTitle="SPLINKOS Games Australia | 6500+ Pokies, Slots & Live Casino"
        ogDescription="SPLINKOS games Australia 6500+ pokies slots live casino sports betting. Play premium games at SPLINKOS."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "SPLINKOS Games",
          "description": "Comprehensive guide to 6500+ games at SPLINKOS Australia including pokies, slots, live casino, sports betting, and fishing games",
          "url": "https://splinkos.online/games",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Game",
                  "name": "Australian Pokies",
                  "description": "Over 2,000+ premium pokies games with high RTP rates and progressive jackpots"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Game",
                  "name": "Video Slots",
                  "description": "Themed slots from top providers with Megaways and cluster pays mechanics"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Game",
                  "name": "Live Casino",
                  "description": "24/7 live dealer games with HD streaming and professional dealers"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Game",
                  "name": "Sports Betting",
                  "description": "Pre-match and live betting with competitive odds on all sports"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Game",
                  "name": "Fishing Games",
                  "description": "Skill-based arcade games with multiplayer tournaments"
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Game",
                  "name": "Table Games",
                  "description": "Classic casino games including Blackjack, Roulette, and Baccarat"
                }
              }
            ]
          }
        }}
        geoPosition="-33.8688,151.2093"
        geoRegion="AU-NSW"
        geoPlacename="Sydney, New South Wales, Australia"
      />
      <div className="min-h-screen bg-gray-900">
        <header>
          <Navbar scrolled={scrolled} />
        </header>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                SPLINKOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Games Guide</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                My comprehensive guide to 6,500+ games at SPLINKOS. After testing hundreds of games across all categories, I'm sharing my honest insights and recommendations.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <i className="ri-user-line text-cyan-400"></i>
                  <span>By Gaming Enthusiast</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <i className="ri-time-line text-cyan-400"></i>
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <nav aria-label="Game categories" className="py-8 bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Games
              </button>
              {gameCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Games Content */}
        <main id="games-content">
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-20">
                {filteredGames.map((game, index) => (
                  <article key={game.id} className="group">
                    {/* Game Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${game.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        <i className={`${game.icon} text-4xl text-white`}></i>
                      </div>
                      <div>
                        <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {game.title}
                        </h2>
                        <p className="text-gray-400 mt-1">Category {index + 1} of {gameCategories.length}</p>
                      </div>
                    </div>

                    {/* Game Image */}
                    <div className="relative h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>

                    {/* Game Description */}
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 mb-8">
                      <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        {game.description}
                      </p>
                      
                      {/* Features */}
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <i className="ri-star-line text-cyan-400"></i>
                        Key Features
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {game.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <i className="ri-check-line text-cyan-400 text-xl mt-1 flex-shrink-0"></i>
                            <span className="text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* My Take */}
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-6 border border-cyan-500/20">
                        <h4 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                          <i className="ri-chat-quote-line"></i>
                          My Personal Take
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {game.myTake}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <a
                        href="https://t.ly/splinkosBlog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 whitespace-nowrap cursor-pointer"
                      >
                        <span>Try {game.title} at SPLINKOS</span>
                        <i className="ri-arrow-right-line text-xl"></i>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Ready to Start Playing?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join me at SPLINKOS and experience the best online gaming in Australia. With 6,500+ games, generous bonuses, and 24/7 support, you're in for an incredible gaming journey!
            </p>
            <a
              href="https://t.ly/splinkosBlog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-cyan-600 text-xl font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <span>Visit SPLINKOS Now</span>
              <i className="ri-external-link-line text-2xl"></i>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GamesPage;
