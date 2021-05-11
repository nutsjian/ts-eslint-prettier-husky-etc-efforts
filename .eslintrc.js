module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "alloy",
    "alloy/typescript"
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    myGlobal: false
  },
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
}
