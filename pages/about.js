// pages/about.js
import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
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
  margin-bottom: 2rem;
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

const PlotWrapper = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 2rem;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Heading>About Brendan</Heading>
      <Paragraph>
      Hi, I'm Brendan, and I have a deep interest in investing and AI. I have been a public equity investor since 2011, a tech investor for 9 years, and I started teaching myself Python in 2019. The visualization below, developed with Python, is the result of a program I wrote that crawls through my GitHub profile and tracks the usage of various Python libraries over time. The x-axis displays the first date of usage of each Python library, with the size of the markers indicating the total number of files using those libraries. It has been quite the journey and has developed into a true passion.
      </Paragraph>
      <Paragraph>
      I'm looking to put it all together - to build upon my background as a fundamental investor by using Python and the latest AI and Large Language Models. Through my projects, I aim to explore the potential of AI in the realm of investing, creating
        tools and applications that can assist investors in making informed decisions. I believe in the
        power of technology to revolutionize the way we analyze and understand financial markets.
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
      <PlotWrapper>
        <iframe
          src="/code-crawler-plot.html"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          style={{ border: "none" }}
        ></iframe>
      </PlotWrapper>
    </AboutWrapper>
  );
};

export default About;