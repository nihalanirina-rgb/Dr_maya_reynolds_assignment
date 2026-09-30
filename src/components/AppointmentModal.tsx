import React, { useState } from 'react';
import { X, Check, Calendar, Clock, MapPin, Video, Send } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFocus?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialFocus = 'Anxiety & Panic',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    format: 'in-person',
    focus: initialFocus,
    preferredTime: 'morning',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-lg rounded-2xl shadow-2xl border border-[#DFD6CA] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F2ECE4] px-6 py-5 border-b border-[#E3D9CC] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium">
              Schedule an Appointment
            </h3>
            <p className="text-xs text-[#6B655F]">
              Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6B655F] hover:text-[#24211D] hover:bg-[#E5DCD0] transition-colors focus:outline-none"
            aria-label="Close appointment modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E5ECE6] text-[#324037] flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-[#24211D]">Request Received</h4>
              <p className="text-sm text-[#5A544D] max-w-xs leading-relaxed">
                Thank you, {formData.name}. Dr. Maya Reynolds will review your consultation request and reach out directly to coordinate your initial session.
              </p>
              <div className="p-4 bg-[#F4EFEA] rounded-lg border border-[#E8DFD3] text-xs text-[#6B655F] text-left w-full mt-2">
                <p><strong>Location:</strong> {formData.format === 'in-person' ? 'Santa Monica Office (123th Street 45 W)' : 'Secure California Telehealth'}</p>
                <p className="mt-1"><strong>Focus:</strong> {formData.focus}</p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 text-sm font-medium text-white bg-[#324037] rounded-md hover:bg-[#252F28] transition-colors shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-[#4A453E] mb-1">
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs font-semibold text-[#4A453E] mb-1">
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-format" className="block text-xs font-semibold text-[#4A453E] mb-1">
                    Therapy Format
                  </label>
                  <select
                    id="modal-format"
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                  >
                    <option value="in-person">In-Person (Santa Monica)</option>
                    <option value="telehealth">Telehealth (California)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-focus" className="block text-xs font-semibold text-[#4A453E] mb-1">
                    Primary Area
                  </label>
                  <select
                    id="modal-focus"
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                  >
                    <option value="Anxiety & Panic">Anxiety & Panic</option>
                    <option value="Trauma & Past Experiences">Trauma & Past Experiences</option>
                    <option value="Burnout & Pressure">Burnout & High Pressure</option>
                    <option value="Stress & Overload">Stress & Emotional Overload</option>
                    <option value="General Support">Adult Psychotherapy</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-time" className="block text-xs font-semibold text-[#4A453E] mb-1">
                  Preferred Appointment Timing
                </label>
                <select
                  id="modal-time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D]"
                >
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="late-afternoon">Late Afternoon (4pm - 6pm)</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs font-semibold text-[#4A453E] mb-1">
                  Brief Note (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any questions or scheduling preferences..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9CEBF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#586B5D] text-[#24211D] resize-none"
                />
              </div>

              <p className="text-[11px] text-[#7A7268] leading-tight">
                All consultations are strictly confidential. Serving adults throughout California.
              </p>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#5A544D] hover:text-[#24211D] rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#324037] hover:bg-[#252F28] rounded-md transition-colors shadow-sm"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
