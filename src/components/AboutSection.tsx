const stats = [
  { number: "+420", label: "Clientes" },
  { number: "98%", label: "Satisfação" },
  { number: "+240Mi", label: "Faturados para parceiros" },
];

const AboutSection = () => (
  <section id="sobre-nos" className="px-5 pb-8">
    <div className="font-condensed text-[11px] font-bold tracking-[4px] uppercase text-primary mb-2">Quem somos</div>
    <h2 className="font-display tracking-[3px] leading-none mb-3.5" style={{ fontSize: "clamp(28px, 8vw, 38px)" }}>
      SOBRE A<br />
      EMPRESA
    </h2>
    <p className="text-sm font-light leading-[1.7] mb-2.5" style={{ color: "rgba(255,255,255,0.72)" }}>
      A TM é uma assessoria de marketing que une excelência, alto padrão e tecnologia para entregar estratégias
      inteligentes e resultados consistentes. Com uma atuação consultiva e orientada por dados, desenvolve soluções
      personalizadas a partir de análises aprofundadas, estudo de comportamento e leitura precisa dos indicadores de
      performance.
    </p>
    <p className="text-sm font-light leading-[1.7]" style={{ color: "rgba(255,255,255,0.72)" }}>
      Mais do que executar ações, a TM transforma informação em decisões estratégicas, combinando visão de mercado,
      inovação e performance para posicionar marcas de forma sólida e competitiva.
    </p>

    <div className="grid grid-cols-3 gap-2.5 mt-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-surface rounded-lg p-3.5 text-center border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
          <div className="font-display text-[26px] text-primary leading-none">{s.number}</div>
          <div className="text-[10px] font-semibold tracking-[1.5px] uppercase text-muted-foreground mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
