import { Code, Palette, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to solve your unique business challenges and drive growth.",
      features: [
        "Web Application Development",
        "Mobile App Development (iOS/Android)",
        "Desktop Application Development",
        "API Development & Integration",
        "Database Design & Management",
        "Cloud-Native Solutions"
      ],
      technologies: ["React", "Node.js", "Python", "React Native", "Laravel", "MySQL"],
    },
    {
      icon: Palette,
      title: "Website Design & Development",
      description: "Beautiful, responsive websites that engage users and drive conversions across all devices and platforms.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Content Management Systems",
        "Landing Page Design",
        "Progressive Web Apps",
        "Multi-language Support"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Shopify", "Tailwind CSS"],
      price: "Starting from $2,500"
    },
    {
      icon: Zap,
      title: "Website Optimization",
      description: "Boost your website's performance, search rankings, and security with our comprehensive optimization services.",
      features: [
        "Performance Optimization",
        "SEO & Search Optimization",
        "Security Hardening",
        "Core Web Vitals Improvement",
        "Mobile Optimization",
        "Analytics & Monitoring"
      ],
      technologies: ["Google Analytics", "GTM", "Lighthouse", "Security Tools", "CDN", "SSL"],
      price: "Starting from $1,500"
    },
    {
      icon: Users,
      title: "IT Consulting & Support",
      description: "Strategic guidance and ongoing support to optimize your technology infrastructure and business processes.",
      features: [
        "Technology Strategy Planning",
        "System Architecture Design",
        "Digital Transformation",
        "Technical Training",
        "Ongoing Maintenance",
        "24/7 Support Services"
      ],
      technologies: ["Cloud Platforms", "DevOps", "CI/CD", "Monitoring Tools", "Security", "Backup"],
      price: "Starting from $150/hour"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and challenges through detailed consultation."
    },
    {
      step: "02", 
      title: "Strategy & Design",
      description: "Our team creates a comprehensive strategy and design plan tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices, with rigorous testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "After successful deployment, we provide ongoing support and maintenance to ensure continued success."
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-gradient-primary rounded-2xl">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="service-card h-full min-h-[400px] flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-primary rounded-3xl">
                        <service.icon className="h-16 w-16 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">{service.title}</h3>
                      <p className="text-muted-foreground max-w-md">
                        Professional {service.title.toLowerCase()} services tailored to your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Process
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-primary transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss your project requirements and provide you with a detailed proposal and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;