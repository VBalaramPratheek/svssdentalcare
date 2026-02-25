import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Sparkles, Wrench, Hospital, Baby, HeartPulse, type LucideIcon } from "lucide-react";

interface TreatmentsProps {
  onBookingClick: () => void;
}

interface Treatment {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const treatments: Treatment[] = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive dental check-ups, cleanings, fillings, and preventive care for the whole family.",
    features: ["Dental Exams", "Professional Cleaning", "Cavity Fillings", "Fluoride Treatment"],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic procedures for a beautiful, confident look.",
    features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Tooth Bonding"],
  },
  {
    icon: Wrench,
    title: "Orthodontics",
    description: "Straighten your teeth and correct bite issues with modern orthodontic solutions.",
    features: ["Metal Braces", "Clear Aligners", "Retainers", "Bite Correction"],
  },
  {
    icon: Hospital,
    title: "Oral Surgery",
    description: "Expert surgical procedures performed with precision and care by our specialists.",
    features: ["Wisdom Teeth", "Tooth Extraction", "Dental Implants", "Jaw Surgery"],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle and friendly dental care specially designed for children of all ages.",
    features: ["Kids Check-ups", "Sealants", "Fluoride Varnish", "Space Maintainers"],
  },
  {
    icon: HeartPulse,
    title: "Root Canal Treatment",
    description: "Save your natural teeth with our painless and effective endodontic treatments.",
    features: ["Root Canal", "Re-treatment", "Apicoectomy", "Pulp Therapy"],
  },
];

const Treatments = ({ onBookingClick }: TreatmentsProps) => {
  return (
    <section id="treatments" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Dental Treatments
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine check-ups to advanced procedures, we offer a full range of
            dental services to meet all your oral health needs.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <Card
                key={index}
                className="group bg-card hover:shadow-hover transition-all duration-300 border-border/50 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {treatment.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {treatment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {treatment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={onBookingClick}
                  >
                    Book This Treatment
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
