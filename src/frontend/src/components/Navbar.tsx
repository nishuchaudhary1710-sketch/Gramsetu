import { Button } from "@/components/ui/button";
import { Menu, Wifi, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

const navLinks = [
  { label: "होम", href: "#home", ocid: "nav.home.link" },
  { label: "योजनाएं", href: "#schemes", ocid: "nav.schemes.link" },
  { label: "डिजिटल साक्षरता", href: "#digital", ocid: "nav.digital.link" },
  { label: "नारी शक्ति", href: "#women", ocid: "nav.women.link" },
  { label: "समुदाय", href: "#community", ocid: "nav.community.link" },
  { label: "कहानियां", href: "#stories", ocid: "nav.stories.link" },
];

export default function Navbar() {
  const { login, clear, identity, isLoggingIn } = useInternetIdentity();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-warm">
            <Wifi className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display font-bold text-xl text-foreground">
              GramSetu
            </span>
            <span className="block text-[10px] font-body text-muted-foreground leading-none tracking-wide">
              ग्राम सेतु
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.ocid}>
              <a
                href={link.href}
                data-ocid={link.ocid}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Button */}
        <div className="flex items-center gap-3">
          {identity ? (
            <Button
              variant="outline"
              size="sm"
              onClick={clear}
              data-ocid="nav.login.button"
              className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              लॉगआउट
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={login}
              disabled={isLoggingIn}
              data-ocid="nav.login.button"
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isLoggingIn ? "जोड़ रहे हैं..." : "लॉगिन करें"}
            </Button>
          )}

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="मेनू खोलें"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.ocid}
                  href={link.href}
                  data-ocid={link.ocid}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                {identity ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clear}
                    className="w-full border-primary text-primary"
                  >
                    लॉगआउट
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={login}
                    disabled={isLoggingIn}
                    className="w-full bg-primary text-primary-foreground"
                  >
                    {isLoggingIn ? "जोड़ रहे हैं..." : "लॉगिन करें"}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
