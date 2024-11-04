# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## How to run tests

```bash
# install node dependencies
npm install

# run local tests (runs mocha and generates mochawesome-report)
npm test

# run local tests and get C8 coverage report
npm run test:coverage
```

[![Coverage Status](https://coveralls.io/repos/github/tupito/swt/badge.svg?branch=main)](https://coveralls.io/github/tupito/swt?branch=main)