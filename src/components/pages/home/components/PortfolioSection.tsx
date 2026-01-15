

export const PortfolioSection = () => {
 const projects = [
    { id: 1, img: "https://via.placeholder.com/400x600/333/fff" },
    { id: 2, img: "https://via.placeholder.com/600x600/444/fff" },
    { id: 3, img: "https://via.placeholder.com/600x600/555/fff" },
    { id: 4, img: "https://via.placeholder.com/400x600/333/fff" },
  ];

  return (
    <section className="bg-black py-24 px-4 text-center">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white mb-6">
            See Our Work in <span className="text-[#FFC700]">Action</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            We’ve partnered with startups, entrepreneurs, and growing businesses to craft 
            creative digital solutions that make an impact. Each project reflects our 
            passion for innovation, attention to detail, and commitment to quality.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-6xl mx-auto">
          
          {/* Navigation Buttons */}
          <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white p-3 hover:bg-gray-200 transition-colors hidden md:block">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-[#FFC700] p-3 hover:bg-[#e5b300] transition-colors hidden md:block">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Grid/Track */}
          <div className="flex gap-4 overflow-hidden py-4">
            {/* Left Crop */}
            <div className="hidden lg:block w-1/6 shrink-0 opacity-40 grayscale">
              <img src={projects[0].img} className="w-full h-[400px] object-cover" alt="prev" />
            </div>

            {/* Main Projects */}
            <div className="w-full lg:w-2/3 flex gap-4 overflow-x-auto no-scrollbar md:overflow-hidden">
              <div className="w-1/2 shrink-0">
                <img src={projects[1].img} className="w-full h-[400px] object-cover" alt="project" />
              </div>
              <div className="w-1/2 shrink-0">
                <img src={projects[2].img} className="w-full h-[400px] object-cover" alt="project" />
              </div>
            </div>

            {/* Right Crop */}
            <div className="hidden lg:block w-1/6 shrink-0 opacity-40 grayscale">
              <img src={projects[3].img} className="w-full h-[400px] object-cover" alt="next" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <button className="bg-[#FFC700] text-black font-bold py-4 px-12 hover:bg-[#e5b300] transition-transform active:scale-95">
            View Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}
