
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certifications = [
  { name: 'Java Programming', issuer: 'Devtown, 2024' },
  { name: 'Full Stack Web Development', issuer: 'Devtown, 2024' },
  { name: 'MongoDB Java Developer Path', issuer: 'Devtown, 2025' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.name} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-background rounded-full p-3 w-fit ring-2 ring-primary/10">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
