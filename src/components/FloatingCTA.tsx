import { Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <a
        href="tel:+34928934003"
        className="glow-button flex items-center justify-center gap-2 w-full py-4 rounded-xl animate-pulse-glow"
      >
        <Phone size={18} />
        Llámanos Ahora
      </a>
    </div>
  );
};

export default FloatingCTA;
