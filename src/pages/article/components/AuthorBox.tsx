interface AuthorBoxProps {
  name: string;
  bio: string;
  avatar: string;
}

const AuthorBox = ({ name, bio, avatar }: AuthorBoxProps) => {
  return (
    <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">About the Author</h3>
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-2">{name}</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {bio}
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
              <i className="ri-facebook-fill text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors cursor-pointer">
              <i className="ri-twitter-x-fill text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <i className="ri-telegram-fill text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBox;
