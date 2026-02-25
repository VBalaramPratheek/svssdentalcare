import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Specialities", href: "#specialities" },
    { name: "Contact", href: "#contact" },
  ];

  const treatments = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Dental Implants",
    "Root Canal",
    "Pediatric Dentistry",
  ];

  return (
    <footer className="bg-foreground text-background/90 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-background">Sri Venkata Sathya Sai</h3>
                <p className="text-sm text-background/60">Dental Hospital</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Providing comprehensive dental care with state-of-the-art technology
              and compassionate specialists for over 24 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">Our Treatments</h4>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <span className="text-sm text-background/70">
                    {treatment}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/70">
                  Opposite to Vivekananda Nursing Home<br />
                  Panchayat Office Road, Avanigadda, AP 521121
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-background/70">+91 94406 78138</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-background/70">info@svssdentalcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/60">
            © {currentYear} Sri Venkata Sathya Sai Dental Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
