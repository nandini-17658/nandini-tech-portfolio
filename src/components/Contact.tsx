
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, Pin, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { sendEmail } from '@/services/emailjs';
import { toast } from 'sonner';

const contactDetails = [
  { icon: <Mail className="w-5 h-5" />, text: 'gollapudivenkatanandini1@gmail.com' },
  { icon: <Phone className="w-5 h-5" />, text: '+91 8919063016' },
  { icon: <Pin className="w-5 h-5" />, text: 'Kandukur, Andhra Pradesh' },
  { icon: <Github className="w-6 h-6" />, text: 'github.com/nandini-17658', href: 'https://github.com/nandini-17658' },
  { icon: <Linkedin className="w-6 h-6" />, text: 'linkedin.com/in/gollapudivenkata-nandini-29937924b', href: 'https://www.linkedin.com/in/gollapudivenkata-nandini-29937924b' },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const lastSubmission = localStorage.getItem('lastSubmission');
    const now = new Date().getTime();

    if (lastSubmission && now - parseInt(lastSubmission, 10) < 60000) { // 60 seconds
      toast.error('You are sending messages too frequently. Please wait a minute.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail({
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      });
      toast.success('Message sent successfully!');
      localStorage.setItem('lastSubmission', now.toString());
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Got a Project? Let's Talk</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
          I'm available for freelance work. Feel free to reach out with your project ideas.
        </p>

        <div className="mt-12 max-w-lg mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground/80">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        {...field} 
                        className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-background/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground/80">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        {...field} 
                        className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-background/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground/80">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message..." 
                        {...field} 
                        className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-background/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="mt-16 flex justify-center gap-6">
          {contactDetails.filter(d => d.href).map((detail, index) => (
            <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-amber-400 transition-colors">
              {detail.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
