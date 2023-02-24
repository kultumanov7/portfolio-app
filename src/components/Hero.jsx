import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Hi, I’m InsertName,
          <br />
          I build things for the web.
        </h1>
        <p style={{ marginTop: "20px" }}>
          I’m software developer and this is my portfolio.
        </p>
        <button style={{ marginTop: "20px" }} className="button">
          Check out my CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
