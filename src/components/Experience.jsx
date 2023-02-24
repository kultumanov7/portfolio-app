import React from "react";

const experienceJobs = [
  {
    year: "2021-2022",
    job: "the role at the company",
    location: "country, city",
    description: "I wanna work",
  },
  {
    year: "2021-2022",
    job: "the role at the company",
    location: "country, city",
    description: "I wanna work",
  },
  {
    year: "2021-2022",
    job: "the role at the company",
    location: "country, city",
    description: "I wanna work",
  },
];

const Experience = () => {
  return (
    <section className="border-bottom">
      <div className="experience">
        <h1 style={{ paddingTop: "100px" }}>Experience</h1>
        <div>
          {experienceJobs.map((el) => {
            return (
              <div style={{ display: "flex" }}>
                <p>{el.year}</p>
                <div style={{ paddingLeft: "100px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      width="20"
                      height="20"
                      src={require("../assets/Pointer.png")}
                    />
                    <p>{el.job}</p>
                  </div>
                  <div>{el.location}</div>
                  <p>{el.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
