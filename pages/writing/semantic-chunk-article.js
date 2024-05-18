import React, { useMemo, useEffect, useState } from 'react';
import Head from 'next/head';
import { useTable } from 'react-table';
import Papa from 'papaparse';
import Image from 'next/image';

const Article1 = () => {
  const articleStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    maxWidth: '800px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6',
    backgroundColor: '#fff',
  };

  const headerStyle = {
    color: '#333',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/semantic-chunk-blog/MSFT_summary_75.csv')
      .then(response => response.text())
      .then(csv => {
        const parsedData = Papa.parse(csv, { header: true }).data;
        setData(parsedData);
      });
  }, []);

  const columns = useMemo(
    () => [
      { Header: 'Summary', accessor: 'Summary' },
      { Header: 'Category', accessor: 'Category' },
      { Header: 'Raw Text', accessor: 'Raw_Text' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div style={articleStyle}>
      <Head>
        <title>Semantic Chunking</title>
      </Head>
      <h2 style={headerStyle}>Why I Prefer Semantic Chunking for RAG Application Development</h2>
      <h4 style={headerStyle}>Naive RAG shares problems with Amazon.com and Best Buy - inventory fatigue dilutes the experience</h4>
      <h4 style={headerStyle}>Semantic chunking uses a threshold to create chunks of text based on similarity of content which creates a mapping of content and allows for more granular analysis</h4>
      <p style={paragraphStyle}>
        Let me first start by saying that I think RAG is great. RAG, short for Retrieval-Augmented Generation, allows users to connect their data to LLM-powered workflows and to have &apos;conversations&apos; with their data. The technique serves an important early step in AI uses cases, which becomes all the more important when one considers that ~80% of the data within an enterprise is unstructured.
      </p>
      <p style={paragraphStyle}>
        But RAG suffers from the same problem that occurs when visiting amazon.com, or visiting a sprawling big-box retailer, or even browsing the shelves of a bookstore. All these examples are great when the user has specific intent for a use case, ex: buying a specific book online; buying a new grill in-store, etc. But when it comes to product or content discovery, where the user may not have specific intent, the sheer scale of potential offerings often is overwhelming for the user.
      </p>
      <p style={paragraphStyle}>
        For this reason, and to help reduce inventory sprawl, Amazon has sub-verticals such as Prime video and Amazon basics, while big-box retailers organize products by separate aisles, and books are organized by genre and then sorted by author. Inventory is organized into chunks, and the same should be done when parsing through data in RAG applications.
      </p>

      <p style={paragraphStyle}>
        The initial production use cases I have seen with &rsquo;na&iuml;ve RAG&apos; are great at answering directed questions. Just write the query and get an answer. But this assumes the user knows what he or she is looking for. Na&iuml;ve RAG is not effective for querying unseen documents as the user does not know the intricacies of the subject matter, or the structure of the document. Without a &lsquo;context mapping&rsquo;, the user is operating blindly, as a prompt to summarize a document either is too generalized or misses out on important context. The comparable analogue for an ecommerce experience would be if Amazon had the minimalist front page search bar of Google, without organization of product or content categories.
      </p>

      <p style={paragraphStyle}>
        The Semantic Splitter model offered by Llama-Index currently offers the best way that I am aware of to create &apos;semantic chunks&apos; for document analysis, which allows for creation of analysis pipelines as each chunk is more specific, with more finetuned context. Semantic chunking creates groups of content based on the semantic meaning derived from the embeddings of the text. Similar content is grouped together by chunk, and content is into more manageable nodes.
      </p>
      <p style={paragraphStyle}>
        The secret sauce with semantic chunking and the model offered by Llama-Index is that the semantic splitter &quot;adaptively picks the breakpoint in-between sentences using embedding similarity...This ensures that a &apos;chunk&apos; contains sentences that are semantically related to each other.&quot;
      </p>
      <p style={paragraphStyle}>
        Cool. So…how?
      </p>
      <p style={paragraphStyle}>
        Semantic chunking takes the embeddings (a representation of text into vector form) of every sentence in the document, compares the similarity of all sentences with each other, and then groups sentences with the most similar embeddings together. This is a stark contrast to na&iuml;ve RAG, which uses a fixed interval to break content into chunks. Semantic chunking is best for preserving the semantic integrity of text and tends to enhance the quality of a retrieval as part of a query because similar content is grouped together.
      </p>
      <p style={paragraphStyle}>
        Let’s see it with some code. Start by importing the packages. Will need to download llama-index and langchain.
      </p>
      <Image src="/semantic-chunk-blog/blog1.jpg" alt="Image 1" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        Next, activate the OpenAI API, and then call the OpenAIEmbedding model and the SemanticSplitterNodeParser. Note that the parameter &apos;breakpoint_percentile_threshhold&apos; can be modified as needed. This is a key parameter as it is the determinant of when semantic context is separated by chunk. More on this later.
      </p>
      <Image src="/semantic-chunk-blog/blog2.jpg" alt="Image 2" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        Then write functions to enable uploading of text files, including Microsoft Word documents, .txt files and PDF documents.
      </p>
      <Image src="/semantic-chunk-blog/blog3.jpg" alt="Image 3" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        For all text files, use the splitter object as defined earlier to separate the uploaded content into smaller nodes, based on the breakpoint threshhold. Output is saved to a dataframe.
      </p>
      <Image src="/semantic-chunk-blog/blog4.png" alt="Image 4" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        After instantiating the OpenAI LLM (will be using &apos;gpt-4-turbo&apos;), each node receives a query to summarize and categorize the text from the node. The summary and category is saved to a dataframe along with the raw text. A high-level summary is written using all of the summarized nodes as inputs.
      </p>
      <Image src="/semantic-chunk-blog/blog5.png" alt="Image 5" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        As mentioned earlier, the parameters on the SemanticSplitterNodeParser can be changed. This chunker works by determining when to &ldquo;break&rdquo; apart sentences. This is done by looking for differences in embeddings between any two sentences. When that difference is past some threshold, then they are split.
      </p>
      <p style={paragraphStyle}>
        A higher threshhold means there is more ambiguity of splitting the different semantic chunks. A lower threshold generally results in more compact chunks. Thresholds are set by percentiles. The below shows a series of semantic chunks for the same piece of text (MSFT earnings call) with different thresholds. In each of the outputs, we see the original raw text, the summarized semantic chunk, and a label for the content. Immediately below shows a 95% threshold.
      </p>
      <Image src="/semantic-chunk-blog/blog_msft95.png" alt="Image 6" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        The 95% threshhold results in very broad chunks. Below shows the 85%, which shows chunks getting gradually more specific.
      </p>
      <Image src="/semantic-chunk-blog/blog_msft85.png" alt="Image 7" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        Finally, below shows the 75%, which may be too specific. As a rule of thumb, 80% is suitable for multi-page and high information density such as quarterly earnings call.
      </p>
      <Image src="/semantic-chunk-blog/blog_msft75.png" alt="Image 8" width={800} height={450} style={{ marginBottom: '5px' }} />
      <p style={paragraphStyle}>
        The result of the pipeline, regardless of the threshold used, is that the entire document is mapped by topic, with each topic summarized. There is no need to manually separate out the document by topic, as this is already done so with semantic chunking. This method is most useful for multi-page documents with high information density. Examples include financial transcripts and legal documents.
      </p>
      <p style={paragraphStyle}>
        The link here shows the entire chunked and summarized MSFT earnings call transcript, using 80% threshold: 
        <a href="/semantic-chunk-blog/MSFT_summary_80.docx" target="_blank" rel="noopener noreferrer"> View Document</a>
      </p>
      <p style={paragraphStyle}>
        -- from Llama-Index:
        <a href="https://docs.llamaindex.ai/en/stable/examples/node_parsers/semantic_chunking/" target="_blank" rel="noopener noreferrer">
          https://docs.llamaindex.ai/en/stable/examples/node_parsers/semantic_chunking/
        </a>
        <br />
        -- the concept of RAG first introduced from this paper: &ldquo;Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks&rdquo;  
         <a href="https://arxiv.org/pdf/2005.11401" target="_blank" rel="noopener noreferrer">
          https://arxiv.org/pdf/2005.11401
        </a>
      </p>
    </div>
  );
};

export default Article1;
