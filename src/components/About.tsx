
import { Code, Cpu, Share2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            I’m currently pursuing a B.Tech in Computer Science at Mohan Babu University. I’m passionate about building impactful tech solutions and constantly upgrading my skills through real-world projects and courses. My focus areas include full-stack development, Java, and collaborative problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-muted-foreground">Building complete applications from UI to database.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Java & DSA</h3>
            <p className="text-muted-foreground">Strong foundation in algorithms and backend logic.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
              <Share2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Problem-Solving</h3>
            <p className="text-muted-foreground">Working effectively in teams to deliver solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
