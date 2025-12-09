import { useState, useEffect } from 'react';
import SEOHead from '../../components/base/SEOHead';
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
      <SEOHead
        title="SPLINKOS Australia Online Casino | FREE $20 Bonus | 6500+ Pokies Slots Live Casino"
        description="SPLINKOS Australia's #1 online casino! Get FREE $20 bonus + 6500+ pokies, slots, live casino games. SPLINKOS offers instant withdrawals, 24/7 support. Join SPLINKOS now!"
        keywords="SPLINKOS, SPLINKOS Australia, SPLINKOS casino, Australian online casino, pokies Australia, online slots Australia, live casino Australia, SPLINKOS games, SPLINKOS bonus, casino bonus Australia"
        canonicalUrl="https://splinkos.online/"
        ogTitle="SPLINKOS Australia Online Casino | FREE $20 Bonus"
        ogDescription="SPLINKOS Australia's #1 online casino! Get FREE $20 bonus + 6500+ pokies, slots, live casino games."
        ogImage="https://splinkos.com/media/ee2f31ce50a86881013b0.gif"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SPLINKOS Australia",
          "url": "https://splinkos.online/",
          "description": "SPLINKOS Australia's premier online casino platform with 6500+ games, FREE $20 bonus, instant withdrawals, and 24/7 support",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://splinkos.online/games?search={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SPLINKOS",
            "logo": {
              "@type": "ImageObject",
              "url": "https://splinkos.com/media/ee2f31ce50a86881013b0.gif"
            }
          }
        }}
        geoPosition="-33.8688,151.2093"
        geoRegion="AU-NSW"
        geoPlacename="Sydney, New South Wales, Australia"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        <header>
          <Navbar scrolled={scrolled} />
        </header>
        <main>
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