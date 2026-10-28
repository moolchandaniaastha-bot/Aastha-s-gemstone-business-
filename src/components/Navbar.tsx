import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ORIGINS', href: '#origins' },
    { label: 'GEMSTONES', href: '#gemstones' },
    { label: 'WORKSHOPS', href: '#workshops' },
    { label: 'CUSTOM BAR', href: '#custom-bar' },
    { label: 'LOCATIONS', href: '#locations' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7EFE2]/90 backdrop-blur-md border-b border-[#DDCDBD]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark, single element, Safira March aesthetic */}
        <a 
          href="#" 
          className="font-serif text-2xl sm:text-3xl tracking-wider text-[#2B2B2B] hover:text-[#CCA586] transition-colors whitespace-nowrap shrink-0"
        >
          Aura & Ore
        </a>

        {/* Zone 2: Clean 5 nav links (Josefin Sans, Caps, tracked out) */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-sans font-medium tracking-[0.2em] text-[#2B2B2B]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#CCA586] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#CCA586] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase text-[#F7EFE2] bg-[#2B2B2B] hover:bg-[#CCA586] rounded-full transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs"
          >
            <span>Book Your Bench</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 text-[11px] font-sans font-semibold tracking-wider uppercase text-[#F7EFE2] bg-[#2B2B2B] rounded-full whitespace-nowrap"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2B2B2B] hover:text-[#CCA586] focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7EFE2] border-b border-[#DDCDBD] px-6 py-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-5 text-sm font-sans tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#2B2B2B] hover:text-[#CCA586] py-1 border-b border-[#DDCDBD]/30"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-sans font-semibold tracking-widest uppercase text-[#F7EFE2] bg-[#2B2B2B] rounded-full text-center flex items-center justify-center gap-2"
              >
                <span>Book Your Bench via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
