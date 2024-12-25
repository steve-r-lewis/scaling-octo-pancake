# UUID Version 4 Generator

A lightweight library for generating random version 4 UUIDs.

## Features

- Generates a random UUID according to the [RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) specification

- Works in both ES module and CommonJS environments

## Installation

You can install this package via npm:

```bash
npm install --save codehikeadventure/uuid_v4_generator
```

Or, if you're using yarn:

```bash
yarn add uuid-generator
```

## Usage

### ES Module

```javascript
import { generateVersion4Uuid } from 'uuid-generator';

const randomUuid = generateVersion4Uuid();
console.log(randomUuid); // Output: a random UUID
```

### CommonJS

```javascript
const uuidGenerator = require('uuid-generator');
const anotherRandomUuid = uuidGenerator.generateVersion4Uuid();
console.log(anotherRandomUuid); // Output: a random UUID
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.