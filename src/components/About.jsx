import React from "react";

const About = () => {
  return (
    <section className="border-bottom">
      <div className="about-me">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>About me</h1>
          <p style={{ width: "629px" }}>
            I’m software developer and this is my portfolio. I’m software
            developer and this is my portfolio. I’m software developer and this
            is my portfolio. I’m software developer and this is my portfolio.
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>&#10026; Lorem ipsum dolor sit.</p>
              <p>&#10026; Lorem ipsum dolor sit.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "80px",
              }}
            >
              <p>&#10026; Lorem ipsum dolor sit.</p>
              <p>&#10026; Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={require("../assets/imageAboutMe.png")} />
        </div>
      </div>
    </section>
  );
};

export default About;
