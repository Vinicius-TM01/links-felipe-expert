import sobre from "@/assets/sobre.jpg";
import Signature from "@/components/Signature";

const AboutSection = () => (
  <section id="sobre-nos" className="px-5 pb-8">
    <div className="font-condensed text-[11px] font-bold tracking-[4px] uppercase text-primary mb-2">Quem sou eu</div>
    <h2 className="font-display tracking-[3px] leading-none mb-4" style={{ fontSize: "clamp(28px, 8vw, 38px)" }}>
      DAS REDAÇÕES<br />
      <span className="text-primary">PARA OS GRÁFICOS</span>
    </h2>

    <div className="relative rounded-lg overflow-hidden border border-border mb-4" style={{ aspectRatio: "4/5" }}>
      <img src={sobre} alt="Fellipin Trader" loading="lazy" className="w-full h-full object-cover object-top" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}
      />
      <div className="absolute left-3 bottom-3 bg-primary text-primary-foreground font-condensed text-[11px] font-extrabold tracking-[1.5px] uppercase px-2 py-1 rounded-sm">
        4 anos vivendo do mercado
      </div>
    </div>

    <p className="text-sm font-light leading-[1.7] mb-2.5" style={{ color: "rgba(255,255,255,0.72)" }}>
      Eu era jornalista esportivo. Troquei as redações pelos gráficos e há 4 anos vivo do mercado financeiro.
      Sou o Fellipin Trader.
    </p>
    <p className="text-sm font-light leading-[1.7]" style={{ color: "rgba(255,255,255,0.72)" }}>
      Quem vem do jornalismo aprende a investigar antes de opinar, e levei isso para o trade: estudo, método e gestão
      de risco antes de qualquer entrada. No TikTok eu mostro a minha rotina e como eu enxergo o mercado.
    </p>

    <div className="mt-5 flex justify-end">
      <Signature size={54} delay={0.2} duration={1.5} />
    </div>
  </section>
);

export default AboutSection;
