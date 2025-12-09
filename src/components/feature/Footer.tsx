const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://splinkos.com/media/ee2f31ce50a86881013b0.gif" 
              alt="SPLINKOS Logo" 
              className="h-12 mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              World-Class Online Casino Platform Australia. Experience premium gaming with 6,500+ games and fast cashouts.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/splinkos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a 
                href="https://t.me/splinkos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer"
                aria-label="Telegram"
              >
                <i className="ri-telegram-fill text-lg"></i>
              </a>
              <a 
                href="https://www.instagram.com/splinkos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="/games" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Games Guide
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://t.ly/splinkosBlog" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Play Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/responsible-gaming" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Responsible Gaming
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 SPLINKOS. All rights reserved. Licensed and regulated online casino platform.
            </p>
            <p className="text-gray-400 text-xs">
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Powered by Readdy
              </a>
            </p>
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">
            18+ Only. Gamble responsibly. BeGambleAware.org
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
