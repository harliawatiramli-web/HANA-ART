import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Ticket, Printer, MapPin } from 'lucide-react';
import { Language } from '../data/content';

interface TourBookingModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({
  isOpen,
  language,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-10-15');
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [guests, setGuests] = useState('2');
  const [tourType, setTourType] = useState('guided');
  const [confirmedPass, setConfirmedPass] = useState<{
    passId: string;
    name: string;
    date: string;
    time: string;
    guests: string;
    tourType: string;
  } | null>(null);

  if (!isOpen) return null;

  const t = {
    bm: {
      title: 'Tempahan Pas Lawatan Galeri Studio Hana Art',
      subtitle: 'Kemasukan adalah percuma. Sila pilih tarikh dan masa sesi anda untuk kemudahan kawalan kapasiti ruang galeri.',
      nameLabel: 'Nama Penuh',
      emailLabel: 'Alamat E-mel',
      phoneLabel: 'Nombor Telefon',
      dateLabel: 'Tarikh Lawatan (Selasa – Ahad)',
      timeLabel: 'Sesi Masa',
      guestsLabel: 'Bilangan Pelawat',
      typeLabel: 'Jenis Pengalaman',
      types: {
        general: 'Lawatan Kendiri Percuma (Umum)',
        guided: 'Lawatan Berpandu Kurator (Eksklusif)',
        academic: 'Rombongan Sekolah / Universiti',
      },
      submitBtn: 'Sahkan & Jana Pas Masuk Digital',
      successTitle: 'Pas Masuk Digital Berjaya Dijana!',
      successSub: 'Sila tunjukkan pas ini di kaunter pendaftaran Aras 3, Menara Studio Hana Art, KLCC semasa ketibaan.',
      passRef: 'No. Rujukan Pas',
      printBtn: 'Cetak / Simpan Pas',
      bookAnother: 'Tempah Pas Lain',
      close: 'Tutup',
    },
    en: {
      title: 'Book Gallery Visitor Pass · Studio Hana Art',
      subtitle: 'Admission is complimentary. Please select your date and session slot to help us manage curatorial gallery capacity.',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Contact Phone Number',
      dateLabel: 'Visit Date (Tuesday – Sunday)',
      timeLabel: 'Session Time Slot',
      guestsLabel: 'Number of Guests',
      typeLabel: 'Tour Experience',
      types: {
        general: 'Self-Guided Free Admission',
        guided: 'Curator-Guided Walkthrough',
        academic: 'Academic & Student Delegation',
      },
      submitBtn: 'Confirm & Generate Digital Pass',
      successTitle: 'Digital Visitor Pass Generated!',
      successSub: 'Please present this digital confirmation at the Level 3 Reception Counter, Studio Hana Art Tower, KLCC.',
      passRef: 'Pass Reference ID',
      printBtn: 'Print / Save Pass',
      bookAnother: 'Book Another Pass',
      close: 'Close',
    },
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const randomId = 'SHA-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedPass({
      passId: randomId,
      name,
      date,
      time: timeSlot,
      guests,
      tourType: tourType === 'guided' ? t.types.guided : tourType === 'academic' ? t.types.academic : t.types.general,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setConfirmedPass(null);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-neutral-900 border border-neutral-700 rounded-sm shadow-2xl p-6 sm:p-8 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              GALERI STUDIO HANA ART
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-xs bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!confirmedPass ? (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {t.title}
              </h2>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  {t.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="cth. Harliawati Ramli"
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@domain.com"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+60 12-345 6789"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  {t.typeLabel}
                </label>
                <select
                  value={tourType}
                  onChange={(e) => setTourType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 outline-none transition-colors cursor-pointer"
                >
                  <option value="guided">{t.types.guided}</option>
                  <option value="general">{t.types.general}</option>
                  <option value="academic">{t.types.academic}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-xs font-mono text-neutral-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.timeLabel}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-xs font-mono text-neutral-100 outline-none cursor-pointer"
                  >
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    {t.guestsLabel}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-xs font-mono text-neutral-100 outline-none cursor-pointer"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5+">5-10 Orang</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-xs shadow cursor-pointer"
              >
                {t.submitBtn}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation & Branded Digital Pass */
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-3 p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-sm">
              <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-emerald-300">
                  {t.successTitle}
                </h3>
                <p className="text-xs text-neutral-300 mt-0.5">
                  {t.successSub}
                </p>
              </div>
            </div>

            {/* Visual Digital Ticket Pass */}
            <div className="bg-neutral-950 border-2 border-dashed border-emerald-500/50 rounded-sm p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div>
                  <span className="font-brand font-bold text-sm text-neutral-100">
                    STUDIO HANA ART
                  </span>
                  <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono">
                    Official Gallery Pass
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-500 uppercase font-mono block">
                    {t.passRef}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {confirmedPass.passId}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">Pelawat / Visitor</span>
                  <span className="font-medium text-white">{confirmedPass.name}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">Kategori / Tour</span>
                  <span className="font-medium text-emerald-300">{confirmedPass.tourType}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">Tarikh / Date</span>
                  <span className="font-mono text-white">{confirmedPass.date}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">Sesi / Slot</span>
                  <span className="font-mono text-white">{confirmedPass.time} ({confirmedPass.guests} pax)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  Aras 3, Menara Studio Hana Art, KLCC
                </span>
                <span className="text-emerald-400 font-semibold font-mono">PERCUMA / FREE</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xs transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t.printBtn}</span>
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xs transition-colors cursor-pointer"
              >
                {t.bookAnother}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
