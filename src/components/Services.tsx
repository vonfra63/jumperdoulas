import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Calendar } from "lucide-react";
import diverseCoupleImage from "@/assets/diverse-couple-expecting.png";
import familyHandsImage from "@/assets/family-hands-baby-feet.png";

const Services = () => {
  const doServices = [
    "Prenatal, delivery, postpartum, IVF, adoption, and surrogate support",
    "Breastfeeding support",
    "Mother/newborn care",
    "Companion care",
    "Hypnobirthing",
    "Support education",
    "Sleep, exercise, feeding, and birth plans",
    "Help with meal prep",
    "Light massage",
    "Active listening, suggestions, encouraging motivation",
    "Providing resources",
    "Watching for red flags"
  ];

  const doNot = [
    "Diagnose medical conditions",
    "Treat medical conditions",
    "Perform medical interventions"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Doula Services & Support
            </h2>
            <p className="text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
              Mental, physical, and emotional support throughout your pregnancy journey
            </p>
          </div>

          {/* Diverse families feature image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={diverseCoupleImage} 
                alt="Expectant couple celebrating their pregnancy journey" 
                className="w-full h-72 object-cover object-top brightness-95 contrast-95 saturate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What Doulas Provide */}
            <Card className="p-8 shadow-card border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">What I Provide</h3>
                </div>
                
                <ul className="space-y-3">
                  {doServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* What Doulas Don't Do */}
            <Card className="p-8 shadow-card border-muted">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <XCircle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Professional Boundaries</h3>
                </div>
                
                <p className="text-foreground">
                  As a professional doula, I work alongside your medical team to provide continuous support. I do not:
                </p>
                
                <ul className="space-y-3">
                  {doNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground italic pt-4">
                  I provide support that complements your medical care, ensuring you feel empowered and informed throughout your journey.
                </p>
              </div>
            </Card>
          </div>

          {/* Family hands image - symbolizing community support */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={familyHandsImage} 
                alt="Family hands cradling baby feet - symbol of community and support" 
                className="w-full h-80 object-cover brightness-100 contrast-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/15 via-transparent to-primary/10 pointer-events-none" />
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-accent/10 rounded-2xl p-8 md:p-12 text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Payment Options</h3>
            <p className="text-xl text-foreground">
              I am now accepting:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-accent">
              <span className="px-6 py-3 bg-card rounded-lg shadow-soft">Medicaid</span>
              <span className="px-6 py-3 bg-card rounded-lg shadow-soft">CHP+</span>
              <span className="px-6 py-3 bg-card rounded-lg shadow-soft">Insurance</span>
              <span className="px-6 py-3 bg-card rounded-lg shadow-soft">Private Pay</span>
            </div>
            <p className="text-muted-foreground">
              Contact me to discuss payment options and find the best plan for your family
            </p>
            <Link to="/payment">
              <Button size="lg" variant="accent" className="mt-4">
                <Calendar className="mr-2 h-5 w-5" />
                Book & Pay Online
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
