import React from 'react';
import { User, Mail, Phone, Globe, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-[#1A1A1A] py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Ready To Get <span className="text-[#FFC700]">Started?</span>
          </h2>
        </div>

        {/* Form Container */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Name Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <User size={20} />
              </span>
              <input 
                type="text" 
                placeholder="Name*" 
                className="w-full bg-transparent border border-gray-600 p-4 pl-12 text-white placeholder-gray-400 focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <Mail size={20} />
              </span>
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="w-full bg-transparent border border-gray-600 p-4 pl-12 text-white placeholder-gray-400 focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <Phone size={20} />
              </span>
              <input 
                type="tel" 
                placeholder="Phone*" 
                className="w-full bg-transparent border border-gray-600 p-4 pl-12 text-white placeholder-gray-400 focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>

            {/* Website Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <Globe size={20} />
              </span>
              <input 
                type="text" 
                placeholder="Website*" 
                className="w-full bg-transparent border border-gray-600 p-4 pl-12 text-white placeholder-gray-400 focus:border-[#FFC700] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <span className="absolute top-4 left-4 text-gray-400">
              <MessageSquare size={20} />
            </span>
            <textarea 
              
              placeholder="Message Us*" 
              className="w-full bg-transparent border border-gray-600 p-4 pl-12 text-white placeholder-gray-400 focus:border-[#FFC700] focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            *Disclaimer : By submitting this form, you agree to receive follow-up communication from Arnil Technology Solutions via phone, SMS, or email, based on your enquiry. We respect your privacy — you can opt out of these communications at any time.
          </p>

          {/* Submit Button */}
          <div className="pt-6">
            <button 
              type="submit" 
              className="w-full bg-[#FFC700] hover:bg-[#e5b300] text-black font-bold py-4 text-lg transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;