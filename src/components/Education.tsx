
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School } from 'lucide-react';

const educationData = [
  {
    institution: "Mohan Babu University",
    period: "2022 – 2026",
    degree: "B.Tech in Computer Science",
    score: "CGPA: 9.45",
  },
  {
    institution: "Narayana Junior College",
    period: "2020 – 2022",
    degree: "Intermediate",
    score: "Percentage: 97.4%",
  },
  {
    institution: "Dr. K.K.R's Gowtham Public School",
    period: "2017 – 2020",
    degree: "High School",
    score: "CGPA: 10.0",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Education</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Academic Background</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A summary of my academic qualifications and the institutions I've attended.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {educationData.map((item, index) => (
            <Card
              key={item.institution}
              className="text-center flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 bg-secondary hover:border-amber-400 border animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <CardHeader>
                <div className="mx-auto bg-background rounded-full p-3 w-fit ring-2 ring-primary/10">
                  <School className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="mt-4 text-xl">{item.institution}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center">
                <p className="font-semibold">{item.degree}</p>
                <p className="text-muted-foreground text-sm">{item.period}</p>
                <p className="text-primary font-semibold mt-2">{item.score}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
