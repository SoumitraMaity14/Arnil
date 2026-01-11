import {useState} from 'react'

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What services does Arnil Technology Solutions provide?",
      a: "We offer a complete range of creative and digital services — including graphic design, logo design, web design, UI/UX, web and app development, and digital marketing. Whether you’re building a new brand or refreshing an existing one, we've got you covered from concept to launch."
    },
    {
      q: "How much does a project cost?",
      a: "Pricing varies based on project scope and complexity. Contact us for a custom quote tailored to your specific needs."
    },
    {
      q: "How long does it take to complete a project?",
      a: "Timelines depend on the service. A logo might take 1-2 weeks, while a full custom website can take 4-8 weeks."
    },
    {
      q: "Do you work with clients outside India?",
      a: "Yes! We work with startups and established businesses globally across various time zones."
    },
    {
      q: "Can you redesign my existing logo or website?",
      a: "Absolutely. We specialize in brand refreshes and modernizing legacy websites to meet current standards."
    }
  ];

  return (
    <section className="bg-[#0F0F0F] py-24 px-6 text-white">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold leading-tight uppercase">
            Got Questions? <span className="text-[#FFC700]">We've Got Answers.</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            We understand that starting a new project can come with a lot of questions — from timelines to pricing. 
            Here are some of the most common queries our clients ask before working with us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-[#FFC700]/30 transition-all duration-300 ${
                openIndex === index ? 'bg-[#1A1A1A]' : 'bg-transparent'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-medium">{faq.q}</span>
                <div className={`p-2 transition-transform duration-300 ${
                  openIndex === index ? 'bg-[#FFC700] text-black rotate-180' : 'bg-[#FFC700] text-black'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer Area */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="p-6 pt-0 text-gray-400 leading-relaxed text-lg border-t border-white/5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-16 text-center">
          <button className="bg-[#FFC700] text-black font-bold py-4 px-12 hover:bg-[#e5b300] transition-colors">
            View All Questions
          </button>
        </div>
      </div>
    </section>
  );
}
