import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_LOCATIONS, WORKSHOP_PROGRAMS } from '../data/studioData';

interface WorkshopBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStone?: string;
  initialWorkshopId?: string;
}

export const WorkshopBookingModal: React.FC<WorkshopBookingModalProps> = ({
  isOpen,
  onClose,
  initialStone,
  initialWorkshopId,
}) => {
  const [selectedStudio, setSelectedStudio] = useState<string>('andheri-west');
  const [selectedProgram, setSelectedProgram] = useState<string>(initialWorkshopId || 'workshop-stack-bracelets');
  const [dateOption, setDateOption] = useState<string>('Upcoming Saturday');
  const [timeSlot, setTimeSlot] = useState<string>('11:30 AM – 2:00 PM');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [notes, setNotes] = useState<string>(initialStone ? `Interested in crafting with ${initialStone}` : '');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const studio = STUDIO_LOCATIONS.find(s => s.id === selectedStudio) || STUDIO_LOCATIONS[0];
  const program = WORKSHOP_PROGRAMS.find(p => p.id === selectedProgram) || WORKSHOP_PROGRAMS[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `✨ *Aura & Ore Studio Workshop Booking Request* ✨
    
📍 *Studio:* ${studio.name} (${studio.neighborhood})
🔨 *Workshop:* ${program.title}
👥 *Party Size:* ${guestCount} ${guestCount === 1 ? 'Guest' : 'Guests (Friends & Group Session)'}
🗓️ *Preferred Day:* ${dateOption}
⏰ *Time Slot:* ${timeSlot}
👤 *Name:* ${guestName || 'Inquirer'}
💎 *Notes / Stones:* ${notes || 'Open to bench recommendations'}

Please confirm bench availability for our session!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${studio.whatsappNumber}?text=${encoded}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B2B2B]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#F7EFE2] rounded-3xl border border-[#DDCDBD] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#DDCDBD]/60 bg-[#F7EFE2]">
          <div>
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#A49284] uppercase block">
              Weekend Workshop Reservation
            </span>
            <h3 className="font-serif text-2xl text-[#2B2B2B]">Book Your Bench</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#2B2B2B] hover:text-[#CCA586] rounded-full hover:bg-[#E5EDF0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleWhatsAppBooking} className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Studio Selection */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#A49284] mb-2 font-medium">
                1. Select Studio Location
              </label>
              <div className="grid grid-cols-2 gap-3">
                {STUDIO_LOCATIONS.map((loc) => (
                  <button
                    type="button"
                    key={loc.id}
                    onClick={() => setSelectedStudio(loc.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      selectedStudio === loc.id
                        ? 'border-[#2B2B2B] bg-[#E5EDF0] shadow-xs'
                        : 'border-[#DDCDBD] bg-[#F7EFE2] hover:border-[#CCA586]'
                    }`}
                  >
                    <span className="font-serif text-sm block text-[#2B2B2B] font-semibold">{loc.name}</span>
                    <span className="text-[11px] font-sans text-[#A49284] block mt-0.5">{loc.specialty}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Workshop Session Selection */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#A49284] mb-2 font-medium">
                2. Select Crafting Program
              </label>
              <div className="space-y-2">
                {WORKSHOP_PROGRAMS.map((prog) => (
                  <button
                    type="button"
                    key={prog.id}
                    onClick={() => setSelectedProgram(prog.id)}
                    className={`w-full p-3.5 rounded-2xl text-left border flex items-center justify-between transition-all ${
                      selectedProgram === prog.id
                        ? 'border-[#2B2B2B] bg-[#E5EDF0] shadow-xs'
                        : 'border-[#DDCDBD] bg-[#F7EFE2] hover:border-[#CCA586]'
                    }`}
                  >
                    <div>
                      <span className="font-serif text-sm text-[#2B2B2B] font-semibold block">{prog.title}</span>
                      <span className="text-[11px] font-sans text-[#A49284]">{prog.duration} · {prog.batchSize}</span>
                    </div>
                    <span className="text-xs font-sans font-bold text-[#2B2B2B]">{prog.pricePerSeat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guests & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#A49284] mb-1.5 font-medium">
                  Party Size (Max 8)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setGuestCount(num)}
                      className={`flex-1 py-2 text-xs font-sans font-medium rounded-xl border transition-colors ${
                        guestCount === num
                          ? 'bg-[#2B2B2B] text-[#F7EFE2] border-[#2B2B2B]'
                          : 'bg-[#F7EFE2] text-[#2B2B2B] border-[#DDCDBD] hover:border-[#CCA586]'
                      }`}
                    >
                      {num === 2 ? '2 (Duo)' : num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#A49284] mb-1.5 font-medium">
                  Preferred Day
                </label>
                <select
                  value={dateOption}
                  onChange={(e) => setDateOption(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-sans bg-[#F7EFE2] border border-[#DDCDBD] rounded-xl focus:outline-hidden focus:border-[#2B2B2B]"
                >
                  <option value="Upcoming Saturday">Upcoming Saturday</option>
                  <option value="Upcoming Sunday">Upcoming Sunday</option>
                  <option value="Next Weekend">Next Weekend</option>
                  <option value="Private Weekday Request">Private Weekday Request</option>
                </select>
              </div>
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-xs font-sans tracking-wider uppercase text-[#A49284] mb-1.5 font-medium">
                Time Slot
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['11:30 AM – 2:00 PM (Morning)', '4:00 PM – 6:30 PM (Sunset)'].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    className={`py-2 px-3 text-xs font-sans rounded-xl border transition-colors ${
                      timeSlot === slot
                        ? 'bg-[#2B2B2B] text-[#F7EFE2] border-[#2B2B2B]'
                        : 'bg-[#F7EFE2] text-[#2B2B2B] border-[#DDCDBD] hover:border-[#CCA586]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Custom Note */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#A49284] mb-1 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Mehta"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs font-sans bg-[#F7EFE2] border border-[#DDCDBD] rounded-xl focus:outline-hidden focus:border-[#2B2B2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider uppercase text-[#A49284] mb-1 font-medium">
                  Notes (Stones of interest, celebrations)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration with best friend; love raw aquamarine"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs font-sans bg-[#F7EFE2] border border-[#DDCDBD] rounded-xl focus:outline-hidden focus:border-[#2B2B2B]"
                />
              </div>
            </div>

            {/* WhatsApp CTA Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 text-xs font-sans font-semibold tracking-widest uppercase text-[#F7EFE2] bg-[#2B2B2B] hover:bg-[#CCA586] rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Continue to WhatsApp Booking</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] font-sans text-center text-[#A49284] mt-2.5">
                Opens directly with your details pre-filled to reserve bench seating with our studio concierge.
              </p>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E5EDF0] text-[#2B2B2B] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#CCA586]" />
            </div>
            <h4 className="font-serif text-2xl text-[#2B2B2B]">Connecting with Studio Concierge</h4>
            <p className="text-sm font-sans text-[#2B2B2B]/80 max-w-sm mx-auto">
              Your session details for <strong>{program.title}</strong> at {studio.name} have been formatted for WhatsApp.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-sans tracking-widest uppercase bg-[#2B2B2B] text-[#F7EFE2] rounded-full"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
