



// @ts-check

/** @type {import('knip').KnipConfig} */
const config = {
  entry: ['src/index.ts'],
  project: ['src/**/*.ts'],
  ignore: ['**/*.test.ts'],
  rules: {
    files: 'error',
    dependencies: 'error',
    exports: 'warn'
  }
};

export default config;

