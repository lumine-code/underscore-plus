# @lumine-code/underscore-plus

Extends Underscore with utility functions used by Lumine packages.

[![CI](https://github.com/lumine-code/underscore-plus/actions/workflows/ci.yml/badge.svg)](https://github.com/lumine-code/underscore-plus/actions/workflows/ci.yml)

The package exposes the complete [Underscore](https://underscorejs.org/) API together with helpers for key paths, deep object operations, equality checks, string conversion, event names, and keystroke labels.

## Installation

```sh
npm install @lumine-code/underscore-plus
```

## Usage

```js
const _ = require('@lumine-code/underscore-plus')

_.humanizeEventName('workspace:did-change')
_.valueForKeyPath({editor: {fontSize: 16}}, 'editor.fontSize')
```

ES modules can import individual helpers or the default combined API:

```js
import _, {deepExtend, escapeRegExp} from '@lumine-code/underscore-plus'
```

## Building

```sh
npm install
npm test
```

## Contributing

Bug reports and contributions are welcome on GitHub.
