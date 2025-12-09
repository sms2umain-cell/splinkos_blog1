import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/base/SEOHead';

const PrivacyPage = () => {
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
        title="SPLINKOS Privacy Policy Australia | Data Protection & Security"
        description="SPLINKOS Australia privacy policy. Learn how SPLINKOS protects your personal information, data security, encryption, privacy rights. SPLINKOS commitment to player data protection and privacy compliance."
        keywords="SPLINKOS privacy, SPLINKOS data protection, casino privacy Australia, SPLINKOS security, player privacy"
        canonicalUrl="https://splinkos.com.au/privacy"
        ogTitle="SPLINKOS Privacy Policy Australia | Data Protection"
        ogDescription="SPLINKOS Australia privacy policy. Learn how SPLINKOS protects your personal information and data."
      />
      <div className="min-h-screen bg-white">
        <header>
          <Navbar scrolled={scrolled} />
        </header>

        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 text-center">
              How SPLINKOS Protects Your Personal Information - Last Updated: January 2025
            </p>
          </div>
        </section>

        <main>
          <article className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At <strong>SPLINKOS</strong>, we take your privacy seriously. This Privacy Policy explains how <strong>SPLINKOS</strong> collects, uses, stores, and protects your personal information. By using the <strong>SPLINKOS</strong> platform, you consent to the data practices described in this policy.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> collects various types of information to provide and improve our services:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, date of birth, phone number, and address provided during <strong>SPLINKOS</strong> account registration</li>
                  <li><strong>Financial Information:</strong> Payment method details, transaction history, and withdrawal information processed through <strong>SPLINKOS</strong></li>
                  <li><strong>Identity Verification:</strong> Government-issued ID and proof of address documents submitted to <strong>SPLINKOS</strong> for account verification</li>
                  <li><strong>Gaming Activity:</strong> Game play history, betting patterns, and preferences on the <strong>SPLINKOS</strong> platform</li>
                  <li><strong>Technical Data:</strong> IP address, device information, browser type, and cookies when accessing <strong>SPLINKOS</strong></li>
                  <li><strong>Communications:</strong> Records of your interactions with <strong>SPLINKOS</strong> customer support</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> uses your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>To create and manage your <strong>SPLINKOS</strong> account</li>
                  <li>To process deposits, withdrawals, and gaming transactions at <strong>SPLINKOS</strong></li>
                  <li>To verify your identity and comply with legal requirements at <strong>SPLINKOS</strong></li>
                  <li>To provide customer support and respond to your inquiries about <strong>SPLINKOS</strong></li>
                  <li>To send promotional offers, bonuses, and updates about <strong>SPLINKOS</strong> (with your consent)</li>
                  <li>To detect and prevent fraud, money laundering, and other illegal activities on <strong>SPLINKOS</strong></li>
                  <li>To improve the <strong>SPLINKOS</strong> platform and enhance user experience</li>
                  <li>To comply with legal obligations and regulatory requirements applicable to <strong>SPLINKOS</strong></li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> implements industry-standard security measures to protect your personal information. We use 256-bit SSL encryption to secure all data transmissions on the <strong>SPLINKOS</strong> platform. Our servers are protected by advanced firewalls and security protocols. However, no method of transmission over the internet is 100% secure, and <strong>SPLINKOS</strong> cannot guarantee absolute security.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> does not sell your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Payment Processors:</strong> To process transactions on the <strong>SPLINKOS</strong> platform</li>
                  <li><strong>Game Providers:</strong> To deliver gaming content on <strong>SPLINKOS</strong></li>
                  <li><strong>Regulatory Authorities:</strong> When required by law or to comply with licensing requirements for <strong>SPLINKOS</strong></li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist <strong>SPLINKOS</strong> in operating our platform</li>
                  <li><strong>Legal Compliance:</strong> When necessary to protect the rights, property, or safety of <strong>SPLINKOS</strong>, our users, or others</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> uses cookies and similar tracking technologies to enhance your experience on our platform. Cookies help <strong>SPLINKOS</strong> remember your preferences, analyze site traffic, and personalize content. You can control cookie settings through your browser, but disabling cookies may affect your ability to use certain features of <strong>SPLINKOS</strong>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> retains your personal information for as long as necessary to provide our services and comply with legal obligations. After account closure, <strong>SPLINKOS</strong> may retain certain information for regulatory compliance, fraud prevention, and dispute resolution purposes for up to 7 years.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a <strong>SPLINKOS</strong> user, you have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information <strong>SPLINKOS</strong> holds about you</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information in your <strong>SPLINKOS</strong> account</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information from <strong>SPLINKOS</strong> (subject to legal requirements)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications from <strong>SPLINKOS</strong></li>
                  <li><strong>Data Portability:</strong> Request your data in a portable format from <strong>SPLINKOS</strong></li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If <strong>SPLINKOS</strong> becomes aware that a minor has provided personal information, we will take steps to delete such information immediately.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your information may be transferred to and processed in countries outside your country of residence. <strong>SPLINKOS</strong> ensures that such transfers comply with applicable data protection laws and that your information receives adequate protection regardless of where it is processed.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Changes to Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>SPLINKOS</strong> may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our platform and updating the "Last Updated" date. Continued use of <strong>SPLINKOS</strong> after changes are posted constitutes acceptance of the updated policy.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have questions about this Privacy Policy or how <strong>SPLINKOS</strong> handles your personal information, please contact us at privacy@splinkos.com or through our 24/7 live chat. The <strong>SPLINKOS</strong> team is committed to addressing your privacy concerns promptly.
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

export default PrivacyPage;
