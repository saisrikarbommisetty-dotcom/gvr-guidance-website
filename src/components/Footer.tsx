import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const youtubeLink = "https://www.youtube.com/@Careerguidane";
  const instagramLink = "https://www.instagram.com/careerguidanceandcounselling";
  return (
    
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-12 h-12">
    <img 
      src="/gvr-logo.png" 
      alt="GVR Guidance Logo" 
      className="w-full h-full object-contain"
    />
  </div>
              <div className="font-heading font-bold text-lg">GVR Guidance</div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Empowering students and professionals with personalized career guidance and mentorship.
            </p>
    

<div className="flex space-x-3">
  <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
    <Linkedin className="w-4 h-4" />
  </a>
  <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
    <Instagram className="w-4 h-4" />
  </a>
  <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
    <Youtube className="w-4 h-4" />
  </a>
  <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
    <Facebook className="w-4 h-4" />
  </a>
</div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Dr. G. V. Ramana Reddy</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/programs" className="text-white/80 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Career Counseling</li>
              <li>Placement Support</li>
              <li>Skill Development</li>
              <li>Project Mentorship</li>
              <li>Research Guidance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>gvrrguidance@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 93470 41810</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Narasaraopet, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/80">
          <p>© 2026 GVR Guidance. Mentored by Dr. G. V. Ramana Reddy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
