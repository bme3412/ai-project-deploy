import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const DocumentProcessingDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const project = {
    title: "PDF Slide Saver",
    description: `PDF Slide Saver is built using Flask and utilizes several technologies including Boto3, NLTK, and LangChain to process and summarize PDF documents. The service extracts text from uploaded PDF files, analyzes it with Amazon Rekognition for OCR, and then summarizes the text using a custom LangChain summarization chain. The intended use case is to process, analyze, and extract information from investor slide decks (ex: quarterly earnings call presentations, investor day presentations, etc). Ultimately, the app's purpose is to extract content efficiently and store the information to be used for further analysis with LLMs.

#### Features:
1. **OCR Text Extraction:** Utilizes AWS Rekognition to convert images of text into machine-readable characters.
2. **Advanced Summarization:** Employs LangChain's LLMs to summarize extracted text, focusing on financial metrics.
3. **Batch Processing:** Implements pagination to manage document processing in manageable batches.`,
    details: `#### Technical Details:
The application is built using Flask and communicates with AWS services for OCR capabilities. It leverages the LangChain API for processing and summarizing text data efficiently.

#### Example Usage:
The user uploads a PDF through the web interface, which is then processed to extract and summarize the text. The results are presented in a JSON format, including the text summary and metadata like page numbers.

#### Repository:
The complete source code and additional documentation are available on [GitHub](https://github.com/bme3412/AI_Projects_with_Python/tree/main/Slide-Saver ).`,
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
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
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
          View Code
        </button>
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
            lineHeight: "1.6",
          }}
        >
          {project.description}
        </ReactMarkdown>
      </div>
      {isModalOpen && (
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
              maxHeight: "80%",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <h2>Code Details</h2>
            <p>
              Flask application that handles PDF document uploads, extracts text using AWS Rekognition, and summarizes the content using LangChain. It processes multi-page PDF files, extracts text from each page, and utilizes natural language processing to generate concise summaries of the content.
            </p>
            <div style={{ overflowY: "scroll", height: "300px" }}>
              <iframe
                src="https://gist.github.com/bme3412/6461e516dd4ca195801e5886bd4ea6e5.pibb"
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
            lineHeight: "1.6",
          }}
        >
          {project.details}
        </ReactMarkdown>
      </div>
      <Link href="/" legacyBehavior>
        <a
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "20px",
            color: "#0066cc",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          &larr; Back to Projects
        </a>
      </Link>
    </div>
  );
};

export default DocumentProcessingDetails;