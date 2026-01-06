import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Heart, Sparkles, Brain, HandHeart, Leaf, SmilePlus, HeartHandshake } from "lucide-react";

const serviceOptions = [
  { id: "birth", name: "Birth Doula Package", description: "Complete prenatal, birth, and postpartum support" },
  { id: "postpartum", name: "Postpartum Support", description: "4 weeks of postpartum care and guidance" },
  { id: "consultation", name: "Initial Consultation", description: "Free meet & greet up to 60 minutes" },
];

const serviceHighlights = [
  { icon: Sparkles, title: "Warm & Guiding Presence", description: "A comforting companion through every step of your journey" },
  { icon: Brain, title: "Wisdom Through Experience", description: "Years of knowledge and expertise to support you confidently" },
  { icon: HeartHandshake, title: "Non-Judgmental Support", description: "A safe space where you feel heard and respected" },
  { icon: HandHeart, title: "Hands-On Nurturing", description: "Practical, caring assistance when you need it most" },
  { icon: SmilePlus, title: "Emotional Steadiness", description: "A calm, reassuring presence during intense moments" },
  { icon: Leaf, title: "Holistic Evidence-Based Approach", description: "Blending natural methods with proven practices" },
];

const Payment = () => {
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Book Your Doula Services</h1>
            <p className="text-muted-foreground text-lg">
              Secure, easy payment for the support you deserve
            </p>
          </div>

          {/* Service Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground text-center mb-8">Why Choose My Doula Services?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceHighlights.map((highlight, index) => (
                <Card key={index} className="p-4 text-center border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Select a Service</h2>
              
              <div className="space-y-3">
                {serviceOptions.map((service) => (
                  <Card
                    key={service.id}
                    className={`p-4 cursor-pointer transition-all border-2 ${
                      selectedService.id === service.id
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Payment Options Info */}
              <Card className="p-4 bg-accent/10 border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">Payment Options Available</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Medicaid & CHP+ accepted</li>
                  <li>• Insurance billing available</li>
                  <li>• Payment plans available</li>
                  <li>• Private pay with card or PayPal</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Contact me to discuss which option works best for your family.
                </p>
              </Card>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Ready to Get Started?</h2>
              
              <Card className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Schedule Your Consultation</h3>
                  <p className="text-muted-foreground">
                    Schedule your free 30-minute discovery call to discuss your needs and payment options.
                  </p>
                  <Link to="/#contact">
                    <Button size="lg" className="w-full">
                      Schedule Your Call
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Your information is always kept secure</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
