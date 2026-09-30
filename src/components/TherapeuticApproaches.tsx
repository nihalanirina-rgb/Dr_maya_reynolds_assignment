import React from 'react';
import { Brain, Eye, Sparkles, Activity } from 'lucide-react';

export const TherapeuticApproaches: React.FC = () => {
  const approaches = [
    {
      code: 'CBT',
      name: 'Cognitive Behavioral Therapy',
      icon: Brain,
      summary:
        'A practical, evidence-based modality that identifies and reframes unproductive thought loops, catastrophic assumptions, and behaviors sustaining anxiety.',
      benefit: 'Builds actionable cognitive flexibility and clarity in daily high-stress situations.',
    },
    {
      code: 'EMDR',
      name: 'Eye Movement Desensitization & Reprocessing',
      icon: Eye,
      summary:
        'A specialized, trauma-focused protocol that uses bilateral stimulation to safely reprocess distressing memories and release their emotional charge.',
      benefit: 'Helps the brain metabolize past wounds without requiring you to re-live the trauma in detail.',
    },
    {
      code: 'Mindfulness',
      name: 'Mindfulness-Based Practices',
      icon: Sparkles,
      summary:
        'Grounding exercises and attentional training designed to untangle you from automatic reactivity, bringing steady calm to the present moment.',
      benefit: 'Strengthens self-awareness and soothes racing mental narratives.',
    },
    {
      code: 'Body-Oriented',
      name: 'Body-Oriented Techniques',
      icon: Activity,
      summary:
        'Somatic and physiological practices that consider physical and emotional experiences together, releasing stored tension and regulating autonomic arousal.',
      benefit: 'Connects the cognitive mind with bodily safety and physical ease.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F5EFE8] border-y border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
            Evidence-Based Modalities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mb-5 text-balance">
            Approaches that support meaningful change.
          </h2>
          <p className="text-base sm:text-lg text-[#5A544D] leading-relaxed">
            I integrate scientifically validated therapeutic modalities tailored to your unique internal landscape, pacing, and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {approaches.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="bg-[#FAF8F5] p-8 rounded-xl border border-[#E3D9CC] hover:border-[#BFAF9C] transition-all duration-300 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-sm font-semibold tracking-wider text-[#586B5D] uppercase">
                      {item.code}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#EDE4D8] flex items-center justify-center text-[#324037]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium tracking-tight mb-3">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#5A544D] leading-relaxed mb-5">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE3D7] text-xs text-[#736C65] italic">
                  {item.benefit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
