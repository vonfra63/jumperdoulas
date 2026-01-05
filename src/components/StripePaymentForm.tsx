import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock } from "lucide-react";

interface StripePaymentFormProps {
  amount: number;
  serviceName: string;
}

const StripePaymentForm = ({ amount, serviceName }: StripePaymentFormProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Demo mode - show toast instead of processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Demo Mode",
        description: "Stripe payments will be connected soon. This is a preview of the checkout experience.",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 bg-muted/50 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">{serviceName}</span>
          <span className="text-xl font-bold text-foreground">${amount}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardName">Name on Card</Label>
        <Input id="cardName" placeholder="Jane Doe" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <div className="relative">
          <Input
            id="cardNumber"
            placeholder="4242 4242 4242 4242"
            maxLength={19}
            required
          />
          <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry">Expiry Date</Label>
          <Input id="expiry" placeholder="MM/YY" maxLength={5} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input id="cvc" placeholder="123" maxLength={4} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email for Receipt</Label>
        <Input id="email" type="email" placeholder="jane@example.com" required />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isProcessing}
      >
        {isProcessing ? (
          "Processing..."
        ) : (
          <>
            <Lock className="h-4 w-4 mr-2" />
            Pay ${amount}
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
        <Lock className="h-3 w-3" />
        Secured by Stripe. Your payment info is encrypted.
      </p>
    </form>
  );
};

export default StripePaymentForm;
