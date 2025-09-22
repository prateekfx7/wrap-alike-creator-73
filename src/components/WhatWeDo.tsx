import { Card, CardContent } from "@/components/ui/card";
import { Users, HardHat, Landmark, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const connectors = [
  {
    icon: Users,
    title: "Citizens",
    description: "Engaging individuals to practice responsible waste segregation, recycling, and active participation in community drives.",
  },
  {
    icon: HardHat,
    title: "Workers",
    description: "Empowering sanitation and waste workers with training, safety measures, and technology for efficient waste handling.",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Collaborating with municipalities and authorities to strengthen policies, infrastructure, and monitoring systems.",
  },
  {
    icon: Lightbulb,
    title: "NGOs & Startups",
    description: "Partnering with innovators and organizations to bring circular solutions, awareness programs, and scalable impact.",
  },
];

const Connectors = () => {
  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    if (title === "Government") {
      navigate("/government-dashboard");
    } else if (title === "NGOs & Startups") {
      navigate("/ngo-startup-dashboard");
    }
  };

  return (
    <section id="what-we-do" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Connect Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform builds a bridge between <span className="font-semibold">citizens, workers, government, and NGOs/startups</span> — creating a united ecosystem for sustainable waste management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {connectors.map((item, index) => (
            <Card 
              key={item.title} 
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 ${
                (item.title === "Government" || item.title === "NGOs & Startups") ? "cursor-pointer" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(item.title)}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connectors;
