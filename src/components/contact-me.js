import React, { useRef, useState } from 'react';
import { contactForm } from './contact-me.module.css';
import emailjs from '@emailjs/browser';

export default function ContactMe({ modalClose }) {
  const form = useRef();
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, process.env.EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          modalClose();
      }, (error) => {
          console.log(error.text);
          setSubmitDisabled(false);
      });
  };

  const handleSubmit = (e) => {
    setSubmitDisabled(true);
    sendEmail(e);
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className={contactForm}>
      <h3>Let's Chat!</h3>
      <label>
        Name:
        <input
          type="text"
          name="user_name"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="user_email"
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
        />
      </label>
      <button type="submit" disabled={isSubmitDisabled}>Submit</button>
    </form>
  );
}
