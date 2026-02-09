import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, Code2, Server, Cloud, Puzzle, ArrowRight, Sparkles } from "lucide-react";

const ASTRA_AFFILIATE_URL = "https://wpastra.com/?bsf=XXXX";

const astraCards = [
  {
    title: "Business Templates",
    description: "Professional starter templates for agencies, portfolios, and corporate sites—ready to launch in minutes.",
    icon: Globe,
  },
  {
    title: "eCommerce Solutions",
    description: "WooCommerce-optimized storefronts with fast checkout flows, product showcases, and conversion-focused layouts.",
    icon: ShoppingCart,
  },
  {
    title: "Developer Tools",
    description: "Lightweight theme framework with hooks, filters, and full customizer API access for bespoke builds.",
    icon: Code2,
  },
];

const otherTools = [
  { title: "Cloud Hosting", description: "Scalable infrastructure for reliable, high-uptime deployments.", icon: Cloud },
  { title: "Performance Plugins", description: "Caching, CDN integration, and image optimization for blazing speed.", icon: Server },
  { title: "SEO & Analytics", description: "Data-driven tools to track rankings, traffic, and conversion goals.", icon: Puzzle },
];

const Resources = () => {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.title = "Recommended Resources | Anorvisoft";
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    fadeRefs.current[i] = el;
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container text-center" ref={setRef(0)}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Professional Tech Stack</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Tools and frameworks we trust to build high-performance digital solutions.
          </p>
        </div>
      </section>

      {/* Astra Section */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-12 fade-in" ref={setRef(1)}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Featured Partner
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Astra WordPress Ecosystem
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The foundation for our high-speed, SEO-optimized web deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {astraCards.map((card, i) => (
              <div key={card.title} className="fade-in" ref={setRef(i + 2)}>
                <Card className="h-full group relative overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-accent/60 hover:shadow-[0_0_25px_-5px_hsl(var(--accent)/0.35)]">
                  <CardHeader>
                    <div className="p-3 bg-accent/10 rounded-xl w-fit mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                      <card.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-gradient-primary hover:scale-[1.03] transition-transform duration-300">
                      <a href={ASTRA_AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                        View Templates <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Tools Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12 fade-in" ref={setRef(5)}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">More Tools We Rely On</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A curated selection of platforms and plugins that power our workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherTools.map((tool, i) => (
              <div key={tool.title} className="fade-in" ref={setRef(i + 6)}>
                <Card className="h-full service-card">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-3">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container text-center fade-in" ref={setRef(9)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Let's combine the right tools with expert execution to bring your vision to life.
          </p>
          <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300" asChild>
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
