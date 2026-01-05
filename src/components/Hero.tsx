import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-doula.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gentle care for your journey into parenthood" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Jumper Doula Services LLC
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-serif italic">
            "Jumpstart your journey into parenthood"
          </p>
          
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Caring, loving, supportive grandmother doula services in Denver, Colorado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/payment">
              <Button size="lg" variant="accent">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-sm">
            <a 
              href="tel:+13039022830" 
              className="flex items-center gap-2 text-foreground hover:text-accent transition-smooth"
            >
              <Phone className="h-4 w-4" />
              (303) 902-2830
            </a>
            <a 
              href="mailto:jumperdoulasvcs@gmail.com" 
              className="flex items-center gap-2 text-foreground hover:text-accent transition-smooth"
            >
              <Mail className="h-4 w-4" />
              jumperdoulasvcs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
