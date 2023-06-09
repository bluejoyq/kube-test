module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ["./tsconfig.base.json", "./producer/**/tsconfig.json","./consumer/**/tsconfig.json"],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides : [
    {
      extends:[ "next/core-web-vitals"],
      files: ["consumer/**/*.ts?(x)", "consumer/**/*.js?(x)"],
    }
  ]
};
