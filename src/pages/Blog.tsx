import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";


const Blog = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const categories = ["All", "Career Tips", "Skill Growth", "Motivation", "Student Stories"];
  const blogPosts = [
    {
      title: "5 Essential Skills Every Graduate Needs in 2025",
      excerpt: "Discover the top skills that employers are looking for and how to develop them effectively.",
      category: "Career Tips",
      date: "March 15, 2026",
      readTime: "5 min read",
      image: "💼",
    },
    {
      title: "How to Choose the Right Career Path After 12th",
      excerpt: "A comprehensive guide to making informed decisions about your academic and career future.",
      category: "Career Tips",
      date: "March 10, 2026",
      readTime: "7 min read",
      image: "🎓",
    },
    {
      title: "The Power of Mentorship in Career Success",
      excerpt: "Understanding how the right guidance can accelerate your professional growth.",
      category: "Motivation",
      date: "March 5, 2026",
      readTime: "4 min read",
      image: "🌟",
    },
    {
      title: "From Campus to Corporate: A Smooth Transition Guide",
      excerpt: "Tips and strategies to successfully navigate the transition from student to professional.",
      category: "Career Tips",
      date: "February 28, 2026",
      readTime: "6 min read",
      image: "🚀",
    },
    {
      title: "Building a Strong Professional Network",
      excerpt: "Learn how to create and maintain meaningful professional relationships.",
      category: "Skill Growth",
      date: "February 20, 2026",
      readTime: "5 min read",
      image: "🤝",
    },
    {
      title: "Success Story: From Confused Graduate to Tech Lead",
      excerpt: "Read how proper guidance helped Rahul achieve his dream career in just 3 years.",
      category: "Student Stories",
      date: "February 15, 2026",
      readTime: "8 min read",
      image: "⭐",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-4">
            Career Insights & Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert advice, success stories, and actionable tips for your career journey
          </p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Search articles..." 
              className="h-12"
            />
            <Button variant="default" className="h-12">Search</Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    {post.image}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="inline-block mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

     {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get the latest career tips, success stories, and guidance delivered to your inbox
          </p>

          <div className="max-w-md mx-auto flex flex-col gap-3">

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full px-4 rounded-md text-black"
              />

              <button
                onClick={() => {
                  if (email.trim() !== "") {
                    setSubscribed(true);
                    setEmail("");
                  }
                }}
                className="bg-white text-primary px-6 rounded-md font-semibold"
              >
                Subscribe
              </button>
            </div>

            {subscribed && (
              <p className="text-white bg-white/10 px-4 py-2 rounded-md text-sm">
                🎉 You're in! Career insights coming your way.
              </p>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
  