import React, { useState } from 'react';
import { STUDIO_LOCATIONS } from '../data/studioData';
import { MapPin, Clock, Navigation, Phone, MessageCircle, ArrowUpRight, Compass, CheckCircle2 } from 'lucide-react';

export const StudioLocations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('andheri-west');

  const activeStudio = STUDIO_LOCATIONS.find(s => s.id === activeTab) || STUDIO_LOCATIONS[0];

  return (
    <section id="locations" className="py-24 sm:py-32 bg-[#E5EDF0]/40 border-t border-[#DDCDBD]/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans tracking-[0.25em] text-[#A49284] uppercase block mb-3">
            05. Mumbai Studios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B]">
            Visit Our Craft Studios
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2B2B2B]/80 mt-4 leading-relaxed">
            Whether you’re seeking a weekend jewelry workshop seat with your circle or a 30-minute walk-in custom wire-wrapping session, our doors in suburban and south Mumbai are open.
          </p>
        </div>

        {/* Studio Tabs */}
        <div className="flex border-b border-[#DDCDBD] mb-12 gap-8">
          {STUDIO_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(loc.id)}
              className={`pb-4 text-sm sm:text-base font-serif transition-colors relative ${
                activeTab === loc.id
                  ? 'text-[#2B2B2B] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2B2B2B]'
                  : 'text-[#A49284] hover:text-[#2B2B2B]'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Detailed Studio Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Selected Studio Card with Soft Pastel Glow */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#F7EFE2] via-white/90 to-[#D8F5ED]/30 rounded-3xl p-8 sm:p-12 border border-[#DDCDBD] shadow-xs space-y-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[11px] font-sans tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-[#FDE8EC] text-[#964B59] mb-2 border border-[#F8C8D2]">
                  {activeStudio.neighborhood}
                </span>
                <h3 className="font-serif text-3xl text-[#2B2B2B]">{activeStudio.name}</h3>
                <p className="text-sm font-sans text-[#2B2B2B]/80 mt-1">
                  Specialty: <strong className="text-[#2B2B2B]">{activeStudio.specialty}</strong>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${activeStudio.whatsappNumber}?text=Hello%20Aura%20%26%20Ore%2C%20I%20am%20planning%20to%20visit%20the%20${encodeURIComponent(activeStudio.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#F7EFE2] bg-[#2B2B2B] hover:bg-[#CCA586] rounded-full transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Studio</span>
                </a>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#E5EDF0]/50 border border-[#DDCDBD]/60">
              <div className="space-y-1">
                <span className="text-[11px] font-sans tracking-wider uppercase text-[#A49284] font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#CCA586]" />
                  Address
                </span>
                <p className="font-sans text-sm text-[#2B2B2B] font-medium">
                  {activeStudio.address}
                </p>
                <p className="text-xs font-sans text-[#2B2B2B]/75">
                  {activeStudio.cityPostal}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-sans tracking-wider uppercase text-[#A49284] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#CCA586]" />
                  Studio Hours
                </span>
                <p className="font-sans text-sm text-[#2B2B2B] font-medium">
                  {activeStudio.hours}
                </p>
                <p className="text-xs font-sans text-[#2B2B2B]/75">
                  {activeStudio.days}
                </p>
              </div>
            </div>

            {/* Transit Guidance */}
            <div className="p-4 rounded-xl bg-[#F7EFE2] border border-[#DDCDBD]/80 flex items-start gap-3">
              <Navigation className="w-4 h-4 text-[#CCA586] shrink-0 mt-0.5" />
              <div className="text-xs font-sans text-[#2B2B2B]/80">
                <strong className="text-[#2B2B2B] block mb-0.5">Transit & Arrival:</strong>
                {activeStudio.transitGuide}
              </div>
            </div>

            {/* Studio Amenities */}
            <div className="space-y-3">
              <h4 className="font-serif text-lg text-[#2B2B2B]">Studio Features & Atmosphere</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStudio.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#2B2B2B]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CCA586] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Link Action */}
            <div className="pt-4 border-t border-[#DDCDBD]/60 flex items-center justify-between">
              <span className="text-xs font-sans text-[#A49284]">
                Call: {activeStudio.phone}
              </span>
              <a
                href={activeStudio.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-semibold tracking-wider uppercase text-[#2B2B2B] hover:text-[#CCA586] flex items-center gap-1 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Comparison Table Card (as specified in PRD Table) */}
          <div className="lg:col-span-5 bg-[#F7EFE2] rounded-3xl p-6 sm:p-8 border border-[#DDCDBD] space-y-6">
            <span className="text-xs font-sans tracking-widest text-[#A49284] uppercase block">
              Quick Studio Comparison
            </span>

            <div className="space-y-6 divide-y divide-[#DDCDBD]/60">
              {STUDIO_LOCATIONS.map((loc) => (
                <div key={loc.id} className="pt-4 first:pt-0 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg text-[#2B2B2B]">{loc.name}</h4>
                    <span className="text-[10px] font-sans tracking-wider uppercase px-2 py-0.5 bg-[#E5EDF0] text-[#2B2B2B] rounded-sm">
                      {loc.id === 'andheri-west' ? 'Workshop Hub' : 'Walk-in Bar'}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-[#2B2B2B]/80">
                    {loc.address}, {loc.cityPostal}
                  </p>
                  <p className="text-[11px] font-sans text-[#A49284]">
                    Hours: {loc.hours} ({loc.days})
                  </p>
                  <p className="text-xs font-sans text-[#2B2B2B]">
                    <strong>Specialty:</strong> {loc.specialty}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#DDCDBD]/60 text-center">
              <p className="text-[11px] font-sans text-[#A49284]">
                Both studios accept card, UPI, and cash. Complimentary tea and mineral consultations with every visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
