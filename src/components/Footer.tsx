import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-primary-foreground/10 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <span className="text-2xl font-black tracking-tight text-primary-foreground">
              MSD <span className="text-electric font-light italic text-lg">Consultores</span>
            </span>
            <p className="text-primary-foreground/40 text-sm mt-4 leading-relaxed">
              Soporte Informático de élite para empresas canarias. Tecnología que no falla, cuando más la necesitas.
            </p>
            <a href="tel:+34928934003" className="flex items-center gap-2 text-electric text-sm mt-4 font-medium">
              <Phone size={14} /> +34 928 934 003
            </a>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2">
              {["Soporte Técnico Presencial", "Mantenimiento Preventivo", "Seguridad Informática", "Copias de Seguridad", "Redes e Infraestructura", "Consultoría IT"].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="text-primary-foreground/40 hover:text-primary-foreground/70 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2">
              {["Por Qué Nosotros", "Precios", "Casos de Éxito", "Contacto", "Reservar Servicio"].map((s) => (
                <li key={s}>
                  <a href="#contacto" className="text-primary-foreground/40 hover:text-primary-foreground/70 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Aviso Legal", "Política de Privacidad", "Política de Cookies"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-sm">
            © 2025 MSD Consultores. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/30 text-sm">
            Diseñado con 💙 para Pymes canarias
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
