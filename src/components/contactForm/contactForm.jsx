"use client";

import { useState } from "react";
import Image from "next/image";
import contactImg from '@/components/contactForm/contact-img.svg';
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log("response", response);
//       // const result = await response.json();
//       // if (response.ok) {
//       //   alert(result.message); 
//       // } else {
//       //   alert(result.error);
//       // }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to send message. Please try again later.");
//     }
//   };

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("/api/send-email", { // Make sure the API route matches
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();
      setButtonText("Send");
      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully" });
        setFormDetails({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setButtonText("Send");
      setStatus({ success: false, message: "Error, please try again." });
    }
  };

  return (
    <section
      style={{
        background: 'linear-gradient(90deg, #002E57 -5%, #4A2FBD 110%)',
        padding: '150px 0 100px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap', // Ensure wrapping on smaller screens
        }}
      >
        {/* Left Side with Image */}
        <div
          style={{
            width: '50%',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src={contactImg}
            alt="Contact Us"
            style={{
              width: '100%',
              maxWidth: '400px', // Set max width for image
              marginLeft: '-160px',
            }}
          />
        </div>

        {/* Right Side with Form */}
        <div
          style={{
            width: '100%',
            maxWidth: '550px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          <h2 style={{ color: '#fff', fontSize: '40px', fontWeight: '700', marginBottom: '10px' }}>Get In Touch</h2>
          <p style={{ color: '#fff', fontSize: '18px', marginBottom: '20px' }}>
            Tell us about your project! Whether it&apos;s development, design, or consultation, we&apos;d love to help you bring your vision to life.
          </p>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <input
                type="text"
                name="firstName"
                value={formDetails.firstName}
                placeholder="First Name"
                onChange={handleChange}
                style={{
                  width: '48%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  transition: '0.3s ease-in-out'
                }}
                onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 1)', e.target.style.color = '#121212')}
                onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.1)', e.target.style.color = '#fff')}
              />
              <input
                type="text"
                name="lastName"
                value={formDetails.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                style={{
                  width: '48%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  transition: '0.3s ease-in-out'
                }}
                onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 1)', e.target.style.color = '#121212')}
                onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.1)', e.target.style.color = '#fff')}
              />
              <input
                type="email"
                name="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={handleChange}
                style={{
                  width: '48%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  transition: '0.3s ease-in-out'
                }}
                onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 1)', e.target.style.color = '#121212')}
                onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.1)', e.target.style.color = '#fff')}
              />
              <input
                type="tel"
                name="phone"
                value={formDetails.phone}
                placeholder="Phone No."
                onChange={handleChange}
                style={{
                  width: '48%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  transition: '0.3s ease-in-out'
                }}
                onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 1)', e.target.style.color = '#121212')}
                onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.1)', e.target.style.color = '#fff')}
              />
              {/* Dropdown for Service Selection */}
              <select
                name="service"
                value={formDetails.service}
                onChange={handleChange}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  marginTop: '10px',
                  transition: '0.3s ease-in-out',
                  color: '#fff' // Fixed color issue here
                }}
              >
                <option value="" disabled style={{ color: '#000' }}>Select Service</option>
                <option value="webDevelopment" style={{ color: '#000' }}>Web Development</option>
                <option value="appDevelopment" style={{ color: '#000' }}>App Development</option>
                <option value="uiDesign" style={{ color: '#000' }}>UI/UX Design</option>
                <option value="seo" style={{ color: '#000' }}>SEO Optimization</option>
                <option value="cloudSolutions" style={{ color: '#000' }}>Cloud Solutions</option>
                <option value="saasdevelopment" style={{ color: '#000' }}>SAAS Development</option>
                <option value="softwaredevelopment" style={{ color: '#000' }}>Software Development</option>
                <option value="digitalmarketing" style={{ color: '#000' }}>Digital Marketing</option>
                <option value="aisolution" style={{ color: '#000' }}>AI Solution</option>
                <option value="other" style={{ color: '#000' }}>Other</option>
              </select>

              {/* Budget Field */}
              <input
                type="text"
                name="budget"
                value={formDetails.budget}
                placeholder="Budget"
                onChange={handleChange}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  marginTop: '10px',
                  transition: '0.3s ease-in-out'
                }}
              />

              <textarea
                name="message"
                value={formDetails.message}
                placeholder="Message"
                onChange={handleChange}
                rows="6"
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  color: '#fff',
                  padding: '16px 24px',
                  fontSize: '16px',
                  marginTop: '20px',
                  transition: '0.3s ease-in-out'
                }}
                onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 1)', e.target.style.color = '#121212')}
                onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.1)', e.target.style.color = '#fff')}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#fff',
                color: '#000',
                padding: '16px 48px',
                fontSize: '18px',
                borderRadius: '50px',
                fontWeight: '700',
                marginTop: '20px',
                cursor: 'pointer',
                position: 'relative',
                transition: '0.3s ease-in-out'
              }}
            >
              <span>{buttonText}</span>
            </button>
            {status.message && (
              <p style={{ color: status.success ? '#4BB543' : '#FF3333', fontWeight: '600', marginTop: '10px' }}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
