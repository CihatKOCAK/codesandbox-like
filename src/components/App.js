import React, { useState } from "react";
import { CodeEditor } from ".";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const runCode = () => {
    try {
      // evaluate user code in a sandboxed environment
      const output = eval(`
        (function() {
          ${code}
        })()
      `);
      setOutput(output);
      setError("");
    } catch (err) {
      setError(err.message);
      setOutput("");
    }
  };

  return (
    <div>
      <CodeEditor code={code} setCode={setCode} />
      <button onClick={runCode}>Run</button>
      {output && <div>Output: {output.toString()}</div>}
      {error && <div>Error: {error.toString()}</div>}
    </div>
  );
}

export default App;
