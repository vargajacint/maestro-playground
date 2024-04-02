module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'utils', 'mock'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native/.*|react-navigation|@react-navigation/.*))',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/utils/setup.ts'],
};