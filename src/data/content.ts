export type Language = 'bm' | 'en';

export interface Artwork {
  id: string;
  accessionNo: string;
  titleBm: string;
  titleEn: string;
  artist: string;
  artistOrigin: string;
  year: string;
  category: 'contemporary' | 'sculpture' | 'textile' | 'corporate';
  mediumBm: string;
  mediumEn: string;
  dimensions: string;
  descriptionBm: string;
  descriptionEn: string;
  curatorNotesBm: string;
  curatorNotesEn: string;
  image: string;
  featured?: boolean;
}

export interface Exhibition {
  id: string;
  titleBm: string;
  titleEn: string;
  taglineBm: string;
  taglineEn: string;
  dateRange: string;
  hall: string;
  curator: string;
  image: string;
  descriptionBm: string;
  descriptionEn: string;
  highlightsBm: string[];
  highlightsEn: string[];
}

export interface NewsStory {
  id: string;
  categoryBm: string;
  categoryEn: string;
  titleBm: string;
  titleEn: string;
  date: string;
  readTime: string;
  summaryBm: string;
  summaryEn: string;
  contentBm: string;
  contentEn: string;
  image: string;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'art-01',
    accessionNo: 'SHA-2026-0814',
    titleBm: 'Gelombang Emerald & Rentak Jiwa',
    titleEn: 'Emerald Surge & Rhythms of the Soul',
    artist: 'Hana Ramli & Kolektif Warisan',
    artistOrigin: 'Kuala Lumpur, Malaysia',
    year: '2025',
    category: 'contemporary',
    mediumBm: 'Campuran akrilik, emas 24k dan pigmen asli atas kanvas linen gergasi',
    mediumEn: 'Mixed media, acrylic, 24k gold leaf and natural pigments on Belgian linen',
    dimensions: '280 × 190 cm',
    descriptionBm: 'Karya agung monumental yang meneroka hubungan spiritual antara tenaga alam tropika, warisan motif Melayu lama dan denyut nadi kemajuan kontemporari Malaysia.',
    descriptionEn: 'A monumental masterpiece exploring the spiritual relationship between tropical natural energy, classical Malay motifs, and modern Malaysian cultural vitality.',
    curatorNotesBm: 'Penggunaan pigmen hijau zamrud (emerald) dan dedaun emas melambangkan kemakmuran abadi dan kestabilan inovatif yang sinonim dengan citra kebangsaan.',
    curatorNotesEn: 'The interplay of emerald mineral pigments and gold leaf signifies sustainable cultural prosperity and visionary advancement.',
    image: '/src/assets/images/hero_studio_heritage_art_1790908389162.jpg',
    featured: true,
  },
  {
    id: 'art-02',
    accessionNo: 'SHA-2026-0422',
    titleBm: 'Menara Dinamika & Angin Nusantara',
    titleEn: 'Dynamic Monolith & Nusantara Winds',
    artist: 'Kamarul Ariffin Studio & Hana Art',
    artistOrigin: 'Selangor, Malaysia',
    year: '2024',
    category: 'sculpture',
    mediumBm: 'Gangsa terpateri, tembaga hijau patina dan keluli tahan karat berkilat',
    mediumEn: 'Cast bronze, patinated verdigris copper and polished architectural steel',
    dimensions: '340 × 120 × 110 cm',
    descriptionBm: 'Arca kinetik dan statik yang mengambil ilham daripada tiang seri rumah tradisional Melayu yang digabungkan dengan garisan aerodinamik moden.',
    descriptionEn: 'A landmark sculpture drawing inspiration from indigenous architectural pillars fused with aerodynamic contemporary contours.',
    curatorNotesBm: 'Karya ini kini ditempatkan di atrium utama Galeri Studio Hana Art sebagai lambang keteguhan inovasi seni negara.',
    curatorNotesEn: 'Installed at the main atrium as an emblem of enduring artistic resilience and contemporary dynamism.',
    image: '/src/assets/images/gallery_sculpture_installation_1790908402167.jpg',
    featured: true,
  },
  {
    id: 'art-03',
    accessionNo: 'SHA-2025-1109',
    titleBm: 'Tenunan Cahaya: Songket Kontemporari',
    titleEn: 'Weaving Luminescence: Contemporary Songket',
    artist: 'Puan Sri Sharifah & Studio Hana',
    artistOrigin: 'Terengganu & Kuala Lumpur',
    year: '2025',
    category: 'textile',
    mediumBm: 'Benang sutera Terengganu, benang emas metalik dan serat gentian optik pasif',
    mediumEn: 'Terengganu raw silk, metallic gold filament and ambient woven optical fibers',
    dimensions: '220 × 150 cm (Dipamerkan dalam kaca anti-pantulan)',
    descriptionBm: 'Karya tekstil yang merapatkan jurang antara tradisi tenunan Melayu kurun ke-18 dengan teknologi pencahayaan spektrum moden.',
    descriptionEn: 'A groundbreaking textile artwork bridging centuries-old royal Terengganu weaving techniques with contemporary ambient light interactions.',
    curatorNotesBm: 'Mewakili komitmen Studio Hana Art dalam memelihara khazanah kraf warisan turun-temurun ke dalam bentuk seni galeri antarabangsa.',
    curatorNotesEn: 'Demonstrates Studio Hana Art’s institutional pledge to elevate master heritage crafts onto prestigious global stages.',
    image: '/src/assets/images/exhibition_heritage_textile_1790908428560.jpg',
    featured: true,
  },
  {
    id: 'art-04',
    accessionNo: 'SHA-2025-0715',
    titleBm: 'Epilog Pelukis: Studio & Dimensi Jiwa',
    titleEn: 'The Painter’s Epilogue: Atelier & Dimension',
    artist: 'Ahmad Zakii & Residensi Hana Art',
    artistOrigin: 'Penang, Malaysia',
    year: '2024',
    category: 'corporate',
    mediumBm: 'Minyak atas linen kasar gesso dengan pigmen tanah liat tempatan',
    mediumEn: 'Oil on rough gessoed linen with indigenous earth pigments',
    dimensions: '200 × 160 cm',
    descriptionBm: 'Kajian mendalam tentang intipati kreativiti artis Malaysia ketika berkarya di studio terbuka yang menghadap kehijauan hutan hujan dan kota.',
    descriptionEn: 'A profound study of Malaysian creative energy created during the Studio Hana Art national residency fellowship.',
    curatorNotesBm: 'Dihasilkan sempena program Pemerkasaan Bakat Seni Negara di bawah naungan Studio Hana Art.',
    curatorNotesEn: 'Produced under the flagship National Creative Talent Fellowship fostered by Studio Hana Art.',
    image: '/src/assets/images/artist_studio_workspace_1790908415590.jpg',
    featured: true,
  },
  {
    id: 'art-05',
    accessionNo: 'SHA-2024-0301',
    titleBm: 'Cakrawala Kuala Lumpur: Refleksi Bandar & Budaya',
    titleEn: 'Kuala Lumpur Horizon: City & Cultural Reflections',
    artist: 'Kolektif Seni Visual Studio Hana',
    artistOrigin: 'Kuala Lumpur',
    year: '2025',
    category: 'contemporary',
    mediumBm: 'Gouache, dakwat arkib dan pigmen mineral atas kertas buatan tangan',
    mediumEn: 'Gouache, archival ink and mineral pigments on handmade washi',
    dimensions: '180 × 140 cm',
    descriptionBm: 'Simfoni visual tentang transformasi metropolitan Kuala Lumpur di mana mercu tanda moden bersatu harmonis dengan nilai-nilai kemanusiaan.',
    descriptionEn: 'A visual symphony reflecting Kuala Lumpur’s metropolitan transformation where monumental architecture coexists with cultural heritage.',
    curatorNotesBm: 'Sebahagian daripada siri koleksi korporat yang meraikan 50 tahun kemajuan seni dan kebudayaan negara.',
    curatorNotesEn: 'Part of the permanent corporate retrospective honoring five decades of national cultural evolution.',
    image: '/src/assets/images/hero_studio_hana_main_1790908375542.jpg',
    featured: false,
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex-01',
    titleBm: 'GEMILANG WARISAN: SENI KONTEMPORARI MALAYSIA 2026',
    titleEn: 'SPLENDOUR OF HERITAGE: MALAYSIAN CONTEMPORARY ART 2026',
    taglineBm: 'Pameran Retrospektif Tahunan Galeri Studio Hana Art',
    taglineEn: 'The Annual Flagship Retrospective at Studio Hana Art Gallery',
    dateRange: '15 Mac 2026 – 30 Ogos 2026',
    hall: 'Dewan Pameran Utama (Aras 3 & 4), Menara Studio Hana Art, KLCC',
    curator: 'Dr. Zarith Sofia & Lembaga Kurator Studio Hana Art',
    image: '/src/assets/images/hero_studio_hana_main_1790908375542.jpg',
    descriptionBm: 'Menghimpunkan lebih 120 karya seni agung pilihan daripada arkib Studio Hana Art dan pinjaman koleksi institusi ternama. Pameran ini meraikan kelangsungan ekspresi seni tempatan dari era tradisional ke alaf baharu.',
    descriptionEn: 'Assembling over 120 premier masterpieces from Studio Hana Art archives and international institutional loans. Celebrating the evolution of Southeast Asian fine art from ancient wisdom to visionary futurism.',
    highlightsBm: [
      'Galeri Imersif & Pemasangan Interaktif Berskala Monumen',
      'Koleksi Khazanah Batik & Songket Diraja Nusantara',
      'Simposium Seni & Wacana Kuratorial Mingguan',
      'Sesi Panduan Audio Dwibahasa Eksklusif'
    ],
    highlightsEn: [
      'Immersive Gallery & Monumental Interactive Installations',
      'Masterpieces of Royal Songket & Contemporary Batik',
      'Weekly Curatorial Symposiums & Artist Talks',
      'Exclusive Bilingual Audio Guide Experience'
    ]
  },
  {
    id: 'ex-02',
    titleBm: 'DIMENSI HIJAU: SUSTAINABILITY & CREATIVE ENERGY',
    titleEn: 'GREEN DIMENSIONS: SUSTAINABILITY & CREATIVE ENERGY',
    taglineBm: 'Eksplorasi Bahan Lestari & Seni Ekologi Generasi Baharu',
    taglineEn: 'Sustainable Materials & Ecological Fine Art Exploration',
    dateRange: '10 Mei 2026 – 15 November 2026',
    hall: 'Galeri Pavilion Sayap Timur, Studio Hana Art',
    curator: 'Farhan Azman',
    image: '/src/assets/images/artist_studio_workspace_1790908415590.jpg',
    descriptionBm: 'Memfokuskan kepada penggunaan pigmen mineral semulajadi, resin berasaskan tumbuhan dan medium boleh diperbaharui dalam penghasilan karya seni berskala tinggi.',
    descriptionEn: 'Focusing on natural mineral pigments, plant-derived binders, and regenerative media within premier fine art practice.',
    highlightsBm: [
      'Karya oleh 18 felo Program Residensi Seni Lestari',
      'Demonstrasi bancuhan pigmen herba dan tanah liat tempatan',
      'Katalog arkib bercetak di atas kertas pulpa sawit lestari'
    ],
    highlightsEn: [
      'Works by 18 Fellows from the Sustainable Art Residency',
      'Live demonstrations of indigenous plant & mineral pigments',
      'Archival exhibition catalogue printed on sustainable palm-fiber paper'
    ]
  }
];

export const NEWS_STORIES: NewsStory[] = [
  {
    id: 'news-01',
    categoryBm: 'Pengumuman Korporat',
    categoryEn: 'Corporate Announcement',
    titleBm: 'Studio Hana Art Melancarkan Dana Pembangunan Bakat Seni Muda Bernilai RM5 Juta',
    titleEn: 'Studio Hana Art Announces RM5 Million Young Creative Fellowship Endowment',
    date: '28 Mac 2026',
    readTime: '3 min bacaan',
    summaryBm: 'Inisiatif murni bagi menyokong 50 bakat seni visual baharu di seluruh negeri dengan geran penciptaan karya, fasiliti studio moden dan pendedahan galeri global.',
    summaryEn: 'A strategic national initiative granting 50 emerging visual artists studio fellowships, production grants, and global gallery representation.',
    contentBm: 'Kuala Lumpur — Studio Hana Art hari ini mengumumkan pelancaran Dana Pembangunan Bakat Seni Muda bernilai RM5 Juta. Program ini sejajar dengan misi korporat dan sosial kami untuk memperkayakan ekosistem kebudayaan negara. Para penerima felo akan menerima bimbingan langsung daripada kurator kanan serta peluang mengadakan pameran solo di Menara Studio Hana Art.',
    contentEn: 'Kuala Lumpur — Studio Hana Art today announced the launch of its RM5 Million Young Creative Fellowship Endowment. In line with our foundational mission to enrich society through visual culture, the program offers production stipends, master mentorship, and international gallery showcases.',
    image: '/src/assets/images/artist_studio_workspace_1790908415590.jpg',
  },
  {
    id: 'news-02',
    categoryBm: 'Galeri & Pameran',
    categoryEn: 'Gallery & Exhibitions',
    titleBm: 'Pameran Retrospektif Studio Hana Art Catat Lebih 250,000 Pengunjung dalam Tempoh Dua Bulan',
    titleEn: 'Studio Hana Art Retrospective Welcomes Over 250,000 Visitors in Opening Months',
    date: '14 Mac 2026',
    readTime: '4 min bacaan',
    summaryBm: 'Sambutan luar biasa terhadap himpunan karya warisan dan kontemporari membuktikan apresiasi masyarakat yang kian mendalam terhadap seni visual bermutu tinggi.',
    summaryEn: 'Record visitor engagement demonstrates vibrant public appreciation for heritage preservation and contemporary Southeast Asian mastery.',
    contentBm: 'Menara Studio Hana Art, Kuala Lumpur — Galeri utama Studio Hana Art terus menjadi tumpuan pencinta seni tempatan dan antarabangsa. Kejayaan ini mencerminkan komitmen berterusan organisasi dalam menyediakan akses pendidikan seni visual secara percuma kepada seluruh lapisan masyarakat.',
    contentEn: 'Studio Hana Art Tower, Kuala Lumpur — The flagship gallery continues to serve as an inspiring cultural beacon for local families, students, and international art patrons, providing world-class exhibition access completely free of charge.',
    image: '/src/assets/images/hero_studio_hana_main_1790908375542.jpg',
  },
  {
    id: 'news-03',
    categoryBm: 'Pemuliharaan Warisan',
    categoryEn: 'Heritage Conservation',
    titleBm: 'Kolaborasi Penyelidikan Pemeliharaan Tekstil Songket Diraja Bersama Arkib Negara',
    titleEn: 'Collaborative Research on Royal Songket Textile Conservation with National Archives',
    date: '22 Februari 2026',
    readTime: '5 min bacaan',
    summaryBm: 'Makmal pemuliharaan Studio Hana Art menggunakan analisis spektrum bukan invasif untuk memulihkan tekstil antik kurun ke-19.',
    summaryEn: 'Studio Hana Art’s conservation laboratory implements non-invasive spectral imaging to preserve fragile 19th-century royal textiles.',
    contentBm: 'Makmal Pemuliharaan Seni Studio Hana Art telah memulakan fasa kedua pemulihan tenunan bersejarah. Usaha teliti ini menggabungkan kepakaran saintifik moden dengan sentuhan tangan mahir penenun warisan demi memastikan karya ini dapat dihayati oleh generasi berabad-abad lamanya.',
    contentEn: 'The Studio Hana Art Conservation Laboratory has initiated Phase 2 of historical textile restoration, blending cutting-edge optical science with traditional weaver techniques to guarantee cultural preservation for generations to come.',
    image: '/src/assets/images/exhibition_heritage_textile_1790908428560.jpg',
  }
];

export const IMPACT_METRICS = [
  {
    number: '3,500+',
    labelBm: 'Koleksi Karya Kekal Terpelihara',
    labelEn: 'Permanent Artworks Preserved',
    subBm: 'Lukisan, arca, instalasi & tekstil warisan',
    subEn: 'Paintings, sculptures, installations & textiles'
  },
  {
    number: '420+',
    labelBm: 'Artis & Pengkarya Disokong',
    labelEn: 'Artists & Creators Supported',
    subBm: 'Melalui geran, bimbingan dan residensi seni',
    subEn: 'Via production grants, fellowships & residencies'
  },
  {
    number: '1.2M+',
    labelBm: 'Pengunjung Galeri Setahun',
    labelEn: 'Annual Gallery Visitors',
    subBm: 'Akses masuk percuma untuk pendidikan awam',
    subEn: 'Complimentary admission for public education'
  },
  {
    number: 'RM15M+',
    labelBm: 'Dana Pemerkasaan Ekosistem Seni',
    labelEn: 'Cultural Investment Endowment',
    subBm: 'Komitmen berterusan terhadap tamadun seni Malaysia',
    subEn: 'Dedicated to sustaining Malaysian cultural heritage'
  }
];
