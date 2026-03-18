import { Bell } from "lucide-react";
import logo from "@/assets/logo.svg";

const Header = () => (
  <header
    className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-[100] px-5 py-3.5 flex items-center justify-between"
    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 100%)" }}
  >
    <img src={logo} alt="Performança" className="h-7" />
    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center cursor-pointer">
      <Bell className="w-[18px] h-[18px] text-primary-foreground" fill="white" />
    </div>
  </header>
);

export default Header;
