import React, { useState } from 'react';
import { X, CheckCircle, Mail, Send } from 'lucide-react';
import { Artwork, Language } from '../data/content';

interface ArtAdvisoryModalProps {
  isOpen: boolean;
  preselectedArtwork?: Artwork | null;
  language: Language;
  onClose: () => void;
}

export const ArtAdvisoryModal: React.FC<ArtAdvisoryModalProps> = ({
  isOpen,
  preselectedArtwork,
  language,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestType, setInterestType] = useState('acquisition');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const t = {
    bm: {
      title: 'Khidmat Nasihat Kuratorial & Perolehan Seni Korporat',
      subtitle: 'Studio Hana Art menyediakan kepakaran perundingan seni visual, pemuliharaan khazanah, dan perolehan karya untuk koleksi korporat serta individu.',
      nameLabel: 'Nama Penuh',
      orgLabel: 'Organisasi / Syarikat (Pilihan)',
      emailLabel: 'E-mel Rasmi',
      phoneLabel: 'Nombor Telefon',
      interestLabel: 'Jenis Khidmat Diperlukan',
      interests: {
        acquisition: 'Perolehan / Pembelian Karya Seni',
        corporate: 'Konsultasi Seni Bina & Korporat',
        commission: 'Tempahan Karya Khas (Art Commissioning)',
        loan: 'Peminjaman Karya untuk Pameran Muzium',
      },
      msgLabel: 'Mesej / Butiran Pertanyaan',
      submitBtn: 'Hantar Permohonan Konsultasi',
      successTitle: 'Permohonan Berjaya Diterima!',
      successSub: 'Kurator kanan Studio Hana Art akan menghubungi anda dalam tempoh 1 hari bekerja dengan dossier lengkap.',
      close: 'Tutup',
    },
    en: {
      title: 'Curatorial Advisory & Corporate Acquisitions',
      subtitle: 'Studio Hana Art offers curatorial guidance, collection valuation, and bespoke commissions for public institutions and corporate collections.',
      nameLabel: 'Full Name',
      orgLabel: 'Organization / Company (Optional)',
      emailLabel: 'Official Email',
      phoneLabel: 'Phone Number',
      interestLabel: 'Nature of Inquiry',
      interests: {
        acquisition: 'Fine Art Acquisition / Purchase',
        corporate: 'Architectural & Corporate Art Consultation',
        commission: 'Bespoke Monumental Commissioning',
        loan: 'Institutional Museum Loan Request',
      },
      msgLabel: 'Message / Detailed Specifications',
      submitBtn: 'Submit Curatorial Inquiry',
      successTitle: 'Inquiry Successfully Received!',
      successSub: 'A senior curatorial consultant will review your request and contact you within 1 business day.',
      close: 'Close',
    },
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setOrg('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
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
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              STUDIO HANA ART ADVISORY
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-xs bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {t.title}
              </h2>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {preselectedArtwork && (
              <div className="p-3 bg-neutral-950 border border-emerald-500/40 rounded-xs flex items-center gap-3">
                <img
                  src={preselectedArtwork.image}
                  alt={preselectedArtwork.titleBm}
                  className="w-12 h-12 object-cover rounded-xs"
                />
                <div className="text-xs">
                  <span className="text-emerald-400 font-mono font-semibold block">
                    {preselectedArtwork.accessionNo}
                  </span>
                  <span className="font-serif font-bold text-white block">
                    {language === 'bm' ? preselectedArtwork.titleBm : preselectedArtwork.titleEn}
                  </span>
                  <span className="text-neutral-400">{preselectedArtwork.artist}</span>
                </div>
              </div>
            )}

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  {t.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="cth. Dato' Siti / Encik Imran"
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
                    placeholder="nama@syarikat.com"
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
                    placeholder="+60 19-876 5432"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  {t.orgLabel}
                </label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="cth. Yayasan Seni / Arkitek Reka"
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  {t.interestLabel}
                </label>
                <select
                  value={interestType}
                  onChange={(e) => setInterestType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 outline-none cursor-pointer"
                >
                  <option value="acquisition">{t.interests.acquisition}</option>
                  <option value="corporate">{t.interests.corporate}</option>
                  <option value="commission">{t.interests.commission}</option>
                  <option value="loan">{t.interests.loan}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  {t.msgLabel}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Sila nyatakan ruang, spesifikasi saiz atau konsep seni yang diinginkan..."
                  className="w-full px-3.5 py-2 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-sm text-neutral-100 placeholder:text-neutral-600 outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-xs shadow cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.submitBtn}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6 space-y-6 text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                {t.successTitle}
              </h3>
              <p className="mt-2 text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                {t.successSub}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xs transition-colors cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
