/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { WhoIHelp } from './components/WhoIHelp';
import { AreasOfFocus } from './components/AreasOfFocus';
import { HowIWork } from './components/HowIWork';
import { TherapeuticApproaches } from './components/TherapeuticApproaches';
import { OurOffice } from './components/OurOffice';
import { AboutTherapist } from './components/AboutTherapist';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Anxiety & Panic');

  const handleOpenBooking = () => {
    setModalOpen(true);
  };

  const handleSelectCategory = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    // Smooth scroll down to contact section or open modal
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const topOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#24211D]">
      {/* 1. Header / Navigation */}
      <Navbar onBookClick={handleOpenBooking} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onBookClick={handleOpenBooking} />

        {/* 3. Introduction / Welcome */}
        <IntroSection />

        {/* 4. Who I Help */}
        <WhoIHelp onSelectCategory={handleSelectCategory} />

        {/* 5. Areas of Focus */}
        <AreasOfFocus />

        {/* 6. How I Work */}
        <HowIWork />

        {/* 7. Therapeutic Approaches */}
        <TherapeuticApproaches />

        {/* 8. Our Office */}
        <OurOffice />

        {/* 9. About Dr. Maya Reynolds */}
        <AboutTherapist onBookClick={handleOpenBooking} />

        {/* 10. Final Call to Action */}
        <FinalCTA
          onBookClick={handleOpenBooking}
          preselectedCategory={selectedCategory}
        />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Appointment Consultation Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialFocus={selectedCategory}
      />
    </div>
  );
}
