import * as Blockly  from 'blockly';
import * as Blocklyjs  from 'blockly/javascript';


Blockly.Blocks['indexOf'] = {
    init: function() {
      
      this.appendValueInput('VALUE')
          .setCheck('String')
          .appendField(new Blockly.FieldDropdown([["index of","FIRST"], ["last index of","END"]]), "MODE");
      this.appendValueInput('FIND')
          .setCheck('String')
          .appendField('inside string');
      this.setOutput(true, 'String');
      this.setColour(160);
      this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
  };
  Blocklyjs.javascriptGenerator.forBlock['indexOf'] = function(block) {
    // Search the text for a substring.
    var operator = block.getFieldValue('MODE') === 'FIRST' ? 'indexOf' : 'lastIndexOf';
    var subString = Blocklyjs.javascriptGenerator.valueToCode(block, 'VALUE',
        Blocklyjs.javascriptGenerator.ORDER_NONE) || '\'\'';
    var text = Blocklyjs.javascriptGenerator.valueToCode(block, 'FIND',
        Blocklyjs.javascriptGenerator.ORDER_MEMBER) || '\'\'';
    var code = text + '.' + operator + '(' + subString + ')';
    return [code, Blocklyjs.javascriptGenerator.ORDER_FUNCTION_CALL];
  };



