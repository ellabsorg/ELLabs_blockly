import {  useState, useEffect } from "react"
import "./custom_Blocks.js";
import "./custom_Blocks.js";
import toolboxConfiguration from "./toolboxConfiguration.json"

import * as Blocklyjs from 'blockly/javascript';
// Import Blockly core.
import * as Blockly from 'blockly/core';
// Import the default blocks.
import * as libraryBlocks from 'blockly/blocks';
// Import a generator.
import {javascriptGenerator} from 'blockly/javascript';


const TestBlockly = () => {
const [workspace, setWorkspace] = useState();
const [Start, setStart] = useState(false);

  useEffect(() => {
    if(!Start){
      setStart(true)
      console.log('start')
    const workspace = Blockly.inject(document.getElementById('blocklyDiv'), {renderer: 'Zelos',toolbox: toolboxConfiguration});
    const state =  Blockly.serialization.workspaces.save(workspace);
    Blockly.serialization.workspaces.load(state, workspace);
    setWorkspace(workspace)
    workspace.addChangeListener(updateCode)
    const supportedEvents = new Set([
      Blockly.Events.BLOCK_CHANGE,
      Blockly.Events.BLOCK_CREATE,
      Blockly.Events.BLOCK_DELETE,
      Blockly.Events.BLOCK_MOVE,
    ]);
    
    function updateCode(event) {
      if (workspace.isDragging()) return; // Don't update while changes are happening.
      if (!supportedEvents.has(event.type)) return;
    
      const code = javascriptGenerator.workspaceToCode(workspace);
      document.getElementById('code').value = code;
    }}
  },[]);


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
    <>
    <div style={{ height: "500px" , backgroundColor: "rgba(21,22,69, 0.2)" }} >
      <button onClick={runCode}>Run the bot</button>
      <div id="blocklyDiv" style={{ height: "500px" , backgroundColor: "rgba(21,22,69, 0.2)" }}  ></div>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        defaultValue=''
        readOnly
      ></textarea>
    </div>
    </>
  );
};

export default TestBlockly;