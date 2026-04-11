import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const resourcesSubItems = [
    { name: "Astra", path: "/resources/astra" },
    { name: "Pabbly", path: "/resources/pabbly" },
    { name: "ScraperAPI", path: "/resources/scraperapi" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-xl transform transition-transform duration-300 group-hover:scale-110">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">
              Anorvisoft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`relative flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname.startsWith("/resources") ? "text-primary" : "text-foreground"
                }`}
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
                {location.pathname.startsWith("/resources") && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2 animate-fade-in-up">
                  {resourcesSubItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        location.pathname === sub.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm"
              className="bg-gradient-primary hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-fade-in-up">
            <div className="p-4 space-y-4">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                    location.pathname === item.path ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Resources Section */}
              <div className="space-y-1">
                <span className="block text-sm font-medium py-2 px-4 text-muted-foreground">Resources</span>
                {resourcesSubItems.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className={`block text-sm font-medium py-2 px-8 rounded-lg transition-colors duration-300 ${
                      location.pathname === sub.path ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>

              {navItems.slice(3).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                    location.pathname === item.path ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                size="sm"
                className="w-full bg-gradient-primary"
                asChild
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;