import "./FormStyles.css";
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";

export const Form = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_79qvc0c', 'template_ybizjuj', form.current, {
        publicKey: 'pI8oECCm3IZRpPLA_',
      })
      .then(
        () => {
          setSuccessMessage(true); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init({
      duration: 1700,
      once: false,
    });
  }, []);

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
        <label className="input">Name</label>
        <input type="text" name="user_name" required />

        <label className="input">Email</label>
        <input type="email" name="user_email" required />

        <label className="input">Message</label>
        <textarea name="message" required />

        <input className="btn" type="submit" value="Send" />

        {successMessage && (
          <div className="success-message" >
            <p style={{ color: "rgb(248,249,254)", textAlign: "center" }}>Message Sent! :))</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
