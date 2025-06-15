
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Java Programming',
    issuer: 'Devtown',
    date: 'Jun 2024',
    description:
      'Completed Java course at Devtown with hands-on experience in core concepts and application development.',
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'Devtown',
    date: 'Aug 2024',
    description:
      'Successfully finished Devtown’s Full Stack Web Development course, gaining practical experience in building full web applications.',
  },
  {
    name: 'MongoDB Java Developer Path',
    issuer: 'MongoDB',
    date: 'Jun 2025',
    description:
      'Built Java applications using MongoDB, focusing on schema design and efficient data handling.',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Achievements</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.name} className="text-center flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-secondary/50 border-secondary hover:border-amber-400 border">
              <CardHeader>
                <div className="mx-auto bg-background rounded-full p-3 w-fit ring-2 ring-primary/10">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <h3 className="font-semibold text-lg">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {cert.issuer} - {cert.date}
                </p>
                <p className="text-sm text-muted-foreground mt-2 flex-grow">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
