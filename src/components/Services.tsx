import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: 'Web Development',
    description: 'Responsive full-stack websites from front-end to back-end for personal or educational platforms.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: 'UI with React.js',
    description: 'Modern and interactive user interfaces built with the React.js library for a seamless user experience.',
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: 'Database Integration',
    description: 'Database design and integration with MongoDB to handle data efficiently and securely.',
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="mx-auto bg-background rounded-full p-3 w-fit ring-2 ring-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
