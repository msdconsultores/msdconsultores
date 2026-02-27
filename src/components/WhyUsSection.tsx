import { Zap, Award, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Respuesta urgente en menos de 2 horas",
    description: "No esperamos días. Estamos disponibles cuando más nos necesitas.",
  },
  {
    icon: Award,
    title: "Técnicos certificados en Canarias",
    description: "Equipo local con experiencia y certificaciones profesionales.",
  },
  {
    icon: CreditCard,
    title: "Precios claros sin sorpresas",
    description: "Sabes lo que pagarás antes de empezar. Sin cargos ocultos.",
  },
  {
    icon: Headphones,
    title: "Soporte remoto y presencial",
    description: "Solucionamos problemas a distancia o en tus instalaciones.",
  },
];

const metrics = [
  { value: "500+", label: "Clientes" },
  { value: "10+", label: "Años" },
  { value: "98%", label: "Satisfacción" },
  { value: "2h", label: "Respuesta media" },
];

const WhyUsSection = () => {
  return (
    <section id="por-que" className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="badge-pill mb-4 inline-flex">¿POR QUÉ ELEGIRNOS?</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight leading-tight mb-4">
              Rápidos cuando más<br />te importa.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Entendemos que cada minuto sin tecnología es dinero perdido. Por eso respondemos en tiempo récord.
            </p>
            <div className="space-y-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-electric" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">{title}</h4>
                    <p className="text-muted-foreground text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <span className="text-3xl md:text-4xl font-black text-gradient">{value}</span>
                <span className="text-primary-foreground/50 text-sm mt-2">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
