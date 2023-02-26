import React from "react";

const experienceJobs = [
  {
    year: "Feb 2023 - ...",
    job: "Intern React Developer",
    location: "SmarTestPrep (Astana, Kazakhstan)",
    description:
      "Creating functional and responsive webpages using React Framework",
  },
  {
    year: "Nov 2022 - Feb 2023",
    job: "Frontend Developer",
    location: "Ministry of labor protection (Astana, Kazakhstan)",
    description:
      "Creating functional and responsive webpages using Wordpress, pasting the pieces of pure code (vanillaJS)",
  },
];

const Experience = () => {
  return (
    <section className="border-bottom" id="experience">
      <div className="experience">
        <h1 style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          Experience
        </h1>
        <div>
          {experienceJobs.map((el) => {
            return (
              <div style={{ display: "flex" }}>
                <p style={{ width: "200px" }}>{el.year}</p>
                <div style={{ paddingLeft: "100px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      width="20"
                      height="20"
                      src={require("../assets/Pointer.png")}
                    />
                    <p style={{ paddingLeft: "10px" }}>{el.job}</p>
                  </div>
                  <div>{el.location}</div>
                  <p style={{ fontWeight: 300 }}>{el.description}</p>
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
