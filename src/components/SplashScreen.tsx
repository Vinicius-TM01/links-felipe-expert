import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 3200);
    const hideTimer = setTimeout(() => onComplete(), 3800);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      style={exiting ? { animation: "splashExit 0.6s ease-in forwards" } : undefined}
    >
      <div className="flex flex-col items-center gap-5 px-6">
        <div
          className="h-20 md:h-28"
          style={{
            filter: "drop-shadow(0 0 40px rgba(0,91,201,0.7)) drop-shadow(0 0 80px rgba(0,91,201,0.3))",
          }}
        >
          <svg
            viewBox="0 0 276.6 159"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto"
          >
            {/* Blue outline - draws in via stroke animation */}
            <path
              d="M276.11,32.07h-36.66c-3.55,0-7.5,1.83-9.91,4.6l-50.74,58.35c-1.25,1.43-3.79,1.03-3.83-.61l-1.27-62.34h-34.86c3.98-.79,7.84-3.53,9.23-6.81L158.8,0H.26S-.12,27.09.04,27.87c.62,2.98,2.9,4.37,6.61,4.37h.18l-.02.06h39.67c.94,0,1.43.63,1.1,1.41L8.04,126.83h36.81c2.95,0,6.08-1.25,8.4-3.15l-30.18,35.06h42.38c3.56,0,7.51-1.84,9.92-4.62l64.24-74.62-8.74,20.84.69,58.65h36.36l68.02-79.5-8.67,20.66.95,21.6c.05,2.77,2.44,4.62,6,4.62h42.38l-.49-94.31ZM132,32.26L55.95,120.55c.14-.25.27-.51.38-.77l33.67-79.27-16.26-8.21,58.27-.04Z"
              fill="none"
              stroke="#005bc9"
              strokeWidth="1.5"
              style={{
                strokeDasharray: 1800,
                strokeDashoffset: 1800,
                animation: "drawPath 1.8s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards",
              }}
            />
            {/* Blue fill - fades in after stroke completes */}
            <path
              d="M276.11,32.07h-36.66c-3.55,0-7.5,1.83-9.91,4.6l-50.74,58.35c-1.25,1.43-3.79,1.03-3.83-.61l-1.27-62.34h-34.86c3.98-.79,7.84-3.53,9.23-6.81L158.8,0H.26S-.12,27.09.04,27.87c.62,2.98,2.9,4.37,6.61,4.37h.18l-.02.06h39.67c.94,0,1.43.63,1.1,1.41L8.04,126.83h36.81c2.95,0,6.08-1.25,8.4-3.15l-30.18,35.06h42.38c3.56,0,7.51-1.84,9.92-4.62l64.24-74.62-8.74,20.84.69,58.65h36.36l68.02-79.5-8.67,20.66.95,21.6c.05,2.77,2.44,4.62,6,4.62h42.38l-.49-94.31ZM132,32.26L55.95,120.55c.14-.25.27-.51.38-.77l33.67-79.27-16.26-8.21,58.27-.04Z"
              fill="#005bc9"
              style={{
                opacity: 0,
                animation: "fillReveal 0.5s ease 1.9s forwards",
              }}
            />
            {/* Green accent - slides in and glows */}
            <path
              d="M132,32.26L55.95,120.55c.14-.25.27-.51.38-.77l33.67-79.27-16.26-8.21,58.27-.04Z"
              fill="#9fea1b"
              style={{
                opacity: 0,
                transform: "translateX(-20px) translateY(10px)",
                animation: "accentSlam 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 2.3s forwards",
                filter: "drop-shadow(0 0 0px rgba(159,234,27,0))",
              }}
            />
          </svg>
        </div>
        <div
          className="font-body text-[11px] font-semibold tracking-[5px] uppercase text-muted-foreground"
          style={{ opacity: 0, animation: "fadeUp 0.6s ease 2.6s forwards" }}
        >
          Excelência em cada detalhe
        </div>
        <div
          className="h-[3px] bg-primary mt-3.5"
          style={{
            width: 0,
            animation: "barGrow 1.2s ease 2.4s forwards",
            boxShadow: "0 0 12px hsl(214 100% 39%)",
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
