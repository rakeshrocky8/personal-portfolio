import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-primary font-medium mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hello, I'm
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-gradient">Rakesh </span>
            
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Frontend Developer
          </p>

          <p
            className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
           Frontend Developer skilled in creating responsive and user-friendly websites using ReactJS, JavaScript, HTML, CSS, and Bootstrap.
            Always eager to learn new technologies and build scalable front-end solutions that improve user experience.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div
            className="flex gap-6 justify-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/rakeshrocky8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshrocky8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rakesh0072001@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
