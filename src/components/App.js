import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./Editor";

function App() {
  const [htmlValue, setHtmlValue] = useLocalStorage("html", "");
  const [cssValue, setCssValue] = useLocalStorage("css", "");
  const [jsValue, setJsValue] = useLocalStorage("js", "");

  const handleResetClick = () => {
    setHtmlValue("");
    setCssValue("");
    setJsValue("");
  };

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={htmlValue}
          onChange={setHtmlValue}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={cssValue}
          onChange={setCssValue}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={jsValue}
          onChange={setJsValue}
        />
      </div>
      <button className="reset-btn" onClick={handleResetClick}>Reset</button>
      <div className="pane">
        <iframe
          srcDoc={`
            <html>
              <body>${htmlValue}</body>
              <style>${cssValue}</style>
              <script>${jsValue}</script>
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
