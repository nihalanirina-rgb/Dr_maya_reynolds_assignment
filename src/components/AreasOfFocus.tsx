import React from 'react';

export const AreasOfFocus: React.FC = () => {
  const focusAreas = [
    {
      title: 'Anxiety',
      description: 'Navigating chronic worry, anticipatory fear, and physical symptoms of generalized anxiety.',
    },
    {
      title: 'Panic',
      description: 'Understanding acute panic surges, derealization, and restoring bodily calmness.',
    },
    {
      title: 'Trauma',
      description: 'Carefully processing single-incident shocks or complex, developmental relational trauma.',
    },
    {
      title: 'Burnout',
      description: 'Untangling professional depletion, mental exhaustion, and reconnecting with authentic vitality.',
    },
    {
      title: 'Perfectionism',
      description: 'Softening relentless internal standards and learning to accept yourself beyond productivity.',
    },
    {
      title: 'Chronic Stress',
      description: 'Managing ongoing sympathetic nervous system arousal and reducing physiological wear.',
    },
    {
      title: 'Emotional Regulation',
      description: 'Developing tools to ride out emotional waves, soothe reactivity, and cultivate steady groundedness.',
    },
    {
      title: 'High Internal Pressure',
      description: 'Addressing the constant sensation of having to hold everything together without pausing.',
    },
    {
      title: 'Effects of Past Experiences',
      description: 'Healing old emotional scripts that quietly show up in current relationships and self-worth.',
    },
  ];

  return (
    <section id="areas-of-focus" className="py-24 sm:py-32 bg-[#F6F2EC] border-y border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
            Specialized Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mb-5">
            Areas of Focus
          </h2>
          <p className="text-base sm:text-lg text-[#5A544D] leading-relaxed">
            In-depth clinical support focused on the mental and physiological patterns that keep high-achieving adults feeling stuck or overwhelmed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map((item, index) => (
            <div
              key={item.title}
              className="bg-[#FAF8F5] p-7 sm:p-8 rounded-lg border border-[#E5DDD2] hover:border-[#C9BFB2] transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-serif text-[#A39B92]">Focus Area 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#586B5D]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium tracking-tight mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5A544D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance footer note */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-[#736C65] italic font-serif">
            "These areas rarely exist in isolation. Our work looks at your experience holistically."
          </p>
        </div>
      </div>
    </section>
  );
};
