import { useState, useEffect } from 'react';
import SEOHead from '../../components/base/SEOHead';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import FeaturedPost from './components/FeaturedPost';
import TopArticles from './components/TopArticles';
import Pagination from './components/Pagination';

const BlogPage = () => {
  const [scrolled, setScrolled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  const categories = ['All', 'Casino Reviews', 'Game Guides', 'Strategies', 'News', 'Bonuses'];

  const featuredPost = {
    id: 1,
    title: 'SPLINKOS Ultimate Guide: Master Online Casino Gaming in Australia 2025',
    excerpt: 'Discover everything you need to know about playing at SPLINKOS, Australia\'s premier online casino platform. From choosing the best games to maximizing your FREE $20 welcome bonus, this comprehensive guide covers it all.',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20online%20casino%20gaming%20setup%20with%20laptop%20displaying%20colorful%20slot%20games%20elegant%20desk%20with%20poker%20chips%20and%20cards%20professional%20studio%20lighting%20high%20quality%20photography%20clean%20minimalist%20background&width=1200&height=600&seq=featured1&orientation=landscape',
    category: 'Casino Reviews',
    author: 'Sarah Mitchell',
    authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20casino%20expert%20headshot%20portrait%20friendly%20smile%20business%20casual%20attire%20neutral%20background&width=100&height=100&seq=author1&orientation=squarish',
    date: 'March 15, 2025',
    readTime: '12 min read',
    views: '15.2K',
    tags: ['SPLINKOS', 'Casino Guide', 'Australia', 'Pokies']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Top 10 Pokies Games at SPLINKOS You Must Try in 2025',
      excerpt: 'Explore the most exciting and rewarding pokies games available at SPLINKOS this year. From classic fruit machines to modern video slots with massive jackpots, discover which games offer the best RTP and entertainment value.',
      image: 'https://readdy.ai/api/search-image?query=colorful%20vibrant%20slot%20machine%20pokies%20game%20screen%20with%20spinning%20reels%20bright%20casino%20atmosphere%20professional%20photography%20clean%20simple%20background&width=800&height=500&seq=blog1&orientation=landscape',
      category: 'Game Guides',
      author: 'James Cooper',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20gaming%20expert%20headshot%20portrait%20confident%20smile%20casual%20attire%20neutral%20background&width=100&height=100&seq=author2&orientation=squarish',
      date: 'March 12, 2025',
      readTime: '8 min read',
      views: '8.5K',
      tags: ['Pokies', 'SPLINKOS', 'Slots', 'RTP']
    },
    {
      id: 3,
      title: 'How to Maximize Your SPLINKOS Casino Bonuses: Expert Tips',
      excerpt: 'Learn the insider secrets to getting the most value from your SPLINKOS casino bonuses and promotions. Understand wagering requirements, game contributions, and strategies to turn your FREE $20 bonus into real winnings.',
      image: 'https://readdy.ai/api/search-image?query=casino%20bonus%20chips%20and%20money%20stacks%20on%20elegant%20table%20golden%20lighting%20luxury%20atmosphere%20simple%20clean%20background&width=800&height=500&seq=blog2&orientation=landscape',
      category: 'Bonuses',
      author: 'Emma Thompson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20finance%20expert%20headshot%20portrait%20warm%20smile%20business%20professional%20attire%20neutral%20background&width=100&height=100&seq=author3&orientation=squarish',
      date: 'March 10, 2025',
      readTime: '10 min read',
      views: '12.3K',
      tags: ['Bonuses', 'SPLINKOS', 'Free Spins', 'Promotions']
    },
    {
      id: 4,
      title: 'SPLINKOS Live Casino vs Traditional Online Games: Complete Comparison',
      excerpt: 'Dive deep into the differences between SPLINKOS live dealer games and traditional online casino games. Discover which format suits your playing style, budget, and entertainment preferences for the ultimate gaming experience.',
      image: 'https://readdy.ai/api/search-image?query=professional%20live%20casino%20dealer%20at%20blackjack%20table%20elegant%20casino%20interior%20high%20quality%20photography%20simple%20background&width=800&height=500&seq=blog3&orientation=landscape',
      category: 'Casino Reviews',
      author: 'Michael Chen',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20asian%20male%20casino%20analyst%20headshot%20portrait%20friendly%20expression%20neutral%20background&width=100&height=100&seq=author4&orientation=squarish',
      date: 'March 8, 2025',
      readTime: '7 min read',
      views: '9.8K',
      tags: ['Live Casino', 'SPLINKOS', 'Comparison', 'Gaming']
    },
    {
      id: 5,
      title: 'Blackjack Strategy Guide: Win More at SPLINKOS Tables',
      excerpt: 'Master the art of blackjack with our comprehensive strategy guide designed specifically for SPLINKOS players. Learn basic strategy, card counting basics, bankroll management, and advanced techniques to improve your odds.',
      image: 'https://readdy.ai/api/search-image?query=blackjack%20cards%20and%20colorful%20chips%20on%20green%20felt%20table%20professional%20casino%20photography%20simple%20clean%20background&width=800&height=500&seq=blog4&orientation=landscape',
      category: 'Strategies',
      author: 'David Rodriguez',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20card%20game%20expert%20headshot%20portrait%20confident%20look%20neutral%20background&width=100&height=100&seq=author5&orientation=squarish',
      date: 'March 5, 2025',
      readTime: '15 min read',
      views: '18.7K',
      tags: ['Blackjack', 'Strategy', 'SPLINKOS', 'Card Games']
    },
    {
      id: 6,
      title: 'New Game Releases at SPLINKOS This Month: What to Play',
      excerpt: 'Check out the latest and most exciting game releases hitting SPLINKOS this March. From innovative pokies with unique features to new live casino tables, discover what\'s trending and where the biggest wins are happening.',
      image: 'https://readdy.ai/api/search-image?query=new%20modern%20casino%20game%20interface%20colorful%20graphics%20exciting%20gameplay%20screen%20simple%20clean%20background&width=800&height=500&seq=blog5&orientation=landscape',
      category: 'News',
      author: 'Lisa Anderson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20gaming%20journalist%20headshot%20portrait%20enthusiastic%20smile%20neutral%20background&width=100&height=100&seq=author6&orientation=squarish',
      date: 'March 3, 2025',
      readTime: '6 min read',
      views: '7.2K',
      tags: ['New Games', 'SPLINKOS', 'Releases', 'Trending']
    },
    {
      id: 7,
      title: 'Sports Betting at SPLINKOS: A Beginner\'s Complete Guide',
      excerpt: 'Everything you need to know to start betting on sports at SPLINKOS with confidence and strategy. Learn about odds, bet types, bankroll management, and how to analyze games for better betting decisions.',
      image: 'https://readdy.ai/api/search-image?query=sports%20betting%20odds%20screen%20with%20football%20and%20basketball%20modern%20interface%20simple%20clean%20background&width=800&height=500&seq=blog6&orientation=landscape',
      category: 'Game Guides',
      author: 'Tom Wilson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20sports%20analyst%20headshot%20portrait%20friendly%20demeanor%20neutral%20background&width=100&height=100&seq=author7&orientation=squarish',
      date: 'March 1, 2025',
      readTime: '11 min read',
      views: '14.5K',
      tags: ['Sports Betting', 'SPLINKOS', 'Odds', 'Betting Guide']
    },
    {
      id: 8,
      title: 'Understanding RTP at SPLINKOS: Choose High-Paying Games',
      excerpt: 'Learn what RTP (Return to Player) means and how to use it to select SPLINKOS games with better winning potential. Discover which pokies and table games offer the highest RTP percentages and why it matters.',
      image: 'https://readdy.ai/api/search-image?query=casino%20game%20statistics%20and%20percentages%20display%20professional%20data%20visualization%20simple%20clean%20background&width=800&height=500&seq=blog7&orientation=landscape',
      category: 'Strategies',
      author: 'Rachel Green',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20data%20analyst%20headshot%20portrait%20intelligent%20look%20neutral%20background&width=100&height=100&seq=author8&orientation=squarish',
      date: 'February 28, 2025',
      readTime: '9 min read',
      views: '11.4K',
      tags: ['RTP', 'SPLINKOS', 'Game Selection', 'Winning']
    },
    {
      id: 9,
      title: 'Mobile Casino Gaming at SPLINKOS: Tips for Playing on the Go',
      excerpt: 'Optimize your mobile SPLINKOS casino experience with these essential tips and recommendations. Learn about the best games for mobile, data usage, battery optimization, and exclusive mobile bonuses.',
      image: 'https://readdy.ai/api/search-image?query=person%20playing%20casino%20games%20on%20smartphone%20modern%20mobile%20gaming%20lifestyle%20simple%20clean%20background&width=800&height=500&seq=blog8&orientation=landscape',
      category: 'Game Guides',
      author: 'Alex Turner',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20mobile%20tech%20expert%20headshot%20portrait%20modern%20style%20neutral%20background&width=100&height=100&seq=author9&orientation=squarish',
      date: 'February 25, 2025',
      readTime: '7 min read',
      views: '10.1K',
      tags: ['Mobile Gaming', 'SPLINKOS', 'On-the-Go', 'Apps']
    },
    {
      id: 10,
      title: 'SPLINKOS Fishing Games: The Ultimate Guide to Underwater Wins',
      excerpt: 'Discover the exciting world of fishing games at SPLINKOS. Learn strategies, understand game mechanics, and find out which fishing games offer the best payouts and most engaging gameplay for Australian players.',
      image: 'https://readdy.ai/api/search-image?query=colorful%20fishing%20game%20interface%20with%20underwater%20scene%20tropical%20fish%20and%20treasure%20simple%20clean%20background&width=800&height=500&seq=blog9&orientation=landscape',
      category: 'Game Guides',
      author: 'Kevin Zhang',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20gaming%20specialist%20headshot%20portrait%20friendly%20smile%20neutral%20background&width=100&height=100&seq=author10&orientation=squarish',
      date: 'February 22, 2025',
      readTime: '9 min read',
      views: '13.6K',
      tags: ['Fishing Games', 'SPLINKOS', 'Arcade', 'Strategy']
    },
    {
      id: 11,
      title: 'Responsible Gaming at SPLINKOS: Play Safe, Play Smart',
      excerpt: 'Learn about SPLINKOS commitment to responsible gaming and discover tools to help you maintain control. Set limits, recognize warning signs, and access support resources to ensure your gaming stays fun and safe.',
      image: 'https://readdy.ai/api/search-image?query=responsible%20gaming%20concept%20with%20balance%20scales%20and%20protective%20shield%20professional%20photography%20simple%20clean%20background&width=800&height=500&seq=blog10&orientation=landscape',
      category: 'News',
      author: 'Dr. Patricia Moore',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20psychologist%20headshot%20portrait%20caring%20expression%20neutral%20background&width=100&height=100&seq=author11&orientation=squarish',
      date: 'February 20, 2025',
      readTime: '8 min read',
      views: '6.8K',
      tags: ['Responsible Gaming', 'SPLINKOS', 'Safety', 'Support']
    },
    {
      id: 12,
      title: 'SPLINKOS VIP Program: Unlock Exclusive Rewards and Benefits',
      excerpt: 'Explore the SPLINKOS VIP loyalty program and discover how to climb the ranks for exclusive bonuses, faster withdrawals, personal account managers, and special event invitations. Learn what it takes to become a VIP player.',
      image: 'https://readdy.ai/api/search-image?query=luxury%20VIP%20gold%20card%20with%20crown%20symbol%20elegant%20premium%20design%20simple%20clean%20background&width=800&height=500&seq=blog11&orientation=landscape',
      category: 'Bonuses',
      author: 'Marcus Williams',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20luxury%20service%20expert%20headshot%20portrait%20sophisticated%20look%20neutral%20background&width=100&height=100&seq=author12&orientation=squarish',
      date: 'February 18, 2025',
      readTime: '10 min read',
      views: '9.4K',
      tags: ['VIP Program', 'SPLINKOS', 'Loyalty', 'Rewards']
    },
    {
      id: 13,
      title: 'SPLINKOS Payment Methods Guide: Fast Deposits and Withdrawals in Australia',
      excerpt: 'Complete guide to SPLINKOS payment options for Australian players. Learn about bank transfers, e-wallets, cryptocurrency, and credit cards. Discover the fastest withdrawal methods and how to avoid fees at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=digital%20payment%20methods%20credit%20cards%20e-wallet%20cryptocurrency%20modern%20financial%20technology%20simple%20clean%20background&width=800&height=500&seq=blog12&orientation=landscape',
      category: 'Casino Reviews',
      author: 'Jennifer Lee',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20financial%20advisor%20headshot%20portrait%20confident%20smile%20neutral%20background&width=100&height=100&seq=author13&orientation=squarish',
      date: 'February 15, 2025',
      readTime: '9 min read',
      views: '10.9K',
      tags: ['Payments', 'SPLINKOS', 'Banking', 'Withdrawals']
    },
    {
      id: 14,
      title: 'SPLINKOS Roulette Strategies: European vs American Roulette',
      excerpt: 'Master roulette at SPLINKOS with our comprehensive strategy guide. Compare European and American roulette, learn betting systems like Martingale and Fibonacci, and discover which SPLINKOS roulette tables offer the best odds.',
      image: 'https://readdy.ai/api/search-image?query=elegant%20roulette%20wheel%20spinning%20with%20ball%20luxury%20casino%20table%20professional%20photography%20simple%20clean%20background&width=800&height=500&seq=blog13&orientation=landscape',
      category: 'Strategies',
      author: 'Robert Martinez',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20casino%20strategist%20headshot%20portrait%20analytical%20expression%20neutral%20background&width=100&height=100&seq=author14&orientation=squarish',
      date: 'February 12, 2025',
      readTime: '11 min read',
      views: '13.2K',
      tags: ['Roulette', 'SPLINKOS', 'Strategy', 'Table Games']
    },
    {
      id: 15,
      title: 'SPLINKOS Progressive Jackpots: How to Win Life-Changing Prizes',
      excerpt: 'Everything you need to know about chasing progressive jackpots at SPLINKOS. Learn which games have the biggest jackpots, when they\'re most likely to hit, and strategies to maximize your chances of winning millions at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=massive%20jackpot%20win%20celebration%20with%20gold%20coins%20and%20money%20falling%20luxury%20casino%20atmosphere%20simple%20clean%20background&width=800&height=500&seq=blog14&orientation=landscape',
      category: 'Game Guides',
      author: 'Amanda Foster',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20gaming%20analyst%20headshot%20portrait%20excited%20expression%20neutral%20background&width=100&height=100&seq=author15&orientation=squarish',
      date: 'February 10, 2025',
      readTime: '10 min read',
      views: '16.8K',
      tags: ['Jackpots', 'SPLINKOS', 'Progressive', 'Big Wins']
    },
    {
      id: 16,
      title: 'Slot Volatility Explained: Choose the Right SPLINKOS Games',
      excerpt: 'Understanding slot volatility is crucial for success at SPLINKOS. Learn the difference between high, medium, and low volatility pokies, and discover which volatility level matches your bankroll and playing style at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=slot%20machine%20volatility%20graph%20chart%20with%20colorful%20bars%20professional%20data%20visualization%20simple%20clean%20background&width=800&height=500&seq=blog15&orientation=landscape',
      category: 'Strategies',
      author: 'Daniel Park',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20data%20scientist%20headshot%20portrait%20analytical%20look%20neutral%20background&width=100&height=100&seq=author16&orientation=squarish',
      date: 'February 8, 2025',
      readTime: '8 min read',
      views: '10.7K',
      tags: ['Volatility', 'SPLINKOS', 'Slots', 'Strategy']
    },
    {
      id: 17,
      title: 'SPLINKOS Baccarat Guide: Simple Rules, Big Wins',
      excerpt: 'Baccarat at SPLINKOS is easier than you think. This comprehensive guide breaks down the rules, betting options, and strategies for both traditional and live baccarat games at SPLINKOS. Perfect for beginners and experienced players.',
      image: 'https://readdy.ai/api/search-image?query=elegant%20baccarat%20table%20with%20cards%20and%20chips%20luxury%20casino%20setting%20professional%20photography%20simple%20clean%20background&width=800&height=500&seq=blog16&orientation=landscape',
      category: 'Game Guides',
      author: 'Sophia Chen',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20casino%20instructor%20headshot%20portrait%20elegant%20appearance%20neutral%20background&width=100&height=100&seq=author17&orientation=squarish',
      date: 'February 6, 2025',
      readTime: '9 min read',
      views: '8.9K',
      tags: ['Baccarat', 'SPLINKOS', 'Table Games', 'Guide']
    },
    {
      id: 18,
      title: 'Megaways Slots at SPLINKOS: Everything You Need to Know',
      excerpt: 'Megaways slots have revolutionized online gaming at SPLINKOS. Discover how this innovative mechanic works, which Megaways games offer the best features at SPLINKOS, and strategies to maximize your winning potential.',
      image: 'https://readdy.ai/api/search-image?query=megaways%20slot%20game%20screen%20with%20multiple%20reels%20dynamic%20gameplay%20colorful%20graphics%20simple%20clean%20background&width=800&height=500&seq=blog17&orientation=landscape',
      category: 'Game Guides',
      author: 'Ryan Mitchell',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20slot%20expert%20headshot%20portrait%20enthusiastic%20expression%20neutral%20background&width=100&height=100&seq=author18&orientation=squarish',
      date: 'February 4, 2025',
      readTime: '10 min read',
      views: '14.3K',
      tags: ['Megaways', 'SPLINKOS', 'Slots', 'Innovation']
    },
    {
      id: 19,
      title: 'Live Poker at SPLINKOS: Texas Hold\'em Strategy and Tips',
      excerpt: 'Master live poker at SPLINKOS with expert strategies for Texas Hold\'em. Learn position play, hand selection, bluffing techniques, and bankroll management specifically designed for SPLINKOS live poker tables.',
      image: 'https://readdy.ai/api/search-image?query=poker%20table%20with%20cards%20and%20chips%20professional%20casino%20setting%20live%20dealer%20atmosphere%20simple%20clean%20background&width=800&height=500&seq=blog18&orientation=landscape',
      category: 'Strategies',
      author: 'Chris Anderson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20poker%20player%20headshot%20portrait%20serious%20expression%20neutral%20background&width=100&height=100&seq=author19&orientation=squarish',
      date: 'February 2, 2025',
      readTime: '13 min read',
      views: '15.6K',
      tags: ['Poker', 'SPLINKOS', 'Live Casino', 'Strategy']
    },
    {
      id: 20,
      title: 'SPLINKOS Crash Games: High-Risk, High-Reward Gaming',
      excerpt: 'Crash games at SPLINKOS offer adrenaline-pumping action and massive multipliers. Learn how crash games work, discover the best crash games at SPLINKOS, and develop strategies to cash out at the perfect moment.',
      image: 'https://readdy.ai/api/search-image?query=crash%20game%20interface%20with%20rising%20multiplier%20graph%20exciting%20gaming%20screen%20simple%20clean%20background&width=800&height=500&seq=blog19&orientation=landscape',
      category: 'Game Guides',
      author: 'Tyler Brooks',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20gaming%20enthusiast%20headshot%20portrait%20excited%20look%20neutral%20background&width=100&height=100&seq=author20&orientation=squarish',
      date: 'January 30, 2025',
      readTime: '7 min read',
      views: '11.8K',
      tags: ['Crash Games', 'SPLINKOS', 'High Risk', 'Multipliers']
    },
    {
      id: 21,
      title: 'Australian Football Betting at SPLINKOS: AFL Tips and Strategies',
      excerpt: 'AFL betting at SPLINKOS is huge among Australian players. Get expert tips on analyzing AFL matches, understanding betting markets, and making informed wagers on your favorite teams at SPLINKOS sportsbook.',
      image: 'https://readdy.ai/api/search-image?query=australian%20football%20AFL%20game%20action%20with%20betting%20odds%20overlay%20sports%20betting%20interface%20simple%20clean%20background&width=800&height=500&seq=blog20&orientation=landscape',
      category: 'Game Guides',
      author: 'Jake Thompson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20sports%20betting%20analyst%20headshot%20portrait%20confident%20smile%20neutral%20background&width=100&height=100&seq=author21&orientation=squarish',
      date: 'January 28, 2025',
      readTime: '11 min read',
      views: '13.4K',
      tags: ['AFL', 'SPLINKOS', 'Sports Betting', 'Australia']
    },
    {
      id: 22,
      title: 'Classic Slots vs Video Slots at SPLINKOS: Which Should You Play?',
      excerpt: 'Compare classic 3-reel slots and modern video slots at SPLINKOS. Understand the differences in gameplay, features, RTP, and volatility to choose the perfect slot type for your preferences at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=split%20screen%20showing%20classic%20slot%20machine%20and%20modern%20video%20slot%20comparison%20simple%20clean%20background&width=800&height=500&seq=blog21&orientation=landscape',
      category: 'Casino Reviews',
      author: 'Nicole Davis',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20gaming%20reviewer%20headshot%20portrait%20thoughtful%20expression%20neutral%20background&width=100&height=100&seq=author22&orientation=squarish',
      date: 'January 26, 2025',
      readTime: '8 min read',
      views: '9.2K',
      tags: ['Slots', 'SPLINKOS', 'Comparison', 'Classic vs Modern']
    },
    {
      id: 23,
      title: 'SPLINKOS Craps Guide: Master the Dice for Big Wins',
      excerpt: 'Craps might seem intimidating, but SPLINKOS makes it accessible. Learn the basic bets, understand the odds, and discover advanced craps strategies to maximize your winning potential at SPLINKOS tables.',
      image: 'https://readdy.ai/api/search-image?query=craps%20table%20with%20dice%20and%20betting%20layout%20casino%20atmosphere%20professional%20photography%20simple%20clean%20background&width=800&height=500&seq=blog22&orientation=landscape',
      category: 'Game Guides',
      author: 'Mark Stevens',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20dice%20game%20expert%20headshot%20portrait%20friendly%20smile%20neutral%20background&width=100&height=100&seq=author23&orientation=squarish',
      date: 'January 24, 2025',
      readTime: '12 min read',
      views: '7.6K',
      tags: ['Craps', 'SPLINKOS', 'Dice Games', 'Strategy']
    },
    {
      id: 24,
      title: 'Bankroll Management at SPLINKOS: Play Longer, Win More',
      excerpt: 'Proper bankroll management is the key to long-term success at SPLINKOS. Learn how to set budgets, manage your funds across different games, and avoid common bankroll mistakes that SPLINKOS players make.',
      image: 'https://readdy.ai/api/search-image?query=money%20management%20concept%20with%20calculator%20and%20budget%20planning%20professional%20financial%20photography%20simple%20clean%20background&width=800&height=500&seq=blog23&orientation=landscape',
      category: 'Strategies',
      author: 'Laura Martinez',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20financial%20planner%20headshot%20portrait%20professional%20look%20neutral%20background&width=100&height=100&seq=author24&orientation=squarish',
      date: 'January 22, 2025',
      readTime: '10 min read',
      views: '12.1K',
      tags: ['Bankroll', 'SPLINKOS', 'Money Management', 'Strategy']
    },
    {
      id: 25,
      title: 'SPLINKOS Live Game Shows: Monopoly, Crazy Time, and More',
      excerpt: 'Live game shows at SPLINKOS combine entertainment and gambling in exciting new ways. Explore Monopoly Live, Crazy Time, Dream Catcher, and other innovative game shows available at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=live%20casino%20game%20show%20with%20colorful%20wheel%20and%20host%20entertainment%20atmosphere%20simple%20clean%20background&width=800&height=500&seq=blog24&orientation=landscape',
      category: 'Game Guides',
      author: 'Brian Wilson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20entertainment%20expert%20headshot%20portrait%20enthusiastic%20smile%20neutral%20background&width=100&height=100&seq=author25&orientation=squarish',
      date: 'January 20, 2025',
      readTime: '9 min read',
      views: '14.9K',
      tags: ['Game Shows', 'SPLINKOS', 'Live Casino', 'Entertainment']
    },
    {
      id: 26,
      title: 'Slot Bonus Features Explained: Free Spins, Multipliers, and More at SPLINKOS',
      excerpt: 'Understanding bonus features is crucial for maximizing wins at SPLINKOS. Learn about free spins, multipliers, cascading reels, expanding wilds, and other exciting features in SPLINKOS pokies.',
      image: 'https://readdy.ai/api/search-image?query=slot%20machine%20bonus%20feature%20screen%20with%20free%20spins%20and%20multipliers%20colorful%20graphics%20simple%20clean%20background&width=800&height=500&seq=blog25&orientation=landscape',
      category: 'Game Guides',
      author: 'Jessica Taylor',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20slot%20specialist%20headshot%20portrait%20excited%20expression%20neutral%20background&width=100&height=100&seq=author26&orientation=squarish',
      date: 'January 18, 2025',
      readTime: '8 min read',
      views: '10.5K',
      tags: ['Bonus Features', 'SPLINKOS', 'Slots', 'Free Spins']
    },
    {
      id: 27,
      title: 'Cricket Betting at SPLINKOS: Test, ODI, and T20 Strategies',
      excerpt: 'Cricket betting is massive at SPLINKOS. Learn how to bet on Test matches, ODIs, and T20s with expert strategies for analyzing teams, understanding betting markets, and making profitable cricket bets at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=cricket%20match%20action%20with%20betting%20odds%20display%20sports%20betting%20interface%20simple%20clean%20background&width=800&height=500&seq=blog26&orientation=landscape',
      category: 'Game Guides',
      author: 'Raj Patel',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20cricket%20analyst%20headshot%20portrait%20knowledgeable%20look%20neutral%20background&width=100&height=100&seq=author27&orientation=squarish',
      date: 'January 16, 2025',
      readTime: '11 min read',
      views: '15.3K',
      tags: ['Cricket', 'SPLINKOS', 'Sports Betting', 'Strategy']
    },
    {
      id: 28,
      title: 'SPLINKOS Video Poker: Perfect Strategy for Maximum Returns',
      excerpt: 'Video poker at SPLINKOS offers some of the best odds in online gaming. Master Jacks or Better, Deuces Wild, and other variants with perfect strategy charts designed specifically for SPLINKOS video poker games.',
      image: 'https://readdy.ai/api/search-image?query=video%20poker%20machine%20screen%20with%20royal%20flush%20cards%20digital%20casino%20interface%20simple%20clean%20background&width=800&height=500&seq=blog27&orientation=landscape',
      category: 'Strategies',
      author: 'Steven Clark',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20video%20poker%20expert%20headshot%20portrait%20focused%20expression%20neutral%20background&width=100&height=100&seq=author28&orientation=squarish',
      date: 'January 14, 2025',
      readTime: '13 min read',
      views: '8.7K',
      tags: ['Video Poker', 'SPLINKOS', 'Strategy', 'Perfect Play']
    },
    {
      id: 29,
      title: 'Themed Slots at SPLINKOS: Movies, Music, and Pop Culture',
      excerpt: 'Explore the most entertaining themed slots at SPLINKOS. From blockbuster movies to legendary rock bands, discover how licensed slots combine your favorite entertainment with exciting gameplay at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=themed%20slot%20machine%20with%20movie%20and%20music%20elements%20colorful%20entertainment%20graphics%20simple%20clean%20background&width=800&height=500&seq=blog28&orientation=landscape',
      category: 'Game Guides',
      author: 'Megan Foster',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20entertainment%20journalist%20headshot%20portrait%20cheerful%20smile%20neutral%20background&width=100&height=100&seq=author29&orientation=squarish',
      date: 'January 12, 2025',
      readTime: '7 min read',
      views: '11.2K',
      tags: ['Themed Slots', 'SPLINKOS', 'Entertainment', 'Pop Culture']
    },
    {
      id: 30,
      title: 'SPLINKOS Keno Guide: Simple Game, Big Potential',
      excerpt: 'Keno at SPLINKOS is easy to learn but offers exciting winning potential. Understand how keno works, learn optimal number selection strategies, and discover the best keno variants available at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=keno%20game%20board%20with%20numbered%20balls%20lottery%20style%20gaming%20interface%20simple%20clean%20background&width=800&height=500&seq=blog29&orientation=landscape',
      category: 'Game Guides',
      author: 'Paul Richardson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20lottery%20game%20expert%20headshot%20portrait%20friendly%20demeanor%20neutral%20background&width=100&height=100&seq=author30&orientation=squarish',
      date: 'January 10, 2025',
      readTime: '6 min read',
      views: '6.4K',
      tags: ['Keno', 'SPLINKOS', 'Lottery', 'Simple Games']
    },
    {
      id: 31,
      title: 'Live Dealer Blackjack at SPLINKOS: The Ultimate Experience',
      excerpt: 'Live dealer blackjack at SPLINKOS brings the authentic casino experience to your home. Learn about different live blackjack variants, dealer interactions, and strategies specific to SPLINKOS live tables.',
      image: 'https://readdy.ai/api/search-image?query=live%20dealer%20blackjack%20table%20with%20professional%20dealer%20cards%20and%20chips%20elegant%20casino%20studio%20simple%20clean%20background&width=800&height=500&seq=blog30&orientation=landscape',
      category: 'Casino Reviews',
      author: 'Catherine Moore',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20live%20casino%20expert%20headshot%20portrait%20sophisticated%20look%20neutral%20background&width=100&height=100&seq=author31&orientation=squarish',
      date: 'January 8, 2025',
      readTime: '9 min read',
      views: '12.8K',
      tags: ['Live Blackjack', 'SPLINKOS', 'Live Casino', 'Authentic']
    },
    {
      id: 32,
      title: 'SPLINKOS Slot Tournaments: Compete for Massive Prizes',
      excerpt: 'Slot tournaments at SPLINKOS add competitive excitement to pokies gaming. Learn how tournaments work, discover winning strategies, and find out how to maximize your chances in SPLINKOS slot competitions.',
      image: 'https://readdy.ai/api/search-image?query=slot%20tournament%20leaderboard%20with%20prizes%20and%20competition%20atmosphere%20exciting%20gaming%20environment%20simple%20clean%20background&width=800&height=500&seq=blog31&orientation=landscape',
      category: 'Game Guides',
      author: 'Derek Johnson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20competitive%20gaming%20expert%20headshot%20portrait%20determined%20expression%20neutral%20background&width=100&height=100&seq=author32&orientation=squarish',
      date: 'January 6, 2025',
      readTime: '8 min read',
      views: '9.6K',
      tags: ['Tournaments', 'SPLINKOS', 'Slots', 'Competition']
    },
    {
      id: 33,
      title: 'Horse Racing Betting at SPLINKOS: Tips from the Track',
      excerpt: 'Horse racing betting at SPLINKOS offers thrilling action and winning opportunities. Learn how to read form guides, understand betting markets, and make informed wagers on races at SPLINKOS sportsbook.',
      image: 'https://readdy.ai/api/search-image?query=horse%20racing%20action%20with%20jockeys%20and%20betting%20odds%20display%20sports%20betting%20interface%20simple%20clean%20background&width=800&height=500&seq=blog32&orientation=landscape',
      category: 'Game Guides',
      author: 'William Harris',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20horse%20racing%20analyst%20headshot%20portrait%20experienced%20look%20neutral%20background&width=100&height=100&seq=author33&orientation=squarish',
      date: 'January 4, 2025',
      readTime: '10 min read',
      views: '8.3K',
      tags: ['Horse Racing', 'SPLINKOS', 'Sports Betting', 'Tips']
    },
    {
      id: 34,
      title: 'SPLINKOS Sic Bo Strategy: Master the Ancient Dice Game',
      excerpt: 'Sic Bo at SPLINKOS combines simplicity with exciting betting options. Learn the rules, understand the odds, and discover optimal betting strategies for this ancient Chinese dice game at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=sic%20bo%20table%20with%20three%20dice%20and%20betting%20layout%20traditional%20casino%20game%20simple%20clean%20background&width=800&height=500&seq=blog33&orientation=landscape',
      category: 'Strategies',
      author: 'Linda Wu',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20asian%20gaming%20expert%20headshot%20portrait%20wise%20expression%20neutral%20background&width=100&height=100&seq=author34&orientation=squarish',
      date: 'January 2, 2025',
      readTime: '9 min read',
      views: '7.1K',
      tags: ['Sic Bo', 'SPLINKOS', 'Dice Games', 'Strategy']
    },
    {
      id: 35,
      title: 'Branded Pokies at SPLINKOS: Play Your Favorite Franchises',
      excerpt: 'Branded pokies at SPLINKOS feature beloved characters and storylines from movies, TV shows, and games. Discover the best licensed slots at SPLINKOS and learn which branded games offer the most entertainment value.',
      image: 'https://readdy.ai/api/search-image?query=branded%20slot%20machine%20with%20famous%20characters%20and%20franchise%20elements%20colorful%20licensed%20gaming%20simple%20clean%20background&width=800&height=500&seq=blog34&orientation=landscape',
      category: 'Game Guides',
      author: 'Hannah Scott',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20pop%20culture%20expert%20headshot%20portrait%20enthusiastic%20smile%20neutral%20background&width=100&height=100&seq=author35&orientation=squarish',
      date: 'December 30, 2024',
      readTime: '8 min read',
      views: '10.9K',
      tags: ['Branded Slots', 'SPLINKOS', 'Licensed Games', 'Franchises']
    },
    {
      id: 36,
      title: 'SPLINKOS Live Roulette: European, American, and French Variants',
      excerpt: 'Live roulette at SPLINKOS offers multiple variants with real dealers. Compare European, American, and French roulette, understand the differences, and choose the best live roulette tables at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=live%20roulette%20wheel%20with%20professional%20dealer%20elegant%20casino%20studio%20multiple%20camera%20angles%20simple%20clean%20background&width=800&height=500&seq=blog35&orientation=landscape',
      category: 'Casino Reviews',
      author: 'Gregory Adams',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20roulette%20specialist%20headshot%20portrait%20sophisticated%20expression%20neutral%20background&width=100&height=100&seq=author36&orientation=squarish',
      date: 'December 28, 2024',
      readTime: '10 min read',
      views: '11.7K',
      tags: ['Live Roulette', 'SPLINKOS', 'Variants', 'Live Casino']
    },
    {
      id: 37,
      title: 'Slot Paylines Explained: From 10 to 243 Ways at SPLINKOS',
      excerpt: 'Understanding paylines is essential for slot success at SPLINKOS. Learn about fixed paylines, adjustable lines, and ways-to-win mechanics to choose the best pokies for your playing style at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=slot%20machine%20payline%20diagram%20showing%20winning%20combinations%20colorful%20educational%20graphics%20simple%20clean%20background&width=800&height=500&seq=blog36&orientation=landscape',
      category: 'Game Guides',
      author: 'Olivia Bennett',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20slot%20educator%20headshot%20portrait%20clear%20explanation%20expression%20neutral%20background&width=100&height=100&seq=author37&orientation=squarish',
      date: 'December 26, 2024',
      readTime: '7 min read',
      views: '8.8K',
      tags: ['Paylines', 'SPLINKOS', 'Slots', 'Education']
    },
    {
      id: 38,
      title: 'Tennis Betting at SPLINKOS: Grand Slam Strategies',
      excerpt: 'Tennis betting at SPLINKOS offers year-round action. Learn how to analyze players, understand surface differences, and make winning tennis bets at SPLINKOS sportsbook.',
      image: 'https://readdy.ai/api/search-image?query=tennis%20game%20action%20with%20player%20serving%20and%20betting%20odds%20overlay%20sports%20betting%20interface%20simple%20clean%20background&width=800&height=500&seq=blog37&orientation=landscape',
      category: 'Game Guides',
      author: 'Nathan Cooper',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20tennis%20analyst%20headshot%20portrait%20athletic%20look%20neutral%20background&width=100&height=100&seq=author38&orientation=squarish',
      date: 'December 24, 2024',
      readTime: '11 min read',
      views: '9.5K',
      tags: ['Tennis', 'SPLINKOS', 'Sports Betting', 'Grand Slam']
    },
    {
      id: 39,
      title: 'SPLINKOS Scratch Cards: Instant Wins and Quick Thrills',
      excerpt: 'Scratch cards at SPLINKOS offer instant gratification and exciting prizes. Discover the best scratch card games at SPLINKOS, understand the odds, and learn strategies for maximizing your scratch card experience.',
      image: 'https://readdy.ai/api/search-image?query=digital%20scratch%20card%20game%20with%20winning%20symbols%20colorful%20instant%20win%20interface%20simple%20clean%20background&width=800&height=500&seq=blog38&orientation=landscape',
      category: 'Game Guides',
      author: 'Samantha Lee',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20instant%20games%20expert%20headshot%20portrait%20cheerful%20expression%20neutral%20background&width=100&height=100&seq=author39&orientation=squarish',
      date: 'December 22, 2024',
      readTime: '6 min read',
      views: '7.9K',
      tags: ['Scratch Cards', 'SPLINKOS', 'Instant Win', 'Quick Games']
    },
    {
      id: 40,
      title: 'Multi-Hand Blackjack at SPLINKOS: Double the Action',
      excerpt: 'Multi-hand blackjack at SPLINKOS lets you play multiple hands simultaneously. Learn optimal strategies for managing multiple hands, bankroll considerations, and which SPLINKOS multi-hand tables offer the best value.',
      image: 'https://readdy.ai/api/search-image?query=multi-hand%20blackjack%20table%20showing%20three%20hands%20of%20cards%20casino%20gaming%20interface%20simple%20clean%20background&width=800&height=500&seq=blog39&orientation=landscape',
      category: 'Strategies',
      author: 'Victor Rodriguez',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20blackjack%20strategist%20headshot%20portrait%20intense%20focus%20neutral%20background&width=100&height=100&seq=author40&orientation=squarish',
      date: 'December 20, 2024',
      readTime: '9 min read',
      views: '10.3K',
      tags: ['Multi-Hand', 'SPLINKOS', 'Blackjack', 'Advanced']
    },
    {
      id: 41,
      title: 'SPLINKOS Arcade Games: Beyond Traditional Casino Gaming',
      excerpt: 'Arcade games at SPLINKOS offer unique entertainment beyond traditional casino games. Explore skill-based games, instant win titles, and innovative arcade-style gaming experiences available at SPLINKOS.',
      image: 'https://readdy.ai/api/search-image?query=colorful%20arcade%20game%20interface%20with%20fun%20graphics%20casual%20gaming%20atmosphere%20simple%20clean%20background&width=800&height=500&seq=blog40&orientation=landscape',
      category: 'Game Guides',
      author: 'Emily Turner',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20arcade%20gaming%20expert%20headshot%20portrait%20playful%20smile%20neutral%20background&width=100&height=100&seq=author41&orientation=squarish',
      date: 'December 18, 2024',
      readTime: '8 min read',
      views: '9.1K',
      tags: ['Arcade Games', 'SPLINKOS', 'Casual Gaming', 'Innovation']
    },
    {
      id: 42,
      title: 'Basketball Betting at SPLINKOS: NBA and International Strategies',
      excerpt: 'Basketball betting at SPLINKOS covers NBA, NBL, and international leagues. Learn how to analyze teams, understand point spreads, and make winning basketball bets at SPLINKOS sportsbook.',
      image: 'https://readdy.ai/api/search-image?query=basketball%20game%20action%20with%20player%20dunking%20and%20betting%20odds%20display%20sports%20betting%20interface%20simple%20clean%20background&width=800&height=500&seq=blog41&orientation=landscape',
      category: 'Game Guides',
      author: 'Marcus Johnson',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20basketball%20analyst%20headshot%20portrait%20knowledgeable%20expression%20neutral%20background&width=100&height=100&seq=author42&orientation=squarish',
      date: 'December 16, 2024',
      readTime: '10 min read',
      views: '12.4K',
      tags: ['Basketball', 'SPLINKOS', 'NBA', 'Sports Betting']
    },
    {
      id: 43,
      title: 'SPLINKOS Bonus Buy Slots: Skip to the Action',
      excerpt: 'Bonus buy slots at SPLINKOS let you purchase direct access to bonus features. Learn how bonus buy mechanics work, calculate the value, and discover which SPLINKOS bonus buy slots offer the best returns.',
      image: 'https://readdy.ai/api/search-image?query=slot%20machine%20bonus%20buy%20feature%20screen%20with%20purchase%20option%20colorful%20gaming%20interface%20simple%20clean%20background&width=800&height=500&seq=blog42&orientation=landscape',
      category: 'Game Guides',
      author: 'Rachel Kim',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20slot%20analyst%20headshot%20portrait%20analytical%20expression%20neutral%20background&width=100&height=100&seq=author43&orientation=squarish',
      date: 'December 14, 2024',
      readTime: '8 min read',
      views: '11.6K',
      tags: ['Bonus Buy', 'SPLINKOS', 'Slots', 'Features']
    },
    {
      id: 44,
      title: 'Live Casino Etiquette at SPLINKOS: Do\'s and Don\'ts',
      excerpt: 'Playing live casino games at SPLINKOS comes with etiquette expectations. Learn proper behavior for live dealer interactions, chat usage, and how to be a respectful player at SPLINKOS live tables.',
      image: 'https://readdy.ai/api/search-image?query=live%20casino%20dealer%20smiling%20at%20camera%20professional%20studio%20setting%20welcoming%20atmosphere%20simple%20clean%20background&width=800&height=500&seq=blog43&orientation=landscape',
      category: 'Casino Reviews',
      author: 'Patricia White',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20female%20etiquette%20expert%20headshot%20portrait%20polite%20smile%20neutral%20background&width=100&height=100&seq=author44&orientation=squarish',
      date: 'December 12, 2024',
      readTime: '7 min read',
      views: '6.7K',
      tags: ['Etiquette', 'SPLINKOS', 'Live Casino', 'Behavior']
    },
    {
      id: 45,
      title: 'SPLINKOS Seasonal Promotions: Maximize Holiday Bonuses',
      excerpt: 'Seasonal promotions at SPLINKOS offer enhanced bonuses throughout the year. Learn when to expect special offers, how to maximize holiday promotions, and insider tips for getting the most from SPLINKOS seasonal events.',
      image: 'https://readdy.ai/api/search-image?query=festive%20casino%20promotion%20with%20gift%20boxes%20and%20bonus%20symbols%20celebration%20atmosphere%20simple%20clean%20background&width=800&height=500&seq=blog44&orientation=landscape',
      category: 'Bonuses',
      author: 'Andrew Miller',
      authorAvatar: 'https://readdy.ai/api/search-image?query=professional%20male%20promotions%20specialist%20headshot%20portrait%20friendly%20smile%20neutral%20background&width=100&height=100&seq=author45&orientation=squarish',
      date: 'December 10, 2024',
      readTime: '9 min read',
      views: '10.2K',
      tags: ['Seasonal', 'SPLINKOS', 'Promotions', 'Bonuses']
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Get top articles (sorted by views)
  const topArticles = [...blogPosts]
    .sort((a, b) => {
      const viewsA = parseFloat(a.views.replace('K', '')) * 1000;
      const viewsB = parseFloat(b.views.replace('K', '')) * 1000;
      return viewsB - viewsA;
    })
    .slice(0, 5)
    .map(post => ({
      id: post.id,
      title: post.title,
      views: post.views,
      image: post.image,
      category: post.category
    }));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="SPLINKOS Blog Australia | Casino Tips, Game Guides, Strategies & News"
        description="SPLINKOS blog Australia online casino tips game guides strategies news. Expert insights on pokies, slots, live casino, sports betting, bonuses. Learn winning strategies at SPLINKOS Australia premier casino blog."
        keywords="SPLINKOS blog, casino tips Australia, pokies guide, slots strategy, casino news Australia, SPLINKOS Australia"
        canonicalUrl="https://splinkos.online/blog"
        ogTitle="SPLINKOS Blog Australia | Casino Tips, Game Guides & Strategies"
        ogDescription="SPLINKOS blog Australia online casino tips game guides strategies. Expert insights on pokies, slots, live casino, sports betting."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "SPLINKOS Blog",
          "description": "Expert insights, game reviews, strategies, and news from SPLINKOS Australia premier online casino platform",
          "url": "https://splinkos.online/blog",
          "publisher": {
            "@type": "Organization",
            "name": "SPLINKOS Australia",
            "logo": {
              "@type": "ImageObject",
              "url": "https://splinkos.com/media/ee2f31ce50a86881013b0.gif"
            }
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": blogPosts.slice(0, 10).map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "image": post.image,
                "datePublished": post.date,
                "author": {
                  "@type": "Person",
                  "name": post.author
                }
              }
            }))
          }
        }}
        geoPosition="-33.8688,151.2093"
        geoRegion="AU-NSW"
        geoPlacename="Sydney, New South Wales, Australia"
      />
      <div className="min-h-screen bg-white">
        <header>
          <Navbar scrolled={scrolled} />
        </header>
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                SPLINKOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert insights, game reviews, strategies, and the latest news from SPLINKOS - Australia's premier online casino gaming platform
              </p>
            </div>

            {/* Featured Post */}
            <FeaturedPost post={featuredPost} />
          </div>
        </section>

        {/* Category Filter */}
        <nav aria-label="Blog categories">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </nav>

        {/* Blog Grid with Sidebar */}
        <main>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1">
                  {/* Results Info */}
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-gray-600">
                      Showing <span className="font-semibold text-gray-900">{indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)}</span> of <span className="font-semibold text-gray-900">{filteredPosts.length}</span> articles
                      {selectedCategory !== 'All' && (
                        <span className="ml-2">
                          in <span className="font-semibold text-cyan-600">{selectedCategory}</span>
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Blog Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentPosts.map(post => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>

                {/* Sidebar */}
                <aside className="lg:w-80">
                  <TopArticles articles={topArticles} />
                </aside>
              </div>
            </div>
          </section>
        </main>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-mail-line text-4xl text-white"></i>
            </div>
            <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Never Miss a SPLINKOS Update
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest SPLINKOS casino news, exclusive bonuses, game releases, and expert gaming tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              Join 50,000+ SPLINKOS players. Unsubscribe at any time.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
