import React from 'react';
import { Instagram, MessageCircle, MapPin, ArrowUpRight, Compass, Sparkles, Layers } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAssetDesk: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAssetDesk }) => {
  return (
    <footer className="bg-[#A49284] text-[#F7EFE2] pt-20 pb-12 border-t border-[#A49284]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F7EFE2]/20">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl sm:text-4xl text-[#F7EFE2] block tracking-wider">
              Aura & Ore
            </span>
            <p className="font-sans text-sm text-[#F7EFE2]/90 leading-relaxed max-w-sm">
              Artisanal Gemstone & Jewelry Studio. Hands-on wire-wrapping workshops, ethical mine sourcing, and walk-in custom talisman bars in Mumbai.
            </p>
            <div className="pt-2 text-xs font-sans text-[#F7EFE2]/80 space-y-1">
              <p>· Andheri West Studio: Lokhandwala Complex, Mumbai 400053</p>
              <p>· Colaba Causeway Studio: Near Regal Cinema, Mumbai 400005</p>
              <p>· Hours: Tuesday – Sunday | 11:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#F7EFE2]/70 font-semibold">
              Studio Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans text-[#F7EFE2]">
              <li>
                <a href="#origins" className="hover:underline underline-offset-4">Brand Story & Origins</a>
              </li>
              <li>
                <a href="#gemstones" className="hover:underline underline-offset-4">Gemstone Directory</a>
              </li>
              <li>
                <a href="#workshops" className="hover:underline underline-offset-4">Weekend Workshops</a>
              </li>
              <li>
                <a href="#custom-bar" className="hover:underline underline-offset-4">Custom Wire-Wrapping Bar</a>
              </li>
              <li>
                <a href="#locations" className="hover:underline underline-offset-4">Studio Locations & Hours</a>
              </li>
            </ul>
          </div>

          {/* Contact & Community */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#F7EFE2]/70 font-semibold">
              Connect & Inquire
            </h4>
            
            <div className="space-y-2.5 text-xs font-sans">
              <a
                href="https://wa.me/919820084729?text=Hello%20Aura%20%26%20Ore%2C%20I%20have%20an%20inquiry%20regarding%20workshops"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F7EFE2] hover:text-[#2B2B2B] bg-[#F7EFE2]/10 hover:bg-[#F7EFE2] p-3 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="font-semibold">WhatsApp Workshop Inquiries (+91 98200 84729)</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F7EFE2] hover:text-[#2B2B2B] bg-[#F7EFE2]/10 hover:bg-[#F7EFE2] p-3 rounded-xl transition-all"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>Instagram: @auraandore.studio</span>
              </a>

              <a
                href="#locations"
                className="flex items-center gap-2 text-[#F7EFE2] hover:text-[#2B2B2B] bg-[#F7EFE2]/10 hover:bg-[#F7EFE2] p-3 rounded-xl transition-all"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Get Directions: Andheri & Colaba Studios</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAssetDesk}
                className="text-[11px] font-sans tracking-wider uppercase text-[#F7EFE2]/80 hover:text-[#F7EFE2] flex items-center gap-1.5 underline underline-offset-4"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Studio Asset Desk · 16 PRD Photo Slots</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Design System Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#F7EFE2]/75 gap-4">
          <p>© {new Date().getFullYear()} Aura & Ore Artisanal Gemstone Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <span>Safira March & Josefin Sans</span>
            <span>·</span>
            <span>Coastal Girl System</span>
            <span>·</span>
            <span>Studio Solen Aesthetic</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
