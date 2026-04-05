import { Target, Users, Award, BookOpen, Briefcase, GraduationCap, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCounter } from "@/components/StatCounter";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const services = [
    {
      icon: Target,
      title: "Career Planning",
      description: "Get personalized guidance to chart your career path with clarity and confidence.",
    },
    {
      icon: BookOpen,
      title: "Academic Roadmaps",
      description: "Strategic planning for your academic journey from school to professional success.",
    },
    {
      icon: Briefcase,
      title: "Interview Readiness",
      description: "Master interview skills with mock sessions and expert feedback from industry veterans.",
    },
    {
      icon: TrendingUp,
      title: "Skill Mentorship",
      description: "Develop in-demand skills with personalized mentorship and hands-on guidance.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-[center_top] md:bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Discover Your True Path<br />To Success
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
  Expert career mentorship and life guidance by{" "}
  <span className="font-bold text-white underline underline-offset-4 decoration-accent">
    Dr. G. V. Ramana Reddy
  </span>
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button variant="hero" size="lg" className="text-lg" asChild>
              <a href="/contact">Start Your Journey</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/contact">Book Free Session</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-in fade-in slide-in-from-bottom duration-500">
              <StatCounter end={10} suffix="+" />
              <p className="text-lg mt-2 text-white/90">Years Experience</p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-100">
              <StatCounter end={5000} suffix="+" />
              <p className="text-lg mt-2 text-white/90">Students Mentored</p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              <StatCounter end={100} suffix="+" />
              <p className="text-lg mt-2 text-white/90">Placements Supported</p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-300">
              <StatCounter end={50} suffix="+" />
              <p className="text-lg mt-2 text-white/90">Workshops Conducted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
              Why Choose GVR Guidance?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience personalized mentorship that transforms careers and lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Personalized Guidance</h3>
              <p className="text-muted-foreground">Tailored career strategies designed specifically for your unique journey</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Real Industry Insights</h3>
              <p className="text-muted-foreground">Learn from years of practical experience and industry connections</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Trusted Mentor</h3>
              <p className="text-muted-foreground">Proven track record of guiding thousands to successful careers</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Long-Term Vision</h3>
              <p className="text-muted-foreground">Strategic planning for sustained career growth and success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for every stage of your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    
    <div className="text-center mb-12">
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
        Learn Directly from Dr. G. V. Ramana Reddy
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Real career insights, guidance, and strategies — straight from experience
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/EkjgjfXmlIM"
        title="YouTube video 1"
        allowFullScreen
      ></iframe>

      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/gPmkdlhWzAI?si=wTE7pqIB-xw4z7gj"
        title="YouTube video 2"
        allowFullScreen
      ></iframe>

      <iframe
        className="w-full h-64 rounded-xl shadow-lg"
        src="https://www.youtube.com/embed/Gz6kkTYUQ8g?si=U_dmo8lf5HdrdOtm"
        title="YouTube video 3"
        allowFullScreen
      ></iframe>

    </div>

    <div className="text-center mt-10">
      <a 
        href="https://www.youtube.com/@Careerguidane" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
      >
        Visit YouTube Channel
      </a>
    </div>

  </div>
</section>

      {/* Motivational Quote */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-4xl font-heading font-medium italic max-w-4xl mx-auto">
            "Right Guidance at the Right Time Changes Everything."
          </blockquote>
          <p className="mt-6 text-xl text-white/90">— Dr. G. V. Ramana Reddy</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards your dream career with expert guidance from Dr. Reddy
          </p>
          <Button variant="hero" size="lg" className="text-lg" asChild>
            <a href="/contact">Schedule Your Free Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
