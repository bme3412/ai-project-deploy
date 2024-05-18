import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const PythonProjectDetails = () => {
  const project = {
    title: "Python Metadata Extraction Tool",
    description: `This project develops a Python tool designed to analyze and extract metadata from Python scripts and Jupyter Notebook files across specified directories. It helps in tracking dependencies, code metrics, and file usage over time.

#### Features:
1. **Flexible File Handling:** The tool handles different file encodings and formats, distinguishing between Python scripts and Jupyter Notebooks.
2. **Comprehensive Data Collection:** It collects data such as the number of lines of code, usage of different Python packages, and modification dates.
3. **Data Summarization:** Aggregates data into a comprehensive CSV file, providing insights into package usage and file metrics.`,
    details: `#### Technical Details:
The tool leverages the Python standard library to navigate file systems and parse files. JSON and pandas are used for data manipulation and analysis, respectively.

#### Example Output:
The CSV output includes columns like 'Package', 'First Used Date', and 'Usage Count', offering a clear overview of the software's dependencies.

#### Repository:
The complete source code and additional documentation are available on [GitHub](https://github.com/example/python-metadata-tool).`,
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

export default PythonProjectDetails;
