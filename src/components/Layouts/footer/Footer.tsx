
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import ContactSection from './ContactSection';

const Footer = () => {
  return (
    <footer className="bg-black relative pt-32 pb-10 px-6">
      {/* Contact Section Overlap */}
      <div className="relative -mt-105 z-20 mb-20">
        <ContactSection />
      </div>

      <div className="container mx-auto max-w-[1240px]">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white pb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-['Montserrat'] text-5xl md:text-8xl font-black leading-[0.9] uppercase tracking-tighter">
              <span className="text-white block">Let's Work</span>
              <span className="text-[#FFC700] block">Together</span>
            </h2>
          </div>
          <div className="md:max-w-[550px]">
            <p className="text-white mb-6 text-[22px] font-['Montserrat']">
              We are digital agency that helps businesses develop immersive and engaging user experiences
            </p>
            <button className="bg-[#FFC700] hover:bg-[#e5b300] text-black font-bold py-3 px-8 transition-colors uppercase text-sm tracking-wider">
              Let's Work With Us
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-['Orbitron'] text-white text-lg font-bold mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-10 text-white">
              {['Home', 'About Us', 'Services', 'Portfolio', 'FAQ', 'Contact Us'].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#FFC700] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-['Orbitron'] text-white text-lg font-bold mb-8 uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-10 text-white">
              {['UI/UX Design', 'Graphic Design', 'Web Development', 'Social Media Poster Design', 'Logo Design', 'Digital Marketing'].map((service) => (
                <li key={service}><a href="#" className="hover:text-[#FFC700] transition-colors">{service}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-['Orbitron'] text-white text-base font-bold mb-8 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-10 text-white">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white" />
                <span>+91 8900449085</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white" />
                <span className="break-all">info@arniltechnologysolutions.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white shrink-0" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className='flex flex-col items-end'>
            <h4 className="font-['Orbitron'] text-white text-lg font-bold mb-8 uppercase tracking-widest">Follow Us</h4>
            <div className="space-y-6">
              {[
                { name: 'Facebook', icon: <Facebook size={18} /> },
                { name: 'Instagram', icon: <Instagram size={18} /> },
                { name: 'Linkedin', icon: <Linkedin size={18} /> }
              ].map((social) => (
                <a key={social.name} href="#" className="flex items-center gap-4 text-white hover:text-white transition-colors group">
                  <div className="p-2 border border-gray-800 group-hover:border-[#FFC700] group-hover:bg-[#FFC700] group-hover:text-black transition-all">
                    {social.icon}
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Massive Background Text */}
       

        {/* Bottom Bar */}
       
      </div>
       <div className="max-w-[1440px] mx-auto relative h-24 md:h-40 flex items-end justify-center overflow-hidden">
  <h1 
    className="font-['Orbitron'] text-[9vw] font-black leading-none whitespace-nowrap uppercase absolute left-1/2 -translate-x-1/2 translate-y-[20%]"
    style={{
      // 1. Create the gold-to-dark gradient for the text itself
      background: 'linear-gradient(to bottom, #FFC100 0%, #7A5C00 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      
      // 2. The "Blur/Fade" effect: Masks the bottom of the element
      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
      maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)'
    }}
  >
    Arnil Technology
  </h1>
</div>
       <div className="max-w-[1440px] mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-white text-xs">
          <p>© 2025 Arnil Technology Solutions. All Right Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-800">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;