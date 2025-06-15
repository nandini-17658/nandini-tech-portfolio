import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';

const experienceData = [
  {
    title: 'Web Developer',
    company: 'Devtown',
    duration: 'Jul 2024 to Oct 2024',
    tasks: [
      'Built a responsive full-stack website using HTML, CSS, JavaScript, and PHP.',
      'Involved in all stages of development – planning, designing, coding, and deployment.',
      'Gained practical experience in real-world web development workflows.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          {experienceData.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-background rounded-full p-2 ring-1 ring-primary/10">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-16">
                <ul className="list-disc list-outside space-y-2 text-muted-foreground">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
