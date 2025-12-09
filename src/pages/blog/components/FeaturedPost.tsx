interface FeaturedPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    authorAvatar: string;
    date: string;
    readTime: string;
    views: string;
    tags?: string[];
  };
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const handleClick = () => {
    window.REACT_APP_NAVIGATE(`/article/${post.id}`);
  };

  return (
    <article 
      onClick={handleClick}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-80 md:h-auto w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-6 left-6">
            <span className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg">
              Featured Article
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-bold rounded-full inline-block w-fit mb-4">
            {post.category}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {post.title}
          </h2>
          
          <p className="text-gray-600 text-base mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Author & Meta */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-base font-bold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-eye-line"></i>
                {post.views}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
