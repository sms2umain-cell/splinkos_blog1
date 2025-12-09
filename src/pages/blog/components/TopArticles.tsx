interface TopArticle {
  id: number;
  title: string;
  views: string;
  image: string;
  category: string;
}

interface TopArticlesProps {
  articles: TopArticle[];
}

const TopArticles = ({ articles }: TopArticlesProps) => {
  const handleClick = (id: number) => {
    window.REACT_APP_NAVIGATE(`/article/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
          <i className="ri-fire-fill text-xl text-white"></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Top Articles
        </h3>
      </div>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <div
            key={article.id}
            onClick={() => handleClick(article.id)}
            className="flex gap-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-all"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-cyan-600">#{index + 1}</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
                  {article.category}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                {article.title}
              </h4>
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <i className="ri-eye-line"></i>
                <span>{article.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArticles;
