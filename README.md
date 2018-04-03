# testify
A comparison of different testing frameworks and configurations
You can check out the branches to view different testing frameworks

## Currently using:
- Mocha/Chai/Enzyme
- Jest/Enzyme
- Jasmine[WIP]
- AVA / AVA@next

# Jasmine
Run `jasmine init` to set up spec folder and `jasmine.json`. I put that in my yarn test script and swapped it out later.

Add a `babel/register` helper:
``` js babel.js
require('babel-core/register');
```

## Enzyme
requires `enzyme` and an enzyme adapter, plus JSDom:
`yarn add --dev enzyme enzyme-adapter-react-16 jsdom`

Configuration requires
```js enzyme.js
import jasmineEnzyme from 'jasmine-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

beforeEach(function () {
  jasmineEnzyme();
});
```
```js jsdom.js
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
```

Don't forget to update your helpers section:
```json
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  "helpers": [
    "helpers/**.js" 
    // or
    "helpers/babel.js",
    "helpers/enzyme.js",
    "helpers/jsdom.js",
  ],
  "stopSpecOnExpectationFailure": false,
  "random": true
}
```
