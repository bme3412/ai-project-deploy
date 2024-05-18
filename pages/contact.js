// pages/contact.js
import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Link = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <Heading>Contact Brendan</Heading>
      <Paragraph>
        If you have any questions, project ideas, or just want to connect, feel free to reach out to me through any of the channels below. I&apos;m always excited to engage in meaningful conversations and explore potential collaborations at the intersection of investing and AI.
      </Paragraph>
      <LinksWrapper>
        <Link href="https://www.linkedin.com/in/brendan-erhard/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
        <Link href="https://github.com/bme3412" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <Link href="mailto:erhardbr@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </Link>
      </LinksWrapper>
    </ContactWrapper>
  );
};

export default Contact;
