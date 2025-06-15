
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const coursesData = [
  {
    name: 'Java',
    date: 'Jul 2024',
    organization: 'Devtown',
    description: 'Completed a Java programming course at Devtown, where I learned core concepts and improved my problem-solving through practical coding challenges.'
  },
  {
    name: 'Full Stack Web Development',
    date: 'Aug 2024',
    organization: 'Devtown',
    description: 'Successfully finished Devtown’s Full Stack Web Development course, gaining practical experience in building full web applications.'
  },
  {
    name: 'Data Structures And Algorithms',
    date: 'Oct 2024',
    organization: 'Devtown',
    description: 'Built problem-solving skills using fundamental data structures during a Devtown training program.'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Courses</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coursesData.map((course) => (
            <Card key={course.name} className="text-center flex flex-col">
              <CardHeader>
                <div className="mx-auto bg-background rounded-full p-3 w-fit ring-2 ring-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <h3 className="font-semibold text-lg">{course.name}</h3>
                <p className="text-muted-foreground text-sm">{course.organization} - {course.date}</p>
                <p className="text-sm text-muted-foreground mt-2 flex-grow">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
