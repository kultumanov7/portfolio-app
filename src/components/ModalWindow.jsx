import React, { useState } from "react";

const ModalWindow = (props) => {
  const { setModal } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [content, setContent] = useState(true);
  const [correctness, setCorrectness] = useState(false);

  const infoMessage = {
    name,
    email,
    text,
  };

  const handleGoBack = () => {
    setModal(false);
  };

  const handleSendMsg = () => {
    if (
      infoMessage.name === "" ||
      infoMessage.email === "" ||
      infoMessage.text === ""
    ) {
      setCorrectness(true);
    } else {
      setCorrectness(false);
      setContent((prev) => !prev);
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className="modal-window" id="modal-window">
      {content ? (
        <div className="modal-content">
          <div className="modal-outline">
            <label>Name: </label>
            <input
              value={name}
              id="name"
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <label style={{ marginTop: "20px" }}>Email: </label>
            <input
              value={email}
              id="email"
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label style={{ marginTop: "20px" }}>Text: </label>
            <textarea
              value={text}
              id="text"
              name="text"
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
            {correctness && (
              <p style={{ color: "red" }}>Fill all the fields correctly</p>
            )}
            <div
              style={{ display: "flex", columnGap: "20px", marginTop: "20px" }}
            >
              <button className="button" onClick={handleSendMsg}>
                Send Message
              </button>
              <button className="button" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal-content">
          <div className="modal-outline">
            <p>Message was sent succesfully</p>
            <div
              style={{ display: "flex", columnGap: "20px", marginTop: "20px" }}
            >
              <button className="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
