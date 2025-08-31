import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Award, label: "Projects Completed", value: "300+" },
    { icon: Star, label: "Client Satisfaction", value: "99%" },
    { icon: Clock, label: "Years Experience", value: "6+" },
  ];

  const features = [
    "Custom Software Development",
    "Responsive Web Design",
    "Performance Optimization",
    "Cloud Integration",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Anorvisoft transformed our business with their innovative software solutions. Their team's expertise and dedication are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, Digital Solutions",
      content: "Working with Anorvisoft was a game-changer. They delivered a high-quality product on time and within budget.",
      rating: 5,
    },
    {
      name: "Bobby Stevenson",
      role: "Founder, Techncraft Solutions",
      content: "The team at Anorvisoft understood our vision perfectly and brought it to life with exceptional technical skills.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
        </div>
        
        <div className="relative z-10 section-container text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Digital Vision
              </span>
              Into Reality
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We craft innovative software solutions, stunning websites, and provide expert IT consulting 
              to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="btn-outline-hero" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button> */}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Core Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom software development to comprehensive IT consulting, 
              we provide end-to-end solutions for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={feature} className="flex items-center space-x-3 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button size="lg" className="bg-gradient-primary" asChild>
                  <Link to="/services">
                    Explore All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="service-card">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Custom Software Development</h3>
                <p className="text-muted-foreground">Tailored solutions built with cutting-edge technologies to solve your unique business challenges.</p>
              </div>
              <div className="service-card">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Website Design & Development</h3>
                <p className="text-muted-foreground">Beautiful, responsive websites that engage users and drive conversions across all devices.</p>
              </div>
              <div className="service-card">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">IT Consulting & Support</h3>
                <p className="text-muted-foreground">Strategic guidance and ongoing support to optimize your technology infrastructure and processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-card border border-border rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together. 
              Get a free consultation and project quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;