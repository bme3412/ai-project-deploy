import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const NCAABracketPrediction = () => {
  const project = {
    title: "NCAA Tournament Bracket Prediction",
    description: `The NCAA Tournament Bracket Prediction project aims to predict the outcomes and scores of the NCAA Men's Basketball Tournament using machine learning techniques. By analyzing historical data and team statistics, the project generates predictions for each round of the tournament, including the championship game.

#### Methodology:
1. **Data Collection:** Historical NCAA tournament data and team statistics are collected and preprocessed.
2. **Feature Selection:** Relevant predictors for game outcomes are identified through feature selection and engineering.
3. **Model Training:** Machine learning models (XGBoost Classifier and XGBoost Regressor) are trained and evaluated for predicting game winners and scores.
4. **Bracket Simulation:** The tournament bracket is simulated round by round using the trained models.`,
    details: `#### Results:
The project successfully predicted the outcomes and scores for each round of the NCAA tournament. The predicted bracket, including the championship game, is as follows:

| Round | Team 1 | Team 2 | Predicted Winner |
| ----- | ------ | ------ | ---------------- |
| Round 1 | Connecticut | Stetson | Connecticut |
| Round 1 | Florida Atlantic | Northwestern | Northwestern |
| ... | ... | ... | ... |

The predicted champion: **Connecticut**

Predicted championship game score:
- Connecticut: 78.23
- Houston: 70.66

#### Evaluation:
The project's predictions were evaluated against the actual tournament results. Points were awarded based on correct predictions in each round. The total points earned: **14**

#### Code and Data:
The complete code and data used for this project can be found in the project repository on [GitHub](https://github.com/example/ncaa-bracket-prediction).`,
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", textAlign: "center" }}>
        {project.title}
      </h1>
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <ReactMarkdown
          style={{
            fontSize: "16px",
            color: "#666",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          {project.description}
        </ReactMarkdown>
      </div>
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <ReactMarkdown
          style={{
            fontSize: "16px",
            color: "#666",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          {project.details}
        </ReactMarkdown>
      </div>
      <Link href="/" legacyBehavior>
        <a
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "20px",
            color: "#0066cc",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          &larr; Back to Projects
        </a>
      </Link>
    </div>
  );
};

export default NCAABracketPrediction;