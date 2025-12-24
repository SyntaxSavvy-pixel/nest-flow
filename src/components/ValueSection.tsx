import { Heart, Search, Smile } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Collect tabs without stress",
    description: "One click saves any tab to your nest. No pressure, no complicated folders — just peace of mind.",
  },
  {
    icon: Search,
    title: "Find them instantly later",
    description: "Smart search finds what you saved, even if you forgot the name. Your tabs remember for you.",
  },
  {
    icon: Smile,
    title: "Feel lighter when closing",
    description: "Close 50 tabs without anxiety. They're safe in your nest, waiting for when you need them.",
  },
];

const ValueSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why your tabs love TabKeep
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for people who open just one more tab and end up with thirty. We get it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group relative p-8 rounded-2xl gradient-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                <value.icon className="w-7 h-7 text-teal" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
