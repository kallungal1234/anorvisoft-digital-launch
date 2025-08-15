import { Users, Target, Eye, Heart, Award, Lightbulb, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable solutions and unwavering support you can count on every step of the way."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships based on trust and results."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We deliver exceptional quality in every project, exceeding expectations consistently."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      description: "8+ years in software development with expertise in full-stack technologies and business strategy.",
      image: "👨‍💼"
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      description: "Senior developer specializing in React, Node.js, and cloud architecture solutions.",
      image: "👩‍💻"
    },
    {
      name: "Michael Rodriguez",
      role: "UI/UX Designer",
      description: "Creative designer focused on user-centered design and modern web experiences.",
      image: "👨‍🎨"
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      description: "Experienced project manager ensuring smooth delivery and client satisfaction.",
      image: "👩‍💼"
    }
  ];

  const milestones = [
    { year: "2016", title: "Company Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2018", title: "50+ Projects", description: "Reached our first major milestone of 50 completed projects" },
    { year: "2020", title: "Team Expansion", description: "Grew to a team of 10+ skilled professionals" },
    { year: "2022", title: "200+ Clients", description: "Served over 200 satisfied clients across various industries" },
    { year: "2024", title: "Industry Recognition", description: "Received multiple awards for excellence in software development" }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About Anorvisoft
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We're a passionate team of developers, designers, and strategists dedicated to 
              transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with cutting-edge software solutions that drive growth, 
                improve efficiency, and create meaningful digital experiences. We believe technology should 
                be accessible, reliable, and transformative.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-accent rounded-xl">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the leading software development partner for businesses seeking innovation and 
                excellence. We envision a future where every organization can leverage technology to 
                achieve their full potential and make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and passion for technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-card border border-border rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
                <div className="text-accent font-medium mb-4">{member.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Journey
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a trusted technology partner - here are the key milestones in our story.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card border border-border rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full border-4 border-background shadow-lg">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-white/90 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
                <Users className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;