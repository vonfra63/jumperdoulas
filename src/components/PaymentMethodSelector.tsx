import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";

interface PaymentMethodSelectorProps {
  selected: "stripe" | "paypal";
  onSelect: (method: "stripe" | "paypal") => void;
}

const PaymentMethodSelector = ({ selected, onSelect }: PaymentMethodSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card
        className={cn(
          "p-4 cursor-pointer transition-all border-2",
          selected === "stripe"
            ? "border-primary bg-primary/5"
            : "border-muted hover:border-primary/50"
        )}
        onClick={() => onSelect("stripe")}
      >
        <div className="flex flex-col items-center gap-2">
          <CreditCard className="h-8 w-8 text-primary" />
          <span className="font-semibold text-foreground">Credit Card</span>
          <span className="text-xs text-muted-foreground">via Stripe</span>
        </div>
      </Card>

      <Card
        className={cn(
          "p-4 cursor-pointer transition-all border-2",
          selected === "paypal"
            ? "border-primary bg-primary/5"
            : "border-muted hover:border-primary/50"
        )}
        onClick={() => onSelect("paypal")}
      >
        <div className="flex flex-col items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.769.769 0 0 1 .759-.647h6.397c2.108 0 3.691.477 4.705 1.418.953.885 1.329 2.177 1.12 3.843-.044.35-.113.716-.207 1.097-.764 3.067-2.862 4.63-6.24 4.63H9.21a.767.767 0 0 0-.758.648l-.87 5.458a.641.641 0 0 1-.633.54l.127.63z"
              fill="#003087"
            />
            <path
              d="M19.049 8.123c-.025.163-.054.33-.088.5-.823 4.223-3.64 5.679-7.24 5.679h-1.83a.89.89 0 0 0-.88.754l-.937 5.943-.265 1.683a.469.469 0 0 0 .463.542h3.25a.78.78 0 0 0 .77-.66l.032-.166.61-3.87.04-.215a.78.78 0 0 1 .77-.66h.485c3.14 0 5.598-1.276 6.316-4.968.3-1.543.145-2.831-.649-3.738a3.1 3.1 0 0 0-.847-.824z"
              fill="#0070E0"
            />
          </svg>
          <span className="font-semibold text-foreground">PayPal</span>
          <span className="text-xs text-muted-foreground">Fast & Secure</span>
        </div>
      </Card>
    </div>
  );
};

export default PaymentMethodSelector;
