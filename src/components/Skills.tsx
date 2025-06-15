
import { Badge } from '@/components/ui/badge';
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
        <div className="max-w-4xl mx-auto">
          {skillsData.map((category, index) => (
            <div 
              key={category.category} 
              className="mb-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-background rounded-full p-3 ring-2 ring-primary/10">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{category.category}</h3>
              </div>
              <div className="ml-4 pl-12 border-l-2 border-border flex flex-wrap gap-3 py-4">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-base px-4 py-2 hover:bg-primary/10 transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
