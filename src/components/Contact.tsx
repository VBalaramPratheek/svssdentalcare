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

          {/* Google Maps Embed */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.38!2d80.9150462!3d16.025833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49f3dd81134b15%3A0xbb0accde8f084008!2sVenkata%20Satya%20Sai%20dental%20clinic!5e1!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Venkata Sathya Sai Dental Hospital Location"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <Button variant="hero" size="sm" asChild>
                <a
                  href="https://maps.app.goo.gl/V9yKP1quoXr2rpV1A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
