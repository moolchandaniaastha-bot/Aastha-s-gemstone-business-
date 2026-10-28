/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { GemstoneDirectory } from './components/GemstoneDirectory';
import { Workshops } from './components/Workshops';
import { CustomBar } from './components/CustomBar';
import { StudioLocations } from './components/StudioLocations';
import { Footer } from './components/Footer';
import { GemstoneModal } from './components/GemstoneModal';
import { WorkshopBookingModal } from './components/WorkshopBookingModal';
import { StudioAssetModal } from './components/StudioAssetModal';
import { Gemstone } from './types';

export default function App() {
  const [selectedGemstone, setSelectedGemstone] = useState<Gemstone | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedWorkshopProgram, setSelectedWorkshopProgram] = useState<string>('workshop-stack-bracelets');
  const [selectedStoneForWorkshop, setSelectedStoneForWorkshop] = useState<string>('');
  const [isAssetDeskOpen, setIsAssetDeskOpen] = useState<boolean>(false);

  const handleOpenBooking = (programId?: string, stoneName?: string) => {
    if (programId) setSelectedWorkshopProgram(programId);
    if (stoneName) setSelectedStoneForWorkshop(stoneName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7EFE2] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#CCA586]/30 selection:text-[#2B2B2B]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections according to PRD Structure */}
      <main className="flex-1">
        {/* 4.2 Hero Section (Asset 9) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4.3 Brand Story & Ethical Sourcing (Assets 6, 14) */}
        <BrandStory />

        {/* 4.4 Gemstone & Meaning Directory (Assets 5, 8, 7, 1, 13, 12) */}
        <GemstoneDirectory onSelectGemstone={(gem) => setSelectedGemstone(gem)} />

        {/* 4.5 Interactive Crafting Workshops (Assets 2, 11, 15) */}
        <Workshops onOpenBookingWithProgram={(progId) => handleOpenBooking(progId)} />

        {/* 4.6 Customization & Wire-Wrapping Bar (Assets 3, 4, 10, 16) */}
        <CustomBar />

        {/* 4.7 Studio Locations (Andheri West & Colaba Causeway) */}
        <StudioLocations />
      </main>

      {/* 4.8 Footer (Taupe #A49284 & Seashells #F7EFE2) */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenAssetDesk={() => setIsAssetDeskOpen(true)}
      />

      {/* Modals */}
      <GemstoneModal
        gemstone={selectedGemstone}
        onClose={() => setSelectedGemstone(null)}
        onSelectForWorkshop={(stoneName) => {
          setSelectedGemstone(null);
          handleOpenBooking('workshop-drop-necklaces', stoneName);
        }}
      />

      <WorkshopBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialWorkshopId={selectedWorkshopProgram}
        initialStone={selectedStoneForWorkshop}
      />

      <StudioAssetModal
        isOpen={isAssetDeskOpen}
        onClose={() => setIsAssetDeskOpen(false)}
      />
    </div>
  );
}
