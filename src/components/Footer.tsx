
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto text-center text-muted-foreground">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/nandini-17658" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github /></a>
          <a href="https://www.linkedin.com/in/gollapudivenkata-nandini-29937924b" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Gollapudi Venkata Nandini. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
