import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, Code2, Server, Cloud, Puzzle, ArrowRight, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import templateBeauty from "@/assets/template-beauty.png";
import templateBaking from "@/assets/template-baking.png";
import templateOrganic from "@/assets/template-organic.png";
import templatePizzeria from "@/assets/template-pizzeria.png";
import templateSports from "@/assets/template-sports.png";
import templateBrandstore from "@/assets/template-brandstore.png";

const ASTRA_AFFILIATE_URL = "https://wpastra.com/?bsf=14990";

const astraCards = [
  {
    title: "Business Templates",
    description: "Professional starter templates for agencies, portfolios, and corporate sites—ready to launch in minutes.",
    icon: Globe,
    screenshots: [templateBeauty, templateBaking],
  },
  {
    title: "eCommerce Solutions",
    description: "WooCommerce-optimized storefronts with fast checkout flows, product showcases, and conversion-focused layouts.",
    icon: ShoppingCart,
    screenshots: [templateOrganic, templateSports],
  },
  {
    title: "Developer Tools",
    description: "Lightweight theme framework with hooks, filters, and full customizer API access for bespoke builds.",
    icon: Code2,
    screenshots: [templatePizzeria, templateBrandstore],
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
                  <CardContent className="space-y-4">
                    {/* Template Screenshots */}
                    <div className={`grid ${card.screenshots.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
                      {card.screenshots.map((src, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden border border-border">
                          <img
                            src={src}
                            alt={`${card.title} template preview ${idx + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
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

      {/* Template Showcase Carousel */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12 fade-in" ref={setRef(10)}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Template Showcase</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A glimpse of the starter templates powering our client projects.
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-12">
            <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
              <CarouselContent>
                {[
                  { src: templateBeauty, label: "Beauty & Salon" },
                  { src: templateBaking, label: "Bakery" },
                  { src: templateOrganic, label: "Organic Store" },
                  { src: templatePizzeria, label: "Pizzeria" },
                  { src: templateSports, label: "Sports Wear" },
                  { src: templateBrandstore, label: "Brand Store" },
                ].map((item, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-2">
                      <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-accent/40">
                        <CardContent className="p-0 overflow-hidden">
                          <img
                            src={item.src}
                            alt={`${item.label} template preview`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </CardContent>
                        <CardHeader className="py-3 px-4">
                          <CardTitle className="text-sm font-medium text-center group-hover:text-accent transition-colors duration-300">{item.label}</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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

      {/* Affiliate Disclosure */}
      <div className="py-6 px-4">
        <p className="text-center text-xs italic text-muted-foreground/50 max-w-3xl mx-auto">
          Disclosure: Some of the links on this page are affiliate links, meaning we may earn a small commission at no extra cost to you if you make a purchase through them. We only recommend tools and services we genuinely use and trust.
        </p>
      </div>
    </div>
  );
};

export default Resources;
