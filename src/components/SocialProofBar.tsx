import { Building2, Clock, Star } from "lucide-react";

const stats = [
  { icon: Building2, text: "500+ empresas atendidas" },
  { icon: Clock, text: "Tiempo medio: 45 min" },
  { icon: Star, text: "Satisfacción: 98%" },
];

const SocialProofBar = () => {
  return (
    <section className="bg-navy-light border-y border-electric/10">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-primary-foreground/70">
              <Icon size={20} className="text-electric" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
