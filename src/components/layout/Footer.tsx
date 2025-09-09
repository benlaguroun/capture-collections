import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-32 bg-foreground text-background overflow-hidden">
      {/* Footer background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 animate-fade-in-up">
              <Link
                to="/"
                className="font-display text-3xl font-bold mb-6 block hover:text-primary/80 transition-colors"
              >
                Elena Rodriguez Photography
              </Link>
              <p className="text-background/70 mb-6 max-w-md text-lg">
                Creating timeless memories through the art of photography.
                Specializing in weddings, portraits, and commercial photography.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social, i) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-background/10 rounded-full text-background/60 hover:text-background hover:bg-primary/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="font-display text-xl font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Services", href: "/services" },
                  { name: "Shop", href: "/shop" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/60 hover:text-background transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="font-display text-xl font-semibold mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-background/70">
                    <p>123 Photography Lane</p>
                    <p>San Francisco, CA 94102</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:hello@elenarodriguez.com"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    hello@elenarodriguez.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Elena Rodriguez Photography. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
