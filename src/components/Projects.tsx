
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Indian Constitution Awareness Website",
    description: "An educational platform to inform youth about the Indian Constitution and democracy.",
    stack: ["React.js", "HTML/CSS", "JavaScript", "Figma", "Canva"],
    role: "Full-stack developer"
  },
  {
    title: "Project Two",
    description: "Placeholder for another great project.",
    stack: ["Tech", "Stack", "Here"],
    role: "Lead Developer"
  },
  {
    title: "Project Three",
    description: "Placeholder for an awesome application.",
    stack: ["More", "Tech", "Stack"],
    role: "UI/UX Designer"
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
                <div className="h-40 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Thumbnail</span>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
