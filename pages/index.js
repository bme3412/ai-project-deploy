// pages/index.js
import React from 'react';
import InvestingProject from '../components/InvestingProject';
import Navbar from '../components/Navbar';

const Home = () => {
  const investingProjects = [
    {
      title: "AI Company Tear Sheet",
      description: "Web application that integrates financial APIs, offering users insights into company profiles, stock prices, annual returns, and more. Additionally, it features an advanced analysis LLM tool for earnings call transcripts, employing natural language processing and OpenAI GPT-4o to extract key insights and facilitate decision-making",
      imageUrl: "/investment-projects/ai-tear-sheet.jpg",
      demoUrl: "https://www.loom.com/share/4cfd0a5ae61a471080abd42b2f94a001?sid=f9c19478-b7a8-406c-bd2f-6ead12e3d928",
      githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/ai-tear-sheet",
      detailsUrl: "projects/ai-tear-sheet",
    },
    {
      title: "Earnings Pulse",
      description: "Extracts and ranks the most relevant sentences from earnings call transcripts based on user-defined topics using natural language processing and TF-IDF, presenting results along with questions, answers, and metadata in an intuitive web interface. Simplifies the process of analyzing earnings call transcripts for specific topics and tickers",
      imageUrl: "/investment-projects/earnings-pulse.jpg",
      demoUrl: "https://www.loom.com/share/e39812b98fd04b06a693626589b957bb?sid=9c933a2d-f188-45e5-a5dd-8d30c1b6820d",
      githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/blob/main/what-learned-this-week/README.md",
      detailsUrl: "projects/earnings-pulse",
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
      title: "RAG Transcript Analysis",
      description: "Explores the advantages of using semantic chunking in Retrieval-Augmented Generation (RAG) applications for complex documents, such as earnings call transcripts, and ensures that related content is grouped together for better query results. Uses semantic chunking techniques to enhance semantic reasoning",
      imageUrl: "/investment-projects/semantic-chunking.jpg",
      demoUrl: "",
      githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/RAG_blog_article",
      detailsUrl: "projects/semantic-chunking",
    },
    
   
    {
        title: "AI Agents for Investing",
        description: "Explores developing chatbots, query engine tools, and multi-document agents with LLM frameworks to assist in analysis of SEC filings. Agentic approach enables to scale workloads",
        imageUrl: "/investment-projects/auto-dcf.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/LlamaIndex/Agents",
        detailsUrl: "projects/agent-investing",
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
        title: "Augmented Text Analysis",
        description: "Uses a Context-Augmented Research Agent to analyze 10-Q filings, breaking down prompts into sub-queries for better indexing and retrieval, resulting in handling complex queries that require higher levels of reasoning",
        imageUrl: "/investment-projects/context-augment.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/blob/main/LlamaIndex/Agents/Context_Augmented_OpenAI.ipynb",
        detailsUrl: "projects/context-augment",
      },
      {
        title: "RAG AutoText",
        description: "Upload and query a text document using Retrieval Augmented Generation. Incorporates OpenAI GPT-4, langchain and llama-index (LLM frameworks) to split text into semantic chunks and provides enhanced contextual understanding for more granular analysis",
        imageUrl: "/ragchat.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/blob/1daae2382d629ef5ca262ca279aabde1d466880d/RAG_blog_article/app.py",
        detailsUrl: "/projects/RAGchat",
      },
      
      {
        title: "Slide-Saver",
        description: "Uses AWS Rekognition computer vision to identify objects, parse and extract content and summarize information from multi-page investor slide decks. Integrates AWS Boto3, NLTK, and LangChain to process and summarize PDF documents",
        imageUrl: "/investment-projects/slide-deck-cv.jpg",
        demoUrl: "",
        githubUrl: "https://github.com/bme3412/AI_Projects_with_Python/tree/main/Slide-Saver",
        detailsUrl: "projects/slide-saver", 
      }
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