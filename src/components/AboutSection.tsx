const stats = [
  { number: "+30mil", label: "Membros no Telegram" },
  { number: "3", label: "Lives por dia" },
  { number: "+10", label: "Pessoas no time" },
];

const AboutSection = () => (
  <section id="sobre-nos" className="px-5 pb-8">
    <div className="font-condensed text-[11px] font-bold tracking-[4px] uppercase text-primary mb-2">Quem sou eu</div>
    <h2 className="font-display tracking-[3px] leading-none mb-3.5" style={{ fontSize: "clamp(28px, 8vw, 38px)" }}>
      O HIGOR E A<br />
      <span className="text-primary">CRIPTO TRADER ACADEMY</span>
    </h2>
    <p className="text-sm font-light leading-[1.7] mb-2.5" style={{ color: "rgba(255,255,255,0.72)" }}>
      Larguei a engenharia para viver do mercado. Hoje sou trader profissional em cripto, empresário e fundador da
      Cripto Trader Academy, a escola onde ensino o método que uso no meu dia a dia.
    </p>
    <p className="text-sm font-light leading-[1.7]" style={{ color: "rgba(255,255,255,0.72)" }}>
      No Grupo VIP eu não mostro resultado pronto: opero ao vivo, junto com os alunos, três vezes por dia. Você vê a
      entrada, a saída e o raciocínio de cada operação, e aprende operando do meu lado.
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
