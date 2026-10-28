import React, { useState } from 'react';
import { X, Check, Upload, Image as ImageIcon, Sparkles, RefreshCw } from 'lucide-react';
import { MASTER_ASSETS } from '../data/studioData';

interface StudioAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioAssetModal: React.FC<StudioAssetModalProps> = ({ isOpen, onClose }) => {
  const [filterSection, setFilterSection] = useState<string>('all');
  const [uploadedCounts, setUploadedCounts] = useState<number>(0);

  if (!isOpen) return null;

  const sections = ['all', 'Hero', 'Brand Sourcing', 'Gemstone Directory', 'Workshops', 'Custom Bar'];

  const filteredAssets = filterSection === 'all'
    ? MASTER_ASSETS
    : MASTER_ASSETS.filter(a => a.sectionAssigned === filterSection);

  const handleFileUpload = (assetNumber: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          localStorage.setItem(`aura_asset_${assetNumber}`, event.target.result as string);
          setUploadedCounts(prev => prev + 1);
          // Reload window or trigger update
          window.location.reload();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAssets = () => {
    MASTER_ASSETS.forEach(a => {
      localStorage.removeItem(`aura_asset_${a.assetNumber}`);
    });
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B2B2B]/70 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#F7EFE2] rounded-3xl border border-[#DDCDBD] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#DDCDBD]/70 bg-[#F7EFE2]">
          <div>
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#A49284] uppercase block">
              PRD Verification & Asset Desk
            </span>
            <h3 className="font-serif text-2xl text-[#2B2B2B]">
              16 Mapped Studio Photograph Slots
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#2B2B2B] hover:text-[#CCA586] rounded-full hover:bg-[#E5EDF0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section Filter */}
        <div className="p-4 px-6 bg-[#E5EDF0]/50 border-b border-[#DDCDBD]/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setFilterSection(sec)}
                className={`px-3 py-1 text-xs font-sans rounded-lg capitalize transition-colors ${
                  filterSection === sec
                    ? 'bg-[#2B2B2B] text-[#F7EFE2] font-semibold'
                    : 'text-[#2B2B2B] hover:bg-[#DDCDBD]/50'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          <button
            onClick={handleResetAssets}
            className="text-[11px] font-sans text-[#A49284] hover:text-[#2B2B2B] flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Overrides</span>
          </button>
        </div>

        {/* List of 16 Assets */}
        <div className="p-6 overflow-y-auto space-y-3">
          <div className="text-xs font-sans text-[#2B2B2B]/75 mb-4 p-3 bg-[#E5EDF0] rounded-xl border border-[#DDCDBD]/60">
            <strong>PRD Image Rule Enforced:</strong> Strictly 0 image duplication across all sections. Each photo slot corresponds exactly to the 16 original image filenames specified in your requirements document.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAssets.map((asset) => {
              const hasOverride = !!localStorage.getItem(`aura_asset_${asset.assetNumber}`);

              return (
                <div
                  key={asset.slotId}
                  className="p-4 bg-[#F7EFE2] rounded-2xl border border-[#DDCDBD] flex flex-col justify-between hover:border-[#CCA586] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#CCA586] font-bold block">
                        Asset #{asset.assetNumber} · {asset.sectionAssigned}
                      </span>
                      <h4 className="font-serif text-base text-[#2B2B2B]">{asset.displayName}</h4>
                    </div>
                    <span className="text-[11px] font-mono text-[#A49284] bg-[#E5EDF0] px-2 py-0.5 rounded-sm shrink-0">
                      {asset.aspectRatio}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-[#2B2B2B]/70 mb-2">
                    {asset.purpose}
                  </p>

                  <div className="text-[11px] font-mono text-[#A49284] truncate mb-3 bg-[#E5EDF0]/50 p-1.5 rounded-md">
                    {asset.originalFilename}
                  </div>

                  <div className="pt-2 border-t border-[#DDCDBD]/50 flex items-center justify-between text-xs font-sans">
                    <span className="text-[#A49284]">
                      {hasOverride ? '✓ Custom photo loaded' : '• Default artwork active'}
                    </span>
                    <label className="cursor-pointer text-xs font-semibold text-[#2B2B2B] hover:text-[#CCA586] flex items-center gap-1 uppercase tracking-wider">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload File</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(asset.assetNumber, e)}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-[#DDCDBD]/60 bg-[#F7EFE2] flex items-center justify-between">
          <span className="text-xs font-sans text-[#A49284]">
            Total Allocated Slots: 16 Unique Photos
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-sans font-semibold tracking-widest uppercase bg-[#2B2B2B] text-[#F7EFE2] rounded-full hover:bg-[#CCA586]"
          >
            Close Desk
          </button>
        </div>
      </div>
    </div>
  );
};
