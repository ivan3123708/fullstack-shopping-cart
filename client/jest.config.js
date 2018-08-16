module.exports = {
  setupFiles: ["raf/polyfill", "<rootDir>/src/tests/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testURL: "http://localhost/",
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/tests/__mocks__/styleMock.js"
  }
};