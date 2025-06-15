
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Responsive full-stack websites from front-end to back-end for personal or educational platforms.',
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'UI with React.js',
    description: 'Modern and interactive user interfaces built with the React.js library for a seamless user experience.',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database Integration',
    description: 'Database design and integration with MongoDB to handle data efficiently and securely.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Expertise Service! Let's check it out</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to bring your ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="text-center flex flex-col rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-primary text-primary-foreground"
            >
              <CardHeader>
                <div className="mx-auto rounded-full p-4 w-fit mb-4 bg-white/10">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-primary-foreground/80">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
