import axios from 'axios';
import React, { useState } from 'react'

const EmailRestAPI = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_e17jntj';
    const templateId = 'template_rngt2mh';
    const publicKey = 'lQKLyy7LpQRJLtkrK';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: recipient, // Use recipient as the name of the recipient
        to_email: recipient, // Use the recipient's email from the form
        message: "🚨 ALERT: Rockfall risk detected in Tunnel. Move to nearest safe zone now.",
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
    setName('');
    setEmail('');
    setRecipient('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
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
          placeholder="Recipient's Gmail"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <div style={{margin: '10px 0', color: 'red', fontWeight: 'bold'}}>
          🚨 ALERT: Rockfall risk detected in Tunnel. Move to nearest safe zone now.
        </div>
        <button type="submit">Send Alert Email</button>
      </form>
    </div>
  )
}

export default EmailRestAPI