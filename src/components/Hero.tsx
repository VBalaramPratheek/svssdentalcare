import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Clock, ChevronDown } from "lucide-react";

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: Sparkles, text: "Advanced Technology" },
    { icon: Shield, text: "Expert Specialists" },
    { icon: Clock, text: "Flexible Timings" },
  ];

  const hospitalName = "Sri Venkata Sathya Sai";
  const hospitalType = "Dental Hospital";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hospital-bg.png"
          alt="Sri Venkata Sathya Sai Dental Hospital"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Teal accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-particle hero-particle-1" />
        <div className="hero-particle hero-particle-2" />
        <div className="hero-particle hero-particle-3" />
        <div className="hero-particle hero-particle-4" />
        <div className="hero-particle hero-particle-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Subtitle badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in-scale">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Excellence in Dental Care
          </div>

          {/* Devotional Text */}
          <div className="text-center mb-6 animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
            <p className="text-white/90 text-sm md:text-base font-medium tracking-wide italic">
              Om Shri Addhanki Nancharamma Devatayai Namah
            </p>
            <p className="text-white/90 text-sm md:text-base font-medium tracking-wide italic mt-1">
              Om Sri Sairam
            </p>
          </div>

          {/* Main Hospital Name */}
          <h1 className="mb-4">
            <span className="hero-title-line block">
              {hospitalName.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="hero-word inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mr-3 md:mr-4"
                  style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="hero-title-line block mt-2 md:mt-4">
              <span
                className="hero-word inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-hero-light"
                style={{ animationDelay: "1.0s" }}
              >
                {hospitalType}
              </span>
            </span>
          </h1>

          {/* Shimmer line */}
          <div className="mx-auto mt-6 mb-8 w-32 md:w-48 h-0.5 hero-shimmer rounded-full" />

          {/* Tagline */}
          <p
            className="hero-tagline text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            style={{ animationDelay: "1.3s" }}
          >
            Comprehensive dental care with state-of-the-art technology
            and compassionate specialists. Your smile is our priority.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="hero-feature-badge flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white"
                style={{ animationDelay: `${index * 0.15 + 1.5}s` }}
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 hero-cta"
            style={{ animationDelay: "2.0s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={onBookingClick}
              className="hero-cta-primary relative overflow-hidden"
            >
              <span className="relative z-10">Book Your Appointment</span>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              asChild
              className="border border-white/30 text-white bg-transparent hover:bg-transparent hover:text-white"
            >
              <a href="#specialities">Meet Our Specialists</a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 gap-8 max-w-sm mx-auto">
            {[
              { value: "24+", label: "Years Experience" },
              { value: "10K+", label: "Happy Patients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="hero-stat text-center"
                style={{ animationDelay: `${index * 0.2 + 2.2}s` }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#treatments" className="text-white/40 hover:text-white/70 transition-colors">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
