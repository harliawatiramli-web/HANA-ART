import React from 'react';
import { Clock, Ticket, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Language } from '../data/content';

interface VisitorUtilityStripProps {
  language: Language;
  onBookTour: () => void;
  onViewExhibition: () => void;
}

export const VisitorUtilityStrip: React.FC<VisitorUtilityStripProps> = ({
  language,
  onBookTour,
  onViewExhibition,
}) => {
  const content = {
    bm: {
      hoursLabel: 'Waktu Lawatan',
      hoursValue: 'Selasa – Ahad: 10:00 PG – 8:00 PTG',
      closed: '(Isnin Ditutup)',
      admissionLabel: 'Kemasukan Galeri',
      admissionValue: 'Masuk Percuma untuk Semua',
      locationLabel: 'Lokasi Galeri',
      locationValue: 'Aras 3 & 4, Menara Studio Hana Art, KLCC',
      currentLabel: 'Pameran Utama Sekarang',
      currentValue: 'Gemilang Warisan 2026',
      bookButton: 'Tempah Pas Lawatan Percuma',
      guideButton: 'Lihat Info Pameran',
    },
    en: {
      hoursLabel: 'Visiting Hours',
      hoursValue: 'Tuesday – Sunday: 10:00 AM – 8:00 PM',
      closed: '(Closed Mondays)',
      admissionLabel: 'Admission',
      admissionValue: 'Complimentary / Free Admission',
      locationLabel: 'Gallery Location',
      locationValue: 'Level 3 & 4, Studio Hana Art Tower, KLCC',
      currentLabel: 'Current Special Feature',
      currentValue: 'Splendour of Heritage 2026',
      bookButton: 'Book Free Visitor Pass',
      guideButton: 'View Exhibition Info',
    },
  }[language];

  return (
    <div className="w-full bg-neutral-900 border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-center">
          {/* Operational Hours */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-neutral-800 text-emerald-400 shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                {content.hoursLabel}
              </p>
              <p className="text-xs sm:text-sm font-medium text-neutral-100 mt-0.5">
                {content.hoursValue}{' '}
                <span className="text-emerald-400 text-xs">{content.closed}</span>
              </p>
            </div>
          </div>

          {/* Free Admission */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-neutral-800 text-emerald-400 shrink-0 mt-0.5">
              <Ticket className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                {content.admissionLabel}
              </p>
              <p className="text-xs sm:text-sm font-medium text-emerald-400 mt-0.5 font-mono">
                {content.admissionValue}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-neutral-800 text-emerald-400 shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                {content.locationLabel}
              </p>
              <p className="text-xs sm:text-sm font-medium text-neutral-200 mt-0.5">
                {content.locationValue}
              </p>
            </div>
          </div>

          {/* Fast Call to Action */}
          <div className="flex items-center gap-2 lg:justify-end pt-2 md:pt-0">
            <button
              onClick={onBookTour}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-xs shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{content.bookButton}</span>
            </button>
            <button
              onClick={onViewExhibition}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 transition-colors rounded-xs cursor-pointer whitespace-nowrap"
            >
              <span>{content.guideButton}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
