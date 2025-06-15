
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Blocks, CodeXml, Database, ServerCog } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: CodeXml,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend",
    icon: ServerCog,
    skills: ["Java", "Python"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "SQL"],
  },
  {
    category: "Other",
    icon: Blocks,
    skills: ["DSA", "Software Architecture"],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Skills</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Proficiency</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A look at the languages, frameworks, and tools I use to build modern web applications.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((item, index) => (
            <Card 
              key={item.category} 
              className="text-center flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-background hover:border-amber-400 border animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-3 w-fit ring-2 ring-primary/10">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mt-4">{item.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap justify-center gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-md px-3 py-1">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
