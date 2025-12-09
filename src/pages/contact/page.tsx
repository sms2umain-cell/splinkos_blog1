import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/base/SEOHead';

const ContactPage = () => {
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
        title="Contact SPLINKOS Australia | 24/7 Support | Live Chat Email Phone"
        description="Contact SPLINKOS Australia 24/7 customer support. Live chat, email, phone support for SPLINKOS casino. Get help with account, games, bonuses, withdrawals. SPLINKOS support team ready to assist Australian players."
        keywords="Contact SPLINKOS, SPLINKOS support, SPLINKOS customer service, casino support Australia, SPLINKOS help"
        canonicalUrl="https://splinkos.com.au/contact"
        ogTitle="Contact SPLINKOS Australia | 24/7 Customer Support"
        ogDescription="Contact SPLINKOS Australia 24/7 customer support. Live chat, email, phone support available."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact SPLINKOS",
          "description": "Contact SPLINKOS customer support team available 24/7",
          "url": "https://splinkos.com.au/contact"
        }}
      />
      <div className="min-h-screen bg-white">
        <header>
          <Navbar scrolled={scrolled} />
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">SPLINKOS</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're here to help 24/7. Get in touch with the SPLINKOS support team
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <main>
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Live Chat */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center border border-cyan-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-message-3-line text-3xl text-white"></i>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Instant support from SPLINKOS team
                  </p>
                  <p className="text-cyan-600 font-semibold">Available 24/7</p>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center border border-cyan-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-mail-line text-3xl text-white"></i>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Email Support</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Send us your questions
                  </p>
                  <a href="mailto:splinkos.official@gmail.com" className="text-cyan-600 font-semibold hover:text-cyan-700 cursor-pointer">
                    splinkos.official@gmail.com
                  </a>
                </div>

                {/* Telegram CS */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center border border-cyan-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-telegram-fill text-3xl text-white"></i>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Telegram Support</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Chat with SPLINKOS team
                  </p>
                  <a 
                    href="https://t.me/SPLINKOSAUCS001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-600 font-semibold hover:text-cyan-700 cursor-pointer inline-flex items-center gap-1"
                  >
                    @SPLINKOSAUCS001
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-gray-900 mb-8 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <article className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">How do I claim my FREE $20 SPLINKOS bonus?</h3>
                    <p className="text-gray-700">
                      Simply create your SPLINKOS account and verify your identity. The FREE $20 bonus will be automatically credited to your account - no deposit required! You can start playing immediately at SPLINKOS.
                    </p>
                  </article>

                  <article className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">How long do SPLINKOS withdrawals take?</h3>
                    <p className="text-gray-700">
                      SPLINKOS processes most withdrawals within 24-48 hours. E-wallets are typically the fastest method, while bank transfers may take 3-5 business days. SPLINKOS VIP members enjoy priority withdrawal processing.
                    </p>
                  </article>

                  <article className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Is SPLINKOS licensed and safe?</h3>
                    <p className="text-gray-700">
                      Yes! SPLINKOS is fully licensed and regulated. We use 256-bit SSL encryption to protect all player data and transactions. All games at SPLINKOS use certified random number generators to ensure fair play.
                    </p>
                  </article>

                  <article className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Can I play SPLINKOS games on mobile?</h3>
                    <p className="text-gray-700">
                      Absolutely! SPLINKOS is fully optimized for mobile devices. You can access the entire game library, manage your account, and claim bonuses on any smartphone or tablet. No download required - just visit SPLINKOS from your mobile browser.
                    </p>
                  </article>

                  <article className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">What payment methods does SPLINKOS accept?</h3>
                    <p className="text-gray-700">
                      SPLINKOS supports credit/debit cards, bank transfers, e-wallets (PayPal, Skrill, Neteller), and cryptocurrency (Bitcoin, Ethereum). All payment methods at SPLINKOS are secure and processed quickly.
                    </p>
                  </article>

                  <article className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">How do I set deposit limits at SPLINKOS?</h3>
                    <p className="text-gray-700">
                      Log into your SPLINKOS account, go to Settings &gt; Responsible Gaming, and you can set daily, weekly, or monthly deposit limits. SPLINKOS is committed to promoting responsible gaming and provides comprehensive tools to help you stay in control.
                    </p>
                  </article>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect with SPLINKOS</h3>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.facebook.com/splinkos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
                  >
                    <i className="ri-facebook-fill text-2xl text-white"></i>
                  </a>
                  <a 
                    href="https://t.me/splinkos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
                  >
                    <i className="ri-telegram-fill text-2xl text-white"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/splinkos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
                  >
                    <i className="ri-instagram-fill text-2xl text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
