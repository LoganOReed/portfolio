import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Master's of Science",
    years: "2021 - 2023",
    content:
      "Recieved from the Mathematical Sciences department of Rutgers University-Camden. 3.96 GPA",
  },
  {
    id: 2,
    title: "Bachelor’s Degree",
    years: "2017 - 2021",
    content:
      "Bestowed by Texas State University, with a major in Applied Mathematics and a minor in Computer Science",
  },
  {
    id: 3,
    title: "Honours Degree",
    years: "2017 - 2023",
    content:
      "Honors list recipient 9 times, graduated magna cum laude, recieved a distinguished thesis award, and obtained the exceptional research award",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Research Assistant in Mathematical Biosciences Lab",
    years: "2022 - Present",
    content:
      "Worked with biologists to design and write a model which optimises drug combinations for combating tuberculosis.",
  },
  {
    id: 2,
    title: "Graduate Researcher",
    years: "2021 - 2023",
    content:
      "Used numerical analysis to study a long open optimisation problem in Differential Equations",
  },
  {
    id: 3,
    title: "Part-Time Lecturer",
    years: "2021 - 2023",
    content:
      "Taught the standard college algebra course for classes between 32 and 37. Lectured in person and online; designed and administered assignments and exams.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
