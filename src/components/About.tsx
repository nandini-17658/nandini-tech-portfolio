
import { Code, Cpu, Share2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-12">
            I’m currently pursuing a B.Tech in Computer Science at Mohan Babu University. I’m passionate about building impactful tech solutions and constantly upgrading my skills through real-world projects and courses. My focus areas include full-stack development, Java, and collaborative problem-solving.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-background rounded-full p-4 mb-4 ring-2 ring-primary/10">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Full-Stack Development</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-background rounded-full p-4 mb-4 ring-2 ring-primary/10">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Java & DSA</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-background rounded-full p-4 mb-4 ring-2 ring-primary/10">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Collaborative Problem-Solving</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
