import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CodeHeading } from "@/components/CodeHeading";
import { StatChip } from "@/components/StatChip";
import { ProgramCard } from "@/components/ProgramCard";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code, Sparkles, Trophy, Users, Heart, Zap } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("You're subscribed! Welcome to the community.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-slide-up">
            <div className="inline-block mb-6">
              <span className="font-mono text-primary text-sm md:text-base">{'> execute("mission.js")'}</span>
            </div>
            <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering students to <span className="text-primary">code</span> with purpose
              <span className="animate-caret text-primary">|</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Free coding education, real-world skills, and a community that believes in your potential. 
              Join 250+ learners building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-lg px-8"
              >
                {'> join()'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono text-lg px-8"
              >
                {'[ volunteer ]'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono text-lg px-8"
              >
                {'{ donate }'}
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <StatChip value="250+" label="Learners" />
              <StatChip value="2" label="States" />
              <StatChip value="24hr" label="Hackathons" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CodeHeading prefix="//" className="mb-8 text-center">about</CodeHeading>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                At <span className="text-primary font-mono">Coding for a Change</span>, we believe that access to computer science 
                education shouldn't be a privilege—it should be a right. We're breaking down barriers and building pathways 
                for students to discover the transformative power of code.
              </p>
              <p className="text-lg">
                Founded with a mission to democratize tech education, we provide <span className="text-primary">free</span> tutoring, 
                workshops, and hackathons that don't just teach syntax—they teach students to think, create, and solve real-world problems.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-background rounded-lg border border-border">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-mono text-xl font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">Building a supportive network of learners and mentors</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg border border-border">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-mono text-xl font-semibold mb-2">Purpose</h3>
                  <p className="text-sm text-muted-foreground">Coding with intention to make a real difference</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg border border-border">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-mono text-xl font-semibold mb-2">Growth</h3>
                  <p className="text-sm text-muted-foreground">Continuous learning and skill development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <CodeHeading prefix="/*" className="mb-4 text-center">programs</CodeHeading>
          <p className="text-center text-muted-foreground mb-12 font-mono">*/</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProgramCard
              icon={<Code className="w-12 h-12" />}
              title="Tutoring"
              description="One-on-one and small group mentorship in Python, web development, and AI tools."
              features={[
                "Personalized learning paths",
                "Expert mentors",
                "Project-based curriculum",
                "Flexible scheduling"
              ]}
            />
            <ProgramCard
              icon={<Sparkles className="w-12 h-12" />}
              title="AI_Workshops"
              description="Hands-on sessions teaching students to build websites and projects using AI."
              features={[
                "Practical AI applications",
                "Build real projects",
                "Modern tools & frameworks",
                "Collaborative learning"
              ]}
            />
            <ProgramCard
              icon={<Trophy className="w-12 h-12" />}
              title="Hackathons"
              description="24-hour coding marathons with prizes, mentorship, and community."
              features={[
                "Team collaboration",
                "Cash prizes",
                "Industry mentors",
                "Networking opportunities"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <CodeHeading prefix="<" className="mb-4 text-center">impact</CodeHeading>
          <p className="text-center text-muted-foreground mb-12 font-mono">/&gt;</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <StatChip value="250+" label="Students Reached" />
              <StatChip value="1000+" label="Hours Taught" />
              <StatChip value="50+" label="Projects Built" />
              <StatChip value="2" label="States Active" />
            </div>

            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground italic mb-2">
                  "Coding for a Change gave me the skills and confidence to build my first app. 
                  The mentors truly care about your success."
                </p>
                <p className="text-sm text-primary font-mono">— Sarah M., Student</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground italic mb-2">
                  "The hackathon was incredible! I learned more in 24 hours than I thought possible 
                  and made friends who share my passion for tech."
                </p>
                <p className="text-sm text-primary font-mono">— James L., Hackathon Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <CodeHeading prefix="#" className="mb-4 text-center">upcoming_events</CodeHeading>
          <p className="text-center text-muted-foreground mb-12 font-mono">{'{ schedule }'}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <EventCard
              title="AI Workshop: Build with GPT"
              date="March 15, 2025"
              time="2:00 PM - 5:00 PM"
              location="Virtual"
              description="Learn to integrate AI into your projects. Build a chatbot from scratch using modern APIs."
            />
            <EventCard
              title="Spring Hackathon 2025"
              date="April 20-21, 2025"
              time="24 hours"
              location="California"
              description="24-hour coding marathon with $5,000 in prizes. Teams of 2-4. All skill levels welcome!"
            />
            <EventCard
              title="Python Fundamentals"
              date="March 22, 2025"
              time="3:00 PM - 6:00 PM"
              location="Virtual"
              description="Perfect for beginners! Learn Python basics, variables, loops, and build your first program."
            />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <CodeHeading className="mb-4 text-center">get_involved</CodeHeading>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Deploy your potential. Commit to learning. Merge with our community.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Volunteer Form */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-mono text-2xl font-semibold mb-4 text-primary">{'> volunteer()'}</h3>
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <Input placeholder="Name" className="bg-card" />
                <Input type="email" placeholder="Email" className="bg-card" />
                <Input placeholder="Skills (e.g., Python, mentoring)" className="bg-card" />
                <Textarea placeholder="Why do you want to volunteer?" className="bg-card" rows={4} />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-mono">
                  Submit Application
                </Button>
              </form>
            </div>

            {/* Donate + Newsletter */}
            <div className="space-y-6">
              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-mono text-2xl font-semibold mb-4 text-primary">{'{ donate }'}</h3>
                <p className="text-muted-foreground mb-6">
                  Your donation helps us provide free education, equipment, and opportunities to students who need it most.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 font-mono">
                  Donate Now
                </Button>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-mono text-2xl font-semibold mb-4 text-primary">['Newsletter']</h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated on events, success stories, and opportunities.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input type="email" placeholder="your@email.com" className="bg-card" />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-mono">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <CodeHeading prefix="//" className="mb-4 text-center">contact</CodeHeading>
          <p className="text-center text-muted-foreground mb-12 font-mono">{'console.log("Get in touch")'}</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-background" />
                  <Input type="email" placeholder="Email" className="bg-background" />
                </div>
                <Input placeholder="Subject" className="bg-background" />
                <Textarea placeholder="Your message" className="bg-background" rows={6} />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-mono text-lg">
                  {'> send_message()'}
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-2">Or reach us directly:</p>
                <a href="mailto:contact@codingforachangenpo.com" className="text-primary font-mono hover:underline">
                  contact@codingforachangenpo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
