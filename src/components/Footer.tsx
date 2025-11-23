import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-50 border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Section - Logo and Copyright */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-foreground">FROST</span>
                <span className="text-primary">ED</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              © 2022-2025 Frosted
            </p>
            <p className="text-xs text-muted-foreground max-w-md">
              Frosted ei ole sidoksissa eikä Rockstar Northin, Take-Two Interactiven tai muiden oikeudenhaltijoiden
              tukema. Mahdolliset tavaramerkit kuuluvat niiden omistajille.
            </p>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-foreground">Navigointi</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Etusivu
                  </Link>
                </li>
                <li>
                  <Link to="/rules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Säännöt
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Oppaat
                  </Link>
                </li>
                
              </ul>
            </div>
            
          </div>

          {/* Right Section - Social Icons removed */}
          <div className="md:col-span-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
