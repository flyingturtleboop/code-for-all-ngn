import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CodeHeading } from "@/components/CodeHeading";
import { StatChip } from "@/components/StatChip";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Code, BookOpen, Trophy, Users, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import partnerCodeOrg from "@/assets/partner-new-codeorg.png";
import partnerProminds from "@/assets/partner-new-prominds.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-slide-up">
            <div className="inline-block">
              <span className="text-primary text-sm font-mono">{'> initialize.mission()'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono">
              Empowering Students to{" "}
              <span className="text-primary relative">
                Code
                <span className="animate-caret">|</span>
              </span>
              {" "}with Purpose
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap in computer science education through tutoring, workshops, and hackathons
            </p>
            
            <p className="text-lg text-muted-foreground font-mono">
              Serving students across Georgia, Illinois, and New Jersey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/events">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-lg">
                  {'[ View Events ]'}
                </Button>
              </Link>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="font-mono text-lg border-primary text-primary hover:bg-primary/10"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScN-KPr-OFs7kpsYubGlRpCmKNLjhWtu43rYDnwldQ0MGqzjA/viewform" target="_blank" rel="noopener noreferrer">
                  {'{ Volunteer With Us }'}
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <StatChip label="Students Reached" value="250+" />
              <StatChip label="States" value="2" />
              <StatChip label="Programs" value="3" />
              <StatChip label="Workshops" value="12+" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <CodeHeading prefix="//">About Our Mission</CodeHeading>
              <p className="text-lg text-muted-foreground">
                Coding for a Change is dedicated to making computer science education accessible to all students, 
                regardless of their background or resources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <Users className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-mono text-xl font-bold">Community</h3>
                <p className="text-muted-foreground">
                  Building a supportive network of students, mentors, and educators passionate about technology.
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-mono text-xl font-bold">Purpose</h3>
                <p className="text-muted-foreground">
                  Empowering students to use code as a tool for positive change in their communities.
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <TrendingUp className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-mono text-xl font-bold">Growth</h3>
                <p className="text-muted-foreground">
                  Fostering continuous learning and skill development through hands-on experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <CodeHeading prefix="/*">Our Programs</CodeHeading>
              <p className="text-lg text-muted-foreground">
                Comprehensive learning opportunities designed to meet students at every skill level
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ProgramCard
                icon={<BookOpen className="w-10 h-10" />}
                title="Tutoring"
                description="Personalized one-on-one and group tutoring sessions covering Python, web development, and AI tools."
                features={[
                  "Python fundamentals & advanced concepts",
                  "Web development (HTML, CSS, JavaScript)",
                  "AI tools and applications",
                  "Project-based learning"
                ]}
              />
              
              <ProgramCard
                icon={<Code className="w-10 h-10" />}
                title="Workshops"
                description="We host personal branding workshops, AI workshops, and more."
                features={[
                  "AI-assisted web development",
                  "Personal branding sessions",
                  "Hands-on project creation",
                  "Best practices and deployment"
                ]}
              />
              
              <ProgramCard
                icon={<Trophy className="w-10 h-10" />}
                title="Hackathons"
                description="24-hour collaborative coding events where students build projects, compete for prizes, and connect with peers."
                features={[
                  "Team-based challenges",
                  "Mentorship and guidance",
                  "Prizes and recognition",
                  "Networking opportunities"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <CodeHeading prefix="<">Impact</CodeHeading>
              <p className="text-lg text-muted-foreground">
                Making a measurable difference in computer science education
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              <StatChip label="Hours of Tutoring" value="2,250+" />
              <StatChip label="Hackathon Participants" value="75+" />
              <StatChip label="Apps Created" value="20+" />
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <p className="text-muted-foreground italic mb-4">
                  "The tutoring program helped me understand Python in ways my school classes never did. 
                  I went from struggling with basics to building my own projects!"
                </p>
                <p className="font-mono text-sm text-primary">- Student Participant</p>
              </div>
              
              <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <p className="text-muted-foreground italic mb-4">
                  "The AI workshop opened my eyes to what's possible with modern tools. 
                  I built a complete website in just one session!"
                </p>
                <p className="font-mono text-sm text-primary">- Workshop Attendee</p>
              </div>
            </div>

            {/* Partners Section */}
            <div className="mt-16 space-y-8">
              <h3 className="text-2xl font-mono font-bold text-center">
                <span className="text-primary">#</span> Our Partners
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a href="https://code.org" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src={partnerCodeOrg} alt="Code.org" className="max-h-24 md:max-h-32 lg:max-h-40 w-auto" />
                </a>
                <a href="https://prominds.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src={partnerProminds} alt="ProMinds Business Consulting" className="max-h-24 md:max-h-32 lg:max-h-40 w-auto bg-white p-4 rounded-lg" />
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
