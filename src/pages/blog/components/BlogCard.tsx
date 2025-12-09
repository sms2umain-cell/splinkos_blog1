interface BlogCardProps {
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

const BlogCard = ({ post }: BlogCardProps) => {
  const handleClick = () => {
    window.REACT_APP_NAVIGATE(`/article/${post.id}`);
  };

  return (
    <article 
      onClick={handleClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
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
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{post.author}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <i className="ri-time-line"></i>
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-eye-line"></i>
              {post.views}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
