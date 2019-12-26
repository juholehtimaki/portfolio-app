import React, { useState, useEffect } from "react";
import FlashMessage from "react-flash-message";
import axios from "axios";

export const ContactMe = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {}, [messageSent]);

  const sendMessage = e => {
    e.preventDefault();
    let msg = { msgSender: email, msgText: message };
    axios
      .post("/contact", msg)
      .then(res => {
        setMessageSent(true);
        setTimeout(() => setMessageSent(false), 5000);
        setMessage("");
        setEmail("");
      })
      .catch(err => {
        console.log(err);
      });
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
            {messageSent ? (
              <div>
                <FlashMessage duration={5000}>
                  <div className="alert alert-success" role="alert">
                    Your message was successfully sent
                  </div>
                </FlashMessage>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
