import React, { useState } from 'react';
import { NEWS_STORIES, NewsStory, Language } from '../data/content';
import { ArrowRight, Newspaper, X, Calendar, Clock, Share2 } from 'lucide-react';

interface StoriesMediaProps {
  language: Language;
}

export const StoriesMedia: React.FC<StoriesMediaProps> = ({ language }) => {
  const [selectedStory, setSelectedStory] = useState<NewsStory | null>(null);
  const [copied, setCopied] = useState(false);

  const t = {
    bm: {
      kicker: 'BILIK BERITA & KENYATAAN MEDIA',
      heading: 'Berita Terkini & Wacana Seni',
      subheading: 'Ikuti perkembangan terkini mengenai pameran galeri, pelancaran dana bakat, dan penyelidikan pemuliharaan warisan Studio Hana Art.',
      readMore: 'Baca Berita Penuh',
      allNews: 'Arkib Siaran Media Korporat',
      close: 'Tutup',
      share: 'Kongsi Berita',
      copied: 'Pautan Disalin!',
    },
    en: {
      kicker: 'NEWSROOM & MEDIA RELEASES',
      heading: 'Latest Stories & Curatorial Discourses',
      subheading: 'Stay informed on gallery retrospectives, fellowship announcements, and heritage conservation research at Studio Hana Art.',
      readMore: 'Read Full Story',
      allNews: 'Corporate Media Archive',
      close: 'Close',
      share: 'Share Story',
      copied: 'Link Copied!',
    },
  }[language];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="stories" className="py-20 lg:py-28 bg-neutral-900/50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>{t.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {t.heading}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400">
              {t.subheading}
            </p>
          </div>
        </div>

        {/* 3-Tier News Grid (Pattern C from Museum & Editorial reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_STORIES.map((story) => (
            <article
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={story.image}
                  alt={language === 'bm' ? story.titleBm : story.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Clean unboxed metadata with dot separators (Zero-Pill rule) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                    <span className="text-emerald-400 font-medium">
                      {language === 'bm' ? story.categoryBm : story.categoryEn}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{story.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug line-clamp-2">
                    {language === 'bm' ? story.titleBm : story.titleEn}
                  </h3>

                  <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {language === 'bm' ? story.summaryBm : story.summaryEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story Reader Modal */}
      {selectedStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-700 rounded-sm shadow-2xl p-6 sm:p-8 text-neutral-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedStory.date}</span>
                <span className="text-neutral-600">·</span>
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span className="text-neutral-400">{selectedStory.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-1 text-neutral-400 hover:text-white rounded-xs bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {language === 'bm' ? selectedStory.titleBm : selectedStory.titleEn}
              </h2>

              <div className="rounded-sm overflow-hidden aspect-video bg-neutral-950 my-4">
                <img
                  src={selectedStory.image}
                  alt={language === 'bm' ? selectedStory.titleBm : selectedStory.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm leading-relaxed text-neutral-300 space-y-4">
                <p className="font-semibold text-neutral-100">
                  {language === 'bm' ? selectedStory.summaryBm : selectedStory.summaryEn}
                </p>
                <p>
                  {language === 'bm' ? selectedStory.contentBm : selectedStory.contentEn}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? t.copied : t.share}</span>
                </button>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-xs transition-colors cursor-pointer"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
