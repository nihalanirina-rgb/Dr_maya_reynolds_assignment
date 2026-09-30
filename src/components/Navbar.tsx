import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Areas of Focus', href: '#areas-of-focus' },
    { label: 'Approach', href: '#approach' },
    { label: 'Our Office', href: '#our-office' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border-b border-[#E8E0D5]/70 py-3.5'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#E8E0D5]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Zone: Clean wordmark with psychologist credentials */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#586B5D] rounded-sm"
          >
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#24211D] group-hover:text-[#445649] transition-colors">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="text-[11px] sm:text-xs font-normal tracking-wider uppercase text-[#6B655F]">
              Licensed Clinical Psychologist
            </span>
          </a>

          {/* Nav Links: Clean typography with subtle hover interaction */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#4A453E] hover:text-[#24211D] relative py-1 transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#445649]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#445649] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Zone: Primary CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#324037] hover:bg-[#252F28] rounded-md transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#324037]"
            >
              Book an Appointment
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              type="button"
              onClick={onBookClick}
              className="px-3 py-1.5 text-xs font-medium text-[#FAF8F5] bg-[#324037] rounded-md"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3B3630] hover:text-[#24211D] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#445649]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E0D5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#3B3630] hover:text-[#24211D] hover:bg-[#F4EFEA] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8E0D5]/70 flex flex-col space-y-2">
            <div className="flex items-center text-xs text-[#6B655F] px-3">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#586B5D]" />
              Santa Monica, CA & Statewide Telehealth
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-[#324037] rounded-md shadow-sm"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
