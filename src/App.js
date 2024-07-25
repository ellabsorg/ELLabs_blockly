import React from "react";
import "./App.css";

import { BlocklyWorkspace } from "react-blockly";
import * as Blocklyjs from 'blockly/javascript';

const TestBlockly = () => {

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';


  const toolboxConfiguration = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Logic",
        "colour": "#5C81A6",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind": "block",
            "type": "logic_compare"
          },
          {
            "kind": "block",
            "type": "logic_negate"
          },
          {
            "kind": "block",
            "type": "logic_operation"
          },
          {
            "kind": "block",
            "type": "logic_null"
          },
          {
            "kind": "block",
            "type": "logic_ternary"
          },
          {
            "kind": "block",
            "type": "logic_boolean"
          }
        ]
      },
      {
        "kind": "category",
        "name": "Loops",
        "colour": "120",
        "contents": [
          {
            'kind': 'block',
            'type': 'controls_repeat_ext',
            'inputs': {
              'TIMES': {
                'shadow': {
                  'type': 'math_number',
                  "fields": {
                    "NUM": 10
                  }
                }
              }

            }
          },
          {
            'kind': 'block',
            'type': 'controls_whileUntil'
          },
          {
            'kind': 'block',
            'type': 'controls_for',
            "inputs": {
              "FROM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }

              },
              "TO": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }

              },
              "BY": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }

              }
            }
          },
          {
            'kind': 'block',
            'type': 'controls_forEach'
          },
          {
            'kind': 'block',
            'type': 'controls_flow_statements',
            "fields": {
              "FLOW": "BREAK"
            }
          },
        ]
      },
      {
        "kind": "category",
        "name": "Math",
        "colour": "#5CA65C",
        "contents": [
          {
            "kind": "block",
            "type": "math_number",
            "fields": {
              "NUM": 123
            }
          },
          {
            "kind": "block",
            "type": "math_arithmetic",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 1
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_single",
            "inputs": {
              "NUM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": 9
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_trig",
            "inputs": {
          "NUM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 45
              }
            }
          }
        }
          },
          {
            "kind": "block",
            "type": "math_constant",
          },
          {
            "kind": "block",
            "type": "math_number_property",
            "extraState": "<mutation divisor_input=\"false\"></mutation>",
            "inputs": {
          "NUMBER_TO_CHECK": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          }
        }

          },
          {
            "kind": "block",
            "type": "math_round",
            "inputs": {
          "NUM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 3.1
              }
            }
          }
        }

          },
          {
            "kind": "block",
            "type": "math_on_list",
            "extraState": "<mutation op=\"SUM\"></mutation>",
            "fields": {
          "OP": "SUM"
        }
          },
          {
            "kind": "block",
            "type": "math_modulo",
            "inputs": {
          "DIVIDEND": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 64
              }
            }
          },
          "DIVISOR": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 10
              }
            }
          }
        }
          },
          {
            "kind": "block",
            "type": "math_constrain",
            "inputs": {
          "VALUE": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 50
              }
            }
          },
          "LOW": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
          "HIGH": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 100
              }
            }
          }
        }
          },
          {
            "kind": "block",
            "type": "math_random_int",
            "inputs": {
          "FROM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
          "TO": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 100
              }
            }
          }
        }
          },
          {
            "kind": "block",
            "type": "math_random_float",
          },
          {
            "kind": "block",
            "type": "math_atan2",
            "inputs": {
          "X": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
          "Y": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          }
        }
          },
        ]
      },
      {
        "kind": "category",
        "name": "Text",
        "colour": "#5C81A6",
        "contents": [
          {
            'kind': 'block',
            'type': 'text'
          },
          {
            'kind': 'block',
            'type': 'text_print'
          },

        ]
      },

      {
        "kind": "category",
        "name": "Variables",
        "colour": "#a55b80",
        "custom": "VARIABLE"
      },
      // {
      //   "kind": "category",
      //   "name": "Variables",
      //   "colour": "#a55b80",
      //   "custom": "VARIABLE_DYNAMIC"
      // },
      {
        "kind": "category",
        "name": "Functions",
        "colour": "#995ba5",
        "custom": "PROCEDURE"
      }

    ]
  };

  function workspaceDidChange(workspace) {

    const code = Blocklyjs.javascriptGenerator.workspaceToCode(workspace);
    document.getElementById("code").value = code;
    console.log('hhh')
    console.log(code)
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
