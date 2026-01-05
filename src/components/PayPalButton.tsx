import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PayPalButtonProps {
  amount: number;
  serviceName: string;
}

const PayPalButton = ({ amount, serviceName }: PayPalButtonProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayPalClick = () => {
    setIsProcessing(true);
    
    // Demo mode - show toast instead of redirecting
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Demo Mode",
        description: "PayPal payments will be connected soon. This is a preview of the checkout experience.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-muted/50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">{serviceName}</span>
          <span className="text-xl font-bold text-foreground">${amount}</span>
        </div>
      </div>

      <Button
        onClick={handlePayPalClick}
        disabled={isProcessing}
        className="w-full bg-[#0070E0] hover:bg-[#003087] text-white"
        size="lg"
      >
        {isProcessing ? (
          "Connecting to PayPal..."
        ) : (
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.769.769 0 0 1 .759-.647h6.397c2.108 0 3.691.477 4.705 1.418.953.885 1.329 2.177 1.12 3.843-.044.35-.113.716-.207 1.097-.764 3.067-2.862 4.63-6.24 4.63H9.21a.767.767 0 0 0-.758.648l-.87 5.458a.641.641 0 0 1-.633.54l.127.63z" />
              <path d="M19.049 8.123c-.025.163-.054.33-.088.5-.823 4.223-3.64 5.679-7.24 5.679h-1.83a.89.89 0 0 0-.88.754l-.937 5.943-.265 1.683a.469.469 0 0 0 .463.542h3.25a.78.78 0 0 0 .77-.66l.032-.166.61-3.87.04-.215a.78.78 0 0 1 .77-.66h.485c3.14 0 5.598-1.276 6.316-4.968.3-1.543.145-2.831-.649-3.738a3.1 3.1 0 0 0-.847-.824z" />
            </svg>
            Pay with PayPal
          </div>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        You'll be redirected to PayPal to complete your payment securely.
      </p>
    </div>
  );
};

export default PayPalButton;
