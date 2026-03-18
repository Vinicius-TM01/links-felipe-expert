import { Bell } from "lucide-react";

const Header = () => (
  <header
    className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-[100] px-5 py-3.5 flex items-center justify-between"
    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)" }}
  >
    <div
      className="font-display text-[26px] tracking-[3px] text-primary"
      style={{ textShadow: "0 0 20px rgba(229,9,20,0.5)" }}
    >
      MARCA
    </div>
    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center cursor-pointer">
      <Bell className="w-[18px] h-[18px] text-primary-foreground" fill="white" />
    </div>
  </header>
);

export default Header;
