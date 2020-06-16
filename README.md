# Edit json action

Github action to modify json file by properties.

## Inputs

### `filename`

**Required** Path to json file

### `key`

**Required** Property path in json file, e.g `name`, `version`, `scripts.build`

### `value`

**Required** Value for the specified property


## Example usage

```yaml
uses: MerthinTechnologies/edit-json-action
with:
  filename: './package.json'
  key: 'version'
  value: '1.0.1'
```
