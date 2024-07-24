import React from "react";
import "./App.css";

import BlocklyComponent, { Block, Value, Field, Shadow } from "react-blockly";
import { BlocklyWorkspace } from "react-blockly";

const TestBlockly = () => {
  const [json, setJson] = React.useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  const toolboxConfiguration = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "block",
        type: "controls_if",
      },
      {
        kind: "block",
        type: "controls_whileUntil",
      },
      {
        kind: "block",
        type: "logic_compare",
      },
      {
        kind: "block",
        type: "math_number",
      },
    ],
  };

  return (
    <div style={{ height: "500px", backgroundColor: "rgba(21,22,69, 0.2)" }}>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxConfiguration}
        initialXml={initialXml}
        className="fill-height"
        onJsonChange={(json) => {
          setJson(json);
          console.log(json);
        }}
      />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        readOnly
      ></textarea>
    </div>
  );
};

export default TestBlockly;
