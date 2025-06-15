
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="container mx-auto flex min-h-screen flex-col items-center justify-center text-center">
      <div className="mb-8 h-32 w-32 rounded-full bg-secondary flex items-center justify-center ring-4 ring-primary/10">
        <User className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I’m Gollapudi Venkata Nandini
      </h1>
      <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
        Full Stack Developer & Tech Enthusiast
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <a href="#projects">View Projects</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
