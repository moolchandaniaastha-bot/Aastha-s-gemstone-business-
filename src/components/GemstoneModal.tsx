import React from 'react';
import { X, Sparkles, MapPin, Shield, Feather, Heart } from 'lucide-react';
import { Gemstone } from '../types';
import { StudioImage } from './StudioImage';

interface GemstoneModalProps {
  gemstone: Gemstone | null;
  onClose: () => void;
  onSelectForWorkshop: (stoneName: string) => void;
}

export const GemstoneModal: React.FC<GemstoneModalProps> = ({
  gemstone,
  onClose,
  onSelectForWorkshop,
}) => {
  if (!gemstone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B2B2B]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#F7EFE2] rounded-3xl border border-[#DDCDBD] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Stone's Pastel Glow */}
        <div className={`flex items-center justify-between p-6 border-b border-[#DDCDBD]/60 ${gemstone.pastelColor.bg}`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-sans tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full ${gemstone.pastelColor.badgeBg} ${gemstone.pastelColor.badgeText} font-semibold border border-white/60`}>
                {gemstone.assignedAsset.label}
              </span>
              <span className="text-[11px] font-sans text-[#A49284]">
                {gemstone.miningRegion}
              </span>
            </div>
            <h3 className="font-serif text-2xl text-[#2B2B2B]">{gemstone.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#2B2B2B] hover:text-[#CCA586] rounded-full hover:bg-white/50 transition-colors"
            aria-label="Close stone dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Visual Frame */}
            <div className="sm:col-span-5">
              <StudioImage
                assetNumber={parseInt(gemstone.assignedAsset.label.replace('Image ', ''))}
                filename={gemstone.assignedAsset.filename}
                alt={gemstone.name}
                arched={true}
                aspectRatio="aspect-[4/5]"
                showAssetLabel={true}
              />
            </div>

            {/* Quick Details */}
            <div className="sm:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-sans text-[#A49284] uppercase tracking-wider">Meaning & Energy</span>
                <p className="font-serif text-lg text-[#2B2B2B] leading-snug">
                  "{gemstone.meaningAndEnergy}"
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-sans text-[#A49284] uppercase tracking-wider">Country of Origin</span>
                <p className="text-sm font-sans text-[#2B2B2B] flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#CCA586]" />
                  <span>{gemstone.countryOfOrigin}</span>
                  <span className="text-[#A49284]">({gemstone.miningRegion})</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#E5EDF0]/70 rounded-xl">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#A49284] block">Hardness</span>
                  <span className="text-xs font-sans font-medium text-[#2B2B2B]">{gemstone.hardness}</span>
                </div>
                <div className="p-3 bg-[#E5EDF0]/70 rounded-xl">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#A49284] block">Recommended Metal</span>
                  <span className="text-xs font-sans font-medium text-[#2B2B2B]">{gemstone.recommendedMetal}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Geological & Spiritual Narrative */}
          <div className="space-y-3 pt-2">
            <h4 className="font-serif text-lg text-[#2B2B2B]">Energetic & Crafting Notes</h4>
            <p className="text-sm font-sans text-[#2B2B2B]/85 leading-relaxed">
              {gemstone.details}
            </p>
            <div className="p-4 bg-[#DDCDBD]/30 rounded-xl border border-[#DDCDBD]/60">
              <p className="text-xs font-sans text-[#2B2B2B]">
                <strong className="text-[#CCA586] uppercase tracking-wider block mb-1">Bench Artisan Tip:</strong>
                {gemstone.craftingTip}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-[#DDCDBD]/60 bg-[#F7EFE2] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-sans text-[#A49284]">
            Available at both Andheri & Colaba studios
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onSelectForWorkshop(gemstone.name);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase text-[#F7EFE2] bg-[#2B2B2B] hover:bg-[#CCA586] rounded-full transition-colors"
            >
              Craft With This Stone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
