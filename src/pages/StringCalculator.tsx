import React, { useState } from "react";
import "./stringCalculator.css";
import { add } from "./TDD/StringCalculator";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string>("");
  const [isError, setIsError] = useState(false);

  const calculateSum = () => {
    try {
      const sum = add(input);
      setResult(sum.toString());
      setIsError(false); // Not an error
    } catch (error) {
      setResult((error as Error).message);
      setIsError(true); // It's an error
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Calculator</h1>
        <textarea
          rows={4}
          cols={50}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers(1,2...)"
          style={styles.textarea}
        />
        <br />
        <button onClick={calculateSum} className="ripple" style={styles.button}>
          Calculate
        </button>
        {result && (
          <h2>
            Result:{" "}
            <span
              style={{
                ...styles.result,
                color: isError ? "red" : "green",
              }}
            >
              {result}
            </span>
          </h2>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    width: "400px",
  },
  textarea: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "1rem",
    fontSize: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative" as const,
  },
  result: {
    marginTop: "1rem",
  },
};

export default StringCalculator;
