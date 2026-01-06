import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-maternity.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image - positioned to showcase pregnancy */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Expecting couple embracing their journey into parenthood" 
          className="w-full h-full object-cover object-[center_80%]"
        />
      </div>
      
      {/* Softer gradient overlay blending with signature teal/violet colors */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/70 via-primary/40 to-accent/30" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-background/70 via-transparent to-background/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Jumper Doula Services LLC
          </h1>
          
          <p className="text-2xl md:text-3xl font-serif italic opacity-90 drop-shadow-md">
            "Jumpstart your journey into parenthood"
          </p>
          
          <p className="text-xl max-w-2xl mx-auto opacity-90 drop-shadow-md">
            Caring, loving, supportive grandmother doula services in Denver, Colorado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/payment">
              <Button size="lg" variant="accent">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="accent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-sm">
            <a 
              href="tel:+13039022830" 
              className="flex items-center gap-2 hover:opacity-80 transition-smooth"
            >
              <Phone className="h-4 w-4" />
              (303) 902-2830
            </a>
            <a 
              href="mailto:jumperdoulasvcs@gmail.com" 
              className="flex items-center gap-2 hover:opacity-80 transition-smooth"
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
