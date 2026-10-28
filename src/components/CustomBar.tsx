import React, { useState } from 'react';
import { CUSTOM_BAR_ITEMS } from '../data/studioData';
import { StudioImage } from './StudioImage';
import { Sparkles, Hammer, Layers, Gem, ArrowRight, Check } from 'lucide-react';

export const CustomBar: React.FC = () => {
  // Interactive Customizer Playground State
  const [selectedStone, setSelectedStone] = useState('Raw Zambian Malachite');
  const [selectedMetal, setSelectedMetal] = useState('14k Gold-Filled Wire');
  const [selectedFormat, setSelectedFormat] = useState('Layered Pendant Stack');

  const stones = [
    'Raw Zambian Malachite',
    'Peruvian Pink Tourmaline',
    'Sri Lankan Green Sapphire',
    'Madagascar Raw Aquamarine',
    'Brazilian Smooth Cabochon',
    'Jaipur Rainbow Tourmaline',
  ];

  const metals = [
    { label: '14k Gold-Filled Wire', desc: 'Warm heirloom golden glow, hypoallergenic, durable' },
    { label: 'Sterling Silver (.925)', desc: 'Bright crystalline sheen, organic wire tension' },
    { label: 'Vintage Patina Brass', desc: 'Earthy bohemian warmth, hand-buffed finish' },
  ];

  const formats = [
    { label: 'Layered Pendant Stack', desc: 'Asymmetric cascade on double chains' },
    { label: 'Delicate Collar Choker', desc: 'Subtle micro-gems flush against collarbone' },
    { label: 'Tri-Charm Cluster', desc: 'Medallion, crystal point, & tumbled drop' },
    { label: 'Sculptural Wire Wrap', desc: 'Tension-bound architectural statement wire' },
  ];

  const steps = [
    {
      step: '01',
      title: 'Select Your Mineral',
      description: 'Browse our raw mineral vault and hand-pick raw, unpolished specimens or polished geometric cabochons.',
    },
    {
      step: '02',
      title: 'Choose Wire & Metal',
      description: 'Select between 14k gold-filled wire, recycled sterling silver, or antique artisan brass wrapping cord.',
    },
    {
      step: '03',
      title: 'Bench Co-Creation',
      description: 'Sit with our resident artisans at the walk-in bar as your custom talisman is cold-forged and assembled in 25–40 minutes.',
    },
  ];

  return (
    <section id="custom-bar" className="py-24 sm:py-32 bg-[#F7EFE2] border-t border-[#DDCDBD]/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-sans tracking-[0.25em] text-[#A49284] uppercase block mb-3">
            04. Bespoke Walk-in Service
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B]">
            Customization & Wire-Wrapping Bar
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2B2B2B]/80 mt-4 leading-relaxed">
            No appointment needed. Walk into our Andheri or Colaba studios, choose your raw crystal or tumbled talisman, and watch our bench artisans cold-forgo bespoke wire wraps tailored to your body and neckline.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-[#E5EDF0]/50 p-8 rounded-3xl border border-[#DDCDBD]/70 relative overflow-hidden"
            >
              <span className="font-serif text-4xl text-[#CCA586]/70 block mb-4">
                {st.step}
              </span>
              <h3 className="font-serif text-xl text-[#2B2B2B] mb-2">{st.title}</h3>
              <p className="text-xs font-sans text-[#2B2B2B]/75 leading-relaxed">
                {st.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Assigned Assets Grid (Images 3, 4, 10, 16) */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#DDCDBD]/60">
            <h3 className="font-serif text-2xl text-[#2B2B2B]">
              Bespoke Silhouettes & Bench Proof
            </h3>
            <span className="text-xs font-sans tracking-widest text-[#A49284] uppercase">
              Images 3 · 4 · 10 · 16
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CUSTOM_BAR_ITEMS.map((item) => {
              const assetNum = parseInt(item.assignedAsset.label.replace('Image ', ''));

              return (
                <div
                  key={item.id}
                  className={`${item.pastelAccent.bg} rounded-3xl p-5 border ${item.pastelAccent.border} hover:shadow-lg transition-all flex flex-col justify-between hover:-translate-y-1`}
                >
                  <div>
                    {/* Arched Photo Card */}
                    <div className="relative mb-4">
                      <StudioImage
                        assetNumber={assetNum}
                        filename={item.assignedAsset.filename}
                        alt={item.assignedAsset.description}
                        arched={true}
                        aspectRatio="aspect-[4/5]"
                        showAssetLabel={true}
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-sans tracking-widest text-[#A49284] uppercase block">
                        {item.assignedAsset.label} · {item.estimatedTime}
                      </span>
                      <h4 className="font-serif text-lg text-[#2B2B2B] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs font-sans text-[#2B2B2B]/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-sans text-[#A49284]">
                    <strong className="text-[#2B2B2B]">Bench Detail: </strong>
                    {item.craftDetails}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Virtual Customizer Preview */}
        <div className="bg-[#E5EDF0]/60 rounded-3xl p-8 sm:p-12 border border-[#DDCDBD]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-sans tracking-[0.2em] text-[#CCA586] uppercase block mb-1">
              Interactive Bench Simulator
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B]">
              Preview Your Custom Walk-in Build
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#2B2B2B]/75 mt-2">
              Select your favorite ingredients to envision your walk-in jewelry piece before stepping into our studio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Customizer Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Stone Choice */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#A49284] mb-2 font-semibold">
                  A. Choose Specimen Stone
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {stones.map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setSelectedStone(st)}
                      className={`p-2.5 text-xs font-sans rounded-xl text-left border transition-all ${
                        selectedStone === st
                          ? 'bg-[#2B2B2B] text-[#F7EFE2] border-[#2B2B2B] font-medium'
                          : 'bg-[#F7EFE2] text-[#2B2B2B] border-[#DDCDBD] hover:border-[#CCA586]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metal Choice */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#A49284] mb-2 font-semibold">
                  B. Choose Precious Wire Metal
                </label>
                <div className="space-y-2">
                  {metals.map((m) => (
                    <button
                      key={m.label}
                      type="button"
                      onClick={() => setSelectedMetal(m.label)}
                      className={`w-full p-3 rounded-xl text-left border flex items-center justify-between transition-all ${
                        selectedMetal === m.label
                          ? 'bg-[#2B2B2B] text-[#F7EFE2] border-[#2B2B2B]'
                          : 'bg-[#F7EFE2] text-[#2B2B2B] border-[#DDCDBD] hover:border-[#CCA586]'
                      }`}
                    >
                      <div>
                        <span className="font-serif text-sm block font-semibold">{m.label}</span>
                        <span className={`text-[11px] font-sans ${selectedMetal === m.label ? 'text-[#F7EFE2]/80' : 'text-[#A49284]'}`}>
                          {m.desc}
                        </span>
                      </div>
                      {selectedMetal === m.label && <Check className="w-4 h-4 text-[#CCA586]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Silhouette Format */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#A49284] mb-2 font-semibold">
                  C. Choose Silhouette Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {formats.map((f) => (
                    <button
                      key={f.label}
                      type="button"
                      onClick={() => setSelectedFormat(f.label)}
                      className={`p-3 text-left rounded-xl border transition-all ${
                        selectedFormat === f.label
                          ? 'bg-[#2B2B2B] text-[#F7EFE2] border-[#2B2B2B]'
                          : 'bg-[#F7EFE2] text-[#2B2B2B] border-[#DDCDBD] hover:border-[#CCA586]'
                      }`}
                    >
                      <span className="font-serif text-xs block font-semibold">{f.label}</span>
                      <span className={`text-[10px] font-sans ${selectedFormat === f.label ? 'text-[#F7EFE2]/75' : 'text-[#A49284]'}`}>
                        {f.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Bench Formulation Preview Box */}
            <div className="lg:col-span-5 bg-[#F7EFE2] p-6 sm:p-8 rounded-3xl border border-[#DDCDBD] space-y-6">
              <div>
                <span className="text-[11px] font-sans tracking-widest uppercase text-[#A49284] block mb-1">
                  Bench Recipe Card
                </span>
                <h4 className="font-serif text-2xl text-[#2B2B2B]">
                  Your Walk-in Blueprint
                </h4>
              </div>

              <div className="space-y-4 text-xs font-sans border-y border-[#DDCDBD]/60 py-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#A49284] uppercase tracking-wider">Focal Mineral</span>
                  <span className="font-medium text-[#2B2B2B]">{selectedStone}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A49284] uppercase tracking-wider">Wire Metal</span>
                  <span className="font-medium text-[#2B2B2B]">{selectedMetal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A49284] uppercase tracking-wider">Silhouette</span>
                  <span className="font-medium text-[#2B2B2B]">{selectedFormat}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A49284] uppercase tracking-wider">Estimated Bench Time</span>
                  <span className="font-semibold text-[#CCA586]">25–35 Minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A49284] uppercase tracking-wider">Walk-in Availability</span>
                  <span className="text-[#2B2B2B] font-medium">Both Studios (Tue–Sun)</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="#locations"
                  className="w-full py-3.5 px-4 text-xs font-sans font-semibold tracking-widest uppercase text-center block text-[#F7EFE2] bg-[#2B2B2B] hover:bg-[#CCA586] rounded-full transition-colors"
                >
                  Visit Walk-in Wire Bar Today
                </a>
                <p className="text-[11px] font-sans text-center text-[#A49284]">
                  Walk-ins warmly welcomed at Andheri West & Colaba Causeway studios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
