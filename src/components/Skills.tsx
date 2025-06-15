
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="text-center">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill) => (
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
