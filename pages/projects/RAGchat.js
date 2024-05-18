import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const FinancialFileAnalyzer = () => {
  const project = {
    title: "Financial File Analyzer",
    description: `A Flask-based web application that analyzes financial files (TXT, DOCX, PDF) and generates summaries and categories using OpenAI's GPT-4 model.

#### How It Works:
1. **Upload a File:** Users can upload a financial file in TXT, DOCX, or PDF format.
2. **File Processing:** The application processes the file based on its type, extracting the text content.
3. **Title Extraction:** It extracts the company name, quarter, and year from the document title.
4. **Node Splitting:** The text content is split into nodes using semantic splitting techniques.
5. **Summary and Category Generation:** OpenAI's GPT-4 generates summaries and categories for each node.
6. **Output Generation:** The application creates a CSV file and a Word document with the processed data.`,
    details: `The Financial File Analyzer simplifies the process of analyzing financial documents by leveraging AI technologies to generate summaries and categorize information. It supports various file formats and provides the output in both CSV and Word formats.

#### Key Features:
- **File Upload:** Supports TXT, DOCX, and PDF file formats.
- **Title Extraction:** Extracts company name, quarter, and year from the document title.
- **Node Splitting:** Splits the text content into meaningful nodes using semantic splitting.
- **Summary and Category Generation:** Employs OpenAI's GPT-4 to generate summaries and categories for each node.
- **Output Generation:** Generates a CSV file and a Word document with the processed data.

#### Technologies Used:
- **Flask:** Manages backend operations and serves web content.
- **OpenAI GPT-4:** Drives the generation of summaries and categories.
- **LlamaIndex:** Handles document processing and node splitting.
- **Pandas:** Used for data manipulation and DataFrame creation.
- **python-docx:** Generates Word documents.
- **PyPDF2:** Extracts text from PDF files.

#### Use Cases:
- **Financial Analysts:** Quickly analyze and summarize financial documents for better insights.
- **Investors:** Efficiently review financial reports and extract key information.
- **Auditors:** Streamline the process of analyzing financial statements and identifying important points.
- **Research Analysts:** Easily categorize and summarize financial data for research purposes.
- **Business Owners:** Gain a quick overview of financial documents without manual analysis.`,
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
            marginTop: "0",
            marginBottom: "0",
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
            marginTop: "0",
            marginBottom: "0",
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

export default FinancialFileAnalyzer;