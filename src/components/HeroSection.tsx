import { useRef, useState } from "react";
import { Play, Volume2, VolumeX, Info } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative w-full min-h-[380px] bg-black overflow-hidden" style={{ height: "70vh" }}>
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
        }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 50%, rgba(0,0,0,0.5) 75%, hsl(0 0% 4%) 100%)",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 50%, rgba(0,91,201,0.08) 0%, transparent 60%), radial-gradient(ellipse at 100% 50%, rgba(159,234,27,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Title */}
      <div className="absolute bottom-20 left-0 right-0 z-[3] text-center px-6">
        <h1
          className="font-display leading-[0.95] tracking-[4px] uppercase text-foreground"
          style={{
            fontSize: "clamp(38px, 12vw, 58px)",
            textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 0 60px rgba(0,91,201,0.2)",
          }}
        >
          ASSESSORIA TM
        </h1>
        <p className="text-[11px] tracking-[4px] uppercase mt-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>
          Resultados reais · Estratégia de elite
        </p>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-[30px] left-0 right-0 z-[3] flex gap-2.5 px-5 justify-center">
        <button className="flex-1 max-w-[130px] h-9 bg-foreground text-background font-condensed text-sm font-bold tracking-[1px] rounded flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-85 transition-opacity">
          <Play className="w-3.5 h-3.5" fill="black" />
          Assistir
        </button>
        <button
          onClick={() => document.getElementById("sobre-nos")?.scrollIntoView({ behavior: "smooth" })}
          className="flex-1 max-w-[130px] h-9 text-foreground font-condensed text-sm font-bold tracking-[1px] rounded flex items-center justify-center gap-1.5 cursor-pointer transition-all"
          style={{ background: "rgba(109,109,110,0.7)", backdropFilter: "blur(4px)" }}
        >
          <Info className="w-3.5 h-3.5" />
          Sobre nós
        </button>
      </div>

      {/* Mute/Unmute */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-4 z-[5] w-[34px] h-[34px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:border-primary"
        style={{ background: "rgba(0,0,0,0.6)", border: "1.5px solid rgba(255,255,255,0.3)" }}
      >
        {muted ? (
          <VolumeX className="w-4 h-4 text-foreground" />
        ) : (
          <Volume2 className="w-4 h-4 text-foreground" />
        )}
      </button>
    </section>
  );
};

export default HeroSection;
