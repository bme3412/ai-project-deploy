import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const AITearSheet = () => {
  const project = {
    title: "AI Tear Sheet: Comprehensive Financial Data Analysis Made Easy",
    description: `AI Tear Sheet is a robust Flask-based web application that streamlines the process of analyzing financial data for specific companies. With AI Tear Sheet, users can easily access detailed financial statements, stock price data, and key metrics, providing a comprehensive overview of a company&apos;s financial health.

## Key Features

1. **Company Data Retrieval**: Users can fetch detailed company profiles including key financial metrics and stock price information.
2. **Annual Returns Calculation**: The application calculates and displays annual returns for the selected company.
3. **Price Target and Consensus Data**: Users can view price target consensus and upgrades/downgrades consensus data.
4. **Financial Statements**: Access to detailed income statements, balance sheets, and cash flow statements.
5. **Earnings Transcripts Analysis**: Fetch and analyze earnings call transcripts, including management outlook and guidance.`,
    details: `
#### Technical Details

AI Tear Sheet is built using Flask, a lightweight Python web framework. It leverages the power of pandas for data manipulation and analysis, and utilizes APIs such as Financial Modeling Prep for fetching financial data.

#### Example Usage

1. Enter a company ticker to fetch detailed financial data.
2. View the annual returns and other key metrics.
3. Access detailed financial statements including income statements, balance sheets, and cash flow statements.
4. Analyze earnings call transcripts for management outlook and guidance.

#### Repository

The complete source code and additional documentation are available on [GitHub](https://github.com/bme3412/AI_Projects_with_Python/tree/main/ai-tear-sheet).
`,
    imageUrl: "",
    githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/ai-tear-sheet",
    demoUrl: "https://www.loom.com/share/4cfd0a5ae61a471080abd42b2f94a001?sid=f9c19478-b7a8-406c-bd2f-6ead12e3d928",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", textAlign: "center" }}>
        {project.title}
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={openModal}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Code
        </button>
        <Link href="https://www.loom.com/share/4cfd0a5ae61a471080abd42b2f94a001?sid=f9c19478-b7a8-406c-bd2f-6ead12e3d928" legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#dc3545",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Video
          </a>
        </Link>
      </div>
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <ReactMarkdown
          style={{
            fontSize: "16px",
            color: "#666",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          {project.description}
        </ReactMarkdown>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <Image
          src="/ai-tear-sheet.png"
          alt="AI Tear Sheet Screenshot"
          width={800}
          height={450}
          style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
          onClick={() => openImageModal("/ai-tear-sheet.png")}
        />
        <Image
          src="/ai-tear-sheet-llm.png"
          alt="AI Tear Sheet LLM Screenshot"
          width={800}
          height={450}
          style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
          onClick={() => openImageModal("/ai-tear-sheet-llm.png")}
        />
      </div>
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeImageModal}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          >
            <Image
              src={selectedImage}
              alt="Enlarged Screenshot"
              layout="fill"
              objectFit="contain"
              style={{ width: "100%", height: "100%" }}
            />
            <button
              onClick={closeImageModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "5px 10px",
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#dc3545",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isModalOpen && !selectedImage && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "80%",
              minHeight: "400px",
              position: "relative",
            }}
          >
            <h2>Code Details</h2>
            <p>
              AI Tear Sheet is a Flask application that simplifies the process of analyzing financial data for specific companies. It leverages pandas for data manipulation and analysis, and utilizes APIs such as Financial Modeling Prep for fetching financial data.
            </p>
            <div style={{ overflowY: "scroll", height: "300px" }}>
              <iframe
                src="https://gist.github.com/bme3412/8ba6ea3da9b81bc66ef8c0c377c12d54.pibb"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "5px 10px",
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#dc3545",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <ReactMarkdown
          style={{
            fontSize: "16px",
            color: "#666",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          {project.details}
        </ReactMarkdown>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a style={{ display: "block", textAlign: "center", marginRight: "10px", color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}>
            GitHub Repository
          </a>
        </Link>
        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" legacyBehavior>
          <a style={{ display: "block", textAlign: "center", color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}>
            Live Demo
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AITearSheet;
