import { useState } from "react";
import "./App.css";

export default function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const treesPerDollar = 2; // e.g., 1 dollar = 2 trees

  const handleButtonClick = (value) => {
    if (value === "C") {
      setAmount("");
      setResult("");
    } else if (value === "=") {
      const num = parseFloat(amount);
      if (!isNaN(num)) {
        const trees = num * treesPerDollar;
        setResult(`🌱 ${trees} trees planted!`);
      } else {
        setResult("Enter valid amount");
      }
    } else {
      setAmount((prev) => prev + value);
    }
  };

  const buttons = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "0", "C", "=",
  ];

  return (
    <div className="app-container">
      <h1>Donation Calculator 💚</h1>
      <div className="display">
        <div className="input">{amount || "Enter amount ($)"}</div>
        <div className="output">{result}</div>
      </div>

      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>

      <p className="note">Each $1 = {treesPerDollar} trees 🌲</p>
    </div>
  );
}
