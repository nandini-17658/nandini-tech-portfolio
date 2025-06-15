
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';

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
          {certifications.map((cert, index) => {
            const isMiddleCard = index === 1;
            return (
              <Card
                key={cert.name}
                className={cn(
                  'text-center flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2',
                  isMiddleCard ? 'bg-primary text-primary-foreground' : 'bg-card',
                )}
              >
                <CardHeader>
                  <div
                    className={cn(
                      'mx-auto rounded-lg p-4 w-fit',
                      isMiddleCard ? 'bg-white/10' : 'bg-primary/10',
                    )}
                  >
                    <Award
                      className={cn('w-8 h-8', isMiddleCard ? 'text-white' : 'text-primary')}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl">{cert.name}</h3>
                  <p
                    className={cn(
                      'text-sm mt-1',
                      isMiddleCard ? 'text-primary-foreground/80' : 'text-muted-foreground',
                    )}
                  >
                    {cert.issuer} - {cert.date}
                  </p>
                  <p
                    className={cn(
                      'text-sm mt-4 flex-grow',
                      isMiddleCard ? 'text-primary-foreground/90' : 'text-muted-foreground',
                    )}
                  >
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
