module.exports = {
  preset: "jest-puppeteer",
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|png)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/src/tests/__mocks__/svgrMock.tsx",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/{0,1}components/(.*)$": "<rootDir>/src/components/$1",
    "^@/{0,1}constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@/tests/(.*)$": "<rootDir>/src/tests/$1",
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  roots: ["<rootDir>"],
  testRegex: "(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: [
    "mock-local-storage",
    "./jest.setup.js",
    "@testing-library/jest-dom",
  ],
};
