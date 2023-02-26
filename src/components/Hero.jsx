import React from "react";
import myCV from "../assets/FrontendAldiyarCV.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myCV;
    link.download = "myCV.pdf";
    link.click();
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>
          Hi, I’m Aldiyar,
          <br />
          I build things for the web.
        </h1>
        <p style={{ marginTop: "20px" }}>
          I’m Frontend Developer and this is my portfolio.
        </p>
        <button
          style={{ marginTop: "20px" }}
          className="button"
          onClick={handleDownload}
        >
          Check out my CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
