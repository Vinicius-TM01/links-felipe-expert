import { Play, Volume2, Info } from "lucide-react";

const HeroSection = () => (
  <section className="relative w-full min-h-[380px] bg-black overflow-hidden" style={{ height: "70vh" }}>
    {/* Background placeholder */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(135deg, #000a1a 0%, #001a4d 20%, #000d1a 40%, #0a0a1a 70%, #000 100%)",
      }}
    />
    {/* Scanlines */}
    <div
      className="absolute inset-0 pointer-events-none"
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
    {/* Red vignette */}
    <div
      className="absolute inset-0 z-[2] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at 0% 50%, rgba(0,91,201,0.08) 0%, transparent 60%), radial-gradient(ellipse at 100% 50%, rgba(159,234,27,0.08) 0%, transparent 60%)",
      }}
    />

    {/* Play button */}
    <button
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[4] w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
      style={{
        background: "rgba(255,255,255,0.15)",
        border: "2px solid rgba(255,255,255,0.6)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Play className="w-[26px] h-[26px] text-foreground ml-[3px]" fill="white" />
    </button>

    {/* Title */}
    <div className="absolute bottom-20 left-0 right-0 z-[3] text-center px-6">
      <h1
        className="font-display leading-[0.95] tracking-[4px] uppercase text-foreground"
        style={{
          fontSize: "clamp(38px, 12vw, 58px)",
          textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 0 60px rgba(229,9,20,0.2)",
        }}
      >
        SUA<br />EMPRESA
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
        className="flex-1 max-w-[130px] h-9 text-foreground font-condensed text-sm font-bold tracking-[1px] rounded flex items-center justify-center gap-1.5 cursor-pointer transition-all"
        style={{ background: "rgba(109,109,110,0.7)", backdropFilter: "blur(4px)" }}
      >
        <Info className="w-3.5 h-3.5" />
        Sobre nós
      </button>
    </div>

    {/* Volume */}
    <button
      className="absolute bottom-5 right-4 z-[5] w-[34px] h-[34px] rounded-full flex items-center justify-center cursor-pointer transition-all hover:border-primary"
      style={{ background: "rgba(0,0,0,0.6)", border: "1.5px solid rgba(255,255,255,0.3)" }}
    >
      <Volume2 className="w-4 h-4 text-foreground" />
    </button>
  </section>
);

export default HeroSection;
