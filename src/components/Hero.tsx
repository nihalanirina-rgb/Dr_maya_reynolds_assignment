import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import mayaPortrait from '../assets/images/maya_image.jpg';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const handleLearnMore = () => {
    const el = document.getElementById('introduction');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background architectural wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8DDE0] via-[#F6F1EA]/70 to-[#E8DDE0] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location & Modality trust line without pill wrappers */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#36434B] mb-5">
              <span>Santa Monica, California</span>
              <span aria-hidden="true" className="text-[#A39B92]">·</span>
              <span>In-Person Therapy</span>
              <span aria-hidden="true" className="text-[#A39B92]">·</span>
              <span>California Telehealth</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] text-[#24211D] font-normal tracking-tight mb-6 max-w-2xl text-balance">
              Find steadiness, clarity, and a deeper sense of yourself.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5A544D] leading-relaxed max-w-xl mb-9">
              Therapy for adults navigating anxiety, trauma, burnout, and the pressures of a fast-paced life. A grounded, thoughtful space to slow down, untangle emotional tension, and rebuild inner resilience.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-[#324037] hover:bg-[#252F28] rounded-md transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#324037]"
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                type="button"
                onClick={handleLearnMore}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#3B3630] hover:text-[#24211D] bg-[#F3EDE5] hover:bg-[#ECE4D8] border border-[#E0D7CB] rounded-md transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#586B5D]"
              >
                Learn More
              </button>
            </div>

            {/* Subtle editorial trust details */}
            <div className="pt-6 border-t border-[#E8E0D5] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#6B655F]">
              <div>
                <span className="block font-semibold text-[#24211D] text-sm font-serif">Adults Only</span>
                <span>Individual psychotherapy</span>
              </div>
              <div>
                <span className="block font-semibold text-[#24211D] text-sm font-serif">Integrative Care</span>
                <span>CBT, EMDR & somatic</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-semibold text-[#24211D] text-sm font-serif">Flexible Format</span>
                <span>In-person or secure video</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Column: Dr. Maya Reynolds Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Soft decorative background panel */}
              <div className="absolute -inset-3 bg-[#EAE2D7]/60 rounded-2xl transform rotate-1 -z-10" />

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-xl bg-[#F0EAE1] shadow-[0_12px_36px_-8px_rgba(0,0,0,0.08)] border border-[#E8DFD3]">
                <img
                  src={mayaPortrait}
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 hover:scale-[1.01]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Elegant overlay caption box */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#24211D]/90 via-[#24211D]/60 to-transparent p-5 text-white">
                  <p className="font-serif text-lg font-medium tracking-wide">Dr. Maya Reynolds, PsyD</p>
                  <p className="text-xs text-[#E8E0D5] font-light">
                    Licensed Clinical Psychologist · Santa Monica, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
