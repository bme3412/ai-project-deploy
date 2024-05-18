import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const EarningsPulse = () => {
  const project = {
    title: "Earnings Pulse: Earnings Call Transcript Analysis Made Easy",
    description: `Earnings Pulse is a powerful Flask-based web application that simplifies the process of analyzing earnings call transcripts for specific topics and tickers. With Earnings Pulse, users can easily search through JSON files containing transcript data and extract relevant discussions, questions, and answers related to their topics of interest.

## Key Features

1. **Ticker Selection**: Users can choose from a list of available tickers or opt to search across all tickers for a comprehensive analysis.
2. **Topic-based Search**: By entering a topic or keyword, users can quickly find discussions, questions, and answers related to their area of interest within the earnings call transcripts.
3. **Context Extraction**: Earnings Pulse not only provides the relevant sentences but also includes the surrounding context, allowing users to understand the full scope of the discussion.
4. **Metadata Integration**: The application incorporates metadata such as the speaker, symbol, year, quarter, and date for each result, providing users with valuable context and insights.
5. **Intuitive Web Interface**: The user-friendly web interface makes it easy to input search criteria, view results, and navigate through the analyzed transcripts.`,
    details: `
#### Technical Details

Earnings Pulse is built using Flask, a lightweight Python web framework. It leverages the power of pandas for data manipulation and analysis, and utilizes JSON files as the data source for the earnings call transcripts.

#### Example Usage

1. Select a ticker or choose to search across all tickers.
2. Enter a topic or keyword of interest.
3. View the relevant discussions, questions, and answers along with their contextual information.
4. Analyze the metadata associated with each result, such as the speaker, symbol, year, quarter, and date.

#### Repository

The complete source code and additional documentation are available on [GitHub](https://github.com/bme3412/AI_Projects_with_Python/tree/main/what-learned-this-week).
`,
    imageUrl: "",
    githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/earningsPulse",
    demoUrl: "https://www.loom.com/share/e39812b98fd04b06a693626589b957bb?sid=9c933a2d-f188-45e5-a5dd-8d30c1b6820d",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <Link href="https://www.loom.com/share/e39812b98fd04b06a693626589b957bb?sid=9c933a2d-f188-45e5-a5dd-8d30c1b6820d" legacyBehavior>
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
              minHeight: "400px",
              position: "relative",
            }}
          >
            <h2>Code Details</h2>
            <p>
              Flask application that simplifies the process of analyzing earnings call transcripts for specific topics and tickers. It leverages pandas for data manipulation and analysis, and utilizes JSON files as the data source.
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

export default EarningsPulse;