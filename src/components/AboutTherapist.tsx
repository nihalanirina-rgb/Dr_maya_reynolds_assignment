import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import mayaPortrait from '../assets/images/maya_image.jpg';

interface AboutTherapistProps {
  onBookClick: () => void;
}

export const AboutTherapist: React.FC<AboutTherapistProps> = ({ onBookClick }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F6F2EC] border-y border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-[#E5DCD0]/70 rounded-2xl transform -rotate-1 -z-10" />
              <div className="overflow-hidden rounded-xl border border-[#D9CFC4] bg-[#F2ECE4] shadow-md">
                <img
                  src={mayaPortrait}
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  className="w-full h-auto object-cover aspect-[3/4]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quiet credential tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#736C65] px-1">
                <span>Dr. Maya Reynolds, PsyD</span>
                <span className="text-[#586B5D] font-medium">Licensed Clinical Psychologist</span>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
              Clinical Background
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mb-6">
              Meet Dr. Maya Reynolds
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#4E4841] leading-relaxed mb-8">
              <p>
                I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              <p>
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. My approach is warm, collaborative, and grounded. I integrate cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
              </p>
              <p>
                I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop deep insight, resilience, and a stronger, more sustainable relationship with yourself over time.
              </p>
            </div>

            {/* Core commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 text-sm text-[#3E3832]">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#586B5D] mt-0.5 shrink-0" />
                <span>Paced, regulated trauma processing</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#586B5D] mt-0.5 shrink-0" />
                <span>Mind & body integration</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#586B5D] mt-0.5 shrink-0" />
                <span>Santa Monica office & secure telehealth</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#586B5D] mt-0.5 shrink-0" />
                <span>Adult-focused individual practice</span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center px-6 py-3.5 text-sm font-medium text-white bg-[#324037] hover:bg-[#252F28] rounded-md transition-all duration-200 shadow-sm hover:shadow"
              >
                Schedule an Initial Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
