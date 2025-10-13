import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CodeHeading } from "@/components/CodeHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const officers = [
    {
      name: "Chief Executive Officer",
      role: "CEO",
      bio: "Leading our mission to make computer science education accessible to all students through innovative programs and partnerships.",
      photo: null
    },
    {
      name: "Chief Operating Officer",
      role: "COO",
      bio: "Overseeing daily operations, program logistics, and ensuring seamless delivery of tutoring, workshops, and hackathons.",
      photo: null
    },
    {
      name: "Chief Technology Officer",
      role: "CTO",
      bio: "Driving technical strategy, curriculum development, and implementing cutting-edge tools and platforms for student success.",
      photo: null
    },
    {
      name: "Chief Marketing Officer",
      role: "CMO",
      bio: "Building brand awareness, engaging our community, and expanding our reach to connect with more students and partners.",
      photo: null
    },
    {
      name: "Chief Financial Officer",
      role: "CFO",
      bio: "Managing financial operations, fundraising initiatives, and ensuring sustainable growth for long-term impact.",
      photo: null
    },
    {
      name: "Chief Outreach Officer",
      role: "Outreach Director",
      bio: "Establishing partnerships with schools, organizations, and community groups to expand our program reach and impact.",
      photo: null
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <CodeHeading prefix="//">Our Team</CodeHeading>
            <p className="text-xl text-muted-foreground">
              Meet the passionate leaders driving our mission to democratize computer science education
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {officers.map((officer, index) => (
                <Card 
                  key={index} 
                  className="border-border hover:border-primary transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                >
                  <CardHeader>
                    <div className="w-full aspect-square bg-card/50 rounded-lg mb-4 flex items-center justify-center border border-border">
                      {officer.photo ? (
                        <img 
                          src={officer.photo} 
                          alt={officer.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <User className="w-24 h-24 text-muted-foreground" />
                      )}
                    </div>
                    <CardTitle className="font-mono text-xl">{officer.name}</CardTitle>
                    <CardDescription className="font-mono text-primary">{officer.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{officer.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-mono text-2xl font-bold">
              <span className="text-primary">{'>'}</span> Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground">
              We're always looking for passionate individuals who want to make a difference in computer science education. 
              Reach out to learn about volunteer and leadership opportunities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
