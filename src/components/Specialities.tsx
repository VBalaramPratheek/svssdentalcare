import { Award, GraduationCap, Cog, Crown, Stethoscope, Zap, type LucideIcon, Clock } from "lucide-react";

interface Specialist {
  name: string;
  specialty: string;
  experience: string;
  qualification: string;
  photo?: string;
}

interface Specialty {
  title: string;
  description: string;
  icon: LucideIcon;
}

const specialists: Specialist[] = [
  {
    name: "Dr. V. B. Anand",
    specialty: "Dental Surgeon",
    experience: "24+ years",
    qualification: "BDS",
    photo: "/dr.anand.jpeg",
  },
  {
    name: "Dr. Jagadish",
    specialty: "Dental Specialist",
    experience: "4+ years",
    qualification: "MDS",
    photo: "/dr.jagadeesh.jpeg",
  },
];

const specialties: Specialty[] = [
  {
    title: "Implantology",
    description: "Advanced dental implant solutions for missing teeth with high success rates.",
    icon: Cog,
  },
  {
    title: "Prosthodontics",
    description: "Custom dentures, bridges, and crowns crafted for perfect fit and function.",
    icon: Crown,
  },
  {
    title: "Periodontics",
    description: "Expert gum disease treatment and prevention for optimal oral health.",
    icon: Stethoscope,
  },
  {
    title: "Laser Dentistry",
    description: "Minimally invasive procedures using cutting-edge laser technology.",
    icon: Zap,
  },
];

const Specialities = () => {
  return (
    <section id="specialists" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            Meet Our Specialists
          </h2>
          <div className="w-16 h-1 bg-gradient-hero mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our team of highly qualified dental professionals is dedicated to
            providing exceptional care with expertise and compassion.
          </p>
        </div>

        {/* Specialists — Side by Side Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-28">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border/60 p-8 md:p-10 text-center transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgba(249,115,22,0.2)] hover:-translate-y-1 hover:bg-gradient-accent hover:border-accent"
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-hero rounded-b-full group-hover:bg-white/40" />

              {/* Photo */}
              {specialist.photo && (
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={specialist.photo}
                    alt={specialist.name}
                    className="w-full h-full rounded-2xl object-cover shadow-lg"
                  />
                  {/* Subtle ring */}
                  <div className="absolute -inset-1.5 rounded-2xl border-2 border-primary/15 group-hover:border-white/40 transition-colors duration-500" />
                </div>
              )}

              {/* Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                {specialist.name}
              </h3>

              {/* Specialty */}
              <p className="text-primary font-semibold text-base mb-6 group-hover:text-orange-100 transition-colors duration-300">
                {specialist.specialty}
              </p>

              {/* Divider */}
              <div className="w-10 h-px bg-border mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300" />

              {/* Info Row */}
              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center gap-2.5 text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <GraduationCap className="w-4.5 h-4.5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors duration-300">{specialist.qualification}</span>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Clock className="w-4.5 h-4.5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors duration-300">{specialist.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Specialities;
