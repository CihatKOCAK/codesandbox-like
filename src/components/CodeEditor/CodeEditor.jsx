import React, { useRef } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript.js";

function CodeEditor(props) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editorRef.current.focus();
    editorRef.current.setCursor(1, 0);
  };

  return (
    <CodeMirror
      value={props.code}
      onBeforeChange={(editor, data, value) => {
        props.setCode(value);
      }}
      options={{
        mode: "javascript",
        theme: "material",
        lineNumbers: true,
      }}
      editorDidMount={handleEditorDidMount}
      onChange={(editor, value) => {
        console.log("controlled", { value });
        console.log("editor", { editor });
      }}
    />
  );
}

export default CodeEditor;
