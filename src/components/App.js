import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const handleHtmlChange = (newValue) => {
    setHtml(newValue);
  };

  const handleResetClick = () => {
    setHtml("");
    setCss("");
    setJs("");
  };

  return (
    <>
      <div className="pane top-pane">
      <Editor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={handleHtmlChange}
      />
       <Editor
        language="css"
        displayName="CSS"
        value={css}
        onChange={(newValue) => setCss(newValue)}
      />
        <Editor
        language="javascript"
        displayName="JS"
        value={js}
        onChange={(newValue) => setJs(newValue)}
      />
      </div>
      <button className="reset-btn" onClick={handleResetClick}>Reset</button>
      <div className="pane">
      <iframe
        srcDoc={`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
      </div>
    </>
  );
}

export default App;
