import { Phone, Award, HelpCircle, BookOpen, Instagram, Download } from "lucide-react";

const links = [
  { icon: Phone, name: "Contato", sub: "Fale conosco" },
  { icon: Award, name: "Cases", sub: "Nossos resultados" },
  { icon: HelpCircle, name: "FAQ", sub: "Dúvidas frequentes" },
  { icon: BookOpen, name: "Blog", sub: "Conteúdo e dicas" },
  { icon: Instagram, name: "Instagram", sub: "@suaempresa" },
  { icon: Download, name: "App", sub: "Baixe agora" },
];

const LinksSection = () => (
  <section className="px-5 pb-5">
    <div className="flex items-baseline justify-between mb-3">
      <span className="font-condensed text-[17px] font-bold tracking-[0.5px] text-foreground">Links úteis</span>
    </div>
    <div className="grid grid-cols-2 gap-2.5">
      {links.map((l) => (
        <a
          key={l.name}
          href="#"
          className="group flex items-center gap-2.5 p-3 bg-surface rounded-lg border border-border cursor-pointer no-underline text-foreground transition-all duration-200 relative overflow-hidden hover:border-primary/40 hover:-translate-y-px"
        >
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.07] transition-opacity" />
          <div className="w-8 h-8 rounded-md bg-primary/15 flex items-center justify-center shrink-0 relative z-10">
            <l.icon className="w-4 h-4 text-primary" />
          </div>
          <div className="relative z-10">
            <div className="font-condensed text-[13px] font-bold tracking-[0.5px]">{l.name}</div>
            <div className="text-[10px] text-muted-foreground mt-px">{l.sub}</div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default LinksSection;
