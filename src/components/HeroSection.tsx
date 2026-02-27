import { Zap, ShieldCheck, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const trustBadges = [
  { icon: Zap, text: "Respuesta en < 2h" },
  { icon: CheckCircle, text: "+10 años de experiencia" },
  { icon: ShieldCheck, text: "Datos 100% seguros" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-electric/10" />

      <div className="container mx-auto relative z-10 px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="badge-pill w-fit">
              <span className="w-2 h-2 rounded-full bg-electric inline-block" />
              Soporte IT Premium en Canarias
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-primary-foreground">
              Tu empresa merece tecnología que{" "}
              <span className="text-gradient">no falla.</span>
            </h1>

            <p className="text-lg text-primary-foreground/60 max-w-lg leading-relaxed">
              Soporte informático rápido, profesional y sin complicaciones para Pymes en Canarias. Respuesta en menos de 2 horas.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Icon size={16} className="text-electric" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="glow-button text-base">
                Reservar Visita →
              </a>
              <a href="#servicios" className="glow-button-outline text-base">
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -inset-4 bg-electric/20 rounded-2xl blur-3xl" />
            <img
              src={heroImage}
              alt="Soporte IT profesional - MSD Consultores"
              className="relative rounded-2xl shadow-2xl shadow-electric/10 w-full object-cover aspect-[16/10]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
