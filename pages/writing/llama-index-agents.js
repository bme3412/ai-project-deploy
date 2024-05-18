import React from "react";
import Head from "next/head";
import Image from "next/image";

const Article1 = () => {
  const styles = {
    article: {
      fontFamily: "Arial, sans-serif",
      margin: "20px auto",
      maxWidth: "800px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      lineHeight: "1.6",
      backgroundColor: "#fff",
    },
    header: {
      color: "#333",
      textAlign: "center",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "16px",
      color: "#666",
      marginBottom: "20px",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      gap: "20px",
    },
    image: {
      maxWidth: "45%",
      height: "auto",
      objectFit: "contain",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    fullWidthImage: {
      width: "100%",
      height: "auto",
      objectFit: "contain",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    queryResponse: {
      backgroundColor: "#f0f0f0",
      padding: "10px",
      marginBottom: "20px",
    },
    queryResponseText: {
      fontStyle: "italic",
    },
    queryResponseLabel: {
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.article}>
      <Head>
        <title>Llama-Index Agents</title>
      </Head>
      <h2 style={styles.header}>
        Exploring Agentic Workflows with Llama-Index
      </h2>
      <p style={styles.paragraph}>
        2024 has been declared by some in the AI community as the Year of the
        Agent, when full-blown AI agents and assistants really start to have an
        impact in business and on the wider world. But first, what is an AI
        agent? What is Llama-index? And how can these be applied to generate
        better investment returns?
      </p>
      <p style={styles.paragraph}>
        An <strong>AI agent</strong> is a computer program that can understand
        natural language, recognize patterns, learn from data and make decisions
        based on prompts and directives. AI agents can be autonomous, and they
        can be programmed to be responsive, goal-oriented and adaptable.
      </p>
      <p style={styles.paragraph}>
        Early use cases of AI agents include chatbots on websites for customer
        service; flight pricing algorithms for airfare selection; and providing
        personalized recommendations for ecommerce sites based on user history.
        The space is likely to continue to evolve with more advanced use cases.
      </p>
      <p style={styles.paragraph}>
        <strong>Llama-Index</strong> is a data framework specifically designed
        to augment large language model (LLM) applications. It provides a robust
        set of tools for managing and manipulating data to enhance the
        capabilities of LLMs. This includes data ingestion, data structuring,
        and offers advanced query capabilities through integration and
        customization of other data sources. Langchain is another data framework
        also used to augment LLMs. Llama-Index offers many different types of
        agents, each offering the ability to customize and integrate with LLMs
        such as OpenAI, Anthropic, Replicate, etc.
      </p>
      <p style={styles.paragraph}>
        Finally, agents can be used to augment many of the tasks performed by
        analysts, portfolio managers and investment professionals. Agents are
        great at performing pre-defined tasks that aggregate and identify
        information and use various levels of semantic reasoning on that
        information. Examples of agents with investment use cases below:
      </p>
      <h3 style={styles.header}>1. Building a Chatbot to Query Documents</h3>
      <div style={styles.imageContainer}>
        <Image
          src="/llama-index-agents/chatbot-query-1.png"
          alt="Chatbot Query Example 1"
          width={400}
          height={300}
          style={styles.image}
        />
        <Image
          src="/llama-index-agents/chatbot-response-1.png"
          alt="Chatbot Response Example 1"
          width={400}
          height={300}
          style={styles.image}
        />
      </div>
      <p style={styles.paragraph}>
        The simplest of use cases, this app (link here) is best for asking
        pointed questions about documents such as 10-Ks, 10-Qs, proxy filings
        and S-1s. Results are acceptable, but can be improved.
      </p>
      <h3 style={styles.header}>2. OpenAI Agent with Query Engine Tools</h3>
      <Image
        src="/llama-index-agents/openai-agent-thread.png"
        alt="OpenAI Agent Example"
        width={800}
        height={450}
        style={styles.fullWidthImage}
      />
      <p style={styles.paragraph}>
        The OpenAI agent with query tools is a bit more advanced in that it
        creates a conversational agent that can answer questions and provide
        information based on a given set of documents or data sources. It
        combines the power of OpenAI&apos;s language models with the ability to
        retrieve relevant information from indexed data. The agent can
        understand and respond to natural language questions based on the
        indexed documents. In addition, the query engine tools employ semantic
        search techniques to find the most relevant information from the indexed
        documents. It goes beyond simple keyword matching and understands the
        meaning and context of the user&apos;s query to provide accurate results.
      </p>
      <p style={styles.paragraph}>
        This allows for more robust queries. An example is, if I load in the
        2021 and 2020 10-K document for UBER, I can ask a series of questions
        about the fundamentals of the business integrated with financial
        metrics. Examples below:
      </p>
      <div style={styles.queryResponse}>
        <p style={styles.queryResponseText}>
          <span style={styles.queryResponseLabel}>Query 1:</span> Describe the
          fundamental business performance for UBER in 2021. What were the
          biggest challenges and opportunities the company faced that year as
          compared to the prior year?
        </p>
        <p style={styles.queryResponseText}>
          <span style={styles.queryResponseLabel}>Response 1:</span> In 2021,
          Uber demonstrated strong business performance with a notable 57%
          increase in revenue compared to the prior year. The company
          experienced significant growth driven by a substantial increase in
          Gross Bookings, particularly in the Delivery segment, which saw a 71%
          increase. Mobility Gross Bookings also grew by 38%. The expansion of
          services, especially in the food delivery sector, contributed to the
          revenue growth, fueled by increased demand during the COVID-19
          pandemic.
          <br />
          <br />
          Challenges:
          <ul>
            <li>
              Competition: Uber faced intense competition in the mobility and
              delivery industries globally, with existing alternatives and new
              market entrants posing challenges. The low barriers to entry in
              these sectors intensified competition for market share.
            </li>
          </ul>
          Opportunities:
          <ul>
            <li>
              Platform Enhancements: Uber introduced membership programs like
              Uber One, Uber Pass, and Eats Pass, attracting over 6 million
              members by the end of 2021. These programs enhanced customer
              loyalty and engagement.
            </li>
            <li>
              Marketplace Advertising: The company leveraged data and scale to
              offer marketplace-centric advertising, connecting merchants and
              brands with its platform network. The active advertising merchants
              grew to over 170,000 by the fourth quarter of 2021, presenting a
              significant growth opportunity.
            </li>
          </ul>
        </p>
      </div>
      <div style={styles.queryResponse}>
        <p style={styles.queryResponseText}>
          <span style={styles.queryResponseLabel}>Query 2:</span> For the 57%
          increase in revenue, can you provide more detail about unit economics
          of the growth drivers?
        </p>
        <p style={styles.queryResponseText}>
          <span style={styles.queryResponseLabel}>Response 2:</span> The 57%
          increase in revenue for Uber in 2021 was primarily driven by growth in
          Gross Bookings, which increased by 56%. This growth was fueled by a
          53% increase in Gross Bookings on a constant currency basis. The key
          drivers of this growth were the significant increase in Delivery Gross
          Bookings by 71% (66% on a constant currency basis) and Mobility Gross
          Bookings by 38% (36% on a constant currency basis). The surge in
          Delivery Gross Bookings was attributed to higher demand for food
          delivery orders due to stay-at-home orders related to COVID-19, along
          with increased basket sizes. Mobility Gross Bookings saw an uptick in
          Trip volumes as the business recovered from the impacts of the
          pandemic. Additionally, the increase in revenue was also supported by
          an expansion in Delivery revenue, particularly from certain Courier
          payments and incentives, which are recorded in the cost of revenue.
        </p>
      </div>
      <div style={styles.queryResponse}>
        <p style={styles.queryResponseText}>
          <span style={styles.queryResponseLabel}>Query 3:</span> Can you
          provide more information about quarterly trends in unit economics?
        </p>
        <p style={styles.queryResponseText}>
          <span style={styles.queryResponseLabel}>Response 3:</span> Uber
          experienced less seasonality in its revenue trends in 2021 due to the
          impact of the COVID-19 pandemic and related restrictions. Typically,
          for Mobility, higher revenue is generated in the fourth quarter
          compared to other quarters, while lower revenue is seen in the third
          quarter due to reduced platform usage during peak vacation seasons in
          certain cities. However, in 2021, the usual seasonality patterns were
          altered. For Delivery, seasonal increases in revenue are expected in
          the first and fourth quarters compared to the second and third
          quarters, but in 2021, the pandemic-related restrictions accelerated
          the growth of Delivery, making the seasonal fluctuations less
          pronounced.
        </p>
      </div>
      <h3 style={styles.header}>3. Multi-Document Agents</h3>
      <Image
        src="/llama-index-agents/multi-document.png"
        alt="Multi-Document Agent Example"
        width={800}
        height={450}
        style={styles.fullWidthImage}
      />
      <p style={styles.paragraph}>
        Finally, we set up an agent that can effectively answer different types of questions over a larger set of documents. The below function extracts information from multiple 10-K PDF documents, builds agents and tools to query the documents, and exposes an API endpoint to allow users to query the documents and retrieve relevant information.
      </p>
      <div style={{
  backgroundColor: '#f5f5f5',
  padding: '20px',
  borderRadius: '5px',
  fontFamily: 'Arial, sans-serif'
}}>
  <p style={{ marginBottom: '10px' }}>
    <span style={{ fontWeight: 'bold', color: '#333' }}>Query:</span> Compare and contrast the key industry themes and business fundamentals for each company?
  </p>
  <p>
    <span style={{ fontWeight: 'bold', color: '#333' }}>Response:</span> The key industry themes and business fundamentals for each company in 2023 are as follows:
  </p>
  <div style={{ marginBottom: '20px' }}>
    <h3 style={{ color: '#007bff' }}>Apple Inc. (AAPL):</h3>
    <p><strong>Key Industry Themes:</strong></p>
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
      <li>Technological innovation</li>
      <li>Customer-centric product development</li>
      <li>Sustainability</li>
    </ul>
    <p><strong>Business Fundamentals:</strong></p>
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
      <li>Strong financial performance with robust revenue growth and profitability</li>
      <li>Operational efficiency in managing costs and optimizing resources</li>
      <li>Solid competitive positioning with a strong brand and diverse product portfolio</li>
      <li>Focus on sustainability and responsible business practices</li>
    </ul>
  </div>
  <div style={{ marginBottom: '20px' }}>
    <h3 style={{ color: '#ff9900' }}>Amazon (AMZN):</h3>
    <p><strong>Key Industry Themes:</strong></p>
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
      <li>E-commerce dominance</li>
      <li>Cloud computing with Amazon Web Services (AWS)</li>
      <li>Growth in digital advertising</li>
      <li>Expansion in physical retail</li>
      <li>Investments in logistics and delivery</li>
      <li>Culture of innovation and technology</li>
      <li>Global expansion</li>
    </ul>
    <p><strong>Business Fundamentals:</strong></p>
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
      <li>Vast product selection, competitive pricing, and fast delivery services</li>
      <li>Leading position in cloud computing with AWS</li>
      <li>Rapid growth in digital advertising</li>
      <li>Integration of technology in physical retail stores</li>
      <li>Advanced logistics system for reliable delivery</li>
      <li>Continuous investment in innovation and technology</li>
      <li>Global expansion to reach more customers</li>
    </ul>
  </div>
  <div>
    <h3 style={{ color: '#34a853' }}>Google:</h3>
    <p><strong>Key Industry Themes:</strong></p>
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
      <li>Geopolitical events and foreign policy</li>
      <li>Adapting to evolving technology platforms</li>
      <li>Market fluctuations</li>
      <li>Risks associated with acquisitions and investments</li>
      <li>Importance of talent management</li>
    </ul>
    <p><strong>Business Fundamentals:</strong></p>
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
      <li>Navigating geopolitical challenges and foreign policy landscapes</li>
      <li>Adapting products and services to changing technology platforms</li>
      <li>Managing market price fluctuations</li>
      <li>Addressing risks related to acquisitions and investments</li>
      <li>Focus on talent retention, hiring, and corporate culture</li>
    </ul>
  </div>
  <p>These themes and fundamentals are central to the operations, strategies, and success of Apple, Amazon, and Google in 2023.</p>
  <p>Links for all notebooks can be found here: <a href="https://github.com/bme3412/AI_Projects_with_Python/tree/main/LlamaIndex/Agents" target="_blank" rel="noopener noreferrer">https://github.com/bme3412/AI_Projects_with_Python/tree/main/LlamaIndex/Agents</a></p>
</div>
    </div>
  );
};

export default Article1;