# underscore-plus

Extends Underscore with additional utility functions.

## Features

- **Complete Underscore API**: re-exports every function from [Underscore](https://underscorejs.org/).
- **Object utilities**: adds key-path access, deep cloning, deep extension, and focused equality helpers.
- **String utilities**: provides case conversion, escaping, pluralization, and readable event names.
- **Keystroke labels**: formats platform-specific shortcut labels for Windows, macOS, and Linux.

## Installation

```sh
npm install @lumine-code/underscore-plus
```

## Usage

```js
const _ = require("@lumine-code/underscore-plus");

_.humanizeEventName("workspace:did-change");
_.valueForKeyPath({ editor: { fontSize: 16 } }, "editor.fontSize");
```

ES modules can import individual helpers or the default combined API:

```js
import _, { deepExtend, escapeRegExp } from "@lumine-code/underscore-plus";
```

## Building

```sh
npm install
npm test
```

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
