module.exports = {
  preset: '@babel/preset-env',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', 
  },
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testRegex: '(/tests/.*\\.(test|spec))\\.(js|jsx)$', 
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'], 
};
