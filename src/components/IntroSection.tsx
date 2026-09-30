import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section id="introduction" className="py-20 sm:py-28 bg-[#F4EFEA] border-y border-[#E8DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
          Welcome & Approach
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#24211D] font-normal tracking-tight mb-8 text-balance">
          You don't have to keep carrying everything on your own.
        </h2>

        <div className="space-y-5 text-base sm:text-lg text-[#4E4841] leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>
            Many of the adults I work with are high-achieving, thoughtful, and deeply self-aware. On the outside, you may appear steady, capable, and composed—managing daily responsibilities, work, and relationships without showing the strain.
          </p>
          <p>
            Yet on the inside, it can feel like a quiet, exhausting cycle: persistent anxiety, looping thoughts, physical tension, and a persistent feeling that you are constantly bracing for what comes next. Others are carrying the lingering effects of earlier life experiences that continue to shape their emotional safety, relationships, and confidence.
          </p>
          <p className="font-serif text-xl sm:text-2xl text-[#24211D] italic pt-3">
            "Therapy provides a grounded, supportive space to pause, untangle what you are experiencing, and find lasting relief."
          </p>
        </div>

        {/* Quiet experiential anchors */}
        <div className="mt-12 pt-10 border-t border-[#DFD5C8] grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-left">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-[#6B655F]">Recognizing</span>
            <span className="text-sm font-medium text-[#24211D] mt-1">High-Functioning Anxiety</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-[#6B655F]">Navigating</span>
            <span className="text-sm font-medium text-[#24211D] mt-1">Unprocessed Trauma</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col">
            <span className="text-xs uppercase tracking-wider text-[#6B655F]">Rebuilding</span>
            <span className="text-sm font-medium text-[#24211D] mt-1">Nervous System Ease</span>
          </div>
        </div>
      </div>
    </section>
  );
};
