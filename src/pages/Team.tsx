import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CodeHeading } from "@/components/CodeHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "lucide-react";
import teamPraneethS from "@/assets/team-praneeth-s.png";
import teamAbhinav from "@/assets/team-abhinav.png";
import teamSrikar from "@/assets/team-srikar.png";
import teamAlan from "@/assets/team-alan.png";
import teamPraneethK from "@/assets/team-praneeth-k.png";
import teamSrihith from "@/assets/team-srihith.png";
import teamArjun from "@/assets/team-arjun.png";
import teamPrahas from "@/assets/team-prahas.png";

const Team = () => {
  const officers = [
    {
      name: "Praneeth S",
      role: "CEO & CTO",
      bio: "Leading the organization with vision and strategy while overseeing technical operations and ensuring high-quality educational content delivery.",
      photo: teamPraneethS
    },
    {
      name: "Abhinav Mittal",
      role: "COO",
      bio: "Managing day-to-day operations and program execution to maximize impact.",
      photo: teamAbhinav
    },
    {
      name: "Srikar",
      role: "CMO",
      bio: "Building our brand and reaching more students who can benefit from our programs.",
      photo: teamSrikar
    },
    {
      name: "Alan",
      role: "Co-Director of Curriculum",
      bio: "Developing engaging curriculum and learning materials for our programs.",
      photo: teamAlan
    },
    {
      name: "Praneeth K",
      role: "Co-Director of Curriculum",
      bio: "Creating innovative educational content to enhance student learning experiences.",
      photo: teamPraneethK
    },
    {
      name: "Srihith",
      role: "CIO",
      bio: "Managing information systems and data-driven decision making.",
      photo: teamSrihith
    },
    {
      name: "Arjun",
      role: "CHRO",
      bio: "Leading human resources and building a strong volunteer community.",
      photo: teamArjun
    },
    {
      name: "Prahas",
      role: "CFO",
      bio: "Ensuring financial sustainability and responsible resource allocation.",
      photo: teamPrahas
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
                    <div className="w-full aspect-square bg-card/50 rounded-lg mb-4 flex items-center justify-center border border-border overflow-hidden">
                      {officer.photo ? (
                        <img 
                          src={officer.photo} 
                          alt={officer.name}
                          className="w-full h-full object-cover"
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
