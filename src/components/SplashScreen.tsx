import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 2800);
    const hideTimer = setTimeout(() => onComplete(), 3400);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, [onComplete]);

  if (exiting) {
    return (
      <div
        className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
        style={{ animation: "splashExit 0.6s ease-in forwards" }}
      >
        <SplashContent />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <SplashContent />
    </div>
  );
};

const SplashContent = () => (
  <div className="flex flex-col items-center">
    <div
      className="font-display text-primary tracking-[6px]"
      style={{
        fontSize: "clamp(52px, 15vw, 86px)",
        opacity: 0,
        animation: "logoReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards",
        textShadow: "0 0 40px rgba(229,9,20,0.7), 0 0 80px rgba(229,9,20,0.3)",
      }}
    >
      SUA MARCA
    </div>
    <div
      className="font-body text-[11px] font-semibold tracking-[5px] uppercase text-muted-foreground"
      style={{ opacity: 0, animation: "fadeUp 0.6s ease 1s forwards" }}
    >
      Excelência em cada detalhe
    </div>
    <div
      className="h-[3px] bg-primary mt-3.5"
      style={{
        width: 0,
        animation: "barGrow 1.2s ease 0.8s forwards",
        boxShadow: "0 0 12px hsl(357 93% 50%)",
      }}
    />
  </div>
);

export default SplashScreen;
