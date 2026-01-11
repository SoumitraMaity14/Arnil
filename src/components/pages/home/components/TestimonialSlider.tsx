import React from 'react'

export const TestimonialSlider = () => {
  return (
    <section className="relative bg-[#0F0F0F] overflow-hidden">
      {/* 1. Large Background Watermark (Top Left) */}
      <div className="absolute top-0 left-10 select-none opacity-10">
        <span className="font-['Orbitron'] text-[15rem] font-bold text-gray-400 leading-none">
          Arnil
        </span>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">
          
          {/* 2. Content Side (Left) */}
          <div className="w-full lg:w-1/2 bg-[#FFC700] p-10 lg:p-16 flex flex-col justify-center relative">
            
            {/* Vertical Background Text */}
            <div className="absolute left-0 top-0 h-full overflow-hidden hidden lg:block">
              <span className="font-['Orbitron'] text-9xl font-bold text-black/5 uppercase inline-block -rotate-90 origin-bottom-left translate-y-[-50%] translate-x-4">
                Arnil
              </span>
            </div>

            <div className="relative z-20">
              <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-black mb-6">
                What Our Clients Say
              </h2>
              
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017L11.017 21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017L2.017 21H5.017Z" />
                </svg>
              </div>

              <p className="text-black text-lg mb-8 leading-relaxed italic">
                "Working with Arnil Technology Solutions was one of the best decisions 
                we made for our startup. Their team understood exactly what we wanted 
                to communicate. They created a stunning logo and visual identity that 
                instantly elevated our image."
              </p>

              <div className="mb-10">
                <h4 className="font-bold text-2xl text-black italic">Daniyel Karlos</h4>
                <p className="text-black/80 font-medium">Senior Director of Marketing</p>
              </div>

              {/* Slider Dots */}
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-black"></span>
                <span className="w-3 h-3 rounded-full bg-black/20"></span>
                <span className="w-3 h-3 rounded-full bg-black/20"></span>
                <span className="w-3 h-3 rounded-full bg-black/20"></span>
              </div>
            </div>
          </div>

          {/* 3. Image Side (Right) */}
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="path-to-happy-clients-image.jpg" 
              alt="Satisfied Clients" 
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  
  )
}
