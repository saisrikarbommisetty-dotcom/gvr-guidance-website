import { GraduationCap, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary mb-4">
            Programs & Offerings
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored programs for students, graduates, and professionals at every career stage
          </p>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="students" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="students" className="text-lg">School & College</TabsTrigger>
              <TabsTrigger value="graduates" className="text-lg">Graduates</TabsTrigger>
              <TabsTrigger value="professionals" className="text-lg">Professionals</TabsTrigger>
            </TabsList>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-8">
              <div className="text-center mb-8">
                <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="font-heading font-bold text-3xl text-primary mb-2">For School & College Students</h2>
                <p className="text-muted-foreground text-lg">Building strong foundations for successful careers</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Stream Selection Guidance</CardTitle>
                    <CardDescription>Choose the right academic path after 10th/12th grade</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Aptitude assessment and interest mapping</li>
                      <li>• Career options based on stream selection</li>
                      <li>• College and course recommendations</li>
                      <li>• Future scope and opportunities</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Study Planning & Time Management</CardTitle>
                    <CardDescription>Develop effective study habits and goal-setting skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Personalized study schedules</li>
                      <li>• Exam preparation strategies</li>
                      <li>• Balancing academics and extracurriculars</li>
                      <li>• Building competitive profiles</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Graduates Tab */}
            <TabsContent value="graduates" className="space-y-8">
              <div className="text-center mb-8">
                <Briefcase className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h2 className="font-heading font-bold text-3xl text-primary mb-2">For Fresh Graduates</h2>
                <p className="text-muted-foreground text-lg">Bridging the gap between education and employment</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Internship & Entry-Level Guidance</CardTitle>
                    <CardDescription>Secure valuable work experience and opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Finding the right internship programs</li>
                      <li>• Application and portfolio building</li>
                      <li>• Interview preparation for entry roles</li>
                      <li>• Making the most of internships</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Career Transition Support</CardTitle>
                    <CardDescription>Navigate career changes with confidence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Evaluating career change options</li>
                      <li>• Skill gap analysis and upskilling</li>
                      <li>• Industry transition strategies</li>
                      <li>• Professional network building</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Placement Preparation</CardTitle>
                    <CardDescription>Get job-ready with comprehensive training</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Campus placement strategies</li>
                      <li>• Technical and HR interview prep</li>
                      <li>• Group discussion techniques</li>
                      <li>• Salary negotiation skills</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Professionals Tab */}
            <TabsContent value="professionals" className="space-y-8">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                <h2 className="font-heading font-bold text-3xl text-primary mb-2">For Working Professionals</h2>
                <p className="text-muted-foreground text-lg">Advance your career and achieve leadership goals</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Career Growth Strategy</CardTitle>
                    <CardDescription>Plan your path to leadership positions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Career progression roadmap</li>
                      <li>• Leadership skill development</li>
                      <li>• Personal branding strategies</li>
                      <li>• Promotion preparation</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="accent" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Research & Publications</CardTitle>
                    <CardDescription>Enhance your academic and professional profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Research topic selection</li>
                      <li>• Paper writing and structuring</li>
                      <li>• Journal and conference selection</li>
                      <li>• Publication process guidance</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="accent" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="font-heading">Faculty Development Programs</CardTitle>
                    <CardDescription>Professional development for educators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Teaching methodology workshops</li>
                      <li>• Research and publication guidance</li>
                      <li>• Career advancement for faculty</li>
                      <li>• Industry-academia collaboration</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="accent" className="w-full" asChild>
                      <a href="/contact">Book Session</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Find Your Perfect Program
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Not sure which program is right for you? Let's discuss your goals in a free consultation
          </p>
         <Button 
  size="lg" 
  className="bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-300"
  asChild
>
  <a href="/contact">Schedule Free Consultation</a>
</Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
