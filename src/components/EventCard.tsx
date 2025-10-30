import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export const EventCard = ({ title, date, time, location, description }: EventCardProps) => {
  return (
    <Card className="border-border hover:border-primary transition-all">
      <CardHeader>
        <CardTitle className="font-mono text-lg">{`{ ${title} }`}</CardTitle>
        <CardDescription className="space-y-1 mt-2">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            {date}
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            {time}
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {location}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono">
          {'> RSVP()'}
        </Button>
      </CardFooter>
    </Card>
  );
};
