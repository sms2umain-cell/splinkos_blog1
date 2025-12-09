const FeaturesSection = () => {
  const features = [
    {
      icon: 'ri-gift-line',
      title: 'FREE $20 Bonus',
      description: 'Sign up now and receive $20 credit instantly to start your gaming journey',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      icon: 'ri-gamepad-line',
      title: '6,500+ Games',
      description: 'Massive selection of pokies, slots, live casino and sports betting options',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Fast Withdrawals',
      description: 'Quick and secure cashouts with multiple payment methods available',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Licensed & Secure',
      description: 'Fully licensed and regulated platform with advanced security measures',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SPLINKOS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the ultimate online gaming platform with unmatched features and benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
