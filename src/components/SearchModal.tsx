import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { ARTWORKS, EXHIBITIONS, NEWS_STORIES, Artwork, Language } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onSelectArtwork: (art: Artwork) => void;
  onSelectExhibition: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  language,
  onClose,
  onSelectArtwork,
  onSelectExhibition,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { artworks: [], exhibitions: [], stories: [] };

    const artworks = ARTWORKS.filter(
      (a) =>
        a.titleBm.toLowerCase().includes(q) ||
        a.titleEn.toLowerCase().includes(q) ||
        a.artist.toLowerCase().includes(q) ||
        a.accessionNo.toLowerCase().includes(q) ||
        a.mediumBm.toLowerCase().includes(q)
    );

    const exhibitions = EXHIBITIONS.filter(
      (e) =>
        e.titleBm.toLowerCase().includes(q) ||
        e.titleEn.toLowerCase().includes(q) ||
        e.descriptionBm.toLowerCase().includes(q)
    );

    const stories = NEWS_STORIES.filter(
      (s) =>
        s.titleBm.toLowerCase().includes(q) ||
        s.titleEn.toLowerCase().includes(q) ||
        s.summaryBm.toLowerCase().includes(q)
    );

    return { artworks, exhibitions, stories };
  }, [query]);

  if (!isOpen) return null;

  const t = {
    bm: {
      placeholder: 'Cari karya seni, artis, pameran atau berita korporat...',
      resultsCount: 'Keputusan Carian',
      noResults: 'Tiada padanan dijumpai untuk kriteria carian anda.',
      popular: 'Carian Popular:',
      quickKeywords: ['Batik', 'Arca Menara', 'Residensi Artis', 'Gemilang Warisan', 'Songket Diraja'],
      artworksTitle: 'Koleksi Seni & Karya Agong',
      exhibitionsTitle: 'Pameran & Acara',
      storiesTitle: 'Berita & Siaran Media',
    },
    en: {
      placeholder: 'Search artworks, artists, exhibitions or press releases...',
      resultsCount: 'Search Results',
      noResults: 'No matches found for your query.',
      popular: 'Popular Searches:',
      quickKeywords: ['Batik', 'Sculpture', 'Artist Residency', 'Splendour Heritage', 'Royal Songket'],
      artworksTitle: 'Artworks & Collections',
      exhibitionsTitle: 'Exhibitions & Events',
      storiesTitle: 'Stories & Press Releases',
    },
  }[language];

  const totalResults =
    results.artworks.length + results.exhibitions.length + results.stories.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-3 bg-neutral-950/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-sm shadow-2xl overflow-hidden text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 bg-transparent text-sm sm:text-base text-neutral-100 placeholder:text-neutral-500 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-500 hover:text-neutral-300 mr-2"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white rounded-xs bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick keywords suggestions when no query */}
        {!query && (
          <div className="p-6 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
              {t.popular}
            </span>
            <div className="flex flex-wrap gap-2">
              {t.quickKeywords.map((kw, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(kw)}
                  className="px-3 py-1.5 text-xs text-neutral-300 bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 rounded-xs transition-colors cursor-pointer"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Container */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
            <div className="text-xs font-mono text-neutral-400 border-b border-neutral-800/80 pb-2">
              {t.resultsCount}: <span className="text-emerald-400 font-bold">{totalResults}</span>
            </div>

            {totalResults === 0 ? (
              <p className="text-sm text-neutral-400 py-6 text-center">
                {t.noResults}
              </p>
            ) : (
              <div className="space-y-6">
                {/* Artworks */}
                {results.artworks.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                      {t.artworksTitle}
                    </span>
                    <div className="space-y-2">
                      {results.artworks.map((art) => (
                        <div
                          key={art.id}
                          onClick={() => {
                            onClose();
                            onSelectArtwork(art);
                          }}
                          className="p-3 bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 rounded-xs flex items-center justify-between gap-3 cursor-pointer group transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={art.image}
                              alt={art.titleBm}
                              className="w-10 h-10 object-cover rounded-xs"
                            />
                            <div>
                              <p className="text-xs font-mono text-emerald-400">
                                {art.accessionNo}
                              </p>
                              <p className="text-sm font-serif font-bold text-white group-hover:text-emerald-300">
                                {language === 'bm' ? art.titleBm : art.titleEn}
                              </p>
                              <p className="text-xs text-neutral-400">{art.artist}</p>
                            </div>
                          </div>
                          <Eye className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exhibitions */}
                {results.exhibitions.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                      {t.exhibitionsTitle}
                    </span>
                    <div className="space-y-2">
                      {results.exhibitions.map((ex) => (
                        <div
                          key={ex.id}
                          onClick={() => {
                            onClose();
                            onSelectExhibition();
                          }}
                          className="p-3 bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 rounded-xs flex items-center justify-between gap-3 cursor-pointer group transition-colors"
                        >
                          <div>
                            <p className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {ex.dateRange}
                            </p>
                            <p className="text-sm font-serif font-bold text-white group-hover:text-emerald-300">
                              {language === 'bm' ? ex.titleBm : ex.titleEn}
                            </p>
                            <p className="text-xs text-neutral-400">{ex.hall}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stories */}
                {results.stories.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                      {t.storiesTitle}
                    </span>
                    <div className="space-y-2">
                      {results.stories.map((st) => (
                        <div
                          key={st.id}
                          onClick={onClose}
                          className="p-3 bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 rounded-xs flex items-center justify-between gap-3 cursor-pointer group transition-colors"
                        >
                          <div>
                            <p className="text-[11px] text-emerald-400 font-mono">
                              {st.date}
                            </p>
                            <p className="text-xs sm:text-sm font-medium text-white group-hover:text-emerald-300">
                              {language === 'bm' ? st.titleBm : st.titleEn}
                            </p>
                          </div>
                          <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
