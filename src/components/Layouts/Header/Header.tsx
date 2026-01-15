

export const Header = () => {
  return (
    <header className="bg-[#111111]  text-white px-[100px] py-4  font-sans">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
      <div className=" flex items-center bg-black">
        <img 
          src="/header-logo.png" 
          alt="Arnil Technology Solutions" 
          className="max-w-[185px] max-h-[64px]  bg-black" 
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex justify-center items-center space-x-8 text-sm font-medium">
        <div className="relative group">
          <a href="#" className="text-[#FFC107]">Home</a>
          {/* Yellow lines above/below Home */}
          <div className="absolute -top-4 left-0 w-full h-[1px] bg-[#FFC107]"></div>
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-[#FFC107]"></div>
        </div>
        
        <a href="#" className="hover:text-[#FFC107] transition-colors">About Us</a>
        
        <div className="flex items-center cursor-pointer hover:text-[#FFC107] transition-colors">
          <span>Services</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <a href="#" className="hover:text-[#FFC107] transition-colors">Portfolio</a>
        <a href="#" className="hover:text-[#FFC107] transition-colors">FAQ</a>
        <a href="#" className="hover:text-[#FFC107] transition-colors">Contact Us</a>

        <div>
        <button className="bg-[#FFC107] text-black px-6 py-3 font-bold text-sm hover:bg-[#e5ad06] transition-all">
          Get a Quote
        </button>
      </div>
      </nav>

      {/* CTA Button */}
      
      </div>
    </header>
  );
}
