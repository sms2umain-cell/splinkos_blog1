import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/base/SEOHead';

const ResponsibleGamingPage = () => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Responsible Gaming | SPLINKOS Australia Online Casino"
        description="SPLINKOS Australia responsible gaming information. Learn about our commitment to safe gambling, self-exclusion tools, and player protection at SPLINKOS."
        keywords="responsible gaming, safe gambling, SPLINKOS protection, self-exclusion"
        canonicalUrl="https://splinkos.online/responsible-gaming"
        ogTitle="Responsible Gaming | SPLINKOS Australia"
        ogDescription="SPLINKOS Australia responsible gaming and player protection information."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Responsible Gaming",
          "description": "SPLINKOS Australia responsible gaming and player protection information",
          "url": "https://splinkos.online/responsible-gaming"
        }}
      />
      <div className="min-h-screen bg-white">
        <header>
          <Navbar scrolled={scrolled} />
        </header>

        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Responsible <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Gaming</span>
            </h1>
            <p className="text-xl text-gray-600 text-center">
              SPLINKOS is committed to promoting safe and responsible gaming practices
            </p>
          </div>
        </section>

        <main>
          <article className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Responsible Gaming</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At <strong>SPLINKOS</strong>, we believe that gaming should be entertaining and enjoyable. While most of our players gamble responsibly, we recognize that some individuals may develop problematic gaming behaviors. <strong>SPLINKOS</strong> is committed to providing tools, resources, and support to help all players maintain control over their gaming activities.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Responsible Gaming Tools at SPLINKOS</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> offers comprehensive tools to help you manage your gaming:
                </p>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 mb-8 border border-cyan-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Deposit Limits</h3>
                  <p className="text-gray-700 mb-4">
                    Set daily, weekly, or monthly deposit limits on your <strong>SPLINKOS</strong> account. Once set, these limits cannot be increased immediately, giving you time to reconsider. Limits can be decreased at any time on <strong>SPLINKOS</strong>.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Session Time Limits</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>SPLINKOS</strong> can remind you when you've been playing for a specified duration. Set session time limits to help manage how long you spend gaming on the <strong>SPLINKOS</strong> platform.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Loss Limits</h3>
                  <p className="text-gray-700 mb-4">
                    Set maximum loss limits for specific time periods at <strong>SPLINKOS</strong>. Once you reach your loss limit, you won't be able to place additional bets until the time period resets.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Reality Checks</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>SPLINKOS</strong> displays regular notifications showing your session time and spending, helping you stay aware of your gaming activity.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Self-Exclusion</h3>
                  <p className="text-gray-700">
                    If you need a break from gaming, <strong>SPLINKOS</strong> offers self-exclusion options ranging from 24 hours to permanent exclusion. During self-exclusion, you cannot access your <strong>SPLINKOS</strong> account or receive promotional materials.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Warning Signs of Problem Gambling</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> encourages all players to be aware of potential warning signs of problem gambling:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Spending more time or money on <strong>SPLINKOS</strong> than you can afford</li>
                  <li>Chasing losses by continuing to play at <strong>SPLINKOS</strong> to win back money</li>
                  <li>Borrowing money or selling possessions to fund gaming at <strong>SPLINKOS</strong></li>
                  <li>Neglecting work, family, or personal responsibilities due to <strong>SPLINKOS</strong> gaming</li>
                  <li>Feeling anxious, depressed, or irritable when not playing at <strong>SPLINKOS</strong></li>
                  <li>Lying to friends or family about your <strong>SPLINKOS</strong> gaming activities</li>
                  <li>Using <strong>SPLINKOS</strong> gaming as an escape from problems or negative feelings</li>
                  <li>Repeatedly trying and failing to cut back on <strong>SPLINKOS</strong> gaming</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tips for Responsible Gaming at SPLINKOS</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Set a Budget:</strong> Decide how much you can afford to spend at <strong>SPLINKOS</strong> before you start playing</li>
                  <li><strong>Set Time Limits:</strong> Determine how long you'll play on <strong>SPLINKOS</strong> and stick to it</li>
                  <li><strong>Never Chase Losses:</strong> Accept losses as part of gaming at <strong>SPLINKOS</strong> and never try to win back lost money</li>
                  <li><strong>Take Regular Breaks:</strong> Step away from <strong>SPLINKOS</strong> regularly to maintain perspective</li>
                  <li><strong>Don't Gamble Under Influence:</strong> Avoid playing at <strong>SPLINKOS</strong> when drinking alcohol or using substances</li>
                  <li><strong>Balance Gaming with Other Activities:</strong> Don't let <strong>SPLINKOS</strong> gaming dominate your leisure time</li>
                  <li><strong>Use SPLINKOS Tools:</strong> Take advantage of deposit limits and self-exclusion options</li>
                  <li><strong>Seek Help Early:</strong> If you're concerned about your gaming, contact support or professional services</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Support Resources</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you or someone you know needs help with problem gambling, <strong>SPLINKOS</strong> recommends contacting these professional organizations:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gambling Help Online</h3>
                    <p className="text-gray-700 text-sm mb-3">24/7 support for Australian players</p>
                    <p className="text-cyan-600 font-semibold">1800 858 858</p>
                    <a href="https://www.gamblinghelponline.org.au" target="_blank" rel="noopener noreferrer" className="text-cyan-600 text-sm hover:text-cyan-700 cursor-pointer">
                      gamblinghelponline.org.au
                    </a>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lifeline Australia</h3>
                    <p className="text-gray-700 text-sm mb-3">Crisis support and suicide prevention</p>
                    <p className="text-cyan-600 font-semibold">13 11 14</p>
                    <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer" className="text-cyan-600 text-sm hover:text-cyan-700 cursor-pointer">
                      lifeline.org.au
                    </a>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gamblers Anonymous</h3>
                    <p className="text-gray-700 text-sm mb-3">Peer support groups across Australia</p>
                    <a href="https://www.gamblersanonymous.org.au" target="_blank" rel="noopener noreferrer" className="text-cyan-600 text-sm hover:text-cyan-700 cursor-pointer">
                      gamblersanonymous.org.au
                    </a>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">BeGambleAware</h3>
                    <p className="text-gray-700 text-sm mb-3">Information and support resources</p>
                    <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-cyan-600 text-sm hover:text-cyan-700 cursor-pointer">
                      begambleaware.org
                    </a>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Underage Gaming Prevention</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> strictly prohibits gaming by individuals under 18 years of age. We employ age verification procedures during registration and may request additional documentation at any time. Parents and guardians are encouraged to use parental control software to prevent minors from accessing <strong>SPLINKOS</strong> and other gaming sites.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Contact SPLINKOS Support</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have concerns about your gaming or need assistance setting up responsible gaming tools, the <strong>SPLINKOS</strong> support team is available 24/7 via live chat, email at support@splinkos.com, or phone. We're here to help you maintain a safe and enjoyable gaming experience at <strong>SPLINKOS</strong>.
                </p>

                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center mt-12">
                  <h3 className="text-2xl font-bold mb-4">Remember: Gaming Should Be Fun</h3>
                  <p className="text-lg">
                    <strong>SPLINKOS</strong> is committed to ensuring that gaming remains an enjoyable form of entertainment. If it stops being fun, it's time to take a break.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResponsibleGamingPage;
