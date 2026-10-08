import { ArrowUpRight, Info } from "lucide-react";
import hero from "@/assets/hero.jpg";
import Signature from "@/components/Signature";
import { AFFILIATE_LINK } from "@/lib/links";

const HeroSection = () => (
  <section className="relative w-full min-h-[420px] bg-black overflow-hidden" style={{ height: "74vh" }}>
    <img
      src={hero}
      alt="Fellipin Trader"
      className="absolute inset-0 w-full h-full object-cover object-top"
      fetchPriority="high"
    />

    {/* Bottom gradient */}
    <div
      className="absolute inset-0 z-[2]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 28%, transparent 45%, rgba(0,0,0,0.6) 72%, hsl(20 14% 4%) 100%)",
      }}
    />
    {/* Glow */}
    <div
      className="absolute inset-0 z-[2] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 0% 60%, rgba(255,122,26,0.16) 0%, transparent 60%), radial-gradient(ellipse at 100% 60%, rgba(255,122,26,0.12) 0%, transparent 60%)",
      }}
    />

    {/* Title */}
    <div className="absolute bottom-[84px] left-0 right-0 z-[3] text-center px-6">
      <h1 className="m-0" style={{ filter: "drop-shadow(0 2px 18px rgba(0,0,0,0.85))" }}>
        <Signature size={76} delay={3.6} duration={1.6} />
      </h1>
      <p className="text-[10px] tracking-[2.5px] uppercase mt-4" style={{ color: "rgba(255,255,255,0.7)" }}>
        Ex-jornalista esportivo · Trader há 4 anos
      </p>
    </div>

    {/* Action buttons */}
    <div className="absolute bottom-[30px] left-0 right-0 z-[3] flex gap-2.5 px-5 justify-center">
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.("track", "Lead", { content_name: "Hero" })}
        className="flex-1 max-w-[150px] h-9 bg-primary text-primary-foreground font-condensed text-sm font-bold tracking-[1px] rounded flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-90 transition-opacity no-underline"
      >
        Começar agora
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
      <button
        onClick={() => document.getElementById("sobre-nos")?.scrollIntoView({ behavior: "smooth" })}
        className="flex-1 max-w-[130px] h-9 text-foreground font-condensed text-sm font-bold tracking-[1px] rounded flex items-center justify-center gap-1.5 cursor-pointer transition-all"
        style={{ background: "rgba(109,109,110,0.7)", backdropFilter: "blur(4px)" }}
      >
        <Info className="w-3.5 h-3.5" />
        Sobre mim
      </button>
    </div>
  </section>
);

export default HeroSection;
