import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Business Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif">Jumper Doula Services LLC</h3>
              <p className="text-background/80">
                Caring, loving, supportive doula services in Denver, Colorado
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/jumperfranklin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/franklin.yvonne/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/yvonne-franklin-922a2211/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-smooth"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <a href="#about" className="text-background/80 hover:text-background transition-smooth">
                  About Yvonne
                </a>
                <a href="#services" className="text-background/80 hover:text-background transition-smooth">
                  Services
                </a>
                <a href="#resources" className="text-background/80 hover:text-background transition-smooth">
                  Resources
                </a>
                <a href="#contact" className="text-background/80 hover:text-background transition-smooth">
                  Contact
                </a>
                <Link to="/payment" className="text-background/80 hover:text-background transition-smooth">
                  Book Now
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-background/80">
                <p>
                  <a href="tel:+13039022830" className="hover:text-background transition-smooth">
                    (303) 902-2830
                  </a>
                </p>
                <p>
                  <a href="mailto:jumperdoulasvcs@gmail.com" className="hover:text-background transition-smooth break-all">
                    jumperdoulasvcs@gmail.com
                  </a>
                </p>
                <p>Denver, Colorado</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm">
              © {currentYear} Jumper Doula Services LLC. All rights reserved.
            </p>
            <p className="text-background/80 text-sm flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-accent" fill="currentColor" /> for families in Denver
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
