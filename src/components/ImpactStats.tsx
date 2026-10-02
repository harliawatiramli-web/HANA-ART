import React from 'react';
import { IMPACT_METRICS, Language } from '../data/content';
import { Award, Compass, HeartHandshake, Sparkles } from 'lucide-react';

interface ImpactStatsProps {
  language: Language;
  onExploreFellowship: () => void;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({
  language,
  onExploreFellowship,
}) => {
  const content = {
    bm: {
      kicker: 'KELESTARIAN & PELABURAN SOSIAL',
      heading: 'Memperkasa Jiwa Budaya Bangsa',
      description: 'Seperti komitmen negara memacu kemajuan mampan, Studio Hana Art mendedikasikan sumber daya dan kepakaran untuk memelihara warisan seni visual, memperkasa modal insan kreatif dan membuka ruang apresiasi seni percuma kepada seluruh rakyat Malaysia.',
      initiativesTitle: 'Inisiatif Impak Kebangsaan Kami',
      fellowshipBtn: 'Ketahui Program Dana & Biasiswa Seni',
      initiatives: [
        {
          icon: Award,
          title: 'Dana Residensi Hana Art',
          desc: 'Geran penyelidikan dan pengkaryaan penuh untuk 50 artis muda setiap kitaran tahunan.',
        },
        {
          icon: Compass,
          title: 'Konservasi Sains & Kraf Asli',
          desc: 'Makmal pemuliharaan optik bekerjasama dengan penenun songket dan artis batik warisan.',
        },
        {
          icon: HeartHandshake,
          title: 'Akses Pendidikan Seni Percuma',
          desc: 'Lebih 120 sekolah dan universiti menyertai program lawatan kurator & bengkel amali setiap tahun.',
        },
      ],
    },
    en: {
      kicker: 'SUSTAINABILITY & SOCIAL INVESTMENT',
      heading: 'Empowering the Nation’s Creative Soul',
      description: 'Reflecting a steadfast corporate commitment to sustainable progress, Studio Hana Art dedicates premier resources and curatorial scholarship to safeguard visual heritage, nurture emerging talent, and guarantee free, inclusive art education for all.',
      initiativesTitle: 'Our National Impact Initiatives',
      fellowshipBtn: 'Explore Endowment & Fellowships',
      initiatives: [
        {
          icon: Award,
          title: 'Hana Art Residency Endowment',
          desc: 'Full production stipends and master ateliers for 50 emerging Southeast Asian artists per cycle.',
        },
        {
          icon: Compass,
          title: 'Scientific Conservation & Craft',
          desc: 'Advanced non-invasive spectral laboratory partnering with master indigenous weavers and batik artisans.',
        },
        {
          icon: HeartHandshake,
          title: 'Complimentary Art Education',
          desc: 'Over 120 schools and academic institutions participate in guided masterclasses and walkthroughs annually.',
        },
      ],
    },
  }[language];

  return (
    <section id="impact" className="py-20 lg:py-28 bg-neutral-950 text-neutral-100 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quantitative Rigor Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16 border-b border-neutral-800">
          {IMPACT_METRICS.map((metric, i) => (
            <div key={i} className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-400 tabular-nums">
                {metric.number}
              </div>
              <div className="text-sm font-semibold text-neutral-100">
                {language === 'bm' ? metric.labelBm : metric.labelEn}
              </div>
              <p className="text-xs text-neutral-400">
                {language === 'bm' ? metric.subBm : metric.subEn}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative & Initiative Showcase */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              <Sparkles className="w-4 h-4" />
              <span>{content.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              {content.heading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {content.description}
            </p>
            <div className="pt-2">
              <button
                onClick={onExploreFellowship}
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-xs shadow cursor-pointer whitespace-nowrap"
              >
                {content.fellowshipBtn}
              </button>
            </div>
          </div>

          {/* Initiatives Cards */}
          <div className="lg:col-span-6 space-y-4">
            {content.initiatives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-neutral-900 border border-neutral-800 rounded-sm flex items-start gap-4 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="p-2.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
