import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Language } from '../data/content';

interface FooterProps {
  language: Language;
  onOpenBooking: () => void;
  onOpenAdvisory: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenBooking,
  onOpenAdvisory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const t = {
    bm: {
      slogan: 'Memperkasa Warisan Seni Malaysia, Menginspirasi Persada Antarabangsa',
      subtext: 'Institusi galeri dan khazanah seni visual negara yang komited memelihara martabat budaya, membimbing artis generasi baharu, dan menyediakan akses apresiasi percuma.',
      newsletterTitle: 'Langgan Jurnal Seni & Siaran Kuratorial',
      newsletterDesc: 'Terima kemas kini terus mengenai pameran vernissage eksklusif dan jemputan simposium.',
      emailPlaceholder: 'Masukkan alamat e-mel anda...',
      subscribeBtn: 'Langgan',
      subscribedMsg: 'Terima kasih! Anda kini melanggan Jurnal Seni Studio Hana Art.',
      col1Title: 'Tentang Kami',
      col1Links: [
        'Visi & Falsafah Seni',
        'Lembaga Kurator Kebangsaan',
        'Sejarah & Penubuhan',
        'Laporan Tahunan & Arkib',
      ],
      col2Title: 'Galeri & Khazanah',
      col2Links: [
        'Koleksi Seni Kekal',
        'Makmal Konservasi & Optik',
        'Tempahan Lawatan Percuma',
        'Program Pendidikan Sekolah',
      ],
      col3Title: 'Kelestarian & Bakat',
      col3Links: [
        'Dana Pembangunan Seni RM5M',
        'Residensi Artis Kebangsaan',
        'Inovasi Bahan Lestari',
        'Karya Seni Awam',
      ],
      col4Title: 'Tadbir Urus & Hubungan',
      col4Links: [
        'Dasar Integriti & Etika',
        'Polisi Privasi',
        'Terma Penggunaan',
        'Saluran Pemberi Maklumat (Whistleblowing)',
      ],
      contactLocation: 'Aras 3 & 4, Menara Studio Hana Art, Persiaran KLCC, 50088 Kuala Lumpur, Malaysia',
      contactPhone: '+60 3-2331 8000',
      contactEmail: 'galeri@studiohanaart.com.my',
      copyright: '© 2026 Studio Hana Art (Kumpulan Pemerkasaan Seni Visual Kebangsaan). Hak Cipta Terpelihara.',
    },
    en: {
      slogan: 'Empowering Malaysian Cultural Heritage, Inspiring the World',
      subtext: 'Malaysia’s premier fine art institution dedicated to safeguarding visual heritage, fostering emerging artistic masters, and ensuring universal complimentary public gallery access.',
      newsletterTitle: 'Subscribe to Curatorial Journal',
      newsletterDesc: 'Receive curated invitations for upcoming vernissages, retrospective monographs, and scholarly symposiums.',
      emailPlaceholder: 'Enter your work or personal email...',
      subscribeBtn: 'Subscribe',
      subscribedMsg: 'Thank you! You are subscribed to Studio Hana Art Curatorial Journal.',
      col1Title: 'About Us',
      col1Links: [
        'Vision & Philosophy',
        'Curatorial Board of Trustees',
        'History & Foundation',
        'Annual Institutional Reports',
      ],
      col2Title: 'Gallery & Archive',
      col2Links: [
        'Permanent Collections',
        'Conservation & Optical Lab',
        'Book Guided Gallery Tours',
        'School & Academic Access',
      ],
      col3Title: 'Sustainability & Talent',
      col3Links: [
        'RM5M Creative Endowment',
        'National Artist Residency',
        'Sustainable Pigments Research',
        'Public Art Monuments',
      ],
      col4Title: 'Governance & Ethics',
      col4Links: [
        'Integrity & Governance Code',
        'Privacy Policy',
        'Terms of Service',
        'Whistleblowing Channel',
      ],
      contactLocation: 'Levels 3 & 4, Studio Hana Art Tower, KLCC Boulevard, 50088 Kuala Lumpur, Malaysia',
      contactPhone: '+60 3-2331 8000',
      contactEmail: 'gallery@studiohanaart.com.my',
      copyright: '© 2026 Studio Hana Art (National Visual Arts Patronage Group). All Rights Reserved.',
    },
  }[language];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 text-xs">
      {/* Top Newsletter Strip (Corporate subscription block) */}
      <div className="border-b border-neutral-900 bg-neutral-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-lg font-serif font-bold text-white">
              {t.newsletterTitle}
            </h3>
            <p className="text-neutral-400 mt-1 text-xs">
              {t.newsletterDesc}
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex max-w-md w-full gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="px-4 py-2.5 bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded-xs text-xs text-neutral-100 placeholder:text-neutral-600 outline-none flex-1 min-w-[220px]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-semibold uppercase tracking-wider text-xs rounded-xs transition-colors shrink-0 cursor-pointer"
                >
                  {t.subscribeBtn}
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>{t.subscribedMsg}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Corporate Mega-Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-emerald-500 to-teal-800 flex items-center justify-center shadow">
                <span className="font-serif font-bold text-white text-sm">H</span>
              </div>
              <span className="font-brand text-lg font-bold tracking-widest text-white">
                STUDIO HANA ART
              </span>
            </div>

            <p className="text-sm font-serif italic text-emerald-400">
              "{t.slogan}"
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed pr-4">
              {t.subtext}
            </p>

            <div className="pt-2 space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{t.contactLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="font-mono">{t.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="font-mono">{t.contactEmail}</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: About */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {t.col1Title}
            </h4>
            <ul className="space-y-2.5">
              {t.col1Links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#passion"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Gallery */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {t.col2Title}
            </h4>
            <ul className="space-y-2.5">
              {t.col2Links.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={idx === 2 ? onOpenBooking : undefined}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Sustainability */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {t.col3Title}
            </h4>
            <ul className="space-y-2.5">
              {t.col3Links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#impact"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 4: Governance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {t.col4Title}
            </h4>
            <ul className="space-y-2.5">
              {t.col4Links.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={onOpenAdvisory}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Accreditation Bar */}
        <div className="mt-14 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Kuala Lumpur</span>
            <span>·</span>
            <span>Koleksi Kebangsaan</span>
            <span>·</span>
            <span>Galeri Bertaraf Antarabangsa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
