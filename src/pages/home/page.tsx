import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GamesSection from './components/GamesSection';
import PromotionSection from './components/PromotionSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <title>SPLINKOS Australia Online Casino | FREE $20 Bonus | 6500+ Pokies Slots Live Casino</title>
      <meta name="description" content="SPLINKOS Australia's #1 online casino! Get FREE $20 bonus + 6500+ pokies, slots, live casino games. SPLINKOS offers instant withdrawals, 24/7 support. Join SPLINKOS now!" />
      <meta name="keywords" content="SPLINKOS, SPLINKOS Australia, SPLINKOS casino, Australian online casino, pokies Australia, online slots Australia, live casino Australia, SPLINKOS games, SPLINKOS bonus, casino bonus Australia" />
      <link rel="canonical" href="https://splinkos.com.au/" />
      
      {/* Open Graph */}
      <meta property="og:title" content="SPLINKOS Australia Online Casino | FREE $20 Bonus" />
      <meta property="og:description" content="SPLINKOS Australia's #1 online casino! Get FREE $20 bonus + 6500+ pokies, slots, live casino games." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://splinkos.com.au/" />
      <meta property="og:site_name" content="SPLINKOS" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SPLINKOS Australia Online Casino" />
      <meta name="twitter:description" content="SPLINKOS Australia's #1 online casino! Get FREE $20 bonus + 6500+ pokies, slots, live casino games." />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        <header>
          <Navbar scrolled={scrolled} />
        </header>
        <main>
          <h1 className="sr-only">SPLINKOS Australia Online Casino - Premium Pokies, Slots & Live Casino Games</h1>
          <HeroSection />
          <FeaturesSection />
          <GamesSection />
          <PromotionSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}