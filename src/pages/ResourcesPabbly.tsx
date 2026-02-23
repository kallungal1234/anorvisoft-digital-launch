import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Mail, CreditCard, FileText, Workflow, BarChart3 } from "lucide-react";

const PABBLY_AFFILIATE_URL = "https://pabbly.com/";

const pabblyProducts = [
  {
    title: "Pabbly Connect",
    description: "Automate workflows by connecting 2,000+ apps with triggers, actions, and multi-step integrations—no coding required.",
    icon: Workflow,
    highlights: ["2,000+ App Integrations", "Multi-Step Workflows", "Webhook & API Support"],
  },
  {
    title: "Pabbly Subscription Billing",
    description: "Manage recurring payments, invoicing, and subscription lifecycles with a powerful billing platform—zero transaction fees.",
    icon: CreditCard,
    highlights: ["0% Transaction Fees", "Dunning Management", "Affiliate Module"],
  },
  {
    title: "Pabbly Email Marketing",
    description: "Send bulk emails, build drip campaigns, and grow your audience with advanced segmentation and deliverability tools.",
    icon: Mail,
    highlights: ["SMTP Routing", "Drag & Drop Builder", "List Management"],
  },
  {
    title: "Pabbly Form Builder",
    description: "Create professional forms for lead capture, surveys, and registrations with payment collection and autoresponders.",
    icon: FileText,
    highlights: ["Payment Integration", "Conditional Logic", "Autoresponder Emails"],
  },
];

const whyPabbly = [
  { title: "One-Time Pricing", description: "Lifetime deals available—pay once and use forever with no recurring fees.", icon: Zap },
  { title: "All-In-One Platform", description: "Connect, bill, email, and capture leads from a single dashboard.", icon: BarChart3 },
  { title: "No Limits on Features", description: "Every plan unlocks full functionality—no premium-gated features.", icon: Sparkles },
];

const ResourcesPabbly = () => {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.title = "Pabbly – Automation & Billing Tools | Anorvisoft";
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pabbly – Automation & Business Tools</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Streamline your business with powerful automation, billing, email marketing, and form-building tools.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-12 fade-in" ref={setRef(1)}>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Recommended Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Pabbly Product Suite
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A comprehensive set of tools to automate, monetize, and scale your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pabblyProducts.map((product, i) => (
              <div key={product.title} className="fade-in" ref={setRef(i + 2)}>
                <Card className="h-full group relative overflow-hidden border-2 border-transparent transition-all duration-500 hover:border-accent/60 hover:shadow-[0_0_25px_-5px_hsl(var(--accent)/0.35)]">
                  <CardHeader>
                    <div className="p-3 bg-accent/10 rounded-xl w-fit mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                      <product.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {product.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="h-3.5 w-3.5 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-gradient-primary hover:scale-[1.03] transition-transform duration-300">
                      <a href={PABBLY_AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                        Explore Pabbly <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pabbly */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12 fade-in" ref={setRef(6)}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why We Recommend Pabbly</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Affordable, feature-rich, and built for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyPabbly.map((item, i) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Combine the power of Pabbly with our expert implementation for seamless automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300" asChild>
              <a href={PABBLY_AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                Visit Pabbly <ArrowRight className="ml-2 h-5 w-5" />
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

export default ResourcesPabbly;
