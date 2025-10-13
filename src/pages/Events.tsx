import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CodeHeading } from "@/components/CodeHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import workshopImage from "@/assets/workshop-presentation.jpeg";
import zoomSession1 from "@/assets/zoom-session-1.jpeg";
import hackathonImage1 from "@/assets/tutoring-student.jpeg";
import hackathonImage2 from "@/assets/tutoring-classroom.jpeg";

const Events = () => {
  const pastEvents = [
    {
      title: "Tutoring Sessions",
      description: "Weekly tutoring sessions covering Python fundamentals, web development, and computer science concepts. Students received personalized guidance and hands-on support.",
      images: [zoomSession1],
      category: "Tutoring"
    },
    {
      title: "Workshops",
      description: "Interactive workshops where students learned to build websites and applications using cutting-edge AI tools. Participants created real projects and deployed them live.",
      images: [workshopImage],
      category: "Workshop"
    },
    {
      title: "Hackathon",
      description: "24-hour collaborative coding events where students built innovative projects, competed for prizes, and connected with peers passionate about technology.",
      images: [hackathonImage1, hackathonImage2],
      category: "Hackathon"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <CodeHeading prefix="//">Events</CodeHeading>
            <p className="text-xl text-muted-foreground">
              Explore our past programs and get involved in future opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-mono text-3xl font-bold">
                <span className="text-primary">{'<'}</span> Past Events <span className="text-primary">{'/>'}</span>
              </h2>
              <p className="text-muted-foreground">
                A look back at our successful programs and their impact
              </p>
            </div>

            <div className="grid gap-8">
              {pastEvents.map((event, index) => (
                <Card key={index} className="border-border hover:border-primary transition-all overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src={event.images[0]} 
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-4">
                        <div className="inline-block mb-2">
                          <span className="text-primary text-sm font-mono border border-primary px-3 py-1 rounded">
                            {event.category}
                          </span>
                        </div>
                        <CardTitle className="font-mono text-2xl">{event.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{event.description}</CardDescription>
                      </CardHeader>
                      {event.images.length > 1 && event.category === "Hackathon" && (
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {event.images.map((img, idx) => (
                            <img 
                              key={idx}
                              src={img} 
                              alt={`${event.title} ${idx + 1}`}
                              className="w-full h-32 object-cover rounded border border-border"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-mono text-3xl font-bold">
                <span className="text-primary">{'{'}</span> Get Involved <span className="text-primary">{'}'}</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our community as a volunteer mentor, workshop facilitator, or participant. 
                Together, we can make computer science education accessible to everyone.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScN-KPr-OFs7kpsYubGlRpCmKNLjhWtu43rYDnwldQ0MGqzjA/viewform" target="_blank" rel="noopener noreferrer">
                  Volunteer With Us
                </a>
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-mono border-primary text-primary hover:bg-primary/10">
                  Become a Partner
                </Button>
              </Link>
            </div>

            <div className="pt-8 border-t border-border mt-12">
              <p className="text-sm text-muted-foreground font-mono">
                Questions? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
