import React from 'react';
import { ArrowDown, Sparkles, MapPin, Calendar, Compass } from 'lucide-react';
import { StudioImage } from './StudioImage';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7EFE2]">
      {/* Dreamy Ambient Pastel Aura Gradients in background */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FDE8EC]/60 to-[#ECE4F9]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-gradient-to-tl from-[#D8F5ED]/60 via-[#DCEDF9]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-3 text-xs font-sans tracking-[0.25em] text-[#A49284] uppercase">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8EC] text-[#964B59] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#EFAFAF]" />
                Artisanal Studio
              </span>
              <span className="text-[#CCA586]">·</span>
              <span>Andheri West & Colaba</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] text-[#2B2B2B] tracking-tight text-balance">
              Crafted by Nature.{' '}
              <span className="italic font-normal block text-[#CCA586]">
                Shaped by You.
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#2B2B2B]/85 font-light leading-relaxed max-w-xl">
              Artisanal gemstone jewelry and hands-on crafting workshops in Mumbai.
              Experience conscious stone sourcing, slow wire-wrapping, and the joy of hand-forging your own talisman with friends in dreamy mineral pastels.
            </p>

            {/* Natural Pastel Swatch Strip */}
            <div className="p-3.5 bg-white/70 backdrop-blur-md rounded-2xl border border-[#DDCDBD]/60 max-w-xl shadow-xs">
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#A49284] block mb-2 font-medium">
                Our Mineral Pastel Spectrum
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {[
                  { name: 'Rose Tourmaline', color: 'bg-[#FDE8EC]', border: 'border-[#F8C8D2]', text: 'text-[#964B59]' },
                  { name: 'Peruvian Amazonite', color: 'bg-[#D8F5ED]', border: 'border-[#B4E8DB]', text: 'text-[#2D6E5D]' },
                  { name: 'Ocean Aquamarine', color: 'bg-[#DCEDF9]', border: 'border-[#BDDDF3]', text: 'text-[#3E6C8C]' },
                  { name: 'Lilac Opal', color: 'bg-[#ECE4F9]', border: 'border-[#D4C3F0]', text: 'text-[#64498C]' },
                  { name: 'Sage Emerald', color: 'bg-[#E2EFE0]', border: 'border-[#C2DFC0]', text: 'text-[#416B45]' },
                  { name: 'Sunstone Peach', color: 'bg-[#FDE8DC]', border: 'border-[#F8CDB7]', text: 'text-[#8C583B]' },
                ].map((swatch) => (
                  <a
                    key={swatch.name}
                    href="#gemstones"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${swatch.color} ${swatch.border} border text-[11px] font-sans ${swatch.text} whitespace-nowrap hover:scale-105 transition-transform`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                    <span>{swatch.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 text-xs font-sans font-semibold tracking-widest uppercase text-[#F7EFE2] bg-[#2B2B2B] hover:bg-[#CCA586] rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book Your Bench
              </button>
              
              <a
                href="#gemstones"
                className="px-7 py-4 text-xs font-sans font-medium tracking-widest uppercase text-[#2B2B2B] hover:text-[#CCA586] border border-[#2B2B2B]/20 hover:border-[#CCA586] rounded-full transition-colors bg-white/40"
              >
                Explore Gemstones
              </a>
            </div>

            {/* Studio Solen Clean Value Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#DDCDBD]/60 max-w-xl">
              <div>
                <span className="block font-serif text-2xl text-[#2B2B2B]">100%</span>
                <span className="text-xs font-sans text-[#A49284] uppercase tracking-wider block mt-1">Ethical Mines</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#2B2B2B]">6–8</span>
                <span className="text-xs font-sans text-[#A49284] uppercase tracking-wider block mt-1">Intimate Seats</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#2B2B2B]">2 Studios</span>
                <span className="text-xs font-sans text-[#A49284] uppercase tracking-wider block mt-1">Andheri & Colaba</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Solen Arched Hero Image with Pastel Aura Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Multi-tone Pastel Decorative Arched Layers */}
            <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-tr from-[#FDE8EC]/70 via-[#D8F5ED]/60 to-[#ECE4F9]/60 rounded-t-[160px] rounded-b-3xl -z-10 transform translate-y-3 blur-xs" />
            <div className="absolute -inset-2 sm:-inset-3 bg-[#E5EDF0] rounded-t-[130px] rounded-b-3xl -z-10" />
            
            <div className="w-full max-w-md">
              <div className="relative">
                {/* Image 9: Assigned Asset (@allisongunderson.jpeg) - Raw Mineral Cluster */}
                <StudioImage
                  assetNumber={9}
                  filename="@allisongunderson.jpeg"
                  alt="Raw, unpolished mineral cluster showing geological druzy facets and earthen crystal veins"
                  arched={true}
                  aspectRatio="aspect-[3/4]"
                  className="shadow-md border border-[#DDCDBD]"
                  showAssetLabel={true}
                />

                {/* Studio Solen floating caption pill */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#F7EFE2] border border-[#DDCDBD] px-5 py-2.5 rounded-full shadow-xs whitespace-nowrap">
                  <p className="text-[11px] font-sans tracking-widest text-[#2B2B2B] uppercase">
                    Raw Mineral Specimen Vault · Image 9
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
