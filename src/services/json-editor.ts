import * as fs from 'fs';

export class JsonEditor {
  public constructor(private _path: string) {
  }

  public setProperty(key: string, value: string) {
    const pkg = this._loadPackageJson();
    this._setProperty(key, value, pkg);
    this._savePackageJson(pkg);
  }

  private _loadPackageJson(): any {
    if (!fs.existsSync(this._path)) {
      throw new Error(`Couldn't find file in "${this._path}"`);
    }
    const json = fs.readFileSync(this._path, { encoding: 'utf-8' });
    try {
      return JSON.parse(json);
    } catch(e) {
      console.error('Invalid json format.');
      throw e;
    }
  }
  
  private _setProperty(key: string, value: string, pkg: any) {
    let obj = pkg;
    const properties = key.split('.');
    
    for (let index = 0; index < properties.length; index++) {
      const property = properties[index];
      if (index === properties.length - 1) {
        obj[property] = value;
      } else {
        if (!obj[property]) {
          obj[property] = {};
        }
        obj = obj[property];
      }
    }
  }

  private _savePackageJson(pkg: any) {
    const json = JSON.stringify(pkg, null, 2);
    fs.writeFileSync(this._path, json);
  }
}