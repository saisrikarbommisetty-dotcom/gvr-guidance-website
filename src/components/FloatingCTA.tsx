import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom duration-500">
      <Button 
        variant="hero" 
        size="lg"
        className="shadow-2xl hover:shadow-accent/50 rounded-full"
        onClick={() => window.location.href = '/contact'}
      >
        <Calendar className="mr-2 h-5 w-5" />
        Book Counseling
      </Button>
    </div>
  );
};
