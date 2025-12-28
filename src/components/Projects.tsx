import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Resume Builder Web Application",
    description:
      " Developed a fully responsive resume builder allowing users to dynamically create, edit, and export resumes as PDF.",
    tags: ["HTML", "Css", "Javascript"],
    image: "📋",
    liveUrl: "#",
    githubUrl: "https://github.com/rakeshrocky8/Resume-Builder",
  },
  {
    title: "Portfolio",
    description:
      " Built a personal portfolio website showcasing projects, skills, and contact details using HTML and CSS with a fully responsive layout that adapts to all screen sizes.",
    tags: ["HTML", "CSS", "Javscript"],
    image: "🤖",
    liveUrl: "https://rakeshrocky8.github.io/",
    githubUrl: "https://github.com/rakeshrocky8/rakeshrocky8.github.io",
  },
  {
    title: "Quiz App - React",
    description:
      "an interactive quiz platform using React with a 10-question dynamic interface and instant scoring logic.Utilized React Hooks to manage component state efficiently, improving code maintainability.",
    tags: ["React", "React-Router"],
    image: "📊",
    liveUrl: "#",
    githubUrl: "https://github.com/rakeshrocky8/Quiz-App",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Project Image/Icon */}
                <div className="aspect-video bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
