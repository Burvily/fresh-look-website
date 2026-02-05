import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Eleventh Dimension" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              At The Eleventh Dimension Ltd, we provide specialist project management and 
              engineering services to drive the success of complex construction, fit-out, 
              civil, mechanical, and electrical infrastructure projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+447440429875"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +44 74 4042 9875
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@theeleventhdimension.co.uk"
                  className="text-primary-foreground/70 hover:text-accent transition-colors break-all"
                >
                  info@theeleventhdimension.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} The Eleventh Dimension Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => window.location.href = "https://www.theeleventhdimension.co.uk"}
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
              >
                🇬🇧 UK
              </button>
              <button
                onClick={() => window.location.href = "https://www.theeleventhdimensionltd.com"}
                className="text-primary-foreground/50 hover:text-accent text-sm transition-colors"
              >
                🇳🇬 Nigeria
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
