import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Writing = () => {
  return (
    <div>
      <Head>
        <title>Writing - Code & Capital</title>
      </Head>
      <h1>Writing</h1>
      <ul>
        <li>
          <Link href="/writing/semantic-chunk-article">
            April 27, 2024 - Why I Prefer Semantic Chunking for RAG Application Development
          </Link>
        </li>
        <li>
          <Link href="/writing/article2">
            April 30, 2024 - [Open Workbook]: Earnings Call Analysis using RAG & Semantic Chunking
          </Link>
        </li>
        <li>
          <Link href="/writing/openai-agent-article">
            May 1, 2024 - [Open Workbook]: 10-Q analysis with Context Augmented OpenAI Agent
          </Link>
        </li>


        <li>
          <Link href="/writing/llama-index-agents">
            May 2, 2024 - Exploring Llama-Index Agents
          </Link>
        </li>
        <li>
          <Link href="/writing/openai-a">
            May 3, 2024 - [Open Workbook]: 10-Q Analysis with LLama-Index Context Retrieval
          </Link>
        </li>
        
        <li>
          <Link href="/writing/openai-a">
            May 7, 2024 - US Inflation Writeup
          </Link>
        </li>

        <li>
          <Link href="/writing/morning-cash-flow">
            May 8, 2024 - Automating Morning Cash Flow Trades
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Writing;