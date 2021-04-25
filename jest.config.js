module.exports = {
  cacheDirectory: ".jest-cache",
  collectCoverage: true,
  coverageDirectory: ".coverage",
  coverageReporters: ["html", "text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 85,
      statements: 40,
    },
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  collectCoverageFrom: [
    "<rootDir>/components/*/*/src/**/*.{js,jsx}",
    "!static/*",
    "!src/**/*.stories.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
    "!src/**/*.mock.{js,jsx}",
    "!src/**/*.styles.{js,jsx}",
    "!src/**/index.{js,jsx}",
    "!src/index.js",
    "!<rootDir>/node_modules/",
    "!<rootDir>/**/mocks/*",
    "!<rootDir>/**/*.styles.{js,jsx}",
    "!<rootDir>/components/*/*/src/**/index.js",
    "!<rootDir>/components/*/*/src/**/theme.js",
  ],
  roots: ["<rootDir>/components/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/components/**/*/*/src/**/*.test.js"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
