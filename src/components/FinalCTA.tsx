import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Video, Send } from 'lucide-react';

interface FinalCTAProps {
  onBookClick: () => void;
  preselectedCategory?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick, preselectedCategory }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    format: 'in-person', // in-person or telehealth
    focus: preselectedCategory || 'Anxiety & Panic',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3EDE5] rounded-2xl border border-[#DFD6CA] p-8 sm:p-12 lg:p-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#586B5D] mb-3 block">
                  Begin Therapy
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mb-6 text-balance">
                  Ready to take the next step?
                </h2>
                <p className="text-base sm:text-lg text-[#5A544D] leading-relaxed mb-6">
                  Therapy can offer a space to slow down, understand what you're experiencing, and develop more sustainable ways of living and working.
                </p>
                <p className="text-sm text-[#736C65] leading-relaxed mb-8">
                  Whether you are seeking in-person sessions at the Santa Monica office or convenient, secure telehealth anywhere across California, I invite you to reach out to schedule an initial consultation.
                </p>

                {/* Practical details */}
                <div className="space-y-3 pt-6 border-t border-[#D9CEBF] text-xs sm:text-sm text-[#3E3832]">
                  <div className="flex items-center space-x-2.5">
                    <MapPin className="w-4 h-4 text-[#586B5D] shrink-0" />
                    <span>Santa Monica Office: 123th Street 45 W, Santa Monica, CA 90401</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Video className="w-4 h-4 text-[#586B5D] shrink-0" />
                    <span>Statewide Secure Video: Available for clients throughout California</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#324037] hover:bg-[#252F28] rounded-md transition-colors shadow-sm"
                >
                  Open Appointment Scheduler
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Request Form */}
            <div className="lg:col-span-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-xl border border-[#E0D7CB]">
              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#E5ECE6] text-[#324037] flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#24211D]">Inquiry Received</h3>
                  <p className="text-sm text-[#5A544D] max-w-sm">
                    Thank you, {formData.name}. Dr. Maya Reynolds will review your inquiry and follow up promptly regarding appointment availability.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        format: 'in-person',
                        focus: 'Anxiety & Panic',
                        message: '',
                      });
                    }}
                    className="mt-4 text-xs font-semibold text-[#586B5D] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium mb-1">
                    Request an Initial Consultation
                  </h3>
                  <p className="text-xs text-[#736C65] mb-4">
                    Share a brief note about what brings you in and your preferred session format.
                  </p>

                  <div>
                    <label htmlFor="client-name" className="block text-xs font-medium text-[#4A453E] mb-1">
                      Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-email" className="block text-xs font-medium text-[#4A453E] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="session-format" className="block text-xs font-medium text-[#4A453E] mb-1">
                        Preferred Location
                      </label>
                      <select
                        id="session-format"
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                      >
                        <option value="in-person">In-Person (Santa Monica)</option>
                        <option value="telehealth">Telehealth (California)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="primary-focus" className="block text-xs font-medium text-[#4A453E] mb-1">
                        Primary Focus
                      </label>
                      <select
                        id="primary-focus"
                        value={formData.focus}
                        onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                      >
                        <option value="Anxiety & Panic">Anxiety & Panic</option>
                        <option value="Trauma & Past Experiences">Trauma & Past Experiences</option>
                        <option value="Burnout & Pressure">Burnout & High Pressure</option>
                        <option value="Stress & Overload">Stress & Emotional Overload</option>
                        <option value="Other">Other Individual Therapy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="client-notes" className="block text-xs font-medium text-[#4A453E] mb-1">
                      Brief Message or Questions (Optional)
                    </label>
                    <textarea
                      id="client-notes"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What would you like to focus on during our initial conversation?"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D] resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-[#8C847B] leading-tight">
                    * Inquiries are confidential. For psychological emergencies, please call or text 988 or go to the nearest emergency room.
                  </p>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#324037] hover:bg-[#252F28] rounded-md transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Appointment Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
