import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/base/SEOHead';

const TermsPage = () => {
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
        title="SPLINKOS Terms and Conditions Australia | Casino Terms of Service"
        description="SPLINKOS Australia terms and conditions. Read SPLINKOS casino terms of service, account rules, bonus terms, withdrawal policies, responsible gaming policies. Updated January 2025."
        keywords="SPLINKOS terms, SPLINKOS conditions, casino terms Australia, SPLINKOS rules, SPLINKOS policies"
        canonicalUrl="https://splinkos.com.au/terms"
        ogTitle="SPLINKOS Terms and Conditions Australia"
        ogDescription="SPLINKOS Australia terms and conditions. Read casino terms of service and policies."
      />
      <div className="min-h-screen bg-white">
        <header>
          <Navbar scrolled={scrolled} />
        </header>

        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 text-center">
              SPLINKOS Terms of Service - Last Updated: January 2025
            </p>
          </div>
        </section>

        <main>
          <article className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  By accessing and using the <strong>SPLINKOS</strong> platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use <strong>SPLINKOS</strong> services. These terms apply to all users of the <strong>SPLINKOS</strong> platform, including browsers, registered players, and VIP members.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To use <strong>SPLINKOS</strong>, you must be at least 18 years of age and legally permitted to participate in online gaming in your jurisdiction. By registering with <strong>SPLINKOS</strong>, you confirm that you meet these requirements. <strong>SPLINKOS</strong> reserves the right to verify your age and identity at any time.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Account Registration</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When creating a <strong>SPLINKOS</strong> account, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your <strong>SPLINKOS</strong> account credentials and for all activities that occur under your account. Each person may only register one account with <strong>SPLINKOS</strong>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Deposits and Withdrawals</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> accepts various payment methods for deposits and withdrawals. All transactions are processed securely using encryption technology. Withdrawal requests at <strong>SPLINKOS</strong> may require identity verification and are subject to processing times depending on the payment method selected. <strong>SPLINKOS</strong> reserves the right to request additional documentation before processing withdrawals.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Bonuses and Promotions</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> offers various bonuses and promotions, including the FREE $20 welcome bonus. All bonuses are subject to specific terms and conditions, including wagering requirements. <strong>SPLINKOS</strong> reserves the right to modify, suspend, or cancel any promotion at any time. Bonus abuse or fraudulent activity will result in forfeiture of bonuses and potential account closure at <strong>SPLINKOS</strong>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Responsible Gaming</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> is committed to promoting responsible gaming. We provide tools including deposit limits, session time limits, and self-exclusion options. Players are encouraged to use these <strong>SPLINKOS</strong> tools to maintain control over their gaming activities. If you believe you have a gambling problem, please contact support or seek professional help.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Fair Play and Game Integrity</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All games at <strong>SPLINKOS</strong> use certified random number generators (RNGs) to ensure fair and unpredictable outcomes. <strong>SPLINKOS</strong> prohibits any form of cheating, collusion, or use of automated systems. Violation of fair play policies will result in account suspension and forfeiture of funds at <strong>SPLINKOS</strong>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All content on the <strong>SPLINKOS</strong> platform, including logos, graphics, software, and text, is the property of <strong>SPLINKOS</strong> or its licensors and is protected by copyright and trademark laws. Users may not reproduce, distribute, or create derivative works from <strong>SPLINKOS</strong> content without express written permission.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> is not liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. <strong>SPLINKOS</strong> makes no warranties regarding the uninterrupted or error-free operation of the platform. Your use of <strong>SPLINKOS</strong> is at your own risk.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. Account Closure and Suspension</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> reserves the right to suspend or close accounts that violate these terms, engage in fraudulent activity, or for any other reason at our discretion. Upon account closure, any remaining balance will be returned to you, subject to verification and deduction of any applicable fees or bonuses at <strong>SPLINKOS</strong>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> may update these Terms and Conditions at any time. Continued use of the <strong>SPLINKOS</strong> platform after changes are posted constitutes acceptance of the modified terms. We encourage users to review these terms regularly to stay informed about their rights and obligations at <strong>SPLINKOS</strong>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have questions about these Terms and Conditions, please contact <strong>SPLINKOS</strong> support at support@splinkos.com or through our 24/7 live chat. The <strong>SPLINKOS</strong> team is always available to assist with any concerns or clarifications you may need.
                </p>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
