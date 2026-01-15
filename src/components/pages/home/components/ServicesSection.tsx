

export const ServicesSection = () => {
 const services = [
    {
      title: "Logo Design",
      desc: "Your logo is the face of your brand — we design unique, memorable logos that define who you are.",
      image: "/logo.jpg",
      active: false
    },
    {
      title: "Graphic Design",
      desc: "We create stunning visuals that communicate your brand's message clearly and beautifully.",
      image: "/graphics.jpg",
      active: true // This one has the yellow background in your image
    },
    {
      title: "UI/UX Design",
      desc: "User-focused designs that are beautiful, intuitive, and performance-driven.",
      image: "/ux.jpg",
      active: false
    },
    {
      title: "Web Development",
      desc: "Fast, responsive, and SEO-optimized websites built for performance.",
      image: "/web.jpg",
      active: false
    }
  ];

  return (
    <section className="bg-[#0F0F0F] py-20 px-4">
      <div className="container max-w-[1440px] mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#FFC700]">What</span> <span className="text-white">We Do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our team blends creativity, strategy, and technology to help your brand 
            succeed across every platform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto flex flex-wrap justify-center gap-6 mb-16">
  {services.map((service, index) => (
    <div
      key={index}
      className={`w-full sm:w-[45%] lg:w-[22%] max-w-[290px] px-5 py-10 flex flex-col items-start transition-all duration-300 ${
        service.active ? 'bg-[#FFF9E5]' : 'bg-white'
      }`}
    >
      {/* Image Replacement for Icons */}
      <div className="mb-6 overflow-hidden">
        <img    
          src={service.image}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="font-['Orbitron'] text-2xl font-bold text-black mb-4">
        {service.title}
      </h3>

      <p className="text-gray-700 mb-8 flex-grow">
        {service.desc}
      </p>

      <button
        className={`border border-black py-2 px-6 font-semibold transition-colors ${
          service.active ? 'bg-[#FFC700] border-[#FFC700]' : 'hover:bg-[#FFC700]'
        }`}
      >
        Learn more
      </button>
    </div>
  ))}
</div>


        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#FFC700] text-black font-bold py-4 px-10 hover:bg-[#e5b300] transition-colors">
            Discover All Services
          </button>
        </div>

      </div>
    </section>
  );
};
