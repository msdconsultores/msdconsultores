import { useState } from "react";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("¡Gracias! Te contactaremos en menos de 2 horas.");
  };

  return (
    <section id="contacto" className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-3">
            <span className="badge-pill mb-4 inline-flex">CONTACTO</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight mb-2">
              ¿Necesitas ayuda? Hablemos.
            </h2>
            <p className="text-muted-foreground mb-8">
              Rellena el formulario y te contactaremos en menos de 2 horas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Nombre *</label>
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy mb-1.5 block">Empresa</label>
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Teléfono *</label>
                <input
                  required
                  type="tel"
                  placeholder="+34 928 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-navy mb-1.5 block">Mensaje *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-electric/50 transition resize-none"
                />
              </div>
              <button type="submit" className="glow-button w-full sm:w-auto text-base">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-navy rounded-2xl p-8 h-full">
              <p className="text-primary-foreground/70 font-semibold mb-2">¡Llámanos ahora!</p>
              <a
                href="tel:+34928934003"
                className="text-3xl md:text-4xl font-black text-gradient block mb-8"
              >
                +34 928 934 003
              </a>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-electric" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-semibold text-sm">Dirección</p>
                    <p className="text-primary-foreground/50 text-sm">Islas Canarias, España</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-electric" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-semibold text-sm">Horario de atención</p>
                    <p className="text-primary-foreground/50 text-sm">Lunes – Viernes: 9:00 – 19:00</p>
                    <p className="text-primary-foreground/50 text-sm">Soporte 24/7 para emergencias</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-electric" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-semibold text-sm">Email</p>
                    <p className="text-primary-foreground/50 text-sm">info@msdconsultores.es</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <p className="text-primary-foreground/50 text-sm mb-3">Síguenos en redes:</p>
                <div className="flex gap-3">
                  {["Facebook", "LinkedIn", "Instagram"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center text-electric hover:bg-electric/20 transition text-xs font-bold"
                    >
                      {s[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
