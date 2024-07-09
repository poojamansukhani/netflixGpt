module.exports = {
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!msw|node-fetch|@bundled-es-modules/statuses|other-es-modules)',
      ],
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        // Optional: Configure the environment options here if necessary
      },
  };