"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const json_editor_1 = require("./services/json-editor");
try {
    const filename = core.getInput('filename');
    const key = core.getInput('key');
    const value = core.getInput('value');
    const editor = new json_editor_1.JsonEditor(filename);
    editor.setProperty(key, value);
    console.log(`Set ${key} to "${value}"`);
}
catch (error) {
    core.setFailed(error.message);
}
//# sourceMappingURL=index.js.map