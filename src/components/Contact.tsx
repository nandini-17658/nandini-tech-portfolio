
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, Pin } from 'lucide-react';

const contactDetails = [
  { icon: <Mail className="w-5 h-5" />, text: 'gollapudivenkatanandini1@gmail.com' },
  { icon: <Phone className="w-5 h-5" />, text: '+91 8919063016' },
  { icon: <Pin className="w-5 h-5" />, text: 'Kandukur, Andhra Pradesh' },
  { icon: <Github className="w-5 h-5" />, text: 'github.com/nandini-17658', href: 'https://github.com/nandini-17658' },
  { icon: <Linkedin className="w-5 h-5" />, text: 'linkedin.com/in/gollapudivenkata-nandini-29937924b', href: 'https://www.linkedin.com/in/gollapudivenkata-nandini-29937924b' },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div className="space-y-4">
             <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-primary">{detail.icon}</span>
                {detail.href ? (
                  <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{detail.text}</a>
                ) : (
                  <span className="text-muted-foreground">{detail.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
