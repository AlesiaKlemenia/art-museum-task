module.exports = {
  preset: "jest-puppeteer",
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|png)$": "identity-obj-proxy",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/{0,1}components/(.*)$": "<rootDir>/src/components/$1",
    "^@/{0,1}constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@/tests/(.*)$": "<rootDir>/src/tests/$1",
  },
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  roots: ["<rootDir>"],
  testRegex: "(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./jest.setup.js", "@testing-library/jest-dom"],
};
