import { 
  Target, 
  Briefcase, 
  TrendingUp, 
  FileText, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Award 
} from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Career Counseling",
      description: "Comprehensive career guidance to help you identify the right path based on your strengths, interests, and market opportunities.",
    },
    {
      icon: Briefcase,
      title: "Placement Support",
      description: "End-to-end support for job placements including resume building, interview preparation, and connecting with recruiters.",
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Curated courses and training programs to help you develop in-demand technical and soft skills for career success.",
    },
    {
      icon: FileText,
      title: "Research & Publication",
      description: "Expert guidance for research projects, paper writing, and getting published in reputed journals and conferences.",
    },
    {
      icon: Lightbulb,
      title: "Project Mentorship",
      description: "Comprehensive support for mini and major projects with industry-relevant topics and hands-on guidance.",
    },
    {
      icon: Users,
      title: "FDPs & Workshops",
      description: "Organizing Faculty Development Programs and professional workshops for academic institutions and corporate training.",
    },
    {
      icon: BookOpen,
      title: "Resume Building",
      description: "Professional resume writing services that highlight your strengths and make you stand out to recruiters.",
    },
    {
      icon: Award,
      title: "Mock Interviews",
      description: "Realistic interview simulations with detailed feedback to boost your confidence and performance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-4">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive career guidance and mentorship services designed to support you at every stage of your professional journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="animate-in fade-in slide-in-from-bottom duration-500" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ServiceCard {...service} link="/contact" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start your career transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Book a Session", desc: "Schedule your free consultation" },
              { step: "2", title: "Assessment", desc: "We analyze your goals and strengths" },
              { step: "3", title: "Custom Plan", desc: "Receive your personalized roadmap" },
              { step: "4", title: "Ongoing Support", desc: "Continuous guidance until success" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-heading font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Book your free consultation today and take the first step towards your dream career
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-white text-primary font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book Free Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
