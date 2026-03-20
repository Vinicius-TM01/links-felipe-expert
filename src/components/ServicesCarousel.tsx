import { useState } from "react";
import { ImageIcon } from "lucide-react";
import capaTrackeamento from "@/assets/capa-trackeamento.jpg";
import capaAssessoria from "@/assets/capa-assessoria.jpg";
import capaConsultoria from "@/assets/capa-consultoria.jpg";

const services = [
  { id: 1, label: "Trackeamento", badge: "NOVO", desc: "Monitoramento avançado de métricas e KPIs em tempo real.", image: capaTrackeamento },
  { id: 2, label: "Assessoria", desc: "Assessoria estratégica para crescimento sustentável.", image: capaAssessoria },
  { id: 3, label: "Consultoria", desc: "Consultoria especializada para otimizar seus resultados.", image: capaConsultoria },
  { id: 4, label: "Resultados", desc: "Análise e entrega de resultados mensuráveis." },
];

const ServicesCarousel = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeService = services.find((s) => s.id === active);

  return (
    <section className="py-2 pb-6">
      {/* Section header */}
      <div className="flex items-baseline justify-between px-4 mb-3">
        <span className="font-condensed text-[17px] font-bold tracking-[0.5px] text-foreground">
          Popular na nossa empresa
        </span>
        <a href="#" className="text-xs font-semibold text-primary tracking-[0.5px] hover:brightness-125 transition-all">
          Ver tudo ›
        </a>
      </div>

      {/* Carousel */}
      <div className="grid grid-cols-4 gap-2.5 px-4 pb-3">
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => setActive(active === s.id ? null : s.id)}
            className={`rounded-md overflow-hidden cursor-pointer relative transition-all duration-200 bg-surface hover:scale-105 ${
              active === s.id
                ? "outline outline-2 outline-primary shadow-[0_0_0_2px_hsl(214_100%_39%),0_8px_30px_rgba(0,91,201,0.4)]"
                : "hover:shadow-[0_8px_30px_rgba(0,91,201,0.35)]"
            }`}
            style={{ aspectRatio: "2/3" }}
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
          activeService ? "max-h-[120px] opacity-100 py-3.5 px-4" : "max-h-0 opacity-0 py-0 px-4"
        }`}
      >
        {activeService && (
          <>
            <h3 className="font-condensed text-[15px] font-bold tracking-[1px] text-primary mb-1">
              {activeService.label}
            </h3>
            <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {activeService.desc}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesCarousel;
