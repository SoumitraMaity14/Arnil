import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] pt-20 pb-10 px-6 relative overflow-hidden">
      
      {/* Top CTA Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mb-20 border-b border-gray-800 pb-16">
        <div className="max-w-xl">
          <h2 className="font-['Orbitron'] text-5xl md:text-7xl font-bold leading-none uppercase tracking-tighter">
            <span className="text-white block">Let's Work</span>
            <span className="text-[#FFC700]">Together</span>
          </h2>
        </div>
        <div className="mt-8 md:mt-0 md:max-w-xs">
          <p className="text-gray-400 mb-6 text-lg">
            We are digital agency that helps businesses develop immersive and engaging user experiences
          </p>
          <button className="bg-[#FFC700] hover:bg-[#e5b300] text-black font-bold py-3 px-8 transition-colors">
            Let's Work With Us
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Quick Links */}
        <div>
          <h4 className="font-['Orbitron'] text-white text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-['Orbitron'] text-white text-xl font-bold mb-6">Our Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Graphic Design</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Web Development</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Social Media Poster Design</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Logo Design</a></li>
            <li><a href="#" className="hover:text-[#FFC700] transition-colors">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-['Orbitron'] text-white text-xl font-bold mb-6">Contact Us</h4>
          <ul className="space-y-6 text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#FFC700]" />
              <span>+91 8900449085</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#FFC700]" />
              <span>info@arniltechnologysolutions.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#FFC700] shrink-0" />
              <span>Lorem ipsum dolor sit amet, consectur adipiscing elit.</span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-['Orbitron'] text-white text-xl font-bold mb-6">Follow Us</h4>
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <div className="p-2 border border-gray-700 group-hover:border-[#FFC700]">
                <Facebook size={20} />
              </div>
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <div className="p-2 border border-gray-700 group-hover:border-[#FFC700]">
                <Instagram size={20} />
              </div>
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
              <div className="p-2 border border-gray-700 group-hover:border-[#FFC700]">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="mt-10 select-none overflow-hidden">
        <h1 className="font-['Orbitron'] text-[12vw] font-bold leading-none text-white opacity-10 whitespace-nowrap uppercase">
          Arnil Technology
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-10 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2025 Arnil Technology Solutions. All Right Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;