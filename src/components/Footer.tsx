import { Link } from "react-router-dom";
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Custom Software", path: "/services" },
      { name: "Website Design", path: "/services" },
      { name: "Website Optimization", path: "/services" },
      { name: "IT Consulting", path: "/services" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      // { name: "Portfolio", path: "/portfolio" },
      { name: "Contact", path: "/contact" },
    ],
    Resources: [
      { name: "Case Studies", path: "/portfolio" },
      { name: "Support", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary-foreground/10 rounded-xl">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Anorvisoft</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional software development company offering custom solutions,
              web design, and IT consulting services to help businesses thrive in the digital world.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Infopark phase 1, Cochin, Kerala 683501</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+91 9048411848</span>
              </div>  
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">contact@anorvisoft.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Anorvisoft. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;