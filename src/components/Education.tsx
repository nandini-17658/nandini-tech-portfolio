
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Academic Journey</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {educationData.map((item) => (
            <Card
              key={item.institution}
              className="text-center flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-primary text-primary-foreground"
            >
              <CardHeader>
                <div className="mx-auto rounded-lg p-4 w-fit bg-white/10">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle>{item.institution}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-primary-foreground/90">{item.degree}</p>
                <time className="text-xs text-primary-foreground/70">{item.period}</time>
                <p className="text-lg font-bold mt-auto pt-4 text-amber-400">
                  {item.score}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
