import { Award, Target, Eye, Heart } from "lucide-react";
import mentorImage from "@/assets/mentor-placeholder.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
         <h1 className="font-heading font-bold text-4xl md:text-6xl text-center mb-4">
  About{" "}
  <span className="text-primary relative inline-block">
    Dr. G. V. Ramana Reddy
    <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
  </span>
</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Dedicated educator and mentor with over a decade of experience in shaping successful careers
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-in fade-in slide-in-from-left duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3"></div>
              <img
                src={mentorImage}
                alt="Dr. G. V. Ramana Reddy"
                className="relative rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                A Journey of Empowerment
              </h2>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
  15+ Years Experience • 5000+ Students Mentored
</div>
              <div className="max-w-none text-muted-foreground text-lg leading-relaxed space-y-4">
                <p>
  <span className="font-semibold text-primary">
    Dr. G. V. Ramana Reddy
  </span>{" "}
  is an experienced educator and career mentor with over{" "}
  <span className="font-semibold">15+ years</span> of experience in shaping successful careers.
</p>
                <p>
                  With a deep understanding of the challenges faced by today's youth and professionals, Dr. G. V. Ramana Reddy has 
                  successfully mentored over 5,000 students, supported 100+ placements, and conducted numerous workshops 
                  and Faculty Development Programs (FDPs).
                </p>
                <p>
                  His approach combines academic excellence with practical industry insights, ensuring that every individual 
                  receives personalized guidance tailored to their unique strengths and goals.
                </p>
                <p className="font-medium text-primary">
  His contributions span patents, research publications, leadership roles, and extensive participation in global academic and professional forums.
</p>
               
                 
                
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Achievements Section */}
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    
    <div className="text-center mb-12">
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
        Professional Achievements
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        A proven track record of academic excellence, leadership, and continuous learning
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">15+</h3>
        <p className="text-sm text-muted-foreground mt-2">Years Teaching Experience</p>
      </div>

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">6</h3>
        <p className="text-sm text-muted-foreground mt-2">Patents Published</p>
      </div>

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">6 Years</h3>
        <p className="text-sm text-muted-foreground mt-2">HOD Experience</p>
      </div>

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">200+</h3>
        <p className="text-sm text-muted-foreground mt-2">FDP Certifications</p>
      </div>

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">500+</h3>
        <p className="text-sm text-muted-foreground mt-2">Webinars & Seminars</p>
      </div>

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">100+</h3>
        <p className="text-sm text-muted-foreground mt-2">Workshops Certifications</p>
      </div>

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">500+</h3>
        <p className="text-sm text-muted-foreground mt-2">Quiz Certifications</p>
      </div>

      <div className="bg-card p-6 rounded-2xl shadow hover:shadow-xl transition-all">
        <h3 className="text-3xl font-bold text-primary">UGC • Scopus • SCI</h3>
        <p className="text-sm text-muted-foreground mt-2">Research Publications</p>
      </div>

    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Mission</h3>
              <p className="text-muted-foreground">
                To empower every individual with the right guidance, skills, and confidence to achieve their 
                career goals and create a meaningful impact in their chosen field.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted career mentorship platform, transforming lives through personalized 
                guidance and creating a community of successful professionals.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary">Core Values</h3>
              <p className="text-muted-foreground">
                Integrity, personalization, excellence, empowerment, and continuous growth form the foundation 
                of every interaction and guidance session at GVR Guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Awards & Recognition */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12">
      <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">
        Awards & Recognition
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Recognized for excellence in education, research, and professional contribution
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <img
          src="/award1.jpg"
          alt="Guinness World Record Participation"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="font-semibold text-lg text-primary mb-2">
            Guinness World Record Contribution
          </h3>
          <p className="text-sm text-muted-foreground">
            Contributed to a national record for the highest number of insurance policies sold within 24 hours across India.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <img
          src="/award2.jpg"
          alt="IEEE Membership"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="font-semibold text-lg text-primary mb-2">
            IEEE Professional Membership
          </h3>
          <p className="text-sm text-muted-foreground">
            Active member of IEEE, contributing to global technical communities and continuous professional development.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <img
          src="/award3.jpg"
          alt="Academic Excellence Award"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="font-semibold text-lg text-primary mb-2">
            Academic Excellence Award
          </h3>
          <p className="text-sm text-muted-foreground">
            Awarded for outstanding academic performance and achieving 100% results in Computer Networks and DL&CO Courses.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
    </div>
  );
};

export default About;
