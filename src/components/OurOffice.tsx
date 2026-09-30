import React, { useState } from 'react';
import { MapPin, Video, Sun, Compass, Maximize2, X } from 'lucide-react';
import officeMain from '../assets/images/santa_monica_office_main_1790532039274.jpg';
import officeBookshelf from '../assets/images/office_bookshelf_corner_1790532052035.jpg';
import officeWindow from '../assets/images/office_window_detail_1790532064568.jpg';

export const OurOffice: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    {
      src: officeMain,
      alt: 'Main seating area in Dr. Maya Reynolds therapy office with natural light and linen sofa',
      caption: 'Main Consultation Lounge · Natural light & comfortable seating',
      isPrimary: true,
    },
    {
      src: officeBookshelf,
      alt: 'Bookshelf and plant corner in Santa Monica psychology office',
      caption: 'Quiet Reflection Corner · Curated psychological library & flora',
      isPrimary: false,
    },
    {
      src: officeWindow,
      alt: 'Window light and therapy armchair detail',
      caption: 'Sunlit Window Area · Designed for grounding and nervous system regulation',
      isPrimary: false,
    },
  ];

  return (
    <section id="our-office" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
            Our Office
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mb-6">
            A Calm Space for Healing
          </h2>
          <p className="text-base sm:text-lg text-[#5A544D] leading-relaxed mb-4">
            Dr. Maya Reynolds’s Santa Monica office is a quiet, private space designed to feel calm and grounding. With natural light and a comfortable, uncluttered environment, the space offers room to slow down, settle in, and focus on the work of therapy.
          </p>
          <p className="text-sm sm:text-base text-[#6B655F] leading-relaxed">
            Clients can choose in-person sessions at the Santa Monica office or secure telehealth sessions from a private location anywhere in California.
          </p>
        </div>

        {/* Gallery Grid: One large featured image and two supporting images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-14">
          {/* Main Large Office Image */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-xl border border-[#E8DFD3] bg-[#EAE2D7] shadow-sm">
            <img
              src={officeMain}
              alt="Dr. Maya Reynolds Santa Monica therapy office main room with natural sunlight and neutral furnishings"
              className="w-full h-full min-h-[320px] sm:min-h-[440px] max-h-[540px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-white">
              <div>
                <p className="text-xs tracking-wider uppercase font-medium text-[#FAF8F5]/80">Primary Therapy Suite</p>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                  Main consultation space with diffused coastal California daylight
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(officeMain)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-white"
                aria-label="Enlarge main office photograph"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Two Stacked Supporting Images */}
          <div className="lg:col-span-4 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-6 sm:gap-8">
            {/* Supporting 1 */}
            <div className="relative group overflow-hidden rounded-xl border border-[#E8DFD3] bg-[#EAE2D7] h-[220px] sm:h-[240px] lg:h-[254px]">
              <img
                src={officeBookshelf}
                alt="Bookshelf and greenery in Dr. Maya Reynolds Santa Monica office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white">
                <p className="text-xs font-medium text-white">Curated clinical library & tranquil corner</p>
                <button
                  type="button"
                  onClick={() => setActiveImage(officeBookshelf)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-white"
                  aria-label="Enlarge bookshelf corner photo"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Supporting 2 */}
            <div className="relative group overflow-hidden rounded-xl border border-[#E8DFD3] bg-[#EAE2D7] h-[220px] sm:h-[240px] lg:h-[254px]">
              <img
                src={officeWindow}
                alt="Comfortable armchair by the window in Dr. Maya Reynolds office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white">
                <p className="text-xs font-medium text-white">Quiet seating designed for grounding</p>
                <button
                  type="button"
                  onClick={() => setActiveImage(officeWindow)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-white"
                  aria-label="Enlarge window seating photo"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Modality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-8 bg-[#F5EFE8] rounded-xl border border-[#E5DCD0]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 bg-[#FAF8F5] rounded-md text-[#324037]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium">
                  Santa Monica Office
                </h3>
                <span className="text-xs text-[#6B655F]">In-Person Psychotherapy</span>
              </div>
            </div>
            <p className="text-sm text-[#5A544D] mb-4">
              Conveniently located in Santa Monica with easy access, privacy, and dedicated peaceful consultation rooms.
            </p>
            <div className="pt-3 border-t border-[#DFD5C8] text-xs sm:text-sm font-medium text-[#24211D]">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
          </div>

          <div className="p-8 bg-[#F5EFE8] rounded-xl border border-[#E5DCD0]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 bg-[#FAF8F5] rounded-md text-[#324037]">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium">
                  Secure Telehealth
                </h3>
                <span className="text-xs text-[#6B655F]">Statewide California Access</span>
              </div>
            </div>
            <p className="text-sm text-[#5A544D] mb-4">
              High-definition, HIPAA-compliant telehealth sessions available for busy professionals and adults residing anywhere in California.
            </p>
            <div className="pt-3 border-t border-[#DFD5C8] text-xs sm:text-sm font-medium text-[#24211D]">
              <p>Availability:</p>
              <p className="text-[#586B5D]">In-person therapy and secure telehealth across California</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#D8CCC0] transition-colors focus:outline-none"
              aria-label="Close enlarged photo"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Enlarged view of Dr. Maya Reynolds Santa Monica therapy office"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
