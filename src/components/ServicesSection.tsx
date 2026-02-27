import { Monitor, Wrench, Shield, CloudUpload, Network, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Soporte Técnico Presencial",
    description: "Asistencia técnica en tus instalaciones con respuesta en menos de 2 horas.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description: "Planes de mantenimiento programado para evitar fallos y optimizar rendimiento.",
  },
  {
    icon: Shield,
    title: "Seguridad Informática",
    description: "Protección integral contra amenazas y auditoría de seguridad para tus datos.",
  },
  {
    icon: CloudUpload,
    title: "Copias de Seguridad",
    description: "Sistemas de respaldo automático y recuperación ante desastres 100% seguros.",
  },
  {
    icon: Network,
    title: "Redes e Infraestructura",
    description: "Diseño, instalación y optimización de redes corporativas para empresas.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría IT",
    description: "Asesoramiento estratégico tecnológico para transformar tu negocio.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge-pill mb-4 inline-flex">NUESTROS SERVICIOS</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">
            Soluciones IT completas para tu negocio
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cubrimos todas tus necesidades tecnológicas con servicios especializados y personalizados para Pymes canarias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card group">
              <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-4">
                <service.icon size={24} className="text-electric" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{service.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed mb-4">{service.description}</p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1 text-electric text-sm font-medium group-hover:gap-2 transition-all"
              >
                Más info <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contacto" className="inline-flex items-center gap-2 bg-navy text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-navy-light transition-colors">
            Ver todos los servicios <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
