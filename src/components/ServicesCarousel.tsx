import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import capaConta from "@/assets/capa-conta.jpg";
import capaTiktok from "@/assets/capa-tiktok.jpg";
import capaHistoria from "@/assets/capa-historia.jpg";
import { AFFILIATE_LINK, TIKTOK_LINK } from "@/lib/links";

const services = [
  {
    id: 1,
    label: "Comece aqui",
    badge: "LINK OFICIAL",
    desc: "Crie sua conta pelo meu link oficial e comece a acompanhar o mercado do jeito que eu faço no dia a dia. Operar envolve risco: estude, comece pequeno e não invista o que você não pode perder.",
    image: capaConta,
    ctaLabel: "Abrir pelo meu link",
    ctaLink: AFFILIATE_LINK,
  },
  {
    id: 2,
    label: "TikTok",
    desc: "Acompanhe a minha rotina de trader, as análises e os bastidores de quem largou o jornalismo esportivo para viver do mercado.",
    image: capaTiktok,
    ctaLabel: "Seguir no TikTok",
    ctaLink: TIKTOK_LINK,
    pixelEvent: "Contact",
  },
  {
    id: 3,
    label: "Minha história",
    desc: "Fui jornalista esportivo e há 4 anos vivo do mercado financeiro. Conheça a trajetória do Fellipin Trader.",
    image: capaHistoria,
    ctaLabel: "Ler minha história",
    ctaLink: "#sobre-nos",
    internal: true,
  },
];

const ServicesCarousel = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeService = services.find((s) => s.id === active);

  // Horizontal row: arrows + mouse drag (touch swipe already works natively)
  const rowRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const updateArrows = () => {
    const el = rowRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !rowRef.current) return;
    drag.current = { down: true, startX: e.clientX, startScroll: rowRef.current.scrollLeft, moved: false };
    rowRef.current.style.scrollSnapType = "none";
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down || !rowRef.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    rowRef.current.scrollLeft = d.startScroll - dx;
  };
  const endDrag = () => {
    if (!drag.current.down) return;
    drag.current.down = false;
    if (rowRef.current) rowRef.current.style.scrollSnapType = "";
  };

  return (
    <section className="py-2 pb-6">
      {/* Section header */}
      <div className="flex items-baseline justify-between px-4 mb-3">
        <span className="font-condensed text-[17px] font-bold tracking-[0.5px] text-foreground">
          Comece por aqui
        </span>
      </div>

      {/* Carousel */}
      <div className="relative">
      <div
        ref={rowRef}
        onScroll={updateArrows}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="flex gap-2.5 px-4 pt-1 pb-3 overflow-x-auto snap-x snap-mandatory select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => {
              if (drag.current.moved) return;
              setActive(active === s.id ? null : s.id);
            }}
            className={`shrink-0 w-[30%] snap-start rounded-md overflow-hidden cursor-pointer relative transition-all duration-200 bg-surface hover:scale-105 ${
              active === s.id
                ? "outline outline-2 outline-primary shadow-[0_0_0_2px_hsl(24_100%_55%),0_8px_30px_rgba(255,122,26,0.4)]"
                : "hover:shadow-[0_8px_30px_rgba(255,122,26,0.35)]"
            }`}
            style={{ aspectRatio: "3/4" }}
          >
            {/* Placeholder or Image */}
            {s.image ? (
              <img src={s.image} alt={s.label} draggable={false} className="w-full h-full object-cover" />
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
      {canPrev && (
        <button
          type="button"
          aria-label="Ver cards anteriores"
          onClick={() => scrollByCard(-1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/70 border border-primary/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}
      {canNext && (
        <button
          type="button"
          aria-label="Ver mais cards"
          onClick={() => scrollByCard(1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/70 border border-primary/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
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
            {activeService.ctaLink !== "#" && (
            <a
              href={activeService.ctaLink}
              onClick={() =>
                !("internal" in activeService) && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.("track", "pixelEvent" in activeService ? activeService.pixelEvent : "Lead", {
                  content_name: activeService.label,
                })
              }
              {...("internal" in activeService ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/80 text-primary-foreground text-[12px] font-bold tracking-[0.5px] px-3 py-1.5 rounded-md transition-colors"
            >
              {activeService.ctaLabel}
            </a>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesCarousel;
