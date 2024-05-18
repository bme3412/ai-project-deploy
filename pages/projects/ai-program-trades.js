import React, { useMemo, useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useTable } from 'react-table';
import Papa from 'papaparse';

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

  return (
    <div style={articleStyle}>
      <Head>
        <title>Trading with Python</title>
      </Head>
      <h2 style={headerStyle}>Automating Cash-Flow Driven Trades</h2>
      <h4 style={headerStyle}>
        A Python workflow can be used as a second source to verify trades
      </h4>
      <h4 style={headerStyle}>
        Efficiently generate program trades that account for diverse client
        mandates and trade exclusions
      </h4>
      <p style={paragraphStyle}>
        Note: All figures are simulated. Link to code notebooks can be found{' '}
        <a href="https://github.com/bme3412/AI_Projects_with_Python/tree/main/cash-flow">here</a>.
      </p>
      <p style={paragraphStyle}>
        The asset management industry is a flow-driven business which
        necessitates that cash flows be traded to align with client interests.
        With a large book of business and a diverse client base, a python
        workflow can be used as a second source of truth to ensure trade
        accuracy and ensure best execution. More augmentation than automation,
        the example below demonstrates the value provided by an established and
        repeatable process enhanced with logic.
      </p>
      <p style={paragraphStyle}>
        Example: <strong>Monday morning, 8:04 AM EST</strong>. The market is
        limit down as overnight newsflow related to a spreading pathogen spooks
        investors processing the weekend in the US. Meanwhile across the pond, a
        sizable stimulus passed by the ECB has driven European indices to
        session highs. The announcement of market reform efforts in Japan has
        indices trading higher but with dispersion. This coincides with a
        client-driven redemption that is 12% of the portfolio, while a new
        account is onboarding today as well, which, in addition to daily cash
        flows, need to be modeled out to ensure efficient trading against a
        skittish market backdrop. The market opens at 9:30 AM in New York but
        trades need to be on the desk before then, ideally as a block.
      </p>
      <p style={paragraphStyle}>
        Let&apos;s start with some assumptions: $15bn book of business, Global Best
        Ideas Equity strategy with 50 accounts ranging from $50 million to $4.5
        billion AUM. Most have daily cash flows that need to be reinvested. Most
        accounts follow the flagship account, but some accounts have
        client-directed restrictions of certain securities. Trades are processed
        in Aladdin but the department operates with a &quot;Second Set of Eyes&quot; policy
        for getting trades to the desk.
      </p>
      <p style={paragraphStyle}>
        <strong>8:06 AM EST</strong>. First thing is to take an appraisal of the accounts. For now we&apos;ll focus on one representative account, with holdings below.
      </p>
      <Image src="/morning-cash-flow/portfolio.png" alt="Image 1" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
      <p style={paragraphStyle}><strong>8:08 AM EST</strong>. With minimal dispersion across accounts, for now let&apos;s tackle the 12% client redemption so that we can combine it with a block with other trades.
        It&apos;s a $75m account with the same positions, and a program trade is needed to raise enough cash to cover this outflow. While the trades will be implemented in Blackrock Aladdin, a Python workload can be used to map out trades.
      </p>
      <p style={paragraphStyle}><strong>8:10 AM EST</strong>. We need to generate a program trade for $9m (12% of the account) to raise to cash without changing the underlying position weights. Below is the code to do so.</p>
      <Image src="/morning-cash-flow/program-trade-code.png" alt="Image 2" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
      <p style={paragraphStyle}><strong>8:13 AM EST</strong>. And below is the proposed trade to send to the desk. Note that Japanese securities have been constrained to trade in lots of 100 shares, as is convention.</p>
      <Image src="/morning-cash-flow/program-trade.png" alt="Image 3" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
      <Image src="/morning-cash-flow/program-trade-summary.png" alt="Image 4" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
      <p style={paragraphStyle}><strong>8:20 AM EST</strong>. Next, after reviewing the morning cash flows, a different account ($100m AUM) just experienced an inflow and a buy program trade is needed to invest the cash. This account has certain ownership restrictions and as part of the program, certain securities will be excluded. Below are top holdings:</p>
      <Image src="/morning-cash-flow/portfolio-exclude-buy.png" alt="Image 5" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
      <p style={paragraphStyle}>Due to client restrictions, MSFT and AAPL are being excluded from the program trade. As a result of the exclusions, ending position weights are not uniform after the program trade.</p>
      <Image src="/morning-cash-flow/portfolio-exclude-trade.png" alt="Image 6" width={800} height={600} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
    </div>
  );
};

export default Article1;
