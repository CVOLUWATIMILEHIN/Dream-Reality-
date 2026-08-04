import { useState } from 'react';
import { motion } from 'motion/react';
import imageModestus from './Pastor Modestus Chukwulaka.jpeg';
import imageEmeka from './Pastor Emeka Onuchukwu.jpeg';
import imageVal from './Mr. Val Okafor..jpeg';
import imageTaiwo from './Professor Taiwo Amos.jpeg';

export default function AboutGovernance() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const trustees = [
    {
      name: 'Prof. Taiwo Amos',
      role: 'Deputy Vice Chancellor, Federal University of Technology, Akure (FUTA)',
      bio: "A distinguished academic and university administrator who provides strategic leadership and educational insight to the governance of the organisation.",
      image: imageTaiwo
    },
    {
      name: 'Pastor Emeka Onuchukwu',
      role: 'Chief Operating Officer, Alkanes Oil & Gas',
      bio: "A corporate executive with extensive leadership experience whose expertise strengthens the organisation's institutional development and strategic growth.",
      image: imageEmeka
    },
    {
      name: 'Mr. Val Okafor',
      role: 'Chief Executive Officer, The Val Okafor Company',
      bio: "A leadership strategist, educator and organisational development consultant committed to raising transformational leaders across Africa. His wealth of experience in leadership training, education and human capacity development contributes significantly to DRYCI's vision of building purpose-driven young leaders.",
      image: imageVal
    },
    {
      name: 'Pastor Modestus Chukwulaka',
      role: 'Journalist, Writer & Communications Professional',
      bio: "Journalist, writer and communications professional whose experience in media, writing and public engagement enriches the organisation's strategic thinking and public communication.",
      image: imageModestus
    },
    {
      name: 'Barrister Raphael Uboegbulem',
      role: 'Legal Practitioner',
      bio: "Legal practitioner committed to strengthening the organisation's governance, accountability and institutional integrity through sound legal guidance.",
      image: undefined
    },
    {
      name: 'Pastor Charles Aba',
      role: 'Director, Ideal Schools, Nsukka',
      bio: "An experienced education administrator and youth mentor whose practical understanding of school leadership and child development contributes meaningfully to the organisation's educational programmes.",
      image: undefined
    }
  ];

  return (
    <section id="our-governance" className="py-[140px] xl:py-[180px] bg-white relative overflow-hidden">
      {/* Ambient background blur circles */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#0D47A1]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#F57C00]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Title & Subtitle */}
        <div className="max-w-5xl text-left space-y-4 mb-20">
          <span className="text-[#0D47A1] font-mono text-xs uppercase tracking-widest font-extrabold block">
            Oversight & Leadership
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-none">
            Our Governance
          </h2>
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-sans font-light opacity-90 max-w-4xl">
            Dreams to Reality Youth and Children Initiative (DRYCI) is governed by a Board of Trustees comprising respected professionals from academia, education, business, media, law and ministry.
          </p>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-sans font-light max-w-4xl">
            The Board provides strategic guidance, governance oversight and institutional accountability while supporting the long-term sustainability of the organisation. Collectively, the Board brings decades of leadership experience across education, organisational development, corporate leadership, legal practice, journalism and faith-based service.
          </p>
        </div>

        {/* Board of Trustees Subsection */}
        <div className="border-t border-slate-100 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 text-left">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Board of Trustees
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-sans font-light max-w-4xl">
                The Board of Trustees brings decades of leadership experience across education, organisational development, corporate leadership, legal practice, journalism and faith-based service, ensuring governance oversight and strategic growth.
              </p>
            </div>
          </div>

          {/* alternating cards of trustees - 2 per row on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 xl:gap-12">
            {trustees.map((trustee, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={trustee.name}
                  className="bg-slate-50 border border-slate-100/85 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-10 items-stretch h-full">
                    
                    {/* Image Column: Occupies 40% (4 of 10 cols) */}
                    <div className={`relative overflow-hidden aspect-[4/3] sm:aspect-auto min-h-[300px] sm:col-span-4 ${
                      isEven ? 'sm:order-first' : 'sm:order-last'
                    }`}>
                      {trustee.image && !imageErrors[trustee.name] ? (
                        <img
                          src={trustee.image}
                          alt={trustee.name}
                          referrerPolicy="no-referrer"
                          onError={() => {
                            setImageErrors(prev => ({ ...prev, [trustee.name]: true }));
                          }}
                          className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center text-slate-100/30 select-none p-4">
                          <span className="font-serif font-extrabold text-5xl tracking-widest block uppercase">
                            {trustee.name.split(' ').filter(n => !n.includes('.') && n !== 'Professor' && n !== 'Prof' && n !== 'Pastor' && n !== 'Barrister').map(n => n[0]).join('') || trustee.name[0]}
                          </span>
                          <span className="text-[10px] font-mono tracking-widest text-[#F57C00] font-black uppercase mt-3">
                            DRYCI TRUSTEE
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Text Column: Occupies 60% (6 of 10 cols) */}
                    <div className={`p-6 sm:p-8 xl:p-10 flex flex-col justify-center text-left sm:col-span-6 space-y-4 ${
                      isEven ? '' : 'sm:order-first'
                    }`}>
                      <div className="space-y-1.5">
                        <span className="text-[#F57C00] font-mono text-[10px] sm:text-xs uppercase tracking-widest font-extrabold block">
                          {trustee.role}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl xl:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                          {trustee.name}
                        </h4>
                      </div>
                      
                      <p className="text-slate-600 text-xs sm:text-sm xl:text-base leading-relaxed font-sans font-light">
                        {trustee.bio}
                      </p>
                      
                      <div className="pt-2 flex items-center gap-2">
                        <div className="w-5 h-0.5 bg-[#0D47A1]" />
                        <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-extrabold">
                          DRYCI Board Member
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
