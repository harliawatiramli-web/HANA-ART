import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../data/content';

interface CorePillarsProps {
  language: Language;
  onSelectPillar: (pillarId: string) => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({
  language,
  onSelectPillar,
}) => {
  const content = {
    bm: {
      kicker: 'MANDAT & TERAS STRATEGIK',
      heading: 'Memperkasa Warisan, Mengilhamkan Inovasi',
      subheading: 'Sebagai institusi seni terkemuka negara, Studio Hana Art beriltizam memperkaya landskap budaya melalui empat tonggak utama yang berorientasikan impak jangka panjang.',
      pillars: [
        {
          id: 'gallery',
          number: '01',
          title: 'Galeri Khazanah & Arkib Warisan Negara',
          description: 'Memelihara lebih 3,500 karya lukisan agung, arca kontemporari dan manuskrip seni untuk tatapan umum dan kajian penyelidikan antarabangsa.',
          tag: 'Koleksi Kekal & Pameran',
          image: '/src/assets/images/hero_studio_hana_main_1790908375542.jpg',
        },
        {
          id: 'heritage',
          number: '02',
          title: 'Tekstil Diraja & Inovasi Batik Moden',
          description: 'Menghubungkan ketelitian seni songket dan batik asli dengan medium seni rupa abad ke-21 melalui makmal pemuliharaan berteknologi tinggi.',
          tag: 'Pemuliharaan & Bahan',
          image: '/src/assets/images/exhibition_heritage_textile_1790908428560.jpg',
        },
        {
          id: 'residency',
          number: '03',
          title: 'Program Residensi Artis & Bakat Muda',
          description: 'Memupuk generasi pelapis artis visual melalui dana geran penciptaan bernilai RM5 Juta, bengkel studio terbuka, dan pendedahan biennale global.',
          tag: 'Pembangunan Bakat',
          image: '/src/assets/images/artist_studio_workspace_1790908415590.jpg',
        },
        {
          id: 'public-art',
          number: '04',
          title: 'Seni Awam & Arca Mercu Tanda',
          description: 'Mengintegrasikan arca monumental dan karya seni ke dalam senibina bandaraya serta ruang awam di seluruh Malaysia untuk dinikmati masyarakat.',
          tag: 'Senibina & Ruang Awam',
          image: '/src/assets/images/gallery_sculpture_installation_1790908402167.jpg',
        },
      ],
      explore: 'Ketahui Lebih Lanjut',
    },
    en: {
      kicker: 'OUR STRATEGIC PILLARS',
      heading: 'Empowering Heritage, Inspiring Innovation',
      subheading: 'As Malaysia’s premier visual arts institution, Studio Hana Art is committed to enriching the cultural landscape through four cornerstone pillars with lasting societal impact.',
      pillars: [
        {
          id: 'gallery',
          number: '01',
          title: 'Permanent Gallery Archive & Collections',
          description: 'Preserving over 3,500 masterworks, contemporary sculptures, and artistic manuscripts for public inspiration and global scholarly research.',
          tag: 'Permanent Archive',
          image: '/src/assets/images/hero_studio_hana_main_1790908375542.jpg',
        },
        {
          id: 'heritage',
          number: '02',
          title: 'Royal Textiles & Modern Batik Innovation',
          description: 'Bridging centuries of royal Terengganu songket weaving with 21st-century fine art installations via advanced conservation science.',
          tag: 'Conservation & Media',
          image: '/src/assets/images/exhibition_heritage_textile_1790908428560.jpg',
        },
        {
          id: 'residency',
          number: '03',
          title: 'Artist Residency & Emerging Fellowships',
          description: 'Nurturing the next generation of Southeast Asian visual artists through our RM5M endowment, master ateliers, and global biennale delegations.',
          tag: 'Talent Incubation',
          image: '/src/assets/images/artist_studio_workspace_1790908415590.jpg',
        },
        {
          id: 'public-art',
          number: '04',
          title: 'Public Art & Monumental Sculptures',
          description: 'Commissioning landmark public sculptures and architectural integrations across Malaysia to make fine art an accessible everyday experience.',
          tag: 'Public Installations',
          image: '/src/assets/images/gallery_sculpture_installation_1790908402167.jpg',
        },
      ],
      explore: 'Explore Pillar',
    },
  }[language];

  return (
    <section id="passion" className="py-20 lg:py-28 bg-neutral-950 text-neutral-100 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with balanced text */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3">
            <span className="w-5 h-0.5 bg-emerald-500 inline-block" />
            <span>{content.kicker}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            {content.subheading}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {content.pillars.map((pillar, idx) => {
            // Dynamic column spans for asymmetric rhythm
            const colSpan = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={pillar.id}
                onClick={() => onSelectPillar(pillar.id)}
                className={`${colSpan} group relative rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-emerald-500/60 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[380px]`}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-35 group-hover:opacity-45"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>

                {/* Top Badge & Number */}
                <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    {pillar.tag}
                  </span>
                  <span className="font-mono text-2xl font-bold text-neutral-500 group-hover:text-emerald-400 transition-colors tabular-nums">
                    {pillar.number}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 sm:p-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-300">
                    <span>{content.explore}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
