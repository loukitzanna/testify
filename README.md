# testify
A comparison of different testing frameworks and configurations
You can check out the branches to view different testing frameworks

## Currently using:
- Mocha/Chai/Enzyme
- Jest/Enzyme
- Jasmine
- AVA / AVA@next

# AVA
**v0.25 uses Babel < 7**
**More deets: https://github.com/avajs/ava/blob/master/docs/recipes/babelrc.md**
Update your `package.json` to have ava configurations:
```json
  "ava": {
    "require": ["babel-register"],
    "babel": "inherit"
  }
```
**[Old Babel Recipe](https://github.com/avajs/ava/blob/v0.25.0/docs/recipes/babelrc.md)**


## Enzyme
requires `enzyme` and an enzyme adapter:
`yarn add --dev enzyme enzyme-adapter-react-16`

Update your `package.json`
Update your `package.json` to have ava configurations:
```json
  "ava": {
    "require": ["babel-register", "./setup.js"],
    "babel": "inherit"
  }
```

setup.js:
```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```
