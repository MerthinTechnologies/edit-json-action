"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageJsonEditor = void 0;
const fs = require("fs");
class PackageJsonEditor {
    constructor(_path) {
        this._path = _path;
    }
    setProperty(key, value) {
        const pkg = this._loadPackageJson();
        this._setProperty(key, value, pkg);
        this._savePackageJson(pkg);
    }
    _loadPackageJson() {
        if (!fs.existsSync(this._path)) {
            throw new Error(`Couldn't find package.json in "${this._path}"`);
        }
        const json = fs.readFileSync(this._path, { encoding: 'utf-8' });
        try {
            return JSON.parse(json);
        }
        catch (e) {
            console.error('Invalid package.json format.');
            throw e;
        }
    }
    _setProperty(key, value, pkg) {
        let obj = pkg;
        const properties = key.split('.');
        for (let index = 0; index < properties.length; index++) {
            const property = properties[index];
            if (index === properties.length - 1) {
                obj[property] = value;
            }
            else {
                if (!obj[property]) {
                    obj[property] = {};
                }
                obj = obj[property];
            }
        }
    }
    _savePackageJson(pkg) {
        const json = JSON.stringify(pkg, null, 2);
        fs.writeFileSync(this._path, json);
    }
}
exports.PackageJsonEditor = PackageJsonEditor;
//# sourceMappingURL=package-json-editor.js.map