import React from "react";
import "./App.css";
import toolboxConfiguration from "./toolboxConfiguration.json"

import { BlocklyWorkspace } from "react-blockly";
import * as Blocklyjs from 'blockly/javascript';

const TestBlockly = () => {

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  function workspaceDidChange(workspace) {

    const code = Blocklyjs.javascriptGenerator.workspaceToCode(workspace);
    document.getElementById("code").value = code;
  }
  function runCode() {
    // Generate JavaScript code and run it.
    const code = document.getElementById("code").value
    window.LoopTrap = 1000;
    Blocklyjs.JavascriptGenerator.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    Blocklyjs.JavascriptGenerator.INFINITE_LOOP_TRAP = null;
    try {
      eval(code);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div style={{ height: "500px", backgroundColor: "rgba(21,22,69, 0.2)" }}>
      <button onClick={runCode}>Run the bot</button>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxConfiguration}
        initialXml={initialXml}
        className="fill-height"
        onWorkspaceChange={workspaceDidChange}
      />
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        defaultValue=''
      ></textarea>
    </div>
  );
};

export default TestBlockly;
