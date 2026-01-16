import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteModal from './components/QuoteModal';
import Footer from './components/Footer';
import { INDUSTRIES, TESTIMONIALS, DISPLAY_NAME } from './constants';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-deep-space min-h-screen text-gray-200 selection:bg-neon-cyan selection:text-slate-900 font-sans">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main>
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} />
        
        <Services />

        {/* Industries Section */}
        <section id="industries" className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-2">Industries Served</h2>
                <p className="text-gray-400">Powering innovation across sectors.</p>
              </div>
              <button onClick={() => setIsQuoteOpen(true)} className="mt-4 md:mt-0 text-neon-cyan font-medium hover:text-white transition-colors">
                View Enterprise Solutions →
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-video flex flex-col items-center justify-center border border-white/10 hover:border-neon-cyan/50 transition-all cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <span className="relative z-10 text-4xl mb-2 group-hover:scale-110 transition-transform">{ind.icon}</span>
                  <span className="relative z-10 font-bold text-white">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-2xl rotate-3 opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800" 
                alt="Drone Technician" 
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">Why Choose {DISPLAY_NAME}?</h2>
              <div className="space-y-6">
                {[
                  { title: "Certified Technicians", desc: "Our team consists of certified engineers specializing in avionics." },
                  { title: "Original Parts Only", desc: "We maintain direct partnerships with DJI, Autel, and T-Motor." },
                  { title: "48-Hour Turnaround", desc: "Standard repairs are completed and tested within 2 business days." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-neon-cyan w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
             <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
             <div className="grid md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="bg-panel-bg p-8 rounded-2xl border border-white/5 relative">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                      <div>
                        <h4 className="font-bold text-white">{t.name}</h4>
                        <p className="text-xs text-neon-cyan uppercase tracking-wider">{t.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{t.text}"</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-3xl mx-auto px-6">
             <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
             <div className="space-y-4">
               {[
                 { q: "Do you offer warranty on repairs?", a: "Yes, all repairs come with a 90-day warranty on parts and labor." },
                 { q: "Can you fix water damaged drones?", a: "We perform a chemical cleaning process. Success depends on the severity, but we have a 70% recovery rate." },
                 { q: "How do I ship my drone?", a: "Once you submit a quote, we will send you a secure shipping label and packing instructions." }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 rounded-lg overflow-hidden border border-white/5">
                   <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                   >
                     <span className="font-medium text-white">{item.q}</span>
                     {openFaq === i ? <ChevronUp className="text-neon-cyan" /> : <ChevronDown className="text-gray-500" />}
                   </button>
                   <AnimatePresence>
                     {openFaq === i && (
                       <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                       >
                         <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                           {item.a}
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
             </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

export default App;