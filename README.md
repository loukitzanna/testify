# testify
A comparison of different testing frameworks and configurations
You can check out the branches to view different testing frameworks

## Currently using:
- Mocha/Chai/Enzyme
- Jest/Enzyme
- Jasmine
- AVA / AVA@next

# Jest
It... just works, more or less.
Oh, add `eslint-plugin-jest` to yarn to get eslint goodness.
`yarn add --dev eslint-plugin-jest`
then update your eslint config accordingly:
```json
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:jest/recommended"
  ],
```

## Enzyme
requires `enzyme` and an enzyme adapter:
`yarn add --dev enzyme enzyme-adapter-react-16`

Update your `package.json` to have ava configurations:
```json
  "jest": {
    "setupTestFrameworkScriptFile": "<rootDir>/setup.js"
  }
```

setup.js:
```js
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
```
