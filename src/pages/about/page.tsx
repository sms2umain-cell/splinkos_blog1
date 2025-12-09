import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <title>关于 SPLINKOS | 澳大利亚领先在线赌场 | SPLINKOS Casino Australia</title>
      <meta name="description" content="了解 SPLINKOS Australia - 澳大利亚最受信赖的在线赌场。SPLINKOS 提供 6500+ 游戏、即时提款、24/7 客服。探索 SPLINKOS 的故事和使命。" />
      <meta name="keywords" content="SPLINKOS, SPLINKOS Australia, 关于 SPLINKOS, SPLINKOS casino, 澳大利亚在线赌场, SPLINKOS 公司, SPLINKOS 使命" />
      <link rel="canonical" href="https://splinkos.com.au/about" />
      
      <meta property="og:title" content="关于 SPLINKOS Australia Online Casino" />
      <meta property="og:description" content="了解 SPLINKOS Australia - 澳大利亚最受信赖的在线赌场平台" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://splinkos.com.au/about" />

      <Navbar isScrolled={isScrolled} />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        <main>
          <h1 className="sr-only">关于 SPLINKOS Australia - 澳大利亚领先在线赌场平台</h1>
          
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  About <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SPLINKOS</strong>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Welcome to <strong>SPLINKOS</strong>, Australia's premier online casino destination where excitement meets excellence
                </p>
              </div>

              {/* Story Section */}
              <article className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <strong>SPLINKOS</strong> was founded with a simple yet powerful vision: to create the ultimate online gaming experience for Australian players. Since our inception, <strong>SPLINKOS</strong> has grown to become one of Australia's most trusted and beloved online casino platforms.
                  </p>
                  <p>
                    At <strong>SPLINKOS</strong>, we understand that our players deserve nothing but the best. That's why we've partnered with the world's leading game providers to bring you over 6,500 premium games, from classic pokies to cutting-edge live casino experiences.
                  </p>
                  <p>
                    What sets <strong>SPLINKOS</strong> apart is our unwavering commitment to player satisfaction. We've built our reputation on three core pillars: exceptional game variety, lightning-fast payouts, and round-the-clock customer support. When you play at <strong>SPLINKOS</strong>, you're not just another player – you're part of our family.
                  </p>
                </div>
              </article>

              {/* Mission Section */}
              <article className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 mb-8 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    The mission of <strong>SPLINKOS</strong> is to provide a safe, fair, and entertaining gaming environment where every player can enjoy world-class casino entertainment. We're committed to responsible gaming and ensuring that <strong>SPLINKOS</strong> remains a platform where fun comes first.
                  </p>
                  <p>
                    <strong>SPLINKOS</strong> continuously innovates to stay ahead of the curve, introducing new games, features, and promotions that keep our players engaged and excited. Our dedication to excellence has made <strong>SPLINKOS</strong> the go-to choice for thousands of Australian players.
                  </p>
                </div>
              </article>

              {/* Values Grid */}
              <section className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30">
                  <div className="text-4xl mb-4">🎮</div>
                  <h4 className="text-xl font-bold text-white mb-3">Premium Gaming</h4>
                  <p className="text-gray-300">
                    <strong>SPLINKOS</strong> offers 6,500+ premium games from top providers
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="text-xl font-bold text-white mb-3">Instant Payouts</h4>
                  <p className="text-gray-300">
                    <strong>SPLINKOS</strong> guarantees lightning-fast withdrawals
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 border border-orange-400/30">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="text-xl font-bold text-white mb-3">Safe & Secure</h4>
                  <p className="text-gray-300">
                    <strong>SPLINKOS</strong> uses advanced encryption technology
                  </p>
                </div>
              </section>

              {/* Why Choose Us */}
              <article className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose SPLINKOS?</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <i className="ri-check-line text-2xl text-cyan-400 mr-3 mt-1"></i>
                    <span><strong>SPLINKOS</strong> offers the largest game selection in Australia with 6,500+ titles</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-2xl text-cyan-400 mr-3 mt-1"></i>
                    <span>Generous welcome bonus: FREE $20 + up to $5,000 bonus at <strong>SPLINKOS</strong></span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-2xl text-cyan-400 mr-3 mt-1"></i>
                    <span><strong>SPLINKOS</strong> provides 24/7 customer support in multiple languages</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-2xl text-cyan-400 mr-3 mt-1"></i>
                    <span>Licensed and regulated - <strong>SPLINKOS</strong> operates with full compliance</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-2xl text-cyan-400 mr-3 mt-1"></i>
                    <span>Mobile-optimized platform - play <strong>SPLINKOS</strong> games anywhere, anytime</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-2xl text-cyan-400 mr-3 mt-1"></i>
                    <span><strong>SPLINKOS</strong> champions responsible gaming with comprehensive player protection tools</span>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}