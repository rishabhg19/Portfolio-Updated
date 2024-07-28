import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          console.log("Message sent");
        },
        (error) => {
          setMessageSent(false);
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <StyledContactWrapper>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        {messageSent !== null && (
          <FeedbackMessage success={messageSent}>
            {messageSent ? "Message sent successfully!" : ""}
          </FeedbackMessage>
        )}
        <StyledLinks>
          <a href="https://www.linkedin.com/in/rishabh-ganesh-66ba0621b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rishabhg19" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="/assets/RishabhCV.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            My Resume
          </a>
        </StyledLinks>
      </StyledContactForm>
    </StyledContactWrapper>
  );
};

export default Contact;

// Styles
const StyledContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
`;

const StyledContactForm = styled.div`
  width: 90%;
  max-width: 600px; /* Adjust maximum width for larger screens */
  background: #fff; /* White background for the form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slight shadow for better appearance */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the form elements */

  form {
    width: 100%; /* Ensure form takes full width */
    display: flex;
    flex-direction: column;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-top: 0.5rem;
      box-sizing: border-box;
    }

    input:focus,
    textarea:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }

    input[type="submit"] {
      margin-top: 1rem;
      cursor: pointer;
      background: #6f2aa8;
      color: white;
      border: none;
      padding: 10px;
      font-size: 16px;
    }

    label {
      margin-top: 1rem;
      font-weight: bold;
    }
  }
`;

const StyledLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  align-items: center;
  
  a {
    color: #000;
    margin: 0 1rem; /* Add space between icons */
    text-decoration: none;
    font-size: 24px; /* Icon size */
    transition: color 0.3s ease; /* Smooth color transition */
    
    &:hover {
      color: rgba(0, 206, 158, 1); /* Change color on hover */
    }
  }

  .resume-link {
    font-size: 18px; /* Adjust font size for the resume link */
    color: #6f2aa8;
    margin-left: 1rem; /* Space between the resume link and icons */
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(0, 206, 158, 1); /* Change color on hover */
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 20px; /* Smaller icon size on smaller screens */
    }

    .resume-link {
      font-size: 16px; /* Smaller font size for the resume link on smaller screens */
    }
  }
`;

const FeedbackMessage = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: ${props => (props.success ? 'green' : 'red')};
`;
