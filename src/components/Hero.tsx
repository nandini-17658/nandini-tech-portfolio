
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-2xl font-medium text-amber-400">Hello, I’m Nandini</span>
              Full Stack Developer
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 sm:text-xl max-w-2xl mx-auto lg:mx-0">
              I design and build applications from front-end to back-end, delivering comprehensive tech solutions and great user experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold text-base">
                <a href="#about">About Me</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground group text-base">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] -z-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-amber-400 fill-current">
                <path d="M48.2,-64.8C62.1,-55.9,72.9,-41,77.7,-24.7C82.5,-8.4,81.3,9.4,75.1,25.6C68.9,41.7,57.7,56.2,43.7,66.1C29.8,75.9,13,81.1,-3.2,82.4C-19.4,83.7,-38.8,81.1,-52.7,71.1C-66.6,61.1,-75,43.7,-78.9,26.2C-82.7,8.7,-82.1,-8.9,-75.8,-23.7C-69.5,-38.4,-57.6,-50.2,-44,-59.1C-30.5,-67.9,-15.2,-73.8,0.7,-74.6C16.6,-75.4,33.2,-71.7,48.2,-64.8Z" transform="translate(100 100) scale(1.1)" />
              </svg>
            </div>
             <img
              alt="Gollapudi Venkata Nandini"
              className="rounded-full object-cover aspect-square w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
              src="https://i.postimg.cc/Xq53GB8h/img-link.jpg"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative dots from template */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-8 xl:left-16 space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary-foreground/20" />
        ))}
      </div>
    </section>
  );
};

export default Hero;
