import React, { useState } from 'react';
import { GEMSTONES_DIRECTORY } from '../data/studioData';
import { Gemstone } from '../types';
import { StudioImage } from './StudioImage';
import { Sparkles, MapPin, ArrowUpRight, Filter } from 'lucide-react';

interface GemstoneDirectoryProps {
  onSelectGemstone: (gem: Gemstone) => void;
}

export const GemstoneDirectory: React.FC<GemstoneDirectoryProps> = ({ onSelectGemstone }) => {
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');

  const originOptions = [
    { label: 'All Stones', value: 'all' },
    { label: 'Peru', value: 'Peru' },
    { label: 'Sri Lanka', value: 'Sri Lanka' },
    { label: 'Zambia / Japan', value: 'Zambia / Japan' },
    { label: 'Madagascar', value: 'Madagascar' },
    { label: 'Brazil', value: 'Brazil' },
    { label: 'India', value: 'India' },
  ];

  const filteredGemstones = selectedOrigin === 'all'
    ? GEMSTONES_DIRECTORY
    : GEMSTONES_DIRECTORY.filter(g => g.countryOfOrigin.includes(selectedOrigin));

  return (
    <section id="gemstones" className="py-24 sm:py-32 bg-[#F7EFE2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#DDCDBD]/60">
          <div>
            <span className="text-xs font-sans tracking-[0.25em] text-[#A49284] uppercase block mb-3">
              02. Studio Sourcing Catalog
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B]">
              Gemstone & Meaning Directory
            </h2>
            <p className="font-sans text-base text-[#2B2B2B]/75 mt-3 max-w-xl">
              An unhurried visual directory introducing raw crystal energies, ethical mine origins, and hand-forged pairings.
            </p>
          </div>

          {/* Interactive Origin Filter (Functional Button Segment, not static pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#E5EDF0] rounded-xl self-start md:self-end">
            {originOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedOrigin(opt.value)}
                className={`px-3 py-1.5 text-xs font-sans tracking-wider rounded-lg transition-colors whitespace-nowrap ${
                  selectedOrigin === opt.value
                    ? 'bg-[#2B2B2B] text-[#F7EFE2] font-semibold'
                    : 'text-[#2B2B2B]/75 hover:text-[#2B2B2B]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Gemstone Grid with Studio Solen Arched Framing & Dreamy Pastels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredGemstones.map((gem) => {
            const assetNum = parseInt(gem.assignedAsset.label.replace('Image ', ''));

            return (
              <div
                key={gem.id}
                onClick={() => onSelectGemstone(gem)}
                className={`group cursor-pointer ${gem.pastelColor.bg} rounded-3xl p-6 border ${gem.pastelColor.border} hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  {/* Studio Solen Arched Frame */}
                  <div className="relative mb-5 overflow-hidden">
                    <StudioImage
                      assetNumber={assetNum}
                      filename={gem.assignedAsset.filename}
                      alt={gem.assignedAsset.description}
                      arched={true}
                      aspectRatio="aspect-[4/5]"
                      showAssetLabel={true}
                    />

                    <div className={`absolute top-4 right-4 ${gem.pastelColor.badgeBg} ${gem.pastelColor.badgeText} backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase border border-white/60 flex items-center gap-1 shadow-xs`}>
                      <MapPin className="w-3 h-3 text-current" />
                      <span>{gem.countryOfOrigin}</span>
                    </div>
                  </div>

                  {/* Stone Details with Zero-Pill Typography Discipline */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-sans text-[#A49284] tracking-wider uppercase">
                      <span className="font-semibold text-[#2B2B2B]">{gem.assignedAsset.label}</span>
                      <span>·</span>
                      <span>{gem.hardness}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#2B2B2B] group-hover:text-[#CCA586] transition-colors">
                      {gem.name}
                    </h3>

                    <p className={`font-sans text-sm ${gem.pastelColor.text} font-medium italic`}>
                      "{gem.meaningAndEnergy}"
                    </p>

                    <p className="text-xs font-sans text-[#2B2B2B]/75 line-clamp-2 pt-1 leading-relaxed">
                      {gem.details}
                    </p>

                    {/* Chakras and elements subtle pastel tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {gem.chakras.map((chk) => (
                        <span
                          key={chk}
                          className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-white/70 text-[#2B2B2B]/80 border border-black/5"
                        >
                          {chk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-sans font-semibold tracking-wider uppercase text-[#2B2B2B] group-hover:text-[#CCA586] transition-colors">
                  <span>Explore Stone Energy</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Directory Footnote */}
        <div className="mt-16 text-center">
          <p className="text-xs font-sans text-[#A49284] tracking-widest uppercase">
            All 6 specimen varieties available for wire-wrapping and bench crafting at our Mumbai studios.
          </p>
        </div>
      </div>
    </section>
  );
};
