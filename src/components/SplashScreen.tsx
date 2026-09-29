import { useEffect, useState } from "react";

const HIGOR_PATH =
  "M8.9 200V0H48.6V71.5H67.5V0H107.3V200H67.5V109.3H48.6V200Z M123.2 200V0H161.8V200Z M219 201.8Q176.1 201.8 176.1 140.5V54.2Q176.1 -1.8 225.2 -1.8Q245.5 -1.8 256.2 6.3Q267 14.4 271.1 30Q275.2 45.6 275.2 68H236.1V50.2Q236.1 43.8 234.4 39.4Q232.6 35 227 35Q220.1 35 217.9 39.7Q215.7 44.3 215.7 49.9V146.8Q215.7 154.9 217.8 159.9Q219.9 165 226 165Q232.4 165 234.5 159.9Q236.6 154.9 236.6 146.6V118.1H225.9V83.5H274.8V200H258.8L251.9 183.2Q241.5 201.8 219 201.8Z M338.3 201.8Q314.3 201.8 301.6 187.3Q289 172.8 289 145.5V50.5Q289 24.8 301.5 11.5Q314.1 -1.8 338.3 -1.8Q362.5 -1.8 375.1 11.5Q387.6 24.8 387.6 50.5V145.5Q387.6 172.8 374.9 187.3Q362.3 201.8 338.3 201.8ZM338.6 165Q347.7 165 347.7 147.4V49.8Q347.7 35 338.9 35Q328.9 35 328.9 50.1V147.6Q328.9 156.9 331.1 161Q333.4 165 338.6 165Z M403.8 200V0H465.1Q480.5 0 488.3 7Q496.1 14 498.8 26.5Q501.5 39.1 501.5 56Q501.5 72.4 497.3 82.2Q493.2 91.9 481.7 95.7Q491.1 97.6 494.9 105.1Q498.8 112.5 498.8 124.3V200H459.3V121.7Q459.3 113 455.7 110.9Q452.2 108.8 444.2 108.8V200ZM444.4 74.1H454.1Q462.4 74.1 462.4 56Q462.4 44.3 460.6 40.7Q458.8 37 453.8 37H444.4Z";

const TRADER_PATH =
  "M12.5 326V248.4H1.1V230H43.1V248.4H31.7V326Z M88.4 326V230H117.9Q125.2 230 129 233.4Q132.8 236.7 134 242.7Q135.3 248.8 135.3 256.9Q135.3 264.7 133.3 269.4Q131.3 274.1 125.8 275.9Q130.4 276.9 132.2 280.4Q134 284 134 289.7V326H115.1V288.4Q115.1 284.2 113.4 283.2Q111.6 282.2 107.8 282.2V326ZM107.9 265.6H112.6Q116.6 265.6 116.6 256.9Q116.6 251.3 115.7 249.5Q114.8 247.8 112.4 247.8H107.9Z M179 326 188.3 230H220.8L229.9 326H211.8L210.4 310.5H198.8L197.6 326ZM200.2 295.2H208.9L204.7 246.4H203.9Z M275.8 326V230H302.2Q312.6 230 317.8 235.8Q323 241.5 323 252.6V297.5Q323 311.2 318.3 318.6Q313.5 326 301.5 326ZM295.1 309H298.4Q303.7 309 303.7 303.9V254.4Q303.7 249.6 302.4 248.2Q301.2 246.8 297.2 246.8H295.1Z M370.9 326V230H409.3V248.5H390.4V267.3H408.5V285.3H390.4V307.3H410.5V326Z M456.8 326V230H486.3Q493.6 230 497.4 233.4Q501.2 236.7 502.4 242.7Q503.7 248.8 503.7 256.9Q503.7 264.7 501.7 269.4Q499.7 274.1 494.2 275.9Q498.8 276.9 500.6 280.4Q502.4 284 502.4 289.7V326H483.5V288.4Q483.5 284.2 481.8 283.2Q480 282.2 476.2 282.2V326ZM476.3 265.6H481Q485 265.6 485 256.9Q485 251.3 484.1 249.5Q483.2 247.8 480.8 247.8H476.3Z";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 2400);
    const hideTimer = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      style={exiting ? { animation: "splashExit 0.6s ease-in forwards" } : undefined}
    >
      <div className="flex flex-col items-center gap-5 px-6">
        <div
          className="h-28 md:h-36"
          style={{
            filter: "drop-shadow(0 0 40px rgba(107,234,153,0.45)) drop-shadow(0 0 80px rgba(107,234,153,0.2))",
          }}
        >
          <svg viewBox="0 0 506 326" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
            {/* HIGOR - outline draws in via stroke animation */}
            <path
              d={HIGOR_PATH}
              fill="none"
              stroke="#F4F5F2"
              strokeWidth="2"
              style={{
                strokeDasharray: 2400,
                strokeDashoffset: 2400,
                animation: "drawPath 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards",
              }}
            />
            {/* HIGOR - fill fades in after stroke completes */}
            <path
              d={HIGOR_PATH}
              fill="#F4F5F2"
              style={{
                opacity: 0,
                animation: "fillReveal 0.4s ease 1.3s forwards",
              }}
            />
            {/* TRADER - slams in with red glow */}
            <path
              d={TRADER_PATH}
              fill="#6BEA99"
              style={{
                opacity: 0,
                transform: "translateX(-20px) translateY(10px)",
                animation: "accentSlam 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.6s forwards",
              }}
            />
          </svg>
        </div>
        <div
          className="h-[3px] bg-primary mt-4"
          style={{
            width: 0,
            animation: "barGrow 0.8s ease 1.8s forwards",
            boxShadow: "0 0 12px hsl(142 75% 67%)",
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
