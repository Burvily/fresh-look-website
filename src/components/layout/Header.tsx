import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/11thDlogo8.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleCountrySelect = (country: "uk" | "ng") => {
    const domains = {
      uk: "https://www.theeleventhdimension.co.uk",
      ng: "https://www.theeleventhdimensionltd.com",
    };
    window.location.href = domains[country];
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-10">
            <img src={logo} alt="Eleventh Dimension" className="h-8 sm:h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === item.path
                  ? "text-accent bg-accent/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground/70">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleCountrySelect("uk")}>
                  🇬🇧 United Kingdom
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCountrySelect("ng")}>
                  🇳🇬 Nigeria
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/create">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                CREATE
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-border"
          >
            <div className="container mx-auto container-padding py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${location.pathname === item.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link to="/create" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    CREATE
                  </Button>
                </Link>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleCountrySelect("uk")}
                  >
                    🇬🇧 UK
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleCountrySelect("ng")}
                  >
                    🇳🇬 Nigeria
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
