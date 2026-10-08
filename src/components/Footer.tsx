import Signature from "@/components/Signature";
import { TIKTOK_LINK } from "@/lib/links";

const Footer = () => (
  <footer className="py-6 px-5 pb-10 border-t border-border text-center">
    <div className="mb-1"><Signature size={40} animate={false} flourish={false} /></div>
    <div className="flex justify-center gap-4 my-3.5">
      {[
        { name: "tiktok", url: TIKTOK_LINK },
      ].map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center cursor-pointer transition-all hover:border-primary hover:bg-primary/10 group"
        >
          <SocialIcon name={s.name} />
        </a>
      ))}
    </div>
    <p className="text-[11px] text-muted-foreground tracking-[1px]">
      © 2026 Fellipin Trader. Todos os direitos reservados.
    </p>
  </footer>
);

const SocialIcon = ({ name }: { name: string }) => {
  const cls = "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors";
  if (name === "instagram")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </svg>
    );
  if (name === "tiktok")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
      </svg>
    );
  if (name === "youtube")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

export default Footer;
