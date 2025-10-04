import { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ProgramCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ProgramCard = ({ icon, title, description, features }: ProgramCardProps) => {
  return (
    <Card className="border-border hover:border-primary transition-all hover:shadow-[0_0_20px_rgba(255,106,0,0.2)]">
      <CardHeader>
        <div className="mb-4 text-primary">{icon}</div>
        <CardTitle className="font-mono text-xl">{`function ${title}()`}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-primary mr-2 font-mono">›</span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
