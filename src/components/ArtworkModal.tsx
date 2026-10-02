import React, { useEffect } from 'react';
import { Artwork, Language } from '../data/content';
import { X, Calendar, User, Layers, Maximize2, ShieldCheck, Mail } from 'lucide-react';

interface ArtworkModalProps {
  artwork: Artwork | null;
  language: Language;
  onClose: () => void;
  onInquire: (artwork: Artwork) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  language,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (artwork) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  const t = {
    bm: {
      accessionTitle: 'REKOD KURATORIAL & KHAZANAH GALERI',
      artistLabel: 'Artis / Kolektif',
      originLabel: 'Asal & Lokasi',
      yearLabel: 'Tahun Penciptaan',
      mediumLabel: 'Medium & Teknik',
      dimensionsLabel: 'Dimensi & Ukuran',
      descriptionLabel: 'Ulasan Visual & Kuratorial',
      curatorLabel: 'Kenyataan Kurator Utama',
      inquireBtn: 'Pertanyaan Pemilikan / Tempahan Galeri',
      closeBtn: 'Tutup',
      provenanceStatus: 'Koleksi Kekal Berdaftar · Hak Cipta Terpelihara Studio Hana Art',
    },
    en: {
      accessionTitle: 'CURATORIAL ACCESSION & ARCHIVE RECORD',
      artistLabel: 'Artist / Collective',
      originLabel: 'Origin & Atelier',
      yearLabel: 'Year of Creation',
      mediumLabel: 'Medium & Technique',
      dimensionsLabel: 'Dimensions',
      descriptionLabel: 'Visual & Curatorial Analysis',
      curatorLabel: 'Chief Curator’s Commentary',
      inquireBtn: 'Inquire for Acquisition / Loan',
      closeBtn: 'Close',
      provenanceStatus: 'Registered Permanent Collection · Studio Hana Art Copyright Reserved',
    },
  }[language];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-neutral-900 border border-neutral-700/80 rounded-sm shadow-2xl text-neutral-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Strip */}
        <div className="sticky top-0 z-20 bg-neutral-950/95 backdrop-blur-sm px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-wider text-emerald-400 font-semibold uppercase">
              {artwork.accessionNo}
            </span>
            <span className="text-neutral-600 hidden sm:inline">·</span>
            <span className="text-xs text-neutral-400 tracking-wider uppercase hidden sm:inline">
              {t.accessionTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-xs bg-neutral-800/80 hover:bg-neutral-700 transition-colors cursor-pointer"
            aria-label={t.closeBtn}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Artwork Frame */}
          <div className="relative rounded-sm overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center min-h-[300px] max-h-[500px]">
            <img
              src={artwork.image}
              alt={language === 'bm' ? artwork.titleBm : artwork.titleEn}
              className="max-h-[480px] w-auto object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Titles & Lead */}
          <div className="space-y-2 border-b border-neutral-800 pb-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {language === 'bm' ? artwork.titleBm : artwork.titleEn}
            </h2>
            <p className="text-base text-emerald-400 font-medium font-serif">
              {artwork.artist}
            </p>
          </div>

          {/* Structured Accession Metadata Grid (Pattern B from Museum design) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-neutral-950/60 p-5 rounded-sm border border-neutral-800/80 text-xs">
            <div>
              <span className="flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                <User className="w-3.5 h-3.5 text-emerald-500" />
                {t.artistLabel}
              </span>
              <p className="text-neutral-200 font-medium">{artwork.artist}</p>
              <p className="text-neutral-400 text-xs mt-0.5">{artwork.artistOrigin}</p>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                {t.yearLabel}
              </span>
              <p className="text-neutral-200 font-mono font-medium">{artwork.year}</p>
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                <Maximize2 className="w-3.5 h-3.5 text-emerald-500" />
                {t.dimensionsLabel}
              </span>
              <p className="text-neutral-200 font-mono font-medium">{artwork.dimensions}</p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3 pt-3 border-t border-neutral-800/60">
              <span className="flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                {t.mediumLabel}
              </span>
              <p className="text-neutral-300">
                {language === 'bm' ? artwork.mediumBm : artwork.mediumEn}
              </p>
            </div>
          </div>

          {/* Curatorial Essays */}
          <div className="space-y-5 text-sm leading-relaxed text-neutral-300">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
                {t.descriptionLabel}
              </h4>
              <p>{language === 'bm' ? artwork.descriptionBm : artwork.descriptionEn}</p>
            </div>

            <div className="p-4 bg-emerald-950/20 border-l-2 border-emerald-500 text-neutral-300 italic font-serif">
              <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1 font-sans not-italic">
                {t.curatorLabel}
              </h4>
              <p>"{language === 'bm' ? artwork.curatorNotesBm : artwork.curatorNotesEn}"</p>
            </div>
          </div>

          {/* Verification Provenance Footer */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t.provenanceStatus}</span>
          </div>

          {/* Inquire Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-neutral-800">
            <button
              onClick={() => onInquire(artwork)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-xs shadow cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{t.inquireBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-neutral-400 hover:text-white border border-neutral-800 rounded-xs transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
