/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  name: "genio",
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "src",
  coverageProvider: "babel",
  coverageDirectory: "<rootDir>/../coverage",
  coveragePathIgnorePatterns: ["node_modules"],
  collectCoverageFrom: ["services/*.{ts,tsx,js,jsx}", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
