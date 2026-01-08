import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Briefcase, CreditCard, Heart, ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface SupportDialogProps {
  children: ReactNode;
}

const SupportDialog = ({ children }: SupportDialogProps) => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Customer Support",
      description: "Get help with your account, features, or technical issues",
      action: "Contact via Extension"
    },
    {
      icon: Briefcase,
      title: "Business Inquiries",
      description: "Partnership opportunities, enterprise solutions, or bulk licensing",
      action: "Contact via Extension"
    },
    {
      icon: CreditCard,
      title: "Subscription Help",
      description: "Billing questions, plan upgrades, or refund requests",
      action: "Contact via Extension"
    },
    {
      icon: Heart,
      title: "Sponsorship",
      description: "Interested in sponsoring TabKeep or collaborating with us?",
      action: "Contact via Extension"
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl sm:text-2xl">Contact Support</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            For the fastest response, please reach out through the TabKeep extension.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
          {supportOptions.map((option) => (
            <div
              key={option.title}
              className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-muted/50 border border-border hover:bg-muted transition-colors"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <option.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{option.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/10 rounded-lg sm:rounded-xl border border-primary/20">
          <p className="text-xs sm:text-sm text-foreground font-medium mb-2">
            Contact us through the extension
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-xs sm:text-sm transition-colors"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            Open TabKeep Extension Page
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportDialog;
