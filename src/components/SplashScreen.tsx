import { useEffect, useState } from "react";
import Signature from "@/components/Signature";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 3000);
    const hideTimer = setTimeout(() => onComplete(), 3600);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      style={exiting ? { animation: "splashExit 0.6s ease-in forwards" } : undefined}
    >
      <div className="flex flex-col items-center gap-3 px-6">
        <div style={{ filter: "drop-shadow(0 0 30px rgba(255,122,26,0.35))" }}>
          <Signature size={72} delay={0.3} duration={1.8} />
        </div>
        <div
          className="font-condensed text-[11px] font-bold tracking-[6px] uppercase text-muted-foreground mt-4"
          style={{ opacity: 0, animation: "fadeUp 0.6s ease 2.6s forwards" }}
        >
          Links oficiais
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
