import { useState } from "react";
import { ExternalLink, Github, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "Custom Software"];

  const projects = [
    {
      id: 1,
      title: "TechCorp Enterprise Dashboard",
      category: "Custom Software",
      description: "A comprehensive business intelligence dashboard with real-time analytics, reporting, and data visualization for enterprise clients.",
      image: "🏢",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "EcoShop E-commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce platform with sustainable product focus, featuring advanced filtering, payment integration, and inventory management.",
      image: "🛒",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "HealthTracker Mobile App",
      category: "Mobile Apps",
      description: "Cross-platform health and fitness tracking application with wearable device integration and personalized insights.",
      image: "📱",
      technologies: ["React Native", "Firebase", "Chart.js", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Creative Agency Website",
      category: "Web Development",
      description: "Stunning portfolio website for a creative agency featuring smooth animations, case studies, and contact forms.",
      image: "🎨",
      technologies: ["React", "Framer Motion", "Sanity CMS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "FinanceFlow SaaS Platform",
      category: "Custom Software",
      description: "Financial management SaaS with advanced reporting, budget tracking, and multi-tenant architecture.",
      image: "💰",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "FoodieDelight Restaurant App",
      category: "Mobile Apps",
      description: "Restaurant ordering app with table reservations, menu browsing, and real-time order tracking.",
      image: "🍔",
      technologies: ["Flutter", "Firebase", "Stripe", "Google Maps"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "BookStore Online Platform",
      category: "E-commerce",
      description: "Online bookstore with advanced search, recommendations, and digital reading features.",
      image: "📚",
      technologies: ["Angular", "Express.js", "MongoDB", "PayPal"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "TechBlog CMS",
      category: "Web Development",
      description: "Custom content management system for tech blogs with SEO optimization and social media integration.",
      image: "📰",
      technologies: ["WordPress", "PHP", "MySQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore our diverse collection of successful projects spanning web development, 
              mobile applications, and custom software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Highlighting some of our most successful and innovative projects that showcase our expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="portfolio-card group">
                <div className="aspect-video bg-gradient-primary flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a 
                        href={project.liveUrl}
                        className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors duration-300"
                        aria-label="View Live Site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors duration-300"
                        aria-label="View Source Code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              All Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse through our complete portfolio of projects across different categories and technologies.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category ? "bg-gradient-primary" : ""}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-card group">
                <div className="aspect-video bg-gradient-accent flex items-center justify-center text-4xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a 
                        href={project.liveUrl}
                        className="p-1.5 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-300"
                        aria-label="View Live Site"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="p-1.5 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-300"
                        aria-label="View Source Code"
                      >
                        <Github className="h-3 w-3" />
                      </a>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or filters.</p>
            </div>
          )}
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
              Let's bring your vision to life with our expertise and dedication to excellence.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="/contact">
                  Start Your Project
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;