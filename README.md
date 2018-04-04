# testify
A comparison of different testing frameworks and configurations
You can check out the branches to view different testing frameworks

## Currently using:
- Mocha/Chai/Enzyme
- Jest/Enzyme
- Jasmine
- AVA / AVA@next

# Mocha
add `mocha chai`, and I ended up having to add `ignore-styles`. Also, I ended up adding Babel 7.
`@babel/core @babel/preset-env`

update your `package.json`
```json
  "test": "mocha --require babel-core/register --require ignore-styles --require setup.js src/**/*.test.js  --recursive"
```
The requires probably could have been combined into one file but here we are.
Also, you can update your eslint!
```json
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "expect": true
  },
```

## Enzyme
requires `enzyme` and an enzyme adapter, and JSDOm:
`yarn add --dev enzyme enzyme-adapter-react-16 jsdom`

setup.js:
```js
/* setup.js */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.expect = chai.expect;
global.React = React;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
```

woof.
