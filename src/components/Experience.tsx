
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
    <section id="experience" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Experience</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's a summary of my professional experience, showcasing my contributions and skills in web development.
          </p>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          {experienceData.map((exp, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-secondary hover:border-amber-400 border animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-background rounded-full p-3 ring-2 ring-primary/10">
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
