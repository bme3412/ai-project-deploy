// pages/_app.js
import React from 'react';
import '../styles/globals.css';  // Existing global styles
import Navbar from '../components/Navbar';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
