// pages/projects/[slug].js
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch the project details based on the slug
  const project = {
    title: "Project Title",
    description: "Project Description",
    imageUrl: "/path/to/image.jpg",
    details: "Detailed information about the project...",
  };

  return (
    <div className="project-details-page">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      <div className="project-details-content">
        <p>{project.details}</p>
      </div>
      <Link href="/" legacyBehavior>
        <a className="back-link">&larr; Back to Projects</a>
      </Link>
    </div>
  );
};

export default ProjectDetails;