const ShareButtons = () => {
  return (
    <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200">
      <span className="text-sm font-semibold text-gray-700">Share this article:</span>
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
          <i className="ri-facebook-fill text-lg"></i>
        </button>
        <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors cursor-pointer">
          <i className="ri-twitter-x-fill text-lg"></i>
        </button>
        <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
          <i className="ri-telegram-fill text-lg"></i>
        </button>
        <button className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
          <i className="ri-link text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
