import React from "react";
import "./App.css";

import { BlocklyWorkspace } from "react-blockly";

const TestBlockly = () => {
  const [json, setJson] = React.useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  const toolboxConfiguration = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Control",
        "colour": "#5CA65C",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
        ]
      },
      {
        "kind": "category",
        "name": "Logic",
        "colour": "#5C81A6",
        "contents": [
          {
            "kind": "block",
            "type": "logic_compare"
          },
          {
            "kind": "block",
            "type": "logic_operation"
          },
          {
            "kind": "block",
            "type": "logic_boolean"
          }
        ]
      },
      
    ]
  };
  

  return (
    <div style={{ height: "500px", backgroundColor: "rgba(21,22,69, 0.2)" }}>
      <BlocklyWorkspace
        // toolboxCategories={toolboxCategories}
        toolboxConfiguration={toolboxConfiguration}
        initialXml={initialXml}
        className="fill-height"
        // onJsonChange={(json) => {
        //   setJson(json);
        //   console.log(json);
        // }}
      />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value=""
        readOnly
      ></textarea>
    </div>
  );
};

export default TestBlockly;
