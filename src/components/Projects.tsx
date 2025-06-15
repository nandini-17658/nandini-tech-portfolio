
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    title: "Indian Constitution Awareness Website",
    description: "An educational platform to inform youth about the Indian Constitution and democracy.",
    stack: ["React.js", "HTML/CSS", "JavaScript", "Figma", "Canva"],
    role: "Full-stack developer",
    image: "/lovable-uploads/16103533-e46e-4c96-a4fc-5864fbb9a7b0.png",
    link: "#",
    github: "https://github.com/nandini-17658",
  },
  {
    title: "Personal Portfolio",
    description: "This very portfolio website, built to showcase skills and projects.",
    stack: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    role: "Developer",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    github: "https://github.com/nandini-17658",
  },
  {
    title: "E-commerce API",
    description: "A RESTful API for an e-commerce platform with product, order, and user management.",
    stack: ["Java", "Spring Boot", "MongoDB", "JUnit"],
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    github: "https://github.com/nandini-17658",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm font-semibold mb-2">Role: {project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" disabled={project.link === "#"}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Link /> Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" disabled={project.github === "#"}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github /> GitHub
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
