// jest.config.cjs
module.exports = {
  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },

  transformIgnorePatterns: ['/node_modules/'],
  
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};