import { Check } from "lucide-react";

const benefits = [
  "Respuesta en menos de 2 horas",
  "Técnico certificado en tus instalaciones",
  "Sin gastos de desplazamiento (Canarias)",
  "Garantía de satisfacción",
  "Presupuesto sin compromiso",
];

const PricingSection = () => {
  return (
    <section id="precios" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="badge-pill mb-4 inline-flex">PRECIO ESPECIAL</span>
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground tracking-tight">
            Asistencia Técnica Presencial
          </h2>
          <p className="text-primary-foreground/60 mt-4">
            Desde <span className="text-4xl font-black text-gradient">€60</span>
            <span className="text-primary-foreground/60">/hora sin compromiso</span>
          </p>
        </div>

        <div className="max-w-lg mx-auto rounded-2xl border border-electric/30 bg-navy-light/50 backdrop-blur-sm p-8">
          <div className="space-y-4 mb-8">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <Check size={18} className="text-electric flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
          <a
            href="#contacto"
            className="glow-button w-full block text-center text-base animate-pulse-glow"
          >
            Reservar Ahora →
          </a>
          <p className="text-center text-primary-foreground/40 text-xs mt-4">
            Sin compromiso. Sin trampa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
