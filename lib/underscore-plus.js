'use strict'

const implementation = require('./underscore-plus-impl')
const exported = Object.assign({}, implementation.default, implementation)
Object.defineProperty(exported, '__esModule', {configurable: true, value: true, writable: true})
exported.default = implementation.default
module.exports = exported
