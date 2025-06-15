
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
    <section id="education">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative border-l-2 border-primary/20 max-w-2xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
                {item.institution}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
                {item.period}
              </time>
              <p className="mb-1 text-base font-normal text-muted-foreground">{item.degree}</p>
              <p className="text-base font-semibold text-primary">{item.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
