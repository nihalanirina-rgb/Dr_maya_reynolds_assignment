import React from 'react';
import { MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Areas of Focus', href: '#areas-of-focus' },
    { label: 'Approach', href: '#approach' },
    { label: 'Our Office', href: '#our-office' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#24211D] text-[#D8CCC0] pt-16 pb-12 border-t border-[#3A352F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#3A352F]">
          {/* Practice Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl text-[#FAF8F5] font-medium tracking-tight block">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="text-xs uppercase tracking-widest text-[#9C9286] font-medium">
                Licensed Clinical Psychologist
              </span>
            </div>
            <p className="text-sm text-[#A89E92] leading-relaxed max-w-sm">
              Providing compassionate, evidence-based psychotherapy for adults navigating anxiety, panic, trauma, burnout, and internal pressure.
            </p>
            <div className="pt-2 text-xs text-[#8C8276] space-y-1">
              <p>In-Person Therapy: Santa Monica Office</p>
              <p>Telehealth: Secure virtual care across California</p>
            </div>
          </div>

          {/* Location & Practice Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Practice Location
            </h4>
            <div className="text-sm text-[#BFB4A7] space-y-1.5">
              <p className="font-medium text-[#FAF8F5]">Santa Monica Office</p>
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="pt-3 text-xs text-[#8C8276]">
              <p>Individual Psychotherapy for Adults</p>
              <p>Available by appointment only</p>
            </div>
          </div>

          {/* Homepage Section Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FAF8F5] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-[#BFB4A7] hover:text-[#FAF8F5] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clinical Emergency Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[#8C8276] gap-4">
          <p className="max-w-2xl leading-relaxed">
            <strong className="text-[#A89E92]">Crisis Disclaimer:</strong> If you are experiencing a mental health emergency, suicidal ideation, or need immediate assistance, please call or text 988 to connect with the Suicide & Crisis Lifeline, dial 911, or proceed to the nearest emergency room.
          </p>

          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
