import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const taglines = [
  "Guiding You Beyond Limits 🚀",
  "Your Career. Your Growth. Our Guidance 💡",
  "From Confusion to Clarity — with Dr.G.V.Ramana Reddy 🌟",
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Programs", path: "/programs" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
  <div className="w-12 h-12">
    <img 
      src="/gvr-logo.png" 
      alt="GVR Guidance Logo" 
      className="w-full h-full object-contain"
    />
  </div>
  <div>
    <div className="font-heading font-bold text-xl text-primary">GVR Guidance</div>
    <div className="text-xs text-muted-foreground">Career Mentorship</div>
  </div>
</Link>


          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-primary via-secondary to-accent py-2 text-center overflow-hidden">
        <p className="text-white font-medium animate-in fade-in duration-500" key={currentTagline}>
          {taglines[currentTagline]}
        </p>
      </div>
    </header>
  );
};
