type SignatureProps = {
  size?: number;
  animate?: boolean;
  delay?: number;
  duration?: number;
  flourish?: boolean;
  className?: string;
};

const NAME = "Fellipin Trader";

// Assinatura manuscrita: o nome é "escrito" da esquerda para a direita
// (clip-path + caneta luminosa) e um traço final desenha por baixo.
const Signature = ({ size = 56, animate = true, delay = 0, duration = 1.6, flourish = true, className = "" }: SignatureProps) => (
  <span
    className={`relative inline-block select-none ${className}`}
    role="img"
    aria-label="Fellipin Trader"
    style={{ lineHeight: 1 }}
  >
    <span
      aria-hidden
      className="relative block whitespace-nowrap text-foreground"
      style={{
        fontFamily: "'Mrs Saint Delafield', cursive",
        fontSize: size,
        lineHeight: 1.05,
        paddingRight: size * 0.12,
        ...(animate
          ? {
              clipPath: "inset(-20% 100% -20% -5%)",
              animation: `sigWrite ${duration}s cubic-bezier(0.55, 0.1, 0.35, 1) ${delay}s forwards`,
            }
          : {}),
      }}
    >
      {NAME}
    </span>

    {animate && (
      <span
        aria-hidden
        className="absolute top-[22%] h-[52%] w-[2px] rounded-full bg-primary pointer-events-none"
        style={{
          left: 0,
          opacity: 0,
          boxShadow: "0 0 10px 2px hsl(24 100% 55% / 0.9)",
          animation: `sigPen ${duration}s cubic-bezier(0.55, 0.1, 0.35, 1) ${delay}s forwards`,
        }}
      />
    )}

    {flourish && (
      <svg
        aria-hidden
        viewBox="0 0 300 24"
        className="absolute left-[4%] w-[92%] pointer-events-none"
        style={{ bottom: -size * 0.06, height: size * 0.3, overflow: "visible" }}
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M4 16 C 60 4, 130 20, 190 11 S 270 6, 296 12"
          stroke="hsl(24 100% 55%)"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={
            animate
              ? {
                  strokeDasharray: 340,
                  strokeDashoffset: 340,
                  animation: `sigFlourish 0.7s ease-out ${delay + duration}s forwards`,
                }
              : undefined
          }
        />
      </svg>
    )}
  </span>
);

export default Signature;
