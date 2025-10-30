import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CodeHeading } from "@/components/CodeHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import workshopImage from "@/assets/workshop-presentation.jpeg";
import zoomSession1 from "@/assets/zoom-session-1.jpeg";
import hackathonWeave from "@/assets/hackathon-weave.png";
import hackathonPebblemind from "@/assets/hackathon-pebblemind.jpg";
import hackathonMeditation from "@/assets/hackathon-meditation.png";
import hackathonPhoto1 from "@/assets/hackathon-photo-1.jpeg";
import hackathonPhoto2 from "@/assets/hackathon-photo-2.jpeg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "AI Website Development Workshop",
      date: "November 1, 2024",
      time: "1:30–3:00 PM",
      location: "Sharon Folks Library",
      description: "Learn to build websites using cutting-edge AI tools. Chips and drinks provided. Bring a computer. Open to all ages!",
    }
  ];

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
      description: "24-hour Online Hackathon: Collaborative coding event where students built innovative projects, competed for $100, and connected with peers passionate about technology.",
      images: [hackathonWeave, hackathonPebblemind, hackathonMeditation, hackathonPhoto1, hackathonPhoto2],
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
              Join our upcoming events and explore our past programs
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-mono text-3xl font-bold">
                <span className="text-primary">{'{'}</span> Upcoming Events <span className="text-primary">{'}'}</span>
              </h2>
              <p className="text-muted-foreground">
                Don't miss out on our next opportunities
              </p>
            </div>

            <div className="grid gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-border hover:border-primary transition-all">
                  <CardHeader>
                    <div className="inline-block mb-2">
                      <span className="text-primary text-sm font-mono border border-primary px-3 py-1 rounded">
                        Upcoming
                      </span>
                    </div>
                    <CardTitle className="font-mono text-2xl">{event.title}</CardTitle>
                    <CardDescription className="text-base mt-4 space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-semibold mr-2">Date:</span> {event.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold mr-2">Time:</span> {event.time}
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold mr-2">Location:</span> {event.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
                        Learn More / Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                  {event.category === "Hackathon" ? (
                    // Hackathon: Full width with images below
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="inline-block mb-2">
                          <span className="text-primary text-sm font-mono border border-primary px-3 py-1 rounded">
                            {event.category}
                          </span>
                        </div>
                        <CardTitle className="font-mono text-2xl">{event.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{event.description}</CardDescription>
                      </CardHeader>
                      <div className="mt-6">
                        {/* 5-image grid underneath text */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <img 
                            src={event.images[0]} 
                            alt="Weave app screenshot"
                            className="w-full h-auto rounded border border-border"
                          />
                          <img 
                            src={event.images[1]} 
                            alt="PebbleMind app screenshot"
                            className="w-full h-auto rounded border border-border"
                          />
                          <img 
                            src={event.images[2]} 
                            alt="Meditation app screenshot"
                            className="w-full h-auto rounded border border-border"
                          />
                          <img 
                            src={event.images[3]} 
                            alt="Hackathon participants coding"
                            className="w-full h-auto rounded border border-border"
                          />
                          <img 
                            src={event.images[4]} 
                            alt="Hackathon team collaboration"
                            className="w-full h-auto rounded border border-border"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Other events: Keep two-column layout with image on left
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
                      </div>
                    </div>
                  )}
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
