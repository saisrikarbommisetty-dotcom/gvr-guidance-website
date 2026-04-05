import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    name: "Sai Teja Reddy",
    role: "VLSI Engineer • 25 LPA Package",
    rating: 5,
    text: "When I first approached Dr. G. V. Ramana Reddy sir, I had no clarity about my career direction after B.Tech. Sir identified my interest in VLSI and personally guided me step-by-step — from fundamentals to advanced concepts, resume building, and interview preparation. With his continuous mentorship, I cracked a top company and secured a 25 LPA package. This transformation was completely because of his structured guidance and belief in me.",
    image: "🚀",
  },
  {
    name: "Ch Harika",
    role: "Software Engineer at Infosys",
    rating: 5,
    text: "I was completely confused about whether to go for higher studies or placements. Dr. G. V. Ramana Reddy sir analyzed my strengths and gave me a clear roadmap for placements. His mock interviews and confidence-building sessions changed my mindset. Today I am working at Infosys, and I truly credit him for shaping my journey.",
    image: "💻",
  },
  {
    name: "Vamsi Krishna",
    role: "M.Tech Student (NIT)",
    rating: 5,
    text: "Sir helped me understand my academic potential and guided me towards GATE preparation. His strategic planning and constant motivation helped me secure admission into a top NIT. His mentorship is not just academic — it transforms your thinking.",
    image: "🎓",
  },
  {
    name: "Sravani Reddy",
    role: "Data Analyst",
    rating: 5,
    text: "From not knowing where to start, to becoming a Data Analyst — my journey completely changed after taking guidance from Dr. G. V. Ramana Reddy sir. He helped me build the right skills, projects, and confidence. His mentorship is very practical and result-oriented.",
    image: "📊",
  },
  {
    name: "Karthik Kumar",
    role: "Placed at Wipro",
    rating: 5,
    text: "Sir’s training sessions and placement guidance gave me a clear direction. His way of explaining concepts and preparing students for real-world interviews is exceptional. I got placed at Wipro, and it wouldn’t have been possible without his support.",
    image: "🏢",
  },
  {
    name: "Anusha Lakshmi",
    role: "Research Scholar",
    rating: 5,
    text: "Dr. G. V. Ramana Reddy sir guided me in research and paper publications. From selecting the topic to publishing in reputed journals, his mentorship was invaluable. He pushes you to achieve more than what you think you can.",
    image: "🔬",
  },
];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students and professionals who transformed their careers with GVR Guidance
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full"></div>
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/20" />
              
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-center mb-8 text-foreground italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center">
                  <p className="font-heading font-semibold text-xl text-primary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-primary mb-12">
            More Success Stories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of successful professionals who transformed their careers with Dr. G. V. Ramana Reddy
          </p>
          <Button 
  size="lg" 
  className="bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
  asChild
>
  <a href="/contact">Start Your Journey Today</a>
</Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
