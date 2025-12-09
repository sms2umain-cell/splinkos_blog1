const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'James Mitchell',
      location: 'Sydney, NSW',
      avatar: 'JM',
      rating: 5,
      text: 'SPLINKOS is hands down the best online casino in Australia! The game selection is incredible and withdrawals are super fast. Got my $20 bonus and won big on pokies!',
      game: 'Pokies Player',
    },
    {
      name: 'Sarah Thompson',
      location: 'Melbourne, VIC',
      avatar: 'ST',
      rating: 5,
      text: 'Love the live casino experience here. The dealers are professional and friendly. Fast payouts and great customer support. Highly recommended!',
      game: 'Live Casino Fan',
    },
    {
      name: 'Michael Chen',
      location: 'Brisbane, QLD',
      avatar: 'MC',
      rating: 5,
      text: 'Been playing on SPLINKOS for months now. The sports betting odds are competitive and the platform is very user-friendly. Great bonuses too!',
      game: 'Sports Bettor',
    },
    {
      name: 'Emma Wilson',
      location: 'Perth, WA',
      avatar: 'EW',
      rating: 5,
      text: 'Amazing variety of slots and pokies! The $20 welcome bonus was a nice touch. Customer service is responsive and helpful. Five stars!',
      game: 'Slots Enthusiast',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Players Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied players enjoying the ultimate gaming experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-sm text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>
              
              <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                {testimonial.game}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
