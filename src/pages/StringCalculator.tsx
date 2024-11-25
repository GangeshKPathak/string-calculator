import React, { useState } from "react";
import "./stringCalculator.css";
import { add } from "./TDD/StringCalculator";
const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const calculateSum = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult((error as Error).message);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>String Calculator</h1>
      <textarea
        rows={4}
        cols={50}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
      />
      <br />
      <button
        onClick={calculateSum}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Calculate
      </button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default StringCalculator;
