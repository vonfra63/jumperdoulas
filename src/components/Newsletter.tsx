import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send to a backend/email service
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to my newsletter. You'll receive updates and helpful information soon!",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Stay Connected
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Subscribe to receive helpful tips, resources, and updates about maternal health and doula services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground border-0 flex-1"
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/80">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
