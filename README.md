# Edit JSON

Github Action to modify json files by properties.

## Inputs

### `filename`

**Required** Path to json file

### `key`

**Required** Property path in json file, e.g `name`, `version`, `scripts.build`

### `value`

**Required** Value for the specified property


## Example usage

```yaml
uses: MerthinTechnologies/edit-json-action@v1
with:
  filename: './package.json'
  key: 'version'
  value: '1.0.1'
```