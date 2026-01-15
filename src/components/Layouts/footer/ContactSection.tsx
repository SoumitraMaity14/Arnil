import React from 'react';
import { User, Mail, Phone, Globe, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="container mx-auto max-w-[1240px]">
      <section className="bg-[#232323]  p-8 md:p-16 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Ready To Get <span className="text-[#FFC700]">Started?</span>
          </h2>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
              <input 
                type="text" 
                placeholder="Name*" 
                className="w-full bg-[#1A1A1A] border border-white p-4 pl-12 text-white placeholder-white focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="w-full bg-[#1A1A1A] border border-white p-4 pl-12 text-white placeholder-white focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
              <input 
                type="tel" 
                placeholder="Phone*" 
                className="w-full bg-[#1A1A1A] border border-white p-4 pl-12 text-white placeholder-white focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
              <input 
                type="text" 
                placeholder="Website*" 
                className="w-full bg-[#1A1A1A] border border-white p-4 pl-12 text-white placeholder-white focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="relative">
            <MessageSquare size={18} className="absolute left-4 top-5 text-white" />
            <textarea 
              rows={4}
              placeholder="Message Us*" 
              className="w-full bg-[#1A1A1A] border border-white p-4 pl-12 text-white placeholder-white focus:border-[#FFC700] focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <p className="text-white text-[10px] md:text-xs leading-relaxed opacity-60">
            *Disclaimer : By submitting this form, you agree to receive follow-up communication from Arnil Technology Solutions via phone, SMS, or email, based on your enquiry. We respect your privacy — you can opt out of these communications at any time.
          </p>

          <button 
            type="submit" 
            className="w-full bg-[#FFC700] hover:bg-white text-black font-black py-4 text-sm uppercase tracking-widest transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactSection;