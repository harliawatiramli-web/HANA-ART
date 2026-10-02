import React, { useState } from 'react';
import { Search, Globe, Menu, X, ArrowUpRight, Music } from 'lucide-react';
import { Language } from '../data/content';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenSearch: () => void;
  onOpenAdvisory: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenBooking,
  onOpenSearch,
  onOpenAdvisory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    bm: {
      media: 'Media',
      sustainability: 'Kelestarian Seni',
      careers: 'Kerjaya & Residensi',
      search: 'Cari',
      ourPassion: 'Misi & Warisan',
      gallery: 'Galeri & Koleksi',
      exhibitions: 'Pameran Semasa',
      impact: 'Impak Komuniti',
      stories: 'Berita & Wacana',
      planVisit: 'Rancang Lawatan',
      advisory: 'Khidmat Kuratorial',
    },
    en: {
      media: 'Media Centre',
      sustainability: 'Art Sustainability',
      careers: 'Careers & Fellowships',
      search: 'Search',
      ourPassion: 'Our Passion',
      gallery: 'Gallery & Collections',
      exhibitions: 'Exhibitions',
      impact: 'Community Impact',
      stories: 'Stories & Media',
      planVisit: 'Plan Your Visit',
      advisory: 'Curatorial Advisory',
    }
  }[language];

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
      {/* Petronas-style Top Utility Bar */}
      <div className="border-b border-neutral-900 bg-neutral-950 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            <a href="#sustainability" className="hover:text-emerald-400 transition-colors">
              {t.sustainability}
            </a>
            <span className="text-neutral-700">·</span>
            <button onClick={onOpenAdvisory} className="hover:text-emerald-400 transition-colors">
              {t.advisory}
            </button>
            <span className="text-neutral-700">·</span>
            <a href="#stories" className="hover:text-emerald-400 transition-colors">
              {t.media}
            </a>
            <span className="text-neutral-700">·</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <Music className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>Lagu Tema: Zainal Abidin — Hijau</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Search trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer py-1 px-2"
              aria-label={t.search}
            >
              <Search className="w-3.5 h-3.5" />
              <span>{t.search}</span>
            </button>

            <span className="text-neutral-700">|</span>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 font-medium">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <button
                onClick={() => onLanguageChange('bm')}
                className={`transition-colors px-1 cursor-pointer ${
                  language === 'bm'
                    ? 'text-emerald-400 font-semibold underline underline-offset-4 decoration-emerald-500'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                BM
              </button>
              <span className="text-neutral-700">/</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`transition-colors px-1 cursor-pointer ${
                  language === 'en'
                    ? 'text-emerald-400 font-semibold underline underline-offset-4 decoration-emerald-500'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row: Strict 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-3 group text-neutral-100 shrink-0">
          <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-emerald-500 to-teal-800 flex items-center justify-center shadow-lg shadow-emerald-950/40">
            <span className="font-serif font-bold text-white text-base tracking-wider">H</span>
          </div>
          <span className="font-brand text-xl sm:text-2xl font-bold tracking-widest text-neutral-100 group-hover:text-emerald-400 transition-colors whitespace-nowrap">
            STUDIO HANA ART
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a
            href="#passion"
            className="hover:text-emerald-400 transition-colors relative py-1 hover:underline underline-offset-8 decoration-emerald-500"
          >
            {t.ourPassion}
          </a>
          <a
            href="#gallery"
            className="hover:text-emerald-400 transition-colors relative py-1 hover:underline underline-offset-8 decoration-emerald-500"
          >
            {t.gallery}
          </a>
          <a
            href="#exhibitions"
            className="hover:text-emerald-400 transition-colors relative py-1 hover:underline underline-offset-8 decoration-emerald-500"
          >
            {t.exhibitions}
          </a>
          <a
            href="#impact"
            className="hover:text-emerald-400 transition-colors relative py-1 hover:underline underline-offset-8 decoration-emerald-500"
          >
            {t.impact}
          </a>
          <a
            href="#stories"
            className="hover:text-emerald-400 transition-colors relative py-1 hover:underline underline-offset-8 decoration-emerald-500"
          >
            {t.stories}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-950/30 rounded-xs cursor-pointer whitespace-nowrap"
          >
            <span>{t.planVisit}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-neutral-300">
            <a
              href="#passion"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              {t.ourPassion}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              {t.gallery}
            </a>
            <a
              href="#exhibitions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              {t.exhibitions}
            </a>
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              {t.impact}
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              {t.stories}
            </a>
          </nav>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xs"
            >
              {t.planVisit}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisory();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-neutral-300 border border-neutral-700 hover:border-emerald-400 rounded-xs"
            >
              {t.advisory}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
