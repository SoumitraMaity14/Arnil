import React from 'react'

export const TestimonialSection = () => {
 const features = [
    {
      title: "Creative Innovation",
      desc: "Every project starts with original ideas and data-driven insights.",
      image: "/idea(1).png"
    },
    {
      title: "Tech Expertise",
      desc: "We combine aesthetics with functionality for lasting results.",
      image: "/idea(2).png"
    },
    {
      title: "Client-First Philosophy",
      desc: "We listen, adapt, and build around your goals.",
      image: "/idea(3).png"
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "Agile processes that save time without cutting corners.",
      image: "/idea(4).png"
    }
  ];

  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#FFC700] block">Why Clients Love</span>
            <span className="text-white">Working With Us</span>
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-9">
          {features.map((item, index) => (
            <div key={index} className="relative group">
              {/* Image Box (Floating above the white card) */}
              <div className="absolute -top-10 left-6 w-20 h-20 bg-white border-2 border-[#FFC700] p-3 z-20 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* White Content Card */}
              <div className="bg-white pt-16 pb-10 px-8 h-full shadow-xl">
                <h3 className="font-bold text-xl text-black mb-3 italic">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text Area */}
        <div className="text-center  border-gray-800 ">
          <h4 className="text-white text-2xl md:text-3xl font-medium italic mb-12">
            We don't just design — <span className="font-bold">we build experiences that inspire and perform.</span>
          </h4>
          
          <button className="bg-[#FFC700] hover:bg-[#e5b300] text-black font-bold py-4 px-12 transition-all duration-300">
            Get a Quote
          </button>
        </div>

      </div>
    </section>
  );
}
