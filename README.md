# Simple Application Test Suite

This repository is composed of two parts: `app/` folder in which various
library functions doing stupid things are implemented, and `test/` folder in
which there are tests for those library functions.

## Running

To run the test suite execute the following command from repository root:

```bash
node test/
```

If you encounter any problems you may wish to add NODE_DEBUG option:

```bash
NODE_DEBUG=index node test/
```

## Directory structure

```
.
├── app        # Application files
│   ├── input_file.txt  # File with static data needed for one of the functions
│   └── lib.js          # Library functions are implemented here
├── README.md  # This file
└── test       # Test suite
    ├── index.js        # Test runner
    └── tests.js        # Test suite itself
```