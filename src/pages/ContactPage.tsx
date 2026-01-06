import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, ArrowLeft, Heart, Clock, MessageCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dueDate: "",
    serviceInterest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
    });
    
    setFormData({ name: "", email: "", phone: "", dueDate: "", serviceInterest: "", message: "" });
  };

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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Connect!</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'd love to hear from you. Whether you're expecting, planning, or just curious about doula services, 
              reach out and let's start a conversation about your journey.
            </p>
          </div>

          {/* Why Reach Out Section */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">I respond to all inquiries within 48 hours</p>
            </Card>
            <Card className="p-6 text-center border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No Pressure</h3>
              <p className="text-sm text-muted-foreground">Just a friendly chat to see if we're a good fit</p>
            </Card>
            <Card className="p-6 text-center border-primary/10 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Free Meet & Greet</h3>
              <p className="text-sm text-muted-foreground">Up to 60 minutes to discuss your needs</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a 
                        href="tel:+13039022830" 
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        (303) 902-2830
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Monday to Friday 9:00-17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a 
                        href="mailto:jumperdoulasvcs@gmail.com" 
                        className="text-muted-foreground hover:text-accent transition-smooth break-all"
                      >
                        jumperdoulasvcs@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">I'll respond within 48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Service Area</p>
                      <p className="text-muted-foreground">Denver, Colorado & Surrounding Areas</p>
                      <p className="text-sm text-muted-foreground mt-1">In-home visits available</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 gradient-warm border-0">
                <h4 className="font-semibold text-foreground mb-3">Ready to begin your journey?</h4>
                <p className="text-foreground/90 mb-4">
                  I can be your doula! Reach out today to discuss your needs and how I can support you through your journey into parenthood.
                </p>
                <p className="text-sm text-foreground/80 font-medium">
                  ✓ Medicaid Accepted<br/>
                  ✓ CHP+ Accepted<br/>
                  ✓ Insurance Billing Available<br/>
                  ✓ Private Pay Options
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h2>
              <Card className="p-8 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(303) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dueDate" className="block text-sm font-medium text-foreground mb-2">
                        Due Date (if applicable)
                      </label>
                      <Input
                        id="dueDate"
                        type="text"
                        value={formData.dueDate}
                        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                        placeholder="MM/YYYY"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <Input
                        id="serviceInterest"
                        type="text"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        placeholder="Birth Doula, Postpartum, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell Me About Your Journey *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a bit about yourself, your pregnancy journey, and what kind of support you're looking for..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" variant="accent" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    I'll respond within 48 hours to schedule your free meet & greet!
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;