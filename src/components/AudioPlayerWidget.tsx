import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Info, X, ExternalLink } from 'lucide-react';
import { Language } from '../data/content';

interface AudioPlayerWidgetProps {
  language: Language;
}

export const AudioPlayerWidget: React.FC<AudioPlayerWidgetProps> = ({ language }) => {
  const YOUTUBE_VIDEO_ID = 'UKf8AaAGkvk';
  const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;
  const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&enablejsapi=1`;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeTab, setActiveTab] = useState<'video' | 'audio'>('video');

  const audioContextRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const sequenceTimerRef = useRef<number | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const t = {
    bm: {
      nowPlayingKicker: 'LAGU TEMA BUDAYA & ALAM SEKITAR',
      songTitle: 'Hijau — Zainal Abidin',
      tagline: 'Lagu kebangsaan kesedaran alam & warisan budaya Malaysia',
      listenPrompt: 'Pasang Muzik Latar',
      playing: 'Sedang Dimainkan',
      paused: 'Dijeda',
      toggleMini: 'Pemain Video',
      lyricsBtn: 'Lirik, Video Rasmi & Makna',
      modalTitle: 'Zainal Abidin — "Hijau" (Official Lyric Video)',
      modalSubtitle: 'Lagu tema rasmi Studio Hana Art: Simfoni kesedaran alam, warisan tropika dan masa depan generasi.',
      tabVideo: 'Tonton Video Rasmi (YouTube)',
      tabMusic: 'Melodi Gamelan Sintesis',
      lyricsTitle: 'Petikan Lirik Puitis Ikonik',
      meaningTitle: 'Hayatan Makna Lagu & Falsafah Studio Hana Art',
      meaningText: 'Lagu "Hijau" oleh Zainal Abidin (dicipta oleh Mukhlis Nor pada 1991) adalah lagu bersejarah yang mengangkat suara alam dan memupuk kesedaran ekologi. Studio Hana Art memilih lagu ini sebagai identiti bunyi rasmi kerana keselarasan falsafahnya dengan pemuliharaan warisan budaya dan seni visual yang lestari.',
      close: 'Tutup',
      openYoutube: 'Tonton di YouTube',
    },
    en: {
      nowPlayingKicker: 'CULTURAL ANTHEM & ENVIRONMENTAL HYMN',
      songTitle: 'Hijau — Zainal Abidin',
      tagline: 'Malaysia’s legendary environmental anthem & cultural soul',
      listenPrompt: 'Play Gallery Soundtrack',
      playing: 'Now Playing',
      paused: 'Paused',
      toggleMini: 'Video Player',
      lyricsBtn: 'Lyrics, Official Video & Meaning',
      modalTitle: 'Zainal Abidin — "Hijau" (Official Lyric Video)',
      modalSubtitle: 'Official Studio Hana Art theme anthem: A symphony of nature, tropical heritage, and environmental guardianship.',
      tabVideo: 'Watch Official Music Video',
      tabMusic: 'Synthesized Gamelan Ambient',
      lyricsTitle: 'Iconic Poetic Lyrics Excerpt',
      meaningTitle: 'Curatorial Significance & Studio Philosophy',
      meaningText: '"Hijau" by Zainal Abidin (composed by Mukhlis Nor in 1991) is a watershed masterwork in Malaysian music culture championing ecological balance and indigenous wisdom. Studio Hana Art embraces this song as its sonic identity, celebrating our deep connection to the living land and creative preservation.',
      close: 'Close',
      openYoutube: 'Watch on YouTube',
    },
  }[language];

  // Synthesis of the iconic "Hijau" melody & rhythms using Web Audio API
  // This guarantees 100% reliable sound playback without external network audio 404s
  const initAudio = () => {
    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.35, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;
      audioContextRef.current = ctx;
    }
  };

  const playTone = (freq: number, startTime: number, duration: number, type: OscillatorType = 'sine', decay = 0.8) => {
    const ctx = audioContextRef.current;
    const masterGain = gainNodeRef.current;
    if (!ctx || !masterGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    // Warm organic acoustic envelop (like bamboo flute / gamelan bell)
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.4, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * decay);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  };

  // Play percussive kendang/gamelan rhythmic pulse
  const playDrum = (startTime: number, isBass = false) => {
    const ctx = audioContextRef.current;
    const masterGain = gainNodeRef.current;
    if (!ctx || !masterGain) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isBass ? 95 : 170, startTime);
    osc.frequency.exponentialRampToValueAtTime(30, startTime + 0.18);

    gain.gain.setValueAtTime(0.3, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(startTime);
    osc.stop(startTime + 0.25);
  };

  const startPlaybackSequence = () => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Melodic notes of the iconic "Hijau" theme
    // Pentatonic scale: D4=293.66, E4=329.63, G4=392.00, A4=440.00, C5=523.25, D5=587.33
    const melody = [
      { note: 293.66, dur: 0.4 }, // D4 - Bu-
      { note: 392.00, dur: 0.5 }, // G4 - mi
      { note: 440.00, dur: 0.5 }, // A4 - yang
      { note: 523.25, dur: 0.7 }, // C5 - ti-a-da
      { note: 440.00, dur: 0.6 }, // A4 - rim-
      { note: 392.00, dur: 0.9 }, // G4 - ba...
      { note: 0, dur: 0.3 },      // rest
      { note: 293.66, dur: 0.4 }, // D4 - Se-
      { note: 392.00, dur: 0.5 }, // G4 - um-pa-
      { note: 440.00, dur: 0.6 }, // A4 - ma
      { note: 392.00, dur: 0.6 }, // G4 - ham-
      { note: 329.63, dur: 0.9 }, // E4 - ba...
      { note: 0, dur: 0.3 },      // rest
      { note: 440.00, dur: 0.4 }, // A4 - Ooo...
      { note: 523.25, dur: 0.6 }, // C5
      { note: 587.33, dur: 1.2 }, // D5 - Hi-jau...
      { note: 523.25, dur: 0.5 }, // C5
      { note: 440.00, dur: 0.8 }, // A4
      { note: 392.00, dur: 1.4 }, // G4
      { note: 0, dur: 0.5 },
    ];

    let loopIndex = 0;
    const playLoop = () => {
      if (!isPlayingRef.current) return;
      const now = ctx.currentTime;
      let offset = 0;

      melody.forEach((item, idx) => {
        // Percussion rhythm accompaniment on every second beat
        if (idx % 2 === 0) {
          playDrum(now + offset, idx % 4 === 0);
        }

        if (item.note > 0) {
          // Main flute / voice lead
          playTone(item.note, now + offset, item.dur, 'sine', 0.85);
          // Soft harmonic overtone (gamelan bell resonance)
          playTone(item.note * 2, now + offset, item.dur * 0.4, 'triangle', 0.4);
        }
        offset += item.dur;
      });

      // Update timer progress state
      setCurrentTime((prev) => (prev + 10) % 240);

      // Repeat loop
      sequenceTimerRef.current = window.setTimeout(() => {
        if (isPlayingRef.current) {
          playLoop();
        }
      }, offset * 1000);
    };

    isPlayingRef.current = true;
    playLoop();
  };

  const stopPlayback = () => {
    isPlayingRef.current = false;
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
  };

  const togglePlay = () => {
    initAudio();
    if (isPlaying) {
      stopPlayback();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startPlaybackSequence();
    }
  };

  const toggleMute = () => {
    if (!gainNodeRef.current || !audioContextRef.current) return;
    if (isMuted) {
      gainNodeRef.current.gain.setValueAtTime(0.35, audioContextRef.current.currentTime);
      setIsMuted(false);
    } else {
      gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      setIsMuted(true);
    }
  };

  useEffect(() => {
    return () => {
      stopPlayback();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      {/* Floating Gallery Audio Controller Dock */}
      <div className="fixed bottom-5 right-5 z-40 max-w-sm sm:max-w-md w-full px-2 sm:px-0">
        {/* Expandable Mini YouTube Video Player */}
        {showMiniPlayer && (
          <div className="mb-2 bg-neutral-950 border border-emerald-500/50 rounded-sm overflow-hidden shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between px-3 py-1.5 bg-neutral-900 border-b border-neutral-800 text-[11px] font-mono text-emerald-400">
              <span className="flex items-center gap-1.5 truncate">
                <Music className="w-3 h-3 text-emerald-400" />
                Zainal Abidin — Hijau (YouTube)
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300"
                  title={t.openYoutube}
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setShowMiniPlayer(false)}
                  className="text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={YOUTUBE_EMBED_URL}
                title="Zainal Abidin - Hijau (Official Lyric Video)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="bg-neutral-950/95 border border-emerald-500/40 rounded-sm shadow-2xl backdrop-blur-md p-3.5 flex items-center justify-between gap-3 text-neutral-100 transition-all">
          {/* Left: Music icon & animated visualizer bars */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => {
                setShowMiniPlayer(!showMiniPlayer);
              }}
              className="w-10 h-10 rounded-xs bg-emerald-400 hover:bg-emerald-300 text-neutral-950 flex items-center justify-center shrink-0 transition-colors shadow cursor-pointer group"
              title="Mainkan Video & Lagu YouTube: Zainal Abidin - Hijau"
              aria-label="Play Hijau by Zainal Abidin"
            >
              <Play className="w-4 h-4 ml-0.5 fill-current group-hover:scale-110 transition-transform" />
            </button>

            <div
              className="min-w-0 cursor-pointer"
              onClick={() => setShowLyricsModal(true)}
            >
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                <Music className="w-3 h-3 text-emerald-400 shrink-0 animate-pulse" />
                <span className="truncate">{t.nowPlayingKicker}</span>
              </div>
              <p className="text-xs sm:text-sm font-serif font-bold text-white truncate hover:text-emerald-300 transition-colors">
                {t.songTitle}
              </p>
            </div>
          </div>

          {/* Center visualizer bars */}
          <div className="hidden sm:flex items-center gap-0.5 h-4">
            <span className={`w-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${showMiniPlayer || isPlaying ? 'h-4 animate-pulse' : 'h-1'}`} />
            <span className={`w-0.5 bg-emerald-400 rounded-full transition-all duration-200 ${showMiniPlayer || isPlaying ? 'h-3' : 'h-1'}`} />
            <span className={`w-0.5 bg-emerald-400 rounded-full transition-all duration-400 ${showMiniPlayer || isPlaying ? 'h-4 animate-pulse' : 'h-1'}`} />
            <span className={`w-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${showMiniPlayer || isPlaying ? 'h-2' : 'h-1'}`} />
          </div>

          {/* Right actions: Video Toggle & Lyrics / Info */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setShowMiniPlayer(!showMiniPlayer)}
              className={`px-2 py-1.5 text-xs font-mono rounded-xs border transition-colors cursor-pointer ${
                showMiniPlayer
                  ? 'bg-emerald-500/30 text-emerald-300 border-emerald-500/60'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-emerald-500/40'
              }`}
              title="Buka pemain video mini"
            >
              YouTube
            </button>

            <button
              onClick={() => setShowLyricsModal(true)}
              className="p-1.5 text-neutral-400 hover:text-white rounded-xs bg-neutral-900 border border-neutral-800 hover:border-emerald-500/40 transition-colors cursor-pointer"
              title={t.lyricsBtn}
              aria-label={t.lyricsBtn}
            >
              <Info className="w-3.5 h-3.5 text-neutral-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Lyrics & Official Video / Cultural Tribute Modal */}
      {showLyricsModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md"
          onClick={() => setShowLyricsModal(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-neutral-900 border border-neutral-700 rounded-sm shadow-2xl p-6 sm:p-8 text-neutral-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  LAGU WARISAN MALAYSIA · YOUTUBE RESMI
                </span>
              </div>
              <button
                onClick={() => setShowLyricsModal(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-xs bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Song Meta */}
            <div className="mt-6 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {t.modalTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {t.modalSubtitle}
              </p>
            </div>

            {/* Segmented Tab: Video vs Gamelan */}
            <div className="mt-6 flex items-center gap-2 border-b border-neutral-800 pb-3">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  activeTab === 'video'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {t.tabVideo}
              </button>
              <button
                onClick={() => setActiveTab('audio')}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  activeTab === 'audio'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {t.tabMusic}
              </button>
            </div>

            {activeTab === 'video' ? (
              <div className="mt-6 space-y-6">
                {/* Official YouTube Embed Player for UKf8AaAGkvk */}
                <div className="relative aspect-video rounded-sm overflow-hidden bg-neutral-950 border border-neutral-800 shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src={YOUTUBE_EMBED_URL}
                    title="Zainal Abidin - Hijau (Official Lyric Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800/80 pb-4">
                  <span className="font-mono text-emerald-400">Pautan Video: https://www.youtube.com/watch?v={YOUTUBE_VIDEO_ID}</span>
                  <a
                    href={YOUTUBE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    <span>{t.openYoutube}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Iconic Lyrics Display */}
                <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-sm text-center space-y-3 font-serif">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-emerald-400 block font-semibold">
                    {t.lyricsTitle}
                  </span>
                  <div className="text-sm sm:text-base text-neutral-200 leading-relaxed italic space-y-2">
                    <p>“Bumi yang tiada rimba, seumpama hamba</p>
                    <p>Dia dicemar manusia, yang jahil ketawa</p>
                    <p>Bumi yang tiada udara, bagai tiada nyawa</p>
                    <p>Pasti hilang suatu hari, tanpa disedari...”</p>
                    <p className="text-emerald-400 font-bold not-italic pt-2">
                      “Ooo... Hijau...”
                    </p>
                  </div>
                  <span className="text-xs text-neutral-500 font-sans block pt-2">
                    Komposer & Penulis Lirik: Mukhlis Nor (1991) · Nyanyian: Zainal Abidin
                  </span>
                </div>

                {/* Cultural Significance & Curatorial Connection */}
                <div className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    {t.meaningTitle}
                  </h4>
                  <p>{t.meaningText}</p>
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-6">
                {/* Audio Playback Controls in Modal */}
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-sm flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-xs bg-emerald-400 hover:bg-emerald-300 text-neutral-950 flex items-center justify-center transition-colors cursor-pointer shadow"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 ml-0.5 fill-current" />}
                    </button>
                    <div>
                      <p className="text-sm font-semibold text-white font-serif">
                        {isPlaying ? t.playing : t.listenPrompt}
                      </p>
                      <p className="text-xs text-neutral-400 font-mono">
                        Melodi Akustik & Gamelan Sintesis Galeri Studio Hana Art
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 text-neutral-400 hover:text-white rounded-xs bg-neutral-900 border border-neutral-800"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  </div>
                </div>

                {/* Cultural Significance */}
                <div className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    {t.meaningTitle}
                  </h4>
                  <p>{t.meaningText}</p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setShowLyricsModal(false)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xs transition-colors cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
