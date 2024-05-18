import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const LlamaLensCaptionWriter = () => {
  const project = {
    title: "LlamaLens Photo Caption Generator",
    description: `A Flask-based web application that enhances digital photographs with AI-generated captions and facts, utilizing technologies like OpenAI's GPT-4 and AWS Rekognition.

#### How It Works:
1. **Upload an Image:** Users can upload their own photos or select from example images.
2. **Metadata Extraction:** The application extracts details like GPS location, timestamp, and camera specifics from the uploaded image.
3. **Image Recognition:** AWS Rekognition is used to detect objects, scenes, and landmarks within the photo.
4. **Caption and Fact Generation:** OpenAI's GPT-4 generates informative captions and facts based on the extracted metadata and recognized elements.
5. **Interactive Display:** The application presents the photo along with its generated captions, allowing users to regenerate captions in real-time.`,
    imageUrl1: "/llama1.jpg",
    imageUrl2: "/llama2.jpg",
    details: `The LlamaLens Caption Generator bridges the gap between artificial intelligence and photography by providing contextually relevant captions and facts for photos. This application addresses the lack of context in digital media by utilizing metadata and AI technologies to enhance photo narratives.

#### Key Features:
- **Photo Upload and Selection:** Users can upload their own photos or select from example images.
- **Metadata Extraction:** Extracts details like GPS location, timestamp, and camera specifics.
- **Image Recognition:** Uses AWS Rekognition to detect objects, scenes, and landmarks.
- **Caption and Fact Generation:** Employs OpenAI's GPT-4 to generate informative captions and facts.
- **Interactive Display:** Shows photos with their captions and allows for real-time caption regeneration.

#### Technologies Used:
- **Flask:** Manages backend operations and serves web content.
- **OpenAI GPT-4:** Drives the generation of captions and facts.
- **AWS Rekognition:** Handles image analysis.
- **OpenStreetMap Nominatim:** Provides location-based insights.
- **Python Libraries:** Includes tools like Pillow, pandas, and boto3 for various functionalities.

#### Use Cases:
- **Travel Enthusiasts:** For seasoned travelers looking to bring old photos to life with a better way to share experiences with friends and family.
- **Travel Content Creators:** Efficiently write captions and source geographic location for an unlimited number of photos.
- **Social Media Content Creators:** Take control of quickly crafting engaging content for an online following.
- **Travel Guides:** Automated process to delight guests with personalized travel content while also enhancing the brand.
- **Travel Tour Packages:** Enables bulk upload of photos offered in tandem with tours or experiences.`,
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
        <Link href="https://www.loom.com/share/your-video-link" legacyBehavior>
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
              Flask application that handles image uploads and uses AWS
              Rekognition and OpenAI's GPT-4 to analyze images and generate
              captions. It also extracts and utilizes metadata from images to
              enhance content with location-based insights and additional
              AI-generated facts.
            </p>
            <div style={{ overflowY: "scroll", height: "300px" }}>
              <iframe
                src="https://gist.github.com/bme3412/dac49bca32429969050415f35948bb78.pibb"
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={project.imageUrl1}
          alt="Project Image 1"
          style={{ width: "100%", borderRadius: "5px" }}
        />
        <img
          src={project.imageUrl2}
          alt="Project Image 2"
          style={{ width: "100%", borderRadius: "5px" }}
        />
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

export default LlamaLensCaptionWriter;