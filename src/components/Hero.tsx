
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex items-center bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-2xl font-medium text-primary">Hello, I’m Nandini</span>
              Full Stack Developer
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0">
              I design and build applications from front-end to back-end, delivering comprehensive tech solutions and great user experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg">
                <a href="#about">About Me</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Avatar className="w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              <AvatarImage
                alt="Gollapudi Venkata Nandini"
                src="https://i.postimg.cc/Xq53GB8h/img-link.jpg"
                className="object-cover"
              />
              <AvatarFallback>GVN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
