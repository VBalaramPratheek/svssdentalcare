import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  onBookingClick: () => void;
}

const Contact = ({ onBookingClick }: ContactProps) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Opposite to Vivekananda Nursing Home", "Panchayat Office Road, Avanigadda, AP 521121"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 94406 78138"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@svssdentalcare.com", "appointments@svssdentalcare.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 9:00 PM", "Sunday: 10:00 AM - 1:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or need to schedule an appointment? We're here to help.
              Reach out to us through any of the following channels.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" onClick={onBookingClick}>
              Book an Appointment
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-card">
            <div className="absolute inset-0 bg-gradient-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Sri Venkata Sathya Sai Dental Hospital
                </h3>
                <p className="text-muted-foreground mb-4">
                  Opposite to Vivekananda Nursing Home<br />
                  Panchayat Office Road, Avanigadda, AP 521121
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
