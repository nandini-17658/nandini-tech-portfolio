
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-2">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle>Web Developer Intern</CardTitle>
                  <p className="text-muted-foreground">Jul 2024 to Oct 2024</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Created a full-stack responsive website using HTML, CSS, JavaScript, and PHP.</li>
                <li>Participated in full SDLC: planning → design → development → deployment.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
