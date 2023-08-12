module.exports = {
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};