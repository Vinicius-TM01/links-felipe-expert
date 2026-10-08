import { Bell } from "lucide-react";
import Signature from "@/components/Signature";
import { AFFILIATE_LINK } from "@/lib/links";

const Header = () => (
  <header
    className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-[100] px-5 py-2.5 flex items-center justify-between"
    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)" }}
  >
    <Signature size={34} animate={false} flourish={false} />
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir meu link"
      className="w-8 h-8 rounded bg-primary flex items-center justify-center cursor-pointer"
    >
      <Bell className="w-[18px] h-[18px] text-primary-foreground" fill="currentColor" />
    </a>
  </header>
);

export default Header;
