// components/CodeCrawler.js
import React, { useEffect, useState } from 'react';

const CodeCrawler = () => {
  const [project, setProject] = useState({
    title: "Code Crawler",
    description: "Description of Code Crawler",
    imageUrl: "/images/project1.jpg",
    details: "Detailed information about the Code Crawler project...",
  });

  const [bokehHtml, setBokehHtml] = useState("");

  useEffect(() => {
    fetch("/code_crawler_plot.html")
      .then((response) => response.text())
      .then((html) => {
        setBokehHtml(html);
      });
  }, []);

  return (
    <div className="project-details-page">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      <div className="project-details-content">
        <p>{project.details}</p>
        <div dangerouslySetInnerHTML={{ __html: bokehHtml }}></div>
      </div>
      <a href="/" className="back-link">&larr; Back to Projects</a>
    </div>
  );
};

export default CodeCrawler;