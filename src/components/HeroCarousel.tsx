import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Language } from '../data/content';

interface HeroCarouselProps {
  language: Language;
  onExploreGallery: () => void;
  onPlanVisit: () => void;
}

interface Slide {
  id: number;
  taglineBm: string;
  taglineEn: string;
  titleBm: string;
  titleEn: string;
  descriptionBm: string;
  descriptionEn: string;
  ctaTextBm: string;
  ctaTextEn: string;
  image: string;
  themeColor: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    taglineBm: 'MISI KORPORAT & WARISAN BUDAYA',
    taglineEn: 'CORPORATE MISSION & CULTURAL HERITAGE',
    titleBm: 'Bersemangat Demi Seni, Memperkasa Kehidupan',
    titleEn: 'Passionate About Art, Enriching Lives',
    descriptionBm: 'Menginspirasikan kecemerlangan seni visual Malaysia, mempertemukan nilai tradisi luhur dengan kebebasan ekspresi kontemporari di pentas antarabangsa.',
    descriptionEn: 'Inspiring Malaysian visual art excellence, uniting profound heritage craftsmanship with forward-looking contemporary expression.',
    ctaTextBm: 'Terokai Galeri & Koleksi',
    ctaTextEn: 'Explore Gallery & Collections',
    image: '/src/assets/images/hero_studio_hana_main_1790908375542.jpg',
    themeColor: 'emerald',
  },
  {
    id: 2,
    taglineBm: 'KHAZANAH KARYA AGUNG NEGARA',
    taglineEn: 'NATIONAL MASTERPIECE REPOSITORY',
    titleBm: 'Galeri Utama: Ruang Dialog Seni Nusantara',
    titleEn: 'Flagship Gallery: A Dialogue of Southeast Asian Art',
    descriptionBm: 'Menempatkan lebih 3,500 karya lukisan agung, arca berskala monumental, dan tenunan songket bersejarah di tengah-tengah mercu tanda Kuala Lumpur.',
    descriptionEn: 'Home to over 3,500 preserved masterworks, monumental sculptures, and historical royal textiles at the cultural heart of Kuala Lumpur.',
    ctaTextBm: 'Rancang Lawatan Percuma',
    ctaTextEn: 'Plan Free Gallery Visit',
    image: '/src/assets/images/hero_studio_heritage_art_1790908389162.jpg',
    themeColor: 'teal',
  },
  {
    id: 3,
    taglineBm: 'KELESTARIAN & GENERASI KREATIF',
    taglineEn: 'SUSTAINABILITY & NEXT GENERATION ART',
    titleBm: 'Memupuk Warisan Kraf, Mengukir Masa Depan',
    titleEn: 'Sustaining Heritage Crafts, Sculpting the Future',
    descriptionBm: 'Membimbing generasi pelukis muda melalui Program Residensi Seni Kebangsaan dan penyelidikan pemuliharaan berteknologi tinggi.',
    descriptionEn: 'Cultivating tomorrow’s masters through National Fellowship Residencies and advanced non-destructive art conservation technologies.',
    ctaTextBm: 'Ketahui Program Residensi',
    ctaTextEn: 'Discover Residency Program',
    image: '/src/assets/images/artist_studio_workspace_1790908415590.jpg',
    themeColor: 'emerald',
  },
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  language,
  onExploreGallery,
  onPlanVisit,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[620px] lg:h-[720px] bg-neutral-950 overflow-hidden select-none">
      {/* Background Slides */}
      {SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={item.image}
            alt={language === 'bm' ? item.titleBm : item.titleEn}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
            referrerPolicy="no-referrer"
          />
          {/* Measured Scrim for WCAG AA compliance */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-transparent" />
        </div>
      ))}

      {/* Decorative Petronas Geometric Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 z-20" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl space-y-4">
          {/* Kicker label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            <span className="w-6 h-0.5 bg-emerald-500 inline-block" />
            <span>{language === 'bm' ? slide.taglineBm : slide.taglineEn}</span>
          </div>

          {/* Primary Headline with text-wrap balance */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            {language === 'bm' ? slide.titleBm : slide.titleEn}
          </h1>

          {/* Subtitle Deck */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            {language === 'bm' ? slide.descriptionBm : slide.descriptionEn}
          </p>

          {/* Action Button Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={currentSlide === 1 ? onPlanVisit : onExploreGallery}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all rounded-xs shadow-lg shadow-emerald-950/50 cursor-pointer"
            >
              <span>{language === 'bm' ? slide.ctaTextBm : slide.ctaTextEn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onPlanVisit}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 hover:border-emerald-500 transition-all rounded-xs backdrop-blur-sm cursor-pointer"
            >
              <span>{language === 'bm' ? 'Waktu & Panduan Lawatan' : 'Visiting Hours & Info'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Slider Navigation Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {SLIDES.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className="flex items-center gap-2 text-xs font-mono transition-all cursor-pointer group py-1"
            >
              <span
                className={`font-semibold tabular-nums ${
                  index === currentSlide ? 'text-emerald-400' : 'text-neutral-500 group-hover:text-neutral-300'
                }`}
              >
                0{item.id}
              </span>
              <div
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-10 sm:w-16 bg-emerald-400'
                    : 'w-4 sm:w-6 bg-neutral-700 group-hover:bg-neutral-500'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Carousel Control Buttons */}
        <div className="flex items-center gap-2 bg-neutral-950/70 backdrop-blur-md p-1 border border-neutral-800 rounded-sm">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <div className="w-px h-3 bg-neutral-800" />
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
