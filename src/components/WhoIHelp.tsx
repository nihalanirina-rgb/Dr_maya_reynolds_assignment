import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WhoIHelpProps {
  onSelectCategory?: (category: string) => void;
}

export const WhoIHelp: React.FC<WhoIHelpProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'anxiety-panic',
      title: 'Anxiety & Panic',
      subtitle: 'Finding ease and quieting the alarm system',
      description:
        'Adults dealing with persistent worry, overthinking, panic, physical tension, or difficulty feeling at ease in their everyday environment.',
      symptoms: ['Constant racing thoughts', 'Physical muscle tension & rapid heartbeat', 'Trouble unwinding or sleeping'],
    },
    {
      id: 'trauma-past',
      title: 'Trauma & Past Experiences',
      subtitle: 'Safe, carefully paced resolution',
      description:
        'Adults navigating the lingering effects of single-incident trauma, childhood experiences, relational wounds, or chronic emotional stress.',
      symptoms: ['Hypervigilance & bracing for impact', 'Intrusive emotional triggers', 'Feeling disconnected from safety'],
    },
    {
      id: 'burnout-pressure',
      title: 'Burnout & High Internal Pressure',
      subtitle: 'Reclaiming vitality and self-connection',
      description:
        'Professionals, entrepreneurs, creatives, and high-achieving adults experiencing exhaustion, relentless perfectionism, or disconnection from themselves.',
      symptoms: ['Chronic mental fatigue', 'Inner critic and fear of falling short', 'Loss of joy despite achievement'],
    },
    {
      id: 'stress-overload',
      title: 'Stress & Emotional Overload',
      subtitle: 'Restoring regulation and mental space',
      description:
        'Adults who feel overwhelmed, emotionally on edge, or unable to slow down—frequently maintaining an appearance of high functioning on the outside.',
      symptoms: ['Feeling emotionally depleted', 'Irritability under surface composure', 'Difficulty creating boundary buffers'],
    },
  ];

  return (
    <section id="who-i-help" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
            Client Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mb-5 text-balance">
            Therapy tailored for thoughtful, high-striving adults.
          </h2>
          <p className="text-base sm:text-lg text-[#5A544D] leading-relaxed">
            I specialize in working with adults who may appear functional externally while quietly coping with intense internal pressure, distress, or past impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((card, idx) => (
            <div
              key={card.id}
              className="group relative bg-[#FBF9F6] p-8 sm:p-10 rounded-xl border border-[#E8DFD3] hover:border-[#C4B7A5] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.07)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-serif italic text-[#8B8378]">0{idx + 1}</span>
                  <span className="text-xs font-medium text-[#586B5D]">{card.subtitle}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#24211D] font-medium tracking-tight mb-4 group-hover:text-[#324037] transition-colors">
                  {card.title}
                </h3>

                <p className="text-base text-[#5A544D] leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="pt-4 border-t border-[#EFE8DF]">
                  <p className="text-xs uppercase tracking-wider text-[#8B8378] font-semibold mb-2.5">
                    Common Experiences
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A453E]">
                    {card.symptoms.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#586B5D] mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {onSelectCategory && (
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(card.title)}
                    className="inline-flex items-center text-xs font-semibold text-[#324037] group-hover:text-[#1F2722] transition-colors"
                  >
                    Discuss this in therapy
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
