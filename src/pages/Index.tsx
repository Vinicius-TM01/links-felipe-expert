import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import AboutSection from "@/components/AboutSection";
import PartnerBanner from "@/components/PartnerBanner";

import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[9998]"
        style={{
          width: 0,
          animation: "progressLoad 3s ease forwards",
          boxShadow: "0 0 8px hsl(142 75% 67%)",
        }}
      />

      <div
        className="max-w-[480px] mx-auto min-h-screen"
        style={{ opacity: 0, animation: "mainReveal 0.8s ease 3.4s forwards" }}
      >
        <Header />
        <HeroSection />
        <div className="h-8 relative z-[1] -mt-8" style={{ background: "linear-gradient(to bottom, transparent, hsl(150 10% 4%))" }} />

        <ServicesCarousel />
        <div className="h-px bg-border mx-4 mb-5" />

        <PartnerBanner />
        <div className="h-px bg-border mx-4 mb-5" />

        <AboutSection />
        <div className="h-px bg-border mx-4 mb-5" />

        
        <Footer />
      </div>
    </>
  );
};

export default Index;
