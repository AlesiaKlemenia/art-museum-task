const { JSDOM } = require("jsdom");

const dom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = dom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};

// Clean up after tests
afterAll(() => {
  jest.resetAllMocks();
});
