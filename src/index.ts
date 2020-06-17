import * as core from '@actions/core';
import { JsonEditor } from './services/json-editor';

try {
  const filename = core.getInput('filename');
  const key = core.getInput('key');
  const value = core.getInput('value');
  const editor = new JsonEditor(filename);
  editor.setProperty(key, value);
  console.log(`Set ${key} to "${value}"`);
} catch (error) {
  console.log(error);
  core.setFailed(error.message);
}