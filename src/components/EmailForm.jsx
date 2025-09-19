import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const EmailForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_h4q1rtk';
    const templateId = 'template_lkse1ra';
    const publicKey = 'MbqpijuwQ_EmZ93UQ';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Mine Workers',
      to_email: recipient,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
  setName('');
  setEmail('');
  setRecipient('');
  setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="email"
        placeholder="Recipient's Email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      <button type="submit">Send Email</button>
    </form>
  )
}

export default EmailForm