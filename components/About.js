import React from "react";
import styled from "styled-components";
import Image from "next/image";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
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

const About = () => {
  return (
    <AboutWrapper>
      <ProfileImageWrapper>
        <Image src="/profile-picture.jpg" alt="Profile Picture" width={200} height={200} />
      </ProfileImageWrapper>
      <Heading>About Me</Heading>
      <Paragraph>
        Hi, I'm Brendan. I have a deep interest in investing and AI. I have experience in developing
        innovative projects that combine my expertise in programming and my fascination with the world
        of finance.
      </Paragraph>
      <Paragraph>
        Through my projects, I aim to explore the potential of AI in the realm of investing, creating
        tools and applications that can assist investors in making informed decisions. I believe in the
        power of technology to revolutionize the way we analyze and understand financial markets.
      </Paragraph>
      <LinksWrapper>
        <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
        <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <Link href="mailto:john.doe@example.com" target="_blank" rel="noopener noreferrer">
          Email
        </Link>
      </LinksWrapper>
    </AboutWrapper>
  );
};

export default About;
