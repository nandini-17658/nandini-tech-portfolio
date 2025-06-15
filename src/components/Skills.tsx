
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillsData = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React"],
  "Backend": ["Java", "Python"],
  "Databases": ["MongoDB", "SQL"],
  "Other": ["DSA", "Software Architecture"]
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <Tabs defaultValue="Frontend" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            {Object.keys(skillsData).map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">{skill}</Badge>
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
