import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";

const Projects = () => {
  return (
    <section className="border-bottom">
      <div className="projects-page">
        <h1 style={{ paddingTop: "100px" }}>Projects I’ve Worked On</h1>
        <div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-between",
            }}
          >
            <img src={proj1} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "100px",
              }}
            >
              <h2>Project Name</h2>
              <p style={{ maxWidth: "500px" }}>
                I’m software developer and this is my portfolio. I’m software
                developer and this is my portfolio. I’m software developer and
                this is my portfolio. I’m software developer and this is my
                portfolio.
              </p>
              <p>&#10026; Lorem ipsum dolor sit amet.</p>
              <p>&#10026; Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "100px",
              }}
            >
              <h2>Project Name</h2>
              <p style={{ maxWidth: "500px" }}>
                I'm software developer and this is my portfolio. I'm software
                developer and this is my portfolio. I'm software developer and
                this is my portfolio. I'm software developer and this is my
                portfolio.
              </p>
              <p>&#10026; Lorem ipsum dolor sit amet.</p>
              <p>&#10026; Lorem ipsum dolor sit amet.</p>
            </div>
            <img src={proj2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
