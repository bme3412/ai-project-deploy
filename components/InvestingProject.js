import React from "react";
import Link from "next/link";
import Image from "next/image";

const InvestingProject = ({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  detailsUrl,
}) => {
  const isLoomVideo = demoUrl && demoUrl.includes("loom.com");

  return (
    <div className="project">
      <Image src={imageUrl} alt={title} width={800} height={600} />
      <h3>
        {title} {isLoomVideo && <span role="img" aria-label="camera">⏯️</span>}
      </h3>
      <p>{description}</p>
      <div className="links">
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
        )}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <Link href={detailsUrl} legacyBehavior>
          <a className="more-details-btn">
            <span className="more-details-text">Details</span>
            <span className="plus-sign">+</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default InvestingProject;
