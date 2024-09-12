import React, { useState } from "react";
import "./Token.css";
function TokenGenerator() {
  const [blueTokenCount, setBlueTokenCount] = useState("");
  const [blueTokenPrefix, setBlueTokenPrefix] = useState("");
  const [blueTokensPerRow, setBlueTokensPerRow] = useState("");
  const [redTokenCount, setRedTokenCount] = useState("");
  const [redTokenPrefix, setRedTokenPrefix] = useState("");
  const [redTokensPerRow, setRedTokensPerRow] = useState("");
  const [blueTokens, setBlueTokens] = useState([]);
  const [redTokens, setRedTokens] = useState([]);

  // Generate tokens based on input values
  const generateTokens = () => {
    const blueTokensArray = [];
    const redTokensArray = [];

    for (let i = 1; i <= blueTokenCount; i++) {
      blueTokensArray.push(`${blueTokenPrefix}${i}`);
    }

    for (let i = 1; i <= redTokenCount; i++) {
      redTokensArray.push(`${redTokenPrefix}${i}`);
    }

    setBlueTokens(blueTokensArray);
    setRedTokens(redTokensArray);
  };

  // Clear the form and generated tokens
  const clearForm = () => {
    setBlueTokenCount("");
    setBlueTokenPrefix("");
    setBlueTokensPerRow("");
    setRedTokenCount("");
    setRedTokenPrefix("");
    setRedTokensPerRow("");
    setBlueTokens([]);
    setRedTokens([]);
  };

  // Helper function to split tokens into rows
  const renderTokens = (tokens, tokensPerRow, color) => {
    const rows = [];
    for (let i = 0; i < tokens.length; i += parseInt(tokensPerRow, 10)) {
      rows.push(
        <div className="token-row" key={`${color}-row-${i}`}>
          {tokens.slice(i, i + parseInt(tokensPerRow, 10)).map((token, idx) => (
            <span className={`token ${color}`} key={`${token}-${idx}`}>
              {token}
            </span>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="container">
      <h1>Token Generator</h1>
      <form>
        <div className="form-group">
          <label>Number of Blue Tokens:</label>
          <input
            type="number"
            value={blueTokenCount}
            onChange={(e) => setBlueTokenCount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Prefix for Blue Tokens:</label>
          <input
            type="text"
            value={blueTokenPrefix}
            onChange={(e) => setBlueTokenPrefix(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Blue Tokens per Row:</label>
          <input
            type="number"
            value={blueTokensPerRow}
            onChange={(e) => setBlueTokensPerRow(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Number of Red Tokens:</label>
          <input
            type="number"
            value={redTokenCount}
            onChange={(e) => setRedTokenCount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Prefix for Red Tokens:</label>
          <input
            type="text"
            value={redTokenPrefix}
            onChange={(e) => setRedTokenPrefix(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Red Tokens per Row:</label>
          <input
            type="number"
            value={redTokensPerRow}
            onChange={(e) => setRedTokensPerRow(e.target.value)}
          />
        </div>
        <button type="button" onClick={generateTokens}>
          Generate
        </button>
        <button type="button" onClick={clearForm}>
          Clear
        </button>
      </form>

      {/* Display generated tokens */}
      <div className="tokens-container">
        <h2>Blue Tokens:</h2>
        {renderTokens(blueTokens, blueTokensPerRow, "blue")}
        <h2>Red Tokens:</h2>
        {renderTokens(redTokens, redTokensPerRow, "red")}
      </div>
    </div>
  );
}

export default TokenGenerator;
