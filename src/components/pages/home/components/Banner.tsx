

export const Banner = () => {
  return (
   <section className=" overflow-hidden bg-black font-['Inter']">
    <div className='relative  h-screen max-w-[1440px] mx-auto'>
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Banner.png" 
          alt="Office Background" 
          className="h-full w-full object-cover opacity-50"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-20 lg:w-2/3">
        
        {/* Heading with Futuristic Font */}
        <h1 className="font-['Orbitron'] text-4xl md:text-6xl lg:text-7xl leading-tight tracking-wide">
          <span className="text-[#FFC700] block mb-2">Designing the Future</span>
          <span className="text-white">of Brands & Technology</span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-xl text-lg text-gray-200 leading-relaxed">
          Arnil Technology Solutions helps brands transform ideas into 
          impactful digital experiences — through creative design, 
          modern technology, and strategic thinking.
        </p>

        {/* Call to Action Button */}
        <div className="mt-10">
          <button className="bg-[#FFC700] hover:bg-[#e5b300] text-black font-bold py-4 px-10 transition-colors duration-200">
            Explore Our Work
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}
