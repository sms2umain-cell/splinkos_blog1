import { useNavigate } from 'react-router-dom';

interface RelatedArticlesProps {
  currentArticleId?: string;
  category?: string;
}

const RelatedArticles = ({ currentArticleId = '1', category }: RelatedArticlesProps) => {
  const navigate = useNavigate();

  const allPosts = [
    {
      id: '1',
      title: 'SPLINKOS Ultimate Guide: Master Online Casino Gaming in Australia 2025',
      image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20online%20casino%20gaming%20setup%20with%20laptop%20displaying%20colorful%20slot%20games%20elegant%20desk%20with%20poker%20chips%20and%20cards%20professional%20studio%20lighting%20high%20quality%20photography%20clean%20minimalist%20background&width=800&height=500&seq=featured1&orientation=landscape',
      category: 'Casino Reviews',
      readTime: '12 min read'
    },
    {
      id: '2',
      title: 'Top 10 Pokies Games at SPLINKOS You Must Try in 2025',
      image: 'https://readdy.ai/api/search-image?query=colorful%20slot%20machine%20pokies%20game%20screen%20vibrant%20casino%20atmosphere%20professional%20photography&width=800&height=500&seq=blog1&orientation=landscape',
      category: 'Game Guides',
      readTime: '8 min read'
    },
    {
      id: '3',
      title: 'How to Maximize Your SPLINKOS Casino Bonuses: Expert Tips',
      image: 'https://readdy.ai/api/search-image?query=casino%20bonus%20chips%20and%20money%20on%20elegant%20table%20golden%20lighting%20luxury%20atmosphere&width=800&height=500&seq=blog2&orientation=landscape',
      category: 'Bonuses',
      readTime: '10 min read'
    },
    {
      id: '4',
      title: 'SPLINKOS Live Casino vs Traditional Online Games',
      image: 'https://readdy.ai/api/search-image?query=live%20casino%20dealer%20at%20professional%20table%20elegant%20casino%20interior%20high%20quality%20photography&width=800&height=500&seq=blog3&orientation=landscape',
      category: 'Casino Reviews',
      readTime: '7 min read'
    },
    {
      id: '5',
      title: 'Blackjack Strategy Guide: Win More at SPLINKOS Tables',
      image: 'https://readdy.ai/api/search-image?query=blackjack%20cards%20and%20colorful%20chips%20on%20green%20felt%20table%20professional%20casino%20photography%20simple%20clean%20background&width=800&height=500&seq=blog4&orientation=landscape',
      category: 'Strategies',
      readTime: '15 min read'
    }
  ];

  // Filter out current article and get 3 related posts
  const relatedPosts = allPosts
    .filter(post => post.id !== currentArticleId)
    .slice(0, 3);

  const handleArticleClick = (articleId: string) => {
    navigate(`/article/${articleId}`);
    // Remove the immediate scroll - let the page navigation handle it naturally
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-gray-900 mb-12 text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map(post => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleArticleClick(post.id)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    {post.readTime}
                  </span>
                  <span className="text-cyan-600 font-semibold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;