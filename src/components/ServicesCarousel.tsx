import { useState } from "react";
import { ImageIcon } from "lucide-react";
import capaAcademy from "@/assets/capa-academy.jpg";
import capaAoVivo from "@/assets/capa-aovivo.jpg";
import capaVip from "@/assets/capa-vip.jpg";

// TODO: trocar pelo link real do Grupo VIP (checkout ou página de vendas)
const VIP_LINK = "#";

const services = [
  {
    id: 1,
    label: "Academy",
    badge: "GRÁTIS",
    desc: "A formação completa da Cripto Trader Academy, do zero ao avançado: análise, estratégia e gestão de banca. Você entende o motivo de cada entrada, como controlar o risco e quando ficar de fora. Acesso 100% gratuito.",
    image: capaAcademy,
    ctaLabel: "Quero minha vaga",
    ctaLink: "https://criptotraderacademy.com/",
  },
  {
    id: 2,
    label: "Ao vivo",
    desc: "Entre no grupo gratuito no Telegram, com mais de 30 mil membros, e acompanhe o meu dia a dia no mercado: análises, operações e o raciocínio por trás de cada decisão.",
    image: capaAoVivo,
    ctaLabel: "Entrar no grupo gratuito",
    ctaLink: "https://bit.ly/higortradefree",
  },
  {
    id: 3,
    label: "Grupo VIP",
    badge: "VIP",
    desc: "Opere junto comigo, ao vivo, quatro vezes por dia. No Grupo VIP você vê a entrada, a saída e o raciocínio de cada operação em tempo real, lado a lado com a comunidade.",
    image: capaVip,
    ctaLabel: "Quero entrar no VIP",
    ctaLink: VIP_LINK,
  },
];

const ServicesCarousel = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeService = services.find((s) => s.id === active);

  return (
    <section className="py-2 pb-6">
      {/* Section header */}
      <div className="flex items-baseline justify-between px-4 mb-3">
        <span className="font-condensed text-[17px] font-bold tracking-[0.5px] text-foreground">
          Comece por aqui
        </span>
      </div>

      {/* Carousel */}
      <div className="grid grid-cols-3 gap-2.5 px-4 pb-3">
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => setActive(active === s.id ? null : s.id)}
            className={`rounded-md overflow-hidden cursor-pointer relative transition-all duration-200 bg-surface hover:scale-105 ${
              active === s.id
                ? "outline outline-2 outline-primary shadow-[0_0_0_2px_hsl(142_75%_67%),0_8px_30px_rgba(107,234,153,0.4)]"
                : "hover:shadow-[0_8px_30px_rgba(107,234,153,0.35)]"
            }`}
            style={{ aspectRatio: "3/4" }}
          >
            {/* Placeholder or Image */}
            {s.image ? (
              <img src={s.image} alt={s.label} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2.5">
                <ImageIcon className="w-9 h-9 opacity-40 text-muted-foreground" />
                <span className="text-[9px] tracking-[2px] uppercase text-muted-foreground">Sua imagem</span>
              </div>
            )}

            {/* Badge */}
            {s.badge && (
              <span className="absolute top-2 left-2 bg-primary font-condensed text-[10px] font-bold tracking-[1px] px-1.5 py-0.5 rounded-sm text-primary-foreground">
                {s.badge}
              </span>
            )}

            {/* Label overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 px-2.5 pb-2.5 pt-5"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)" }}
            >
              <span className="font-condensed text-[13px] font-extrabold tracking-[1px] uppercase leading-tight text-foreground">
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded description */}
      <div
        className={`mx-4 bg-surface border-l-[3px] border-primary rounded-r-md overflow-hidden transition-all duration-400 ${
          activeService ? "max-h-[280px] opacity-100 py-3.5 px-4" : "max-h-0 opacity-0 py-0 px-4"
        }`}
      >
        {activeService && (
          <>
            <h3 className="font-condensed text-[15px] font-bold tracking-[1px] text-primary mb-1">
              {activeService.label}
            </h3>
            <p className="text-[13px] leading-relaxed mb-2.5" style={{ color: "rgba(255,255,255,0.7)" }}>
              {activeService.desc}
            </p>
            <a
              href={activeService.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/80 text-primary-foreground text-[12px] font-bold tracking-[0.5px] px-3 py-1.5 rounded-md transition-colors"
            >
              {activeService.ctaLabel}
            </a>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesCarousel;
