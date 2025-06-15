import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

const projects = [
  {
    title: "Indian Constitution Website",
    description: "To educate citizens, especially youth, about the Indian Constitution, democratic.",
    stack: ["HTML", "CSS", "JavaScript", "React.js", "Canva", "Figma"],
    role: "Full-stack developer",
    image: "/lovable-uploads/8a6e4565-837f-4fc3-8400-d2b85f396b1f.png",
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
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Portfolio</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-background border hover:border-amber-400 transition-all duration-300 group rounded-xl overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" />
                </div>
                <div className="p-6">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2 h-10">{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <p className="text-sm font-semibold mb-4 text-muted-foreground">Role: {project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <div className="flex gap-4 w-full">
                  <Button asChild variant="outline" size="sm" disabled={project.link === "#"} className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Link /> Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" disabled={project.github === "#"} className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold">
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
