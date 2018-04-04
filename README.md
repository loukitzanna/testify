# testify
A comparison of different testing frameworks and configurations
You can check out the branches to view different testing frameworks

## Currently using:
- Mocha/Chai/Enzyme
- Jest/Enzyme
- Jasmine
- AVA / AVA@next

# AVA
**v1.0.0 uses Babel >= 7**
**More deets: https://github.com/avajs/ava/blob/master/docs/recipes/babelrc.md**
Update your `package.json` to have ava configurations:
```json
  "ava": {
    "require": [
      "@babel/register",
    ]
  }
```
**[New Babel Recipe](https://github.com/avajs/ava/blob/master/docs/recipes/babel.md)**


## Enzyme
requires `enzyme` and an enzyme adapter:
`yarn add --dev enzyme enzyme-adapter-react-16`

Update your `package.json`
Update your `package.json` to have ava configurations:
```json
  "ava": {
    "require": [
      "@babel/register",
      "./setup.js"
    ]
  }
```

setup.js:
```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import register from '@babel/register';

register({ extensions: ['.ts', '.js', '.tsx', '.jsx']});
configure({ adapter: new Adapter() });
```
