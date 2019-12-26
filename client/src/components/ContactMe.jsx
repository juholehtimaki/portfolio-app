import React, { useState } from "react";

export const ContactMe = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendMessage = e => {
    e.preventDefault();
    console.log("attempting to send an email");
  };

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updateMessage = e => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact-me-section" id="contact">
      <div className="container">
        <h1>Contact me</h1>
        <div className="row">
          <div className="col-md-6 message-box">
            <form onSubmit={sendMessage}>
              <div className="form-group">
                <label>Your email address:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={updateEmail}
                ></input>
              </div>
              <div className="form-group">
                <label>Your message:</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  value={message}
                  onChange={updateMessage}
                  placeholder="Enter message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
