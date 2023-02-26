import React from "react";
import aldiyar from "../assets/aldiyar.png";

const About = () => {
  return (
    <section className="border-bottom" id="about">
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
            Hi, I'm Aldiyar, a frontend developer specializing in React. I'm
            passionate about creating clean, responsive, and user-friendly web
            applications that enhance user experiences. With a keen eye for
            detail and a commitment to quality, I strive to create visually
            stunning and functional interfaces that exceed user expectations.
            Let's work together to bring your ideas to life.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              &#10026; I can work with a variety of front-end technologies,
              including HTML, CSS, SASS/SCSS preprocessors, Tailwind, Bootstrap,
              and Material UI, and I have experience with JavaScript, React,
              Redux, Vue.js, Node.js, Git, Java, and Python.
            </p>
            <p
              style={{
                maxWidth: "500px",
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "16px",
              }}
            >
              &#10026; I possess excellent soft skills, including effective
              communication, teamwork, problem-solving, time management,
              adaptability, and a strong work ethic.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img src={aldiyar} />
        </div>
      </div>
    </section>
  );
};

export default About;
