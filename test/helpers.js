const enzyme    = require('enzyme');
const Adapter   = require('enzyme-adapter-react-16');
const jsdom     = require("jsdom");


require('@babel/register')();


process.env.NODE_ENV = 'test';

// Gatsby Specific globals
global.__PATH_PREFIX__ = '';
global.___loader = {
  enqueue: () => {}
};


function setUpDomEnvironment() {
  const { JSDOM } = jsdom;
  const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'});
  const { window } = dom;

  global.window = window;
  global.document = window.document;
  global.navigator = {
      userAgent: 'node.js',
  };
  copyProps(window, global);

}


function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}


setUpDomEnvironment();
enzyme.configure({ adapter: new Adapter() });
