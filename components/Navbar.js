// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal'; // Import the modal component

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Code & Capital: AI & Investing
      </div>
      <ul className="nav-links">
        <li className="start-here">
          <a href="#" onClick={toggleModal}>
            Start Here
          </a>
        </li>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Modal show={showModal} onClose={toggleModal}>
        <div className="modal-header">
          <h2>Welcome to Code & Capital</h2>
        </div>
        <div className="modal-body">
          <p>
            Hi, my name is Brendan Erhard. Thank you for viewing - this is my AI project portfolio. My goal with this work is to explore the possibilities of using AI/LLM to arrive at differentiated investment outcomes.
          </p>
          <p>
            On the home page I have several projects and articles about applying the latest LLMs and LLM frameworks to investment analysis.
          </p>
          <p>
            In terms of models used, I primarily relied on OpenAI chatGPT-4 as well as chatGPT-4o. For LLM frameworks and contextual analysis, I used langchain and llama-index. All content has been deployed to AWS. I also used the FinancialModelingPrep API to pull in financial data.
          </p>
          <p>
            I envision a future where AI will be used in the investment management industry to automate away mundane tasks, while LLMs will be used to augment the capabilities of investment professionals. This project - which I completed on nights and weekends - is my attempt to explore investing with AI.
          </p>
          <p>
            Thank you. Please feel free to reach out via email at <a href="mailto:erhardbr@gmail.com">erhardbr@gmail.com</a>
          </p>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
