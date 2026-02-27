import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Desde que contratamos a MSD Consultores, no hemos tenido ni un solo día de inactividad. Su respuesta es impresionante.",
    author: "Carlos Martín",
    role: "Director, Importaciones Gran Canaria S.L.",
  },
  {
    quote: "Profesionales, rápidos y siempre disponibles. Han transformado por completo nuestra infraestructura IT.",
    author: "Laura Rodríguez",
    role: "Gerente, Clínica Dental Las Palmas",
  },
  {
    quote: "El mejor servicio técnico que hemos tenido en 15 años. Precios justos y trabajo de primera calidad.",
    author: "Pedro Santana",
    role: "CEO, Distribuciones Atlánticas",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="badge-pill mb-4 inline-flex">TESTIMONIOS</span>
          <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-background rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote size={32} className="text-electric/30 mb-4" />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-bold text-navy text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
