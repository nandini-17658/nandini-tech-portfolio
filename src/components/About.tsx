
import { Code, Cpu, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const aboutItems = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building complete applications from UI to database.',
  },
  {
    icon: Cpu,
    title: 'Java & DSA',
    description: 'Strong foundation in algorithms and backend logic.',
  },
  {
    icon: Share2,
    title: 'Collaborative Problem-Solving',
    description: 'Working effectively in teams to deliver solutions.',
  },
];

const About = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Designing Solutions, Not Just Visuals</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            I’m currently pursuing a B.Tech in Computer Science at Mohan Babu University. I’m passionate about building impactful tech solutions and constantly upgrading my skills through real-world projects and courses. My focus areas include full-stack development, Java, and collaborative problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {aboutItems.map((item, index) => (
            <Card 
              key={item.title} 
              className="text-center flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-background hover:border-amber-400 border animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-3 w-fit ring-2 ring-primary/10">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
