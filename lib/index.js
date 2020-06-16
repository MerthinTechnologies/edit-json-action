"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const package_json_editor_1 = require("./services/package-json-editor");
try {
    const packageJsonPath = core.getInput('package-json');
    const key = core.getInput('key');
    const value = core.getInput('value');
    const editor = new package_json_editor_1.PackageJsonEditor(packageJsonPath);
    editor.setProperty(key, value);
    console.log(`Set ${key} to "${value}"`);
}
catch (error) {
    core.setFailed(error.message);
}
//# sourceMappingURL=index.js.map