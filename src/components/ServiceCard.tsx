import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:scale-105 hover:border-primary/50">
      <CardHeader>
        <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
        </div>
        <CardTitle className="text-2xl text-gradient-gold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
