// pages/_app.js
import React from 'react';
import '../styles/globals.css';  // Existing global styles
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
