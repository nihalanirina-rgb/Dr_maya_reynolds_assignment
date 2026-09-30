import React from 'react';
import { Shield, Compass, HeartHandshake, Waves } from 'lucide-react';

export const HowIWork: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Warm & Collaborative',
      description:
        'Therapy is a partnership where your lived experience and goals guide our direction. You are an active participant, never a passive recipient.',
    },
    {
      icon: Compass,
      title: 'Supportive Structure with Depth',
      description:
        'Sessions provide enough intentional structure to feel anchored and productive, while preserving organic room for reflection, curiosity, and emotional depth.',
    },
    {
      icon: Waves,
      title: 'Mind & Body Integration',
      description:
        'We consider both your cognitive thought patterns and your nervous system’s physiological responses, helping you understand how tension manifests in the body.',
    },
    {
      icon: Shield,
      title: 'Carefully Paced Trauma Work',
      description:
        'When working with past impact, we prioritize safety, stabilization, and regulation first—so processing never feels overwhelming or dysregulating.',
    },
  ];

  return (
    <section id="approach" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Introduction */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
              Philosophy & Method
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mb-6 text-balance">
              A warm, collaborative, and grounded approach.
            </h2>
            <p className="text-base sm:text-lg text-[#5A544D] leading-relaxed mb-6">
              I believe therapy works best when you feel respected, understood, and actively involved in every step of the process. Rather than prescribing a one-size-fits-all formula, I blend evidence-based clinical science with genuine human empathy.
            </p>
            <p className="text-sm text-[#736C65] leading-relaxed mb-8">
              My goal is not only symptom reduction, but supporting you in cultivating lasting insight, psychological flexibility, and a more compassionate relationship with yourself.
            </p>

            <div className="p-6 bg-[#F4EFEA] rounded-xl border border-[#E8DFD3]">
              <p className="text-xs uppercase tracking-wider text-[#586B5D] font-semibold mb-2">
                Core Emphasis in Trauma Work
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-[#24211D]">
                <span>Safety</span>
                <span className="text-[#A39B92]">→</span>
                <span>Stabilization</span>
                <span className="text-[#A39B92]">→</span>
                <span>Regulation</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#FBF9F6] p-8 rounded-xl border border-[#E8DFD3] hover:border-[#D1C5B5] transition-all duration-200"
                >
                  <div className="flex items-start space-x-5">
                    <div className="p-3 bg-[#EAE2D7]/70 text-[#324037] rounded-lg shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-serif text-[#A39B92]">Step 0{index + 1}</span>
                        <h3 className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-[#5A544D] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
