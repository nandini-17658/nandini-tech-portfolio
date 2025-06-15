
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center bg-indigo-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-xl font-medium text-amber-400">Hi, I’m</span>
              Gollapudi Venkata Nandini
            </h1>
            <p className="mt-4 text-lg text-indigo-200 sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Full Stack Developer & Tech Enthusiast
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold px-8">
                <a href="#projects">Get Started</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white group">
                {/* The template has a "Watch Intro" button. I'm linking it to contact for now. */}
                <a href="#contact">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Intro
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
             <img
              alt="Gollapudi Venkata Nandini"
              className="rounded-full object-cover aspect-square w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
              src="https://i.postimg.cc/Xq53GB8h/img-link.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
