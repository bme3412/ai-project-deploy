// components/CodeCrawler.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      <Image src={project.imageUrl} alt={project.title} width={800} height={600} />
      <p>{project.description}</p>
      <div className="project-details-content">
        <p>{project.details}</p>
        <div dangerouslySetInnerHTML={{ __html: bokehHtml }}></div>
      </div>
      <Link href="/" legacyBehavior>
        <a className="back-link">&larr; Back to Projects</a>
      </Link>
    </div>
  );
};

export default CodeCrawler;
