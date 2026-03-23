import { useState } from "react";
import { ImageIcon } from "lucide-react";
import capaTrackeamento from "@/assets/capa-trackeamento.jpg";
import capaAssessoria from "@/assets/capa-assessoria.jpg";
import capaConsultoria from "@/assets/capa-consultoria.jpg";

const services = [
  {
    id: 1,
    label: "Trackeamento",
    badge: "NOVO",
    desc: "A TM Tracking instala a inteligência que faltava na sua operação. Configuramos pixels, API de conversões e rastreamento server-side para que seu gestor de tráfego saiba exatamente o que funciona — reduzindo até 47% do custo por venda e eliminando desperdício de verba em achismos.",
    image: capaTrackeamento,
    ctaLabel: "Saiba mais",
    ctaLink: "https://tracking.assessoriatm.com/",
  },
  {
    id: 2,
    label: "Assessoria",
    desc: "Acompanhamento contínuo e estratégico da sua operação de marketing digital. Analisamos suas campanhas, otimizamos investimentos em tráfego pago, criamos relatórios de performance e trabalhamos lado a lado com seu time para escalar resultados de forma consistente e sustentável.",
    image: capaAssessoria,
    whatsappMsg: "Olá! Tenho interesse no serviço de Assessoria. Gostaria de saber mais!",
  },
  {
    id: 3,
    label: "Consultoria",
    desc: "Diagnóstico completo do seu cenário digital com plano de ação personalizado. Identificamos gargalos, oportunidades de crescimento e traçamos uma estratégia clara para você atingir suas metas — desde posicionamento de marca até funis de vendas e automações que convertem.",
    image: capaConsultoria,
    whatsappMsg: "Olá! Tenho interesse no serviço de Consultoria. Gostaria de saber mais!",
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
          Popular na nossa empresa
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
            {activeService.ctaLink ? (
              <a
                href={activeService.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/80 text-primary-foreground text-[12px] font-bold tracking-[0.5px] px-3 py-1.5 rounded-md transition-colors"
              >
                {activeService.ctaLabel || "Saiba mais"}
              </a>
            ) : (
              <a
                href={`https://wa.me/5537988396106?text=${encodeURIComponent(activeService.whatsappMsg || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe57] text-white text-[12px] font-bold tracking-[0.5px] px-3 py-1.5 rounded-md transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.318A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.724-5.993-1.953a.5.5 0 00-.404-.078l-3.384.955.88-3.229a.5.5 0 00-.064-.417A9.946 9.946 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                Fale conosco
              </a>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesCarousel;
