import React, { useState } from "react";
import ModalWindow from "./ModalWindow";

const Contacts = (props) => {
  const { setModal, handleModal, modal } = props;

  return (
    <>
      <div className="border-bottom" id="contacts">
        <div className="contacts">
          <h1>Say Hello</h1>
          <p style={{ maxWidth: "500px" }}>
            Have a project in mind or want to learn more about my skills and
            experience? Don't hesitate to reach out and say hello! Whether
            you're looking to collaborate on a project or just want to connect,
            I'm always open to new opportunities and eager to hear from you.
            Feel free to send me a message using the contact form below and I'll
            get back to you as soon as possible. Let's work together to create
            something amazing!
          </p>
          <button className="button" onClick={handleModal}>
            Get In Touch
          </button>
        </div>
      </div>
      {modal && <ModalWindow setModal={setModal} />}
    </>
  );
};

export default Contacts;
