

export const AboutSection = () => {
    return (
        <div className='bg-[#0F0F0F]'>
            <section className="relative max-w-[1440px] mx-auto overflow-hidden">
                {/* 1. Large "Arnil" Watermark at Top Right */}
                <div className="absolute top-[-100px] left-1/2 select-none opacity-20">
                    <span className="font-['Brave_Eightyone'] text-[15rem] font-bold text-gray-500">
                        Arnil
                    </span>
                </div>
                <div className="container mx-auto px-4 relative z-10 pt-40">
                    <div className="flex flex-col lg:flex-row items-stretch relative bg-[#FFC700]">

                        {/* 2. Image Side (Left) */}
                        <div className="absolute top-[-60px] w-full lg:w-1/2 relative">
                            <img
                                src="/About.jpg"
                                alt="Team working"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* 3. Content Side (Right) */}
                        <div className="w-full lg:w-1/2 bg-[#FFC700] p-10 lg:p-16 flex flex-col justify-center">

                            {/* 4. Vertical "Arnil" Text on the far right edge */}
                            {/* Vertical "Arnil" — TRUE right edge */}
                            <div className="absolute right-[-30px] top-0 h-full overflow-hidden hidden lg:flex items-center">
                                <span
                                    className="font-['Orbitron'] text-[180px] font-bold text-black/10 uppercase rotate-90  translate-x-1/3"
                                >
                                    Arnil
                                </span>
                            </div>


                            <div className="relative z-20">
                                <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-black mb-6">
                                    Who We Are
                                </h2>

                                <p className="text-black text-lg mb-8 leading-relaxed max-w-lg">
                                    Arnil Technology Solutions is a creative design and digital innovation
                                    studio driven by passion, precision, and purpose. Founded with a mission
                                    to help startups and growing businesses stand out in today's competitive
                                    market.
                                </p>

                                {/* Icon List */}
                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-black p-3 rounded-full">
                                            {/* SVG Icon - Bulb */}
                                            <svg className="w-6 h-6 text-[#FFC700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                        </div>
                                        <span className="font-bold italic text-black">Creative. Modern. Reliable.</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="bg-black p-3 rounded-full">
                                            {/* SVG Icon - Rocket */}
                                            <svg className="w-6 h-6 text-[#FFC700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        </div>
                                        <span className="font-bold italic text-black">We turn your ideas into impactful digital realities.</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <button className="bg-white text-black font-bold py-3 px-8 hover:bg-gray-100 transition-colors shadow-lg">
                                    Learn More About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
