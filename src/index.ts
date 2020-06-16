import * as core from '@actions/core';
import { PackageJsonEditor } from './services/package-json-editor';

try {
  const packageJsonPath = core.getInput('package-json');
  const key = core.getInput('key');
  const value = core.getInput('value');
  const editor = new PackageJsonEditor(packageJsonPath);
  editor.setProperty(key, value);
} catch (error) {
  core.setFailed(error.message);
}