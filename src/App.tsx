import { useState } from 'react';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { VisitorUtilityStrip } from './components/VisitorUtilityStrip';
import { CorePillars } from './components/CorePillars';
import { ExhibitionGallery } from './components/ExhibitionGallery';
import { ImpactStats } from './components/ImpactStats';
import { StoriesMedia } from './components/StoriesMedia';
import { Footer } from './components/Footer';
import { ArtworkModal } from './components/ArtworkModal';
import { TourBookingModal } from './components/TourBookingModal';
import { ArtAdvisoryModal } from './components/ArtAdvisoryModal';
import { SearchModal } from './components/SearchModal';
import { AudioPlayerWidget } from './components/AudioPlayerWidget';
import { Artwork, Language } from './data/content';

export default function App() {
  const [language, setLanguage] = useState<Language>('bm');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [advisoryModalOpen, setAdvisoryModalOpen] = useState(false);
  const [advisoryArtwork, setAdvisoryArtwork] = useState<Artwork | null>(null);

  const handleOpenAdvisoryForArtwork = (art: Artwork) => {
    setSelectedArtwork(null);
    setAdvisoryArtwork(art);
    setAdvisoryModalOpen(true);
  };

  const handleOpenGeneralAdvisory = () => {
    setAdvisoryArtwork(null);
    setAdvisoryModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-body selection:bg-emerald-500 selection:text-neutral-950">
      {/* 1. Header with Top Utility Bar + 3-Zone Navigation */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAdvisory={handleOpenGeneralAdvisory}
      />

      {/* 2. Main Content Canvas */}
      <main className="flex-1">
        {/* Full-width Visionary Hero Carousel */}
        <HeroCarousel
          language={language}
          onExploreGallery={() => scrollToSection('gallery')}
          onPlanVisit={() => setBookingModalOpen(true)}
        />

        {/* Operational Visitor Utility Strip (Galeri Petronas Style) */}
        <VisitorUtilityStrip
          language={language}
          onBookTour={() => setBookingModalOpen(true)}
          onViewExhibition={() => scrollToSection('exhibitions')}
        />

        {/* Core Strategic & Cultural Pillars (Bento Grid) */}
        <CorePillars
          language={language}
          onSelectPillar={(pillarId) => {
            if (pillarId === 'gallery' || pillarId === 'heritage' || pillarId === 'public-art') {
              scrollToSection('gallery');
            } else if (pillarId === 'residency') {
              scrollToSection('impact');
            }
          }}
        />

        {/* Major Flagship Exhibition & Permanent Collection Explorer */}
        <ExhibitionGallery
          language={language}
          onSelectArtwork={(art) => setSelectedArtwork(art)}
          onBookExhibition={() => setBookingModalOpen(true)}
        />

        {/* Quantitative Proof & Cultural Sustainability Initiatives */}
        <ImpactStats
          language={language}
          onExploreFellowship={handleOpenGeneralAdvisory}
        />

        {/* Newsroom, Media Announcements & Curatorial Stories */}
        <StoriesMedia language={language} />
      </main>

      {/* 3. Corporate Mega-Footer */}
      <Footer
        language={language}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenAdvisory={handleOpenGeneralAdvisory}
      />

      {/* Modals & Dialogs */}
      <ArtworkModal
        artwork={selectedArtwork}
        language={language}
        onClose={() => setSelectedArtwork(null)}
        onInquire={handleOpenAdvisoryForArtwork}
      />

      <TourBookingModal
        isOpen={bookingModalOpen}
        language={language}
        onClose={() => setBookingModalOpen(false)}
      />

      <ArtAdvisoryModal
        isOpen={advisoryModalOpen}
        preselectedArtwork={advisoryArtwork}
        language={language}
        onClose={() => {
          setAdvisoryModalOpen(false);
          setAdvisoryArtwork(null);
        }}
      />

      <SearchModal
        isOpen={searchModalOpen}
        language={language}
        onClose={() => setSearchModalOpen(false)}
        onSelectArtwork={(art) => setSelectedArtwork(art)}
        onSelectExhibition={() => scrollToSection('exhibitions')}
      />

      {/* Floating Gallery Audio Controller: Zainal Abidin - Hijau */}
      <AudioPlayerWidget language={language} />
    </div>
  );
}
