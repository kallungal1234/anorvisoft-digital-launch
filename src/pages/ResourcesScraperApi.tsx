import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe, Code2, Shield, BarChart3, Server, Workflow } from "lucide-react";

const SCRAPERAPI_AFFILIATE_URL = "https://www.scraperapi.com/?fp_ref=anu58";

const scraperApiFeatures = [
  {
    title: "Web Scraping API",
    description: "Extract data from any website with a single API call. Handle proxies, browsers, and CAPTCHAs automatically.",
    icon: Globe,
    highlights: ["Auto Proxy Rotation", "JavaScript Rendering", "99.9% Uptime"],
  },
  {
    title: "Structured Data Endpoints",
    description: "Get clean, structured JSON data from popular platforms like Amazon, Google, and more—no parsing required.",
    icon: Code2,
    highlights: ["Amazon Product Data", "Google Search Results", "Pre-Built Parsers"],
  },
  {
    title: "DataPipeline",
    description: "Schedule and automate large-scale scraping jobs. Collect millions of pages and deliver data to your preferred destination.",
    icon: Workflow,
    highlights: ["Scheduled Crawls", "Bulk Data Collection", "Webhook Delivery"],
  },
  {
    title: "Enterprise-Grade Infrastructure",
    description: "Built for scale with 40M+ IPs across 50+ countries, smart retries, and geo-targeting for reliable data extraction.",
    icon: Server,
    highlights: ["40M+ IP Pool", "Geo-Targeting", "Smart Retry Logic"],
  },
];

const whyScraperApi = [
  { title: "Simple Integration", description: "One API call replaces complex scraping infrastructure—just send a URL and get data back.", icon: Zap },
  { title: "Anti-Bot Bypass", description: "Automatically handles CAPTCHAs, rate limits, and IP blocks so you never get stuck.", icon: Shield },
  { title: "Scalable Pricing", description: "Start free with 5,000 API credits. Scale seamlessly as your data needs grow.", icon: BarChart3 },
];

const ResourcesScraperApi = () => {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.title = "ScraperAPI – Web Scraping Made Simple | Anorvisoft";
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ScraperAPI – Web Scraping Made Simple</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Collect structured data from any website at scale with a powerful, easy-to-use scraping API.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-12 fade-in" ref={setRef(1)}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Recommended Tool
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              ScraperAPI Features
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to extract web data reliably and at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scraperApiFeatures.map((feature, i) => (
              <div key={feature.title} className="fade-in" ref={setRef(i + 2)}>
                <Card className="h-full group relative overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-accent/60 hover:shadow-[0_0_25px_-5px_hsl(var(--accent)/0.35)]">
                  <CardHeader>
                    <div className="p-3 bg-accent/10 rounded-xl w-fit mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {feature.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="h-3.5 w-3.5 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-gradient-primary hover:scale-[1.03] transition-transform duration-300">
                      <a href={SCRAPERAPI_AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                        Try ScraperAPI <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ScraperAPI */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12 fade-in" ref={setRef(6)}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why We Recommend ScraperAPI</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The easiest way to scrape the web without getting blocked.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyScraperApi.map((item, i) => (
              <div key={item.title} className="fade-in" ref={setRef(i + 7)}>
                <Card className="h-full service-card">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container text-center fade-in" ref={setRef(10)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Scraping?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Get started with 5,000 free API credits and see how easy web scraping can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300" asChild>
              <a href={SCRAPERAPI_AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                Try ScraperAPI Free <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
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

export default ResourcesScraperApi;
