import React, { useState } from 'react';
import { Artwork, Exhibition, ARTWORKS, EXHIBITIONS, Language } from '../data/content';
import { Calendar, MapPin, Sparkles, ZoomIn, ArrowRight } from 'lucide-react';

interface ExhibitionGalleryProps {
  language: Language;
  onSelectArtwork: (artwork: Artwork) => void;
  onBookExhibition: () => void;
}

export const ExhibitionGallery: React.FC<ExhibitionGalleryProps> = ({
  language,
  onSelectArtwork,
  onBookExhibition,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'contemporary' | 'sculpture' | 'textile' | 'corporate'>('all');
  const [currentExhibitionIdx, setCurrentExhibitionIdx] = useState(0);

  const featuredExhibition = EXHIBITIONS[currentExhibitionIdx];

  const filteredArtworks = activeTab === 'all'
    ? ARTWORKS
    : ARTWORKS.filter(art => art.category === activeTab);

  const t = {
    bm: {
      exhibitionKicker: 'PAMERAN UTAMA SEDANG BERLANGSUNG',
      viewExhibition: 'Tempah Pas Masuk Pameran',
      switchExhibition: 'Lihat Pameran Seterusnya',
      curatedBy: 'Kurator Pameran',
      location: 'Dewan Pameran',
      keyHighlights: 'Sorotan Eksklusif',
      collectionKicker: 'ARKIB KOLEKSI KEKAL',
      collectionTitle: 'Koleksi Seni Visual Studio Hana Art',
      collectionSubtitle: 'Koleksi komprehensif merangkumi pelbagai medium seni kontemporari, arca monumental, dan warisan tekstil bernilai tinggi.',
      tabs: {
        all: 'Semua Koleksi',
        contemporary: 'Lukisan Kontemporari',
        sculpture: 'Arca & Ruang',
        textile: 'Tekstil & Batik Warisan',
        corporate: 'Koleksi Korporat',
      },
      inspect: 'Lihat Butiran Kuratorial',
      provenanceCode: 'No. Aksesi',
    },
    en: {
      exhibitionKicker: 'NOW SHOWING · MAJOR EXHIBITION',
      viewExhibition: 'Book Free Exhibition Pass',
      switchExhibition: 'Next Exhibition',
      curatedBy: 'Curated by',
      location: 'Venue & Hall',
      keyHighlights: 'Key Highlights',
      collectionKicker: 'PERMANENT ARCHIVE COLLECTION',
      collectionTitle: 'Studio Hana Art Permanent Collection',
      collectionSubtitle: 'A comprehensive archive spanning contemporary paintings, monumental spatial sculptures, and royal textile tapestries.',
      tabs: {
        all: 'All Collections',
        contemporary: 'Contemporary Painting',
        sculpture: 'Sculptures & Space',
        textile: 'Heritage Textiles & Batik',
        corporate: 'Corporate Collections',
      },
      inspect: 'View Curatorial Details',
      provenanceCode: 'Accession No.',
    },
  }[language];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* 1. Featured Exhibition Section (Museum Marquee Hero) */}
        <div id="exhibitions" className="relative rounded-sm overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left: Exhibition Media Focal */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full">
              <img
                src={featuredExhibition.image}
                alt={language === 'bm' ? featuredExhibition.titleBm : featuredExhibition.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950" />
            </div>

            {/* Right: Curatorial Info Deck */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.exhibitionKicker}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                  {language === 'bm' ? featuredExhibition.titleBm : featuredExhibition.titleEn}
                </h3>
                <p className="text-xs uppercase tracking-wider text-emerald-400/90 font-mono mt-1">
                  {language === 'bm' ? featuredExhibition.taglineBm : featuredExhibition.taglineEn}
                </p>

                {/* Metadata strip */}
                <div className="mt-5 space-y-2.5 text-xs text-neutral-300 border-y border-neutral-800/80 py-3.5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-mono">{featuredExhibition.dateRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{featuredExhibition.hall}</span>
                  </div>
                </div>

                {/* Synopsis */}
                <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                  {language === 'bm' ? featuredExhibition.descriptionBm : featuredExhibition.descriptionEn}
                </p>

                {/* Highlights List */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                    {t.keyHighlights}
                  </span>
                  {(language === 'bm' ? featuredExhibition.highlightsBm : featuredExhibition.highlightsEn).map(
                    (highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onBookExhibition}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-xs shadow cursor-pointer whitespace-nowrap"
                >
                  {t.viewExhibition}
                </button>
                {EXHIBITIONS.length > 1 && (
                  <button
                    onClick={() => setCurrentExhibitionIdx((prev) => (prev + 1) % EXHIBITIONS.length)}
                    className="px-4 py-3 text-xs font-medium text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-colors rounded-xs cursor-pointer whitespace-nowrap"
                  >
                    {t.switchExhibition}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Collection Browser Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
                <span className="w-5 h-0.5 bg-emerald-500 inline-block" />
                <span>{t.collectionKicker}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                {t.collectionTitle}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400">
                {t.collectionSubtitle}
              </p>
            </div>

            {/* Interactive Segmented Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-950 border border-neutral-800 rounded-sm">
              {(['all', 'contemporary', 'sculpture', 'textile', 'corporate'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer rounded-xs whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {t.tabs[tab]}
                </button>
              ))}
            </div>
          </div>

          {/* Artworks Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArtwork(art)}
                className="group relative bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Artwork Presentation Frame with 4:3 Aspect */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={art.image}
                    alt={language === 'bm' ? art.titleBm : art.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Zoom Affordance */}
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-colors" />
                  <div className="absolute top-3 right-3 p-1.5 rounded-sm bg-neutral-950/80 text-neutral-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Unboxed Metadata & Title (Zero-Pill Discipline) */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Metadata strip with typographic separator */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
                      <span className="text-emerald-400 font-semibold">{art.accessionNo}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{art.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.dimensions}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                      {language === 'bm' ? art.titleBm : art.titleEn}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium mt-1">
                      {art.artist}
                    </p>
                    <p className="text-xs text-neutral-500 mt-2 line-clamp-2">
                      {language === 'bm' ? art.mediumBm : art.mediumEn}
                    </p>
                  </div>

                  {/* Curatorial inspect link */}
                  <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-xs text-emerald-400 font-medium">
                    <span>{t.inspect}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
