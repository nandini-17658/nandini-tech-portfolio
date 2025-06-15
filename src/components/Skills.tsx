
import { Badge } from '@/components/ui/badge';

const skills = [
  "Java", "HTML", "CSS", "JavaScript", "Python", "React", "MongoDB", "SQL", "DSA", "Software Architecture"
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-lg px-4 py-2">{skill}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
