import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Article1 = () => {
  const articleStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    maxWidth: '800px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6',
    backgroundColor: '#fff'
  };

  const headerStyle = {
    color: '#333',
    textAlign: 'center'
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px'
  };

  return (
    <div style={articleStyle}>
      <Head>
        <title>Context-Augmented Agent</title>
      </Head>
      <h2 style={headerStyle}>Using a Context-Augmented Research Agent to analyze 10-Q filings</h2>
      <h4 style={headerStyle}>An agentic RAG approach breaks prompts into sub-queries, resulting in better indexing and retrieval</h4>
      <h4 style={headerStyle}>Context-augmented agent helps to remove complexity of having too many functions to fit in the prompt</h4>
      <p style={paragraphStyle}>
      Na&iuml;ve RAG (Retrieval Augmented Generation) excels at indexing and retrieving information in response to simple queries. An example would be, given a 10-K filing, &ldquo;What are the main risk factors for Microsoft?&rdquo;. 
      </p>
      <p style={paragraphStyle}>
      But more advanced use cases are needed to answer more complex queries, such as &ldquo;Give me a summary of the entire 10-K&rdquo;, or &ldquo;compare the risk factors from the 2024 10-K as compared to the 2023 10-K&rdquo;. For more complex use cases where a higher level of reasoning is required, agentic RAG is a superior approach. 
      </p>
      <p style={paragraphStyle}>
      Here&rsquo;s an example of using agentic RAG to parse through the trailing three 10-Qs for Microsoft. Every publicly traded company is required to report quarterly information and all filings (each known as a 10-Q) are arranged with the same template. Each document is broken down into sections, the most useful of which are the financial statements, segment information, and any qualitative commentary about the business. 
      To start, import llama-index and other libraries.
      </p>
      <Image src="/agentic-rag-blog/agent1.png" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      Then create a storage object for each of the months pertaining to the quarterly filings (March 2024, December 2023 and September 2023).
      </p>
      <Image src="/agentic-rag-blog/agent2.png" alt="Image 2" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        For each of the 10-Q files, downloaded as a PDF, the content is converted to a vector index and then saved into the storage object.
        A vector index is a data structure that allows for efficient &lsquo;similarity search&rsquo; across a large collection of vectors. 
        A vector is a numerical representation of text that retains semantic context, and the vector index is architected in such a way that it enables the end user to efficiently search for and filter information such that semantically similar text is grouped together.
        Grouping similar text like this enables one to &lsquo;talk&rsquo; with data.
      </p>
      <Image src="/agentic-rag-blog/agent3.png" alt="Image 3" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        With the text from each 10-Q encoded as embeddings and stored in the vector database, the next step is to conduct similarity search, which groups semantically similar content together. In other words, semantic similarity is a measure of likeness between two pieces of text based on their meaning or semantic content. 
        So in the case of Microsoft, an example of text that scores high on semantic similarity would be: &ldquo;Microsoft enhances its Azure cloud infrastructure&rdquo; and &ldquo;Microsoft upgrades its Azure cloud services&rdquo;.
        Whereas text that shows lower semantic linkage would be: &ldquo;Microsoft launches a new Xbox gaming console&rdquo; and &ldquo;Microsoft reports a decline in Windows operating system sales&rdquo;.
      </p>
      <Image src="/agentic-rag-blog/agent4.png" alt="Image 4" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      Next, for each of the three uploaded documents, we use the QueryEngineTool to enable the ability to ask questions about the data.
      </p>
      <Image src="/agentic-rag-blog/agent5.png" alt="Image 5" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      With the data stored and indexed, we will need to write functions to know which data to retrieve. 
      As an example, the below function calculates gross profit (revenue less costs of goods sold). Many more functions to come.
     
      </p>
     <Image src="/agentic-rag-blog/agent6.png" alt="Image 6" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      Below is the response:
      </p>
      <Image src="/agentic-rag-blog/agent7.png" alt="Image 7" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      But wait, there&apos;s more! With an agentic approach we can write many functions to index, retrieve, and parse through the data. Examples are below:
      </p>
      <Image src="/semantic-chunk-blog/blog2.jpg" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      
      </p>

      <Image src="/semantic-chunk-blog/blog3.jpg" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      
      </p>

      <Image src="/semantic-chunk-blog/blog4.png" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      
      </p>

      <Image src="/semantic-chunk-blog/blog5.png" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      
      </p>

      <p style={paragraphStyle}>
      
      </p>

      <Image src="/semantic-chunk-blog/blog_msft95.png" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>

      </p>

      <Image src="/semantic-chunk-blog/blog_msft85.png" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      
      </p>
      <Image src="/semantic-chunk-blog/blog_msft75.png" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
      
      </p>
      <p style={paragraphStyle}>
         
        <a href="/semantic-chunk-blog/MSFT_summary_80.docx" target="_blank" rel="noopener noreferrer"> View Document</a>
      </p>
      <p style={paragraphStyle}>
        -- from Llama-Index:
        <a href="https://docs.llamaindex.ai/en/stable/examples/node_parsers/semantic_chunking/" target="_blank" rel="noopener noreferrer">
          https://docs.llamaindex.ai/en/stable/examples/node_parsers/semantic_chunking/
        </a>
        <br />
        -- the concept of RAG first introduced from this paper: &ldquo;Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks&rdquo;;  
         <a href="https://arxiv.org/pdf/2005.11401" target="_blank" rel="noopener noreferrer">
          https://arxiv.org/pdf/2005.11401
        </a>
      </p>
    </div>
  );
};

export default Article1;
