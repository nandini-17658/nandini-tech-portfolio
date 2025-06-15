
import { Badge } from '@/components/ui/badge';
import { Blocks, CodeXml, Database, ServerCog } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Tabs defaultValue={skillsData[0].category} className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            {skillsData.map((item) => (
              <TabsTrigger key={item.category} value={item.category} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.category}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {skillsData.map((item) => (
            <TabsContent
              key={item.category}
              value={item.category}
              className="p-8 bg-background rounded-lg border min-h-[200px] flex items-center justify-center data-[state=active]:animate-fade-in-up"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-base px-4 py-2 hover:bg-primary/10 transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
