
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-xl font-bold text-primary">Nandini</a>
        
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{link.label}</a>
            ))}
          </nav>

          <Button asChild size="sm" className="hidden md:flex bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold">
            <a href="/Nandini-Resume.pdf" download>Download CV</a>
          </Button>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">{link.label}</a>
                  ))}
                  <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold">
                    <a href="/Nandini-Resume.pdf" download>Download CV</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
