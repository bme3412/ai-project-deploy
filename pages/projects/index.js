// pages/index.js
import React from 'react';
import InvestingProject from '../../components/InvestingProject';

const Home = () => {
  const investingProjects = [
    {
      title: "Slide-Saver",
      description: "Uses AWS Rekognition computer vision to identify objects, parse and extract content and summarize information from multi-page investor slide decks",
      imageUrl: "/investment-projects/slide-deck-cv.jpg",
      demoUrl: "",
      githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/Slide-Saver",
      detailsUrl: "projects/slide-saver", 
    },
    {
      title: "Inflation across the US",
      description: "An interactive visualization tool built with Python, employing libraries like Folium, Bokeh, and Pandas to analyze and display inflation trends across major US cities from 2020 onwards, with features like interactive mapping, detailed city plots, and comparative sector analysis",
      imageUrl: "/investment-projects/inflation.jpg",
      demoUrl: "/us_map_with_tooltips.html",
      githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/us-inflation",
      detailsUrl: "projects/us-inflation",
    },
    {
        title: "AI Agents for Investing",
        description: "Explores developing chatbots, query engine tools, and multi-document agents with LLM frameworks to assist in analysis of SEC filings",
        imageUrl: "/investment-projects/auto-dcf.jpg",
        demoUrl: "",
        githubUrl: "",
        detailsUrl: "projects/agent-investing",
      },
      
      {
        title: "AI Company Tear Sheet",
        description: "",
        imageUrl: "/investment-projects/ai-tear-sheet.jpg",
        demoUrl: "",
        githubUrl: "",
        detailsUrl: "",
      },
      {
        title: "Earnings Pulse",
        description: "Extracts and ranks the most relevant sentences from earnings call transcripts based on user-defined topics using natural language processing and TF-IDF, presenting results along with questions, answers, and metadata in an intuitive web interface.",
        imageUrl: "/investment-projects/earnings-pulse.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/blob/main/what-learned-this-week/README.md",
        detailsUrl: "projects/earnings-pulse",
      },
      {
        title: "Block Trades with Python",
        description: "Python workflow to automate cash-flow driven program trades and presents results in a clear, step-by-step format, ensuring accuracy and efficiency in a dynamic market environment",
        imageUrl: "/investment-projects/AI-block-trade.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/cash-flow",
        detailsUrl: "projects/ai-program-trades",
      },
      {
        title: "Transcript Analysis with RAG",
        description: "Explores the advantages of using semantic chunking in Retrieval-Augmented Generation (RAG) applications for complex documents, such as earnings call transcripts, and ensures that related content is grouped together for better query results.",
        imageUrl: "/investment-projects/semantic-chunking.jpg",
        demoUrl: "",
        githubUrl: "",
        detailsUrl: "projects/semantic-chunking",
      },
      {
        title: "Text Analysis with Context Augmentation",
        description: "Uses a Context-Augmented Research Agent to analyze 10-Q filings, breaking down prompts into sub-queries for better indexing and retrieval, resulting in handling complex queries that require higher levels of reasoning",
        imageUrl: "/investment-projects/context-augment.jpg",
        demoUrl: "",
        githubUrl: "https://am.jpmorgan.com/us/en/asset-management/adv/insights/market-insights/guide-to-the-markets/",
        detailsUrl: "projects/context-augment",
      },
      {
        title: "RAG AutoText",
        description: "Upload and query a text document using Retrieval Augmented Generation. Incorporates OpenAI GPT-4, langchain and llama-index to split text into semantic chunks and provides enhanced contextual understanding",
        imageUrl: "/ragchat.jpg",
        demoUrl: "https://example.com/project3",
        githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/RAG_blog_article",
        detailsUrl: "/projects/RAGchat",
      },
  ];

  

  return (
    <div>
      
     
      <div className="projects">
        {investingProjects.map((project, index) => (
          <InvestingProject key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Home;