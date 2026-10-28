import React from 'react';
import { WORKSHOP_PROGRAMS } from '../data/studioData';
import { StudioImage } from './StudioImage';
import { Users, Clock, Sparkles, Check, ArrowUpRight, MessageCircle } from 'lucide-react';

interface WorkshopsProps {
  onOpenBookingWithProgram?: (programId: string) => void;
}

export const Workshops: React.FC<WorkshopsProps> = ({ onOpenBookingWithProgram }) => {
  return (
    <section id="workshops" className="py-24 sm:py-32 bg-[#E5EDF0]/50 border-t border-[#DDCDBD]/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-sans tracking-[0.25em] text-[#A49284] uppercase block mb-3">
            03. Friends & Group Creative Sessions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B]">
            Interactive Crafting Workshops
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2B2B2B]/80 mt-4 leading-relaxed">
            Gather your closest friends for a slow, tactile weekend afternoon at our jeweler benches. Guided by our senior bench artisans, you’ll choose your stones, twist wire tension bails, knot natural silk cords, and take home two completely custom pieces.
          </p>

          {/* Quick Pillars */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs font-sans text-[#2B2B2B] tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#CCA586]" />
              2.5 Hours (Sat & Sun)
            </span>
            <span className="text-[#CCA586]">·</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#CCA586]" />
              6–8 Participants Max
            </span>
            <span className="text-[#CCA586]">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#CCA586]" />
              2 Custom Pieces Included
            </span>
          </div>
        </div>

        {/* 3 Workshop Programs with Arched Image Cards & Dreamy Pastel Color Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WORKSHOP_PROGRAMS.map((prog, index) => {
            const assetNum = parseInt(prog.assignedAsset.label.replace('Image ', ''));

            return (
              <div
                key={prog.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border ${prog.pastelTheme.border} ${prog.pastelTheme.bg} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div>
                  {/* Arched Photo Card */}
                  <div className="relative mb-6">
                    <StudioImage
                      assetNumber={assetNum}
                      filename={prog.assignedAsset.filename}
                      alt={prog.assignedAsset.description}
                      arched={true}
                      aspectRatio="aspect-[4/5]"
                      showAssetLabel={true}
                    />
                    
                    <div className="absolute top-4 left-4 bg-[#F7EFE2]/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-sans font-semibold tracking-wider text-[#2B2B2B] uppercase shadow-xs">
                      {prog.pricePerSeat} / Seat
                    </div>
                  </div>

                  {/* Program Title & Metadata */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-sans tracking-widest text-[#A49284] uppercase block">
                      {prog.assignedAsset.label} · Weekend Session
                    </span>
                    <h3 className="font-serif text-2xl text-[#2B2B2B] leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-xs font-sans text-[#2B2B2B]/75 leading-relaxed">
                      {prog.assignedAsset.description}
                    </p>
                  </div>

                  {/* What You Make */}
                  <div className="mb-6 p-4 rounded-2xl bg-[#F7EFE2]/80 border border-[#DDCDBD]/60 space-y-2">
                    <span className="text-[11px] font-sans tracking-wider uppercase text-[#CCA586] font-semibold block">
                      What You Make (2 Pieces):
                    </span>
                    {prog.whatYouMake.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#2B2B2B]">
                        <Check className="w-3.5 h-3.5 text-[#CCA586] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Materials Included */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-sans tracking-wider uppercase text-[#A49284] font-medium block">
                      Materials & Tools Provided:
                    </span>
                    <ul className="space-y-1.5 text-xs font-sans text-[#2B2B2B]/80">
                      {prog.materialsIncluded.map((mat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CCA586]" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Primary CTA: Book Your Bench via WhatsApp */}
                <div className="pt-4 border-t border-[#DDCDBD]/60">
                  <button
                    onClick={() => onOpenBookingWithProgram?.(prog.id)}
                    className="w-full py-3.5 px-4 text-xs font-sans font-semibold tracking-widest uppercase bg-[#2B2B2B] hover:bg-[#CCA586] text-[#F7EFE2] rounded-full transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Your Bench via WhatsApp</span>
                  </button>
                  <span className="block text-[11px] font-sans text-center text-[#A49284] mt-2">
                    {prog.schedule}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Private Parties & Friends Circle Callout */}
        <div className="mt-16 bg-[#F7EFE2] rounded-3xl p-8 sm:p-10 border border-[#DDCDBD] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#CCA586] uppercase block mb-1">
              Private Group Bench Takeover
            </span>
            <h4 className="font-serif text-2xl text-[#2B2B2B]">
              Hosting a Birthday, Bachelorette, or Bestie Date?
            </h4>
            <p className="text-xs sm:text-sm font-sans text-[#2B2B2B]/75 mt-2 leading-relaxed">
              Reserve our full 8-bench studio exclusively with tailored gemstone palettes, botanical tisanes, and custom playlists.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingWithProgram?.('workshop-stack-bracelets')}
            className="px-6 py-3.5 text-xs font-sans font-semibold tracking-widest uppercase border border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#F7EFE2] text-[#2B2B2B] rounded-full transition-all whitespace-nowrap"
          >
            Inquire for Private Circles
          </button>
        </div>
      </div>
    </section>
  );
};
