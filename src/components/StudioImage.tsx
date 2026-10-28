import React, { useState, useEffect } from 'react';
import { Sparkles, Image as ImageIcon, Camera } from 'lucide-react';

interface StudioImageProps {
  assetNumber: number;
  filename: string;
  alt: string;
  className?: string;
  arched?: boolean;
  aspectRatio?: string;
  caption?: string;
  showAssetLabel?: boolean;
}

export const StudioImage: React.FC<StudioImageProps> = ({
  assetNumber,
  filename,
  alt,
  className = '',
  arched = false,
  aspectRatio = 'aspect-[4/5]',
  caption,
  showAssetLabel = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [customSrc, setCustomSrc] = useState<string | null>(null);

  useEffect(() => {
    // Check if user uploaded a replacement for this asset in localStorage
    const saved = localStorage.getItem(`aura_asset_${assetNumber}`);
    if (saved) {
      setCustomSrc(saved);
    }
  }, [assetNumber]);

  // Determine potential image path candidates
  const imageSource = customSrc || `/assets/images/${encodeURIComponent(filename)}`;

  const archClasses = arched ? 'rounded-t-[90px] sm:rounded-t-[120px] rounded-b-2xl' : 'rounded-2xl';

  return (
    <div className={`relative group overflow-hidden ${archClasses} ${aspectRatio} ${className} bg-gradient-to-br from-white/90 via-[#F7EFE2]/60 to-[#E5EDF0]/60 border border-[#DDCDBD]/60 shadow-xs transition-all duration-300`}>
      {!imageError ? (
        <img
          src={imageSource}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${archClasses}`}
        />
      ) : (
        // High-Aesthetic Studio Solen Artisanal SVG Canvas Fallback
        <div className={`w-full h-full flex flex-col justify-between p-6 relative overflow-hidden select-none ${archClasses}`}>
          <ArtisanalGemArtwork assetNumber={assetNumber} />
          
          <div className="relative z-10 flex items-start justify-between">
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#A49284] bg-[#F7EFE2]/90 backdrop-blur-xs px-2.5 py-1 rounded-sm shadow-xs">
              Asset #{assetNumber}
            </span>
            <span className="text-[10px] font-sans text-[#A49284]/80 tracking-wider">
              Studio Solen Style
            </span>
          </div>

          <div className="relative z-10 bg-[#F7EFE2]/90 backdrop-blur-md p-4 rounded-xl border border-[#DDCDBD]/60 shadow-xs">
            <p className="font-serif text-base text-[#2B2B2B] leading-snug line-clamp-2">
              {alt}
            </p>
            <p className="text-[11px] font-sans text-[#A49284] mt-1 tracking-wider uppercase">
              {filename}
            </p>
          </div>
        </div>
      )}

      {/* Subtle Asset Marker on hover for studio team */}
      {showAssetLabel && (
        <div className="absolute top-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-[10px] font-sans uppercase tracking-widest bg-[#2B2B2B]/80 text-[#F7EFE2] px-2 py-0.5 rounded-sm backdrop-blur-xs">
            Asset {assetNumber}
          </span>
        </div>
      )}

      {caption && (
        <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#F7EFE2]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DDCDBD]/50">
          <p className="text-xs text-[#2B2B2B] font-sans tracking-wide text-center">{caption}</p>
        </div>
      )}
    </div>
  );
};

// Specialized botanical & mineral visual graphics tailored to each PRD stone & piece
const ArtisanalGemArtwork: React.FC<{ assetNumber: number }> = ({ assetNumber }) => {
  switch (assetNumber) {
    case 9: // Hero: Raw mineral cluster (@allisongunderson.jpeg)
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5EDF0] via-[#DDCDBD]/50 to-[#CCA586]/40 flex items-center justify-center">
          <svg className="w-4/5 h-4/5 opacity-85 text-[#2B2B2B]/70" viewBox="0 0 200 200" fill="none">
            {/* Raw crystalline facets */}
            <path d="M100 20 L150 70 L140 140 L100 175 L60 140 L50 70 Z" fill="#DDCDBD" fillOpacity="0.4" stroke="#A49284" strokeWidth="1.2" />
            <path d="M100 20 L100 175" stroke="#CCA586" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M50 70 L150 70" stroke="#CCA586" strokeWidth="1" />
            <path d="M60 140 L140 140" stroke="#CCA586" strokeWidth="1" />
            <polygon points="100,20 125,50 100,70 75,50" fill="#E5EDF0" stroke="#A49284" strokeWidth="1" />
            <polygon points="100,70 140,140 100,175 60,140" fill="#CCA586" fillOpacity="0.25" stroke="#A49284" strokeWidth="1" />
            {/* Mineral druzy sparkles */}
            <circle cx="120" cy="85" r="2.5" fill="#CCA586" />
            <circle cx="85" cy="115" r="2" fill="#CCA586" />
            <circle cx="100" cy="130" r="3" fill="#9FADB6" />
            <circle cx="110" cy="55" r="1.5" fill="#F7EFE2" />
          </svg>
        </div>
      );

    case 5: // Pink Tourmaline & Amazonite (❀ - jewellery - moodboard.jpeg)
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7EFE2] via-[#E8B4B8]/20 to-[#A2C4C9]/25 flex items-center justify-center">
          <svg className="w-3/4 h-3/4 opacity-90" viewBox="0 0 160 160" fill="none">
            {/* Pink tourmaline crystal prism */}
            <polygon points="65,30 85,30 95,80 55,80" fill="#E8A598" fillOpacity="0.6" stroke="#C97C70" strokeWidth="1.2" />
            <polygon points="75,20 85,30 65,30" fill="#F5C7BF" stroke="#C97C70" strokeWidth="1.2" />
            {/* Seafoam amazonite organic pebble */}
            <path d="M70,85 C95,75 125,95 115,125 C105,145 75,145 65,130 C55,115 55,95 70,85 Z" fill="#88BDBF" fillOpacity="0.55" stroke="#5E9698" strokeWidth="1.2" />
            {/* Wire wrap binding */}
            <path d="M50 75 Q75 85 105 78" stroke="#CCA586" strokeWidth="1.8" />
            <path d="M52 82 Q75 92 103 85" stroke="#CCA586" strokeWidth="1.8" />
            <circle cx="75" cy="18" r="4" fill="none" stroke="#CCA586" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 8: // Pear Cut Green Sapphire Ring.jpeg
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E5EDF0] via-[#5C8D7B]/20 to-[#DDCDBD] flex items-center justify-center">
          <svg className="w-3/4 h-3/4 opacity-90" viewBox="0 0 160 160" fill="none">
            {/* Ring band */}
            <ellipse cx="80" cy="115" rx="42" ry="22" stroke="#CCA586" strokeWidth="2.5" fill="none" />
            {/* Pear cut sapphire gem */}
            <path d="M80,35 C95,58 105,80 100,98 C95,112 65,112 60,98 C55,80 65,58 80,35 Z" fill="#3D6B59" fillOpacity="0.75" stroke="#254B3C" strokeWidth="1.2" />
            {/* Internal facets */}
            <path d="M80,35 L80,95 M80,65 L62,85 M80,65 L98,85 M80,95 L65,105 M80,95 L95,105" stroke="#8EC3B0" strokeWidth="0.9" />
            <circle cx="80" cy="35" r="2" fill="#F7EFE2" />
          </svg>
        </div>
      );

    case 7: // Malachite & Pearl (Harris Reed In Good Hands...)
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E4D3B]/20 via-[#E5EDF0] to-[#F7EFE2] flex items-center justify-center">
          <svg className="w-3/4 h-3/4 opacity-90" viewBox="0 0 160 160" fill="none">
            {/* Malachite concentric banded cabochon */}
            <ellipse cx="65" cy="80" rx="35" ry="42" fill="#2F6B55" fillOpacity="0.8" stroke="#1D4A39" strokeWidth="1.2" />
            <ellipse cx="65" cy="80" rx="27" ry="32" fill="none" stroke="#529B7F" strokeWidth="2" />
            <ellipse cx="65" cy="80" rx="18" ry="22" fill="none" stroke="#1D4A39" strokeWidth="2" />
            <ellipse cx="65" cy="80" rx="10" ry="12" fill="#6FB89B" fillOpacity="0.9" />
            {/* Organic Baroque Pearl */}
            <path d="M102,65 C118,60 132,75 125,95 C120,110 100,112 95,98 C90,85 92,70 102,65 Z" fill="#FFFDF8" stroke="#DDCDBD" strokeWidth="1.5" />
            <ellipse cx="110" cy="78" rx="4" ry="7" fill="#F7EFE2" fillOpacity="0.8" />
            {/* Gold connector hands/link */}
            <path d="M75 80 Q90 80 98 85" stroke="#CCA586" strokeWidth="2.5" />
          </svg>
        </div>
      );

    case 1: // Aquamarine & Garnet (_ (1).jpeg)
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7DA6B3]/30 via-[#F7EFE2] to-[#8A3B43]/20 flex items-center justify-center">
          <svg className="w-3/4 h-3/4 opacity-90" viewBox="0 0 160 160" fill="none">
            {/* Fine chain */}
            <path d="M30 20 Q80 70 130 20" stroke="#CCA586" strokeWidth="1.2" fill="none" strokeDasharray="3 2" />
            {/* Aquamarine crystal briolette */}
            <polygon points="65,65 80,45 95,65 80,115" fill="#88C0D0" fillOpacity="0.65" stroke="#5E81AC" strokeWidth="1.2" />
            <line x1="80" y1="45" x2="80" y2="115" stroke="#E5EDF0" strokeWidth="0.8" />
            {/* Garnet deep drop bead */}
            <circle cx="80" cy="130" r="10" fill="#8A2532" stroke="#5E1620" strokeWidth="1.2" />
            <circle cx="78" cy="127" r="2.5" fill="#E88D97" />
            <line x1="80" y1="115" x2="80" y2="120" stroke="#CCA586" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 13: // Smooth Polished Cabochons (WhatsApp Image 2024-10-28 at 13.22.11.jpeg)
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#DDCDBD] via-[#F7EFE2] to-[#9FADB6]/30 flex items-center justify-center">
          <svg className="w-3/4 h-3/4 opacity-90" viewBox="0 0 160 160" fill="none">
            {/* Grid of 3 satin cabochon stones */}
            <ellipse cx="50" cy="60" rx="20" ry="24" fill="#CCA586" fillOpacity="0.8" stroke="#A49284" strokeWidth="1.2" />
            <ellipse cx="105" cy="65" rx="22" ry="18" fill="#9FADB6" fillOpacity="0.8" stroke="#71828D" strokeWidth="1.2" />
            <ellipse cx="80" cy="115" rx="26" ry="20" fill="#DDCDBD" fillOpacity="0.9" stroke="#A49284" strokeWidth="1.2" />
            {/* Subtle light reflections */}
            <ellipse cx="46" cy="54" rx="6" ry="3" fill="#FFF" fillOpacity="0.4" />
            <ellipse cx="102" cy="60" rx="7" ry="2.5" fill="#FFF" fillOpacity="0.4" />
            <ellipse cx="76" cy="110" rx="9" ry="3.5" fill="#FFF" fillOpacity="0.4" />
          </svg>
        </div>
      );

    case 12: // Beaded Opal & Tourmaline Strands (WhatsApp Image 2024-10-28 at 13.22.11 (2).jpeg)
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FDF6ED] via-[#E8B4B8]/20 to-[#E5EDF0] flex items-center justify-center">
          <svg className="w-4/5 h-4/5 opacity-90" viewBox="0 0 180 180" fill="none">
            {/* Triple beaded wave strands */}
            <path d="M20 50 C60 80 120 20 160 60" stroke="#CCA586" strokeWidth="1" fill="none" />
            <path d="M20 90 C60 130 120 60 160 110" stroke="#CCA586" strokeWidth="1" fill="none" />
            <path d="M20 130 C60 170 120 100 160 145" stroke="#CCA586" strokeWidth="1" fill="none" />
            {/* Opal & tourmaline beads */}
            {[
              { cx: 35, cy: 60, col: '#F4D3C5' },
              { cx: 65, cy: 75, col: '#C5E0D8' },
              { cx: 95, cy: 50, col: '#EAC8C1' },
              { cx: 125, cy: 35, col: '#FFFDF0' },
              { cx: 150, cy: 55, col: '#D5A7B4' },
              { cx: 40, cy: 105, col: '#B9D5CB' },
              { cx: 75, cy: 118, col: '#FFFDF0' },
              { cx: 110, cy: 80, col: '#E0B5BF' },
              { cx: 145, cy: 100, col: '#CCA586' },
            ].map((b, i) => (
              <circle key={i} cx={b.cx} cy={b.cy} r="6" fill={b.col} stroke="#A49284" strokeWidth="0.8" />
            ))}
          </svg>
        </div>
      );

    default: // Generic bespoke artisanal jewelry & wire wrap artwork
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5EDF0] via-[#DDCDBD]/40 to-[#F7EFE2] flex items-center justify-center">
          <svg className="w-3/4 h-3/4 opacity-80" viewBox="0 0 160 160" fill="none">
            <circle cx="80" cy="80" r="50" stroke="#CCA586" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="80,45 105,75 80,115 55,75" fill="#CCA586" fillOpacity="0.3" stroke="#A49284" strokeWidth="1.2" />
            <path d="M60 75 Q80 90 100 75" stroke="#CCA586" strokeWidth="1.8" />
            <circle cx="80" cy="40" r="4" fill="none" stroke="#A49284" strokeWidth="1.2" />
          </svg>
        </div>
      );
  }
};
