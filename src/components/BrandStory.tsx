import React, { useState } from 'react';
import { StudioImage } from './StudioImage';
import { SOURCING_MATERIALS } from '../data/studioData';
import { ShieldCheck, Compass, Sparkles, Gem, Globe2 } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const [activeOrigin, setActiveOrigin] = useState<string>('all');

  const origins = [
    {
      country: 'Peru',
      region: 'Andean River Basin',
      stones: 'Pink Tourmaline & Amazonite',
      ethos: 'Hand-sorted alluvial deposits by certified local cooperatives with riverbed rehabilitation.',
    },
    {
      country: 'Sri Lanka',
      region: 'Ratnapura Alluvials',
      stones: 'Green Sapphire & Emerald',
      ethos: 'Small-pit, water-powered gem mining passing traditional gemological wisdom across generations.',
    },
    {
      country: 'Zambia',
      region: 'Kafue Basin Mineral Belt',
      stones: 'Malachite & Copper Carbonates',
      ethos: 'Direct mine-mouth trading ensuring living wages and community healthcare support.',
    },
    {
      country: 'Madagascar',
      region: 'Antsirabe Pegmatites',
      stones: 'Aquamarine & Garnet',
      ethos: 'Traceable family-run artisanal pits protecting local biodiversity.',
    },
  ];

  return (
    <section id="origins" className="py-24 sm:py-32 bg-[#E5EDF0]/40 border-y border-[#DDCDBD]/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-sans tracking-[0.25em] text-[#A49284] uppercase block mb-3">
            01. Brand Story & Ethical Sourcing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B] leading-tight">
            Earth-Born Minerals. <br className="hidden sm:inline" />
            <span className="italic text-[#CCA586]">Traceable from Source to Bench.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2B2B2B]/80 mt-6 leading-relaxed">
            We reject mass production and opaque supply chains. Every raw specimen in our Mumbai studios is hand-selected from vetted artisanal craft mines across Peru, Sri Lanka, Zambia, and Madagascar—forged into mindful talismans using precious recycled metals and zero toxic chemical baths.
          </p>
        </div>

        {/* Dual Arched Visual Showcase - Images 6 & 14 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center">
          {/* Left Arched Feature - Image 6 */}
          <div className="md:col-span-6 space-y-4">
            <div className="bg-[#F7EFE2] p-4 sm:p-6 rounded-3xl border border-[#DDCDBD]/60 shadow-xs">
              <StudioImage
                assetNumber={6}
                filename="Hand made Zen bead necklace.jpeg"
                alt="Rough-cut gemstones in artisanal gold stringing showcasing authentic raw mineral formations"
                arched={true}
                aspectRatio="aspect-[4/5]"
                caption="Rough-Cut Gems on Gold Stringing · Image 6"
                showAssetLabel={true}
              />
              <div className="mt-5 text-center">
                <h4 className="font-serif text-lg text-[#2B2B2B]">Rough-Cut Gems in Gold Stringing</h4>
                <p className="font-sans text-xs text-[#A49284] tracking-wider uppercase mt-1">
                  Assigned Asset: Image 6 · Hand Made Zen Bead Necklace
                </p>
              </div>
            </div>
          </div>

          {/* Right Arched Feature - Image 14 */}
          <div className="md:col-span-6 space-y-4">
            <div className="bg-[#F7EFE2] p-4 sm:p-6 rounded-3xl border border-[#DDCDBD]/60 shadow-xs">
              <StudioImage
                assetNumber={14}
                filename="WhatsApp Image 2024-10-28 at 13.22.12 (1).jpeg"
                alt="Vintage gold bezel cuff showcasing hand-polished stones with heirloom jeweler detailing"
                arched={true}
                aspectRatio="aspect-[4/5]"
                caption="Vintage Gold Bezel Cuff · Image 14"
                showAssetLabel={true}
              />
              <div className="mt-5 text-center">
                <h4 className="font-serif text-lg text-[#2B2B2B]">Vintage Gold Bezel Cuff Presentation</h4>
                <p className="font-sans text-xs text-[#A49284] tracking-wider uppercase mt-1">
                  Assigned Asset: Image 14 · Polished Stone Setting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Origins Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#DDCDBD]/60">
            <h3 className="font-serif text-2xl text-[#2B2B2B]">Direct Mine Partners</h3>
            <span className="text-xs font-sans tracking-widest text-[#A49284] uppercase">
              Transparent Provenance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                ...origins[0],
                cardBg: 'bg-gradient-to-br from-[#FDE8EC]/70 via-white/80 to-[#D8F5ED]/40',
                border: 'border-[#F8C8D2]',
                chip: 'bg-[#FDE8EC] text-[#964B59]',
              },
              {
                ...origins[1],
                cardBg: 'bg-gradient-to-br from-[#E2EFE0]/70 via-white/80 to-[#FCF4DA]/40',
                border: 'border-[#C2DFC0]',
                chip: 'bg-[#E2EFE0] text-[#416B45]',
              },
              {
                ...origins[2],
                cardBg: 'bg-gradient-to-br from-[#D8F5ED]/70 via-white/80 to-[#F7EFE2]',
                border: 'border-[#B4E8DB]',
                chip: 'bg-[#D8F5ED] text-[#2D6E5D]',
              },
              {
                ...origins[3],
                cardBg: 'bg-gradient-to-br from-[#DCEDF9]/70 via-white/80 to-[#FDE8EC]/40',
                border: 'border-[#BDDDF3]',
                chip: 'bg-[#DCEDF9] text-[#3E6C8C]',
              },
            ].map((origin) => (
              <div
                key={origin.country}
                className={`${origin.cardBg} p-6 rounded-3xl border ${origin.border} hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl text-[#2B2B2B]">{origin.country}</span>
                    <Globe2 className="w-4 h-4 text-[#CCA586]" />
                  </div>
                  <span className="text-xs font-sans text-[#A49284] tracking-wider uppercase block mb-3">
                    {origin.region}
                  </span>
                  <div className={`inline-block text-xs font-sans font-semibold ${origin.chip} px-3 py-1 rounded-full mb-4 shadow-xs`}>
                    {origin.stones}
                  </div>
                </div>
                <p className="text-xs font-sans text-[#2B2B2B]/75 leading-relaxed border-t border-black/5 pt-3">
                  {origin.ethos}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Noble Materials Breakdown */}
        <div className="bg-[#F7EFE2] rounded-3xl p-8 sm:p-12 border border-[#DDCDBD]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-sans tracking-[0.2em] text-[#A49284] uppercase block mb-2">
              Studio Solen Bench Standards
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B]">
              Materials That Touch Your Skin
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOURCING_MATERIALS.map((mat) => (
              <div key={mat.name} className="p-5 rounded-xl bg-[#F7EFE2] border border-[#DDCDBD]/60">
                <h4 className="font-serif text-base text-[#2B2B2B] mb-1">{mat.name}</h4>
                <p className="text-[11px] font-sans tracking-wide text-[#CCA586] uppercase mb-2">
                  {mat.origin}
                </p>
                <p className="text-xs font-sans text-[#2B2B2B]/75 leading-normal">
                  {mat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
