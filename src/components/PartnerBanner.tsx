import useLauths from "@/assets/use-lauths-2.jpg";

const PartnerBanner = () => {
  return (
    <section className="px-4 pb-5">
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-condensed text-[17px] font-bold tracking-[0.5px] text-foreground">
          Use Lauth
        </span>
      </div>
      <a
        href="https://go.hotmart.com/Q104596431B"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg overflow-hidden border border-border hover:border-primary/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(107,234,153,0.4)]"
      >
        <img
          src={useLauths}
          alt="Use Lauth"
          className="w-full h-auto block"
          loading="lazy"
          onError={(e) => {
            console.error("PartnerBanner image failed to load", e);
          }}
        />
      </a>
    </section>
  );
};

export default PartnerBanner;
