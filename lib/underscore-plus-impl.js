var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/underscore-plus.mjs
var underscore_plus_exports = {};
__export(underscore_plus_exports, {
  ACRONYMS: () => ACRONYMS,
  adviseBefore: () => adviseBefore,
  camelize: () => camelize,
  capitalize: () => capitalize,
  compactObject: () => compactObject,
  dasherize: () => dasherize,
  deepClone: () => deepClone,
  deepContains: () => deepContains,
  deepExtend: () => deepExtend,
  default: () => underscore_plus_default,
  endsWith: () => endsWith,
  escapeAttribute: () => escapeAttribute,
  escapeRegExp: () => escapeRegExp,
  hasKeyPath: () => hasKeyPath,
  humanizeEventName: () => humanizeEventName,
  humanizeKey: () => humanizeKey,
  humanizeKeystroke: () => humanizeKeystroke,
  isEqual: () => isEqual,
  isEqualForProperties: () => isEqualForProperties,
  isSubset: () => isSubset,
  losslessInvert: () => losslessInvert,
  mapObject: () => mapObject,
  multiplyString: () => multiplyString,
  pluralize: () => pluralize,
  remove: () => remove,
  setValueForKeyPath: () => setValueForKeyPath,
  spliceWithArray: () => spliceWithArray,
  sum: () => sum,
  titleize: () => titleize,
  uncamelcase: () => uncamelcase,
  undasherize: () => undasherize,
  underscore: () => underscore,
  valueForKeyPath: () => valueForKeyPath
});
module.exports = __toCommonJS(underscore_plus_exports);
__reExport(underscore_plus_exports, require("underscore"), module.exports);
var _ = __toESM(require("underscore"), 1);
var import_underscore = require("underscore");
var macModifierKeyMap = {
  cmd: "\u2318",
  ctrl: "\u2303",
  alt: "\u2325",
  option: "\u2325",
  shift: "\u21E7",
  enter: "\u23CE",
  left: "\u2190",
  right: "\u2192",
  up: "\u2191",
  down: "\u2193",
  cmdorctrl: "\u2318"
};
var nonMacModifierKeyMap = {
  cmd: "Cmd",
  ctrl: "Ctrl",
  alt: "Alt",
  option: "Alt",
  shift: "Shift",
  enter: "Enter",
  left: "Left",
  right: "Right",
  up: "Up",
  down: "Down",
  cmdorctrl: "Ctrl"
};
var shiftKeyMap = {
  "~": "`",
  _: "-",
  "+": "=",
  "|": "\\",
  "{": "[",
  "}": "]",
  ":": ";",
  '"': "'",
  "<": ",",
  ">": ".",
  "?": "/"
};
function splitKeyPath(keyPath) {
  let startIndex = 0;
  const keyPathArray = [];
  if (keyPath == null) {
    return keyPathArray;
  }
  for (let i = 0; i < keyPath.length; i++) {
    const char = keyPath[i];
    if (char === "." && (i === 0 || keyPath[i - 1] !== "\\")) {
      keyPathArray.push(keyPath.substring(startIndex, i));
      startIndex = i + 1;
    }
  }
  keyPathArray.push(keyPath.substr(startIndex, keyPath.length));
  return keyPathArray;
}
var isPlainObject = (value) => (0, import_underscore.isObject)(value) && !(0, import_underscore.isArray)(value);
function adviseBefore(object, methodName, advice) {
  const original = object[methodName];
  return object[methodName] = function(...args) {
    if (advice.apply(this, args) !== false) {
      return original.apply(this, args);
    }
  };
}
function camelize(string) {
  if (string) {
    return string.replace(/[_-]+(\w)/g, (m) => m[1].toUpperCase());
  } else {
    return "";
  }
}
function capitalize(word) {
  if (!word) {
    return "";
  }
  if (word.toLowerCase() === "github") {
    return "GitHub";
  } else {
    return word[0].toUpperCase() + word.slice(1);
  }
}
function compactObject(object) {
  const newObject = {};
  for (let key in object) {
    const value = object[key];
    if (value != null) {
      newObject[key] = value;
    }
  }
  return newObject;
}
function dasherize(string) {
  if (!string) {
    return "";
  }
  string = string[0].toLowerCase() + string.slice(1);
  return string.replace(/([A-Z])|(_)/g, function(m, letter) {
    if (letter) {
      return "-" + letter.toLowerCase();
    } else {
      return "-";
    }
  });
}
function deepClone(object) {
  if ((0, import_underscore.isArray)(object)) {
    return object.map((value) => deepClone(value));
  } else if ((0, import_underscore.isObject)(object) && !(0, import_underscore.isFunction)(object)) {
    return mapObject(object, (key, value) => [key, deepClone(value)]);
  } else {
    return object;
  }
}
function deepExtend(target) {
  let result = target;
  let i = 0;
  while (++i < arguments.length) {
    const object = arguments[i];
    if (isPlainObject(result) && isPlainObject(object)) {
      const keys = Object.keys(object);
      for (let key of keys) {
        result[key] = deepExtend(result[key], object[key]);
      }
    } else {
      result = deepClone(object);
    }
  }
  return result;
}
function deepContains(array, target) {
  if (array == null) {
    return false;
  }
  for (let object of array) {
    if ((0, import_underscore.isEqual)(object, target)) {
      return true;
    }
  }
  return false;
}
function endsWith(string, suffix) {
  if (suffix == null) {
    suffix = "";
  }
  if (string) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
  } else {
    return false;
  }
}
function escapeAttribute(string) {
  if (string) {
    return string.replace(/"/g, "&quot;").replace(/\n/g, "").replace(/\\/g, "-");
  } else {
    return "";
  }
}
function escapeRegExp(string) {
  if (string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  } else {
    return "";
  }
}
var ACRONYMS = /* @__PURE__ */ new Map([
  ["ansi", "ANSI"],
  ["api", "API"],
  ["bibtex", "BibTeX"],
  ["cdb", "CDB"],
  ["ci", "CI"],
  ["csharp", "C#"],
  ["css", "CSS"],
  ["csv", "CSV"],
  ["docx", "DOCX"],
  ["dxf", "DXF"],
  ["eol", "EOL"],
  ["eslint", "ESLint"],
  ["gfm", "GFM"],
  ["github", "GitHub"],
  ["graphql", "GraphQL"],
  ["hcl", "HCL"],
  ["hsl", "HSL"],
  ["html", "HTML"],
  ["http", "HTTP"],
  ["ide", "IDE"],
  ["ifc", "IFC"],
  ["ini", "INI"],
  ["javascript", "JavaScript"],
  ["json", "JSON"],
  ["kdl", "KDL"],
  ["latex", "LaTeX"],
  ["lsp", "LSP"],
  ["mcp", "MCP"],
  ["noqa", "NOQA"],
  ["pdf", "PDF"],
  ["php", "PHP"],
  ["plb", "PLB"],
  ["png", "PNG"],
  ["repl", "REPL"],
  ["rgb", "RGB"],
  ["sofistik", "SOFiSTiK"],
  ["sps", "SPS"],
  ["sql", "SQL"],
  ["svg", "SVG"],
  ["synctex", "SyncTeX"],
  ["tcl", "Tcl"],
  ["tex", "TeX"],
  ["toml", "TOML"],
  ["typescript", "TypeScript"],
  ["ui", "UI"],
  ["uri", "URI"],
  ["url", "URL"],
  ["urs", "URS"],
  ["vscode", "VS Code"],
  ["wingraf", "WinGRAF"],
  ["wps", "WPS"],
  ["xml", "XML"],
  ["yaml", "YAML"]
]);
function titleize(string) {
  if (string) {
    return string.split("-").map((word) => ACRONYMS.get(word.toLowerCase()) ?? capitalize(word)).join(" ");
  } else {
    return "";
  }
}
function humanizeEventName(eventName, eventDoc) {
  const [namespace, event] = eventName.split(":");
  if (event == null) {
    return titleize(namespace);
  }
  const namespaceDoc = titleize(namespace);
  if (eventDoc == null) {
    eventDoc = titleize(event);
  }
  return `${namespaceDoc}: ${eventDoc}`;
}
function humanizeKey(key, platform = process.platform) {
  if (!key) {
    return key;
  }
  const modifierKeyMap = platform === "darwin" ? macModifierKeyMap : nonMacModifierKeyMap;
  if (modifierKeyMap[key]) {
    return modifierKeyMap[key];
  } else if (key.length === 1 && shiftKeyMap[key] != null) {
    return [modifierKeyMap.shift, shiftKeyMap[key]];
  } else if (key.length === 1 && key === key.toUpperCase() && key.toUpperCase() !== key.toLowerCase()) {
    return [modifierKeyMap.shift, key.toUpperCase()];
  } else if (key.length === 1 || /f[0-9]{1,2}/.test(key)) {
    return key.toUpperCase();
  } else {
    if (platform === "darwin") {
      return key;
    } else {
      return capitalize(key);
    }
  }
}
function humanizeKeystroke(keystroke, platform = process.platform) {
  if (!keystroke) {
    return keystroke;
  }
  const keystrokes = keystroke.split(" ");
  const humanizedKeystrokes = [];
  for (keystroke of keystrokes) {
    let keys = [];
    const splitKeystroke = keystroke.split("-");
    for (let index = 0; index < splitKeystroke.length; index++) {
      let key = splitKeystroke[index];
      if (key === "" && splitKeystroke[index - 1] === "") {
        key = "-";
      }
      if (key) {
        keys.push(humanizeKey(key, platform));
      }
    }
    keys = (0, import_underscore.uniq)((0, import_underscore.flatten)(keys));
    if (platform === "darwin") {
      keys = keys.join("");
    } else {
      keys = keys.join("+");
    }
    humanizedKeystrokes.push(keys);
  }
  return humanizedKeystrokes.join(" ");
}
function isSubset(potentialSubset, potentialSuperset) {
  return (0, import_underscore.every)(potentialSubset, (element) => (0, import_underscore.include)(potentialSuperset, element));
}
function losslessInvert(hash) {
  const inverted = {};
  for (let key in hash) {
    const value = hash[key];
    if (inverted[value] == null) {
      inverted[value] = [];
    }
    inverted[value].push(key);
  }
  return inverted;
}
function mapObject(object, iterator) {
  const newObject = {};
  const keys = Object.keys(object);
  for (let key of keys) {
    let value;
    [key, value] = iterator(key, object[key]);
    newObject[key] = value;
  }
  return newObject;
}
function multiplyString(string, n) {
  let finalString = "";
  let i = 0;
  while (i < n) {
    finalString += string;
    i++;
  }
  return finalString;
}
function pluralize(count = 0, singular, plural = singular + "s") {
  if (count === 1) {
    return `${count} ${singular}`;
  } else {
    return `${count} ${plural}`;
  }
}
function remove(array, element) {
  const index = array.indexOf(element);
  if (index >= 0) {
    array.splice(index, 1);
  }
  return array;
}
function setValueForKeyPath(object, keyPath, value) {
  const keys = splitKeyPath(keyPath);
  while (keys.length > 1) {
    const key = keys.shift();
    if (object[key] == null) {
      object[key] = {};
    }
    object = object[key];
  }
  if (value != null) {
    object[keys.shift()] = value;
  } else {
    delete object[keys.shift()];
  }
}
function hasKeyPath(object, keyPath) {
  const keys = splitKeyPath(keyPath);
  for (let key of keys) {
    if (!Object.hasOwn(object, key)) {
      return false;
    }
    object = object[key];
  }
  return true;
}
function spliceWithArray(originalArray, start, length, insertedArray, chunkSize = 1e5) {
  if (insertedArray.length < chunkSize) {
    originalArray.splice(start, length, ...insertedArray);
  } else {
    originalArray.splice(start, length);
    for (let chunkStart = 0, end = insertedArray.length; chunkStart <= end; chunkStart += chunkSize) {
      originalArray.splice(
        start + chunkStart,
        0,
        ...insertedArray.slice(chunkStart, chunkStart + chunkSize)
      );
    }
  }
}
function sum(array) {
  let sum2 = 0;
  for (let elt of array) {
    sum2 += elt;
  }
  return sum2;
}
function uncamelcase(string) {
  if (!string) {
    return "";
  }
  const result = string.replace(/([A-Z])|_+/g, (match, letter = "") => ` ${letter}`);
  return capitalize(result.trim());
}
function undasherize(string) {
  if (string) {
    return string.split("-").map(capitalize).join(" ");
  } else {
    return "";
  }
}
function underscore(string) {
  if (!string) {
    return "";
  }
  string = string[0].toLowerCase() + string.slice(1);
  return string.replace(/([A-Z])|-+/g, (match, letter = "") => `_${letter.toLowerCase()}`);
}
function valueForKeyPath(object, keyPath) {
  const keys = splitKeyPath(keyPath);
  for (let key of keys) {
    object = object[key];
    if (object == null) {
      return;
    }
  }
  return object;
}
function isEqual(a, b, aStack, bStack) {
  if ((0, import_underscore.isArray)(aStack) && (0, import_underscore.isArray)(bStack)) {
    return isEqual_(a, b, aStack, bStack);
  } else {
    return isEqual_(a, b);
  }
}
function isEqualForProperties(a, b, ...properties) {
  for (let property of Array.from(properties)) {
    if (!(0, import_underscore.isEqual)(a[property], b[property])) {
      return false;
    }
  }
  return true;
}
function isEqual_(a, b, aStack = [], bStack = []) {
  if (a === b) {
    return (0, import_underscore.isEqual)(a, b);
  }
  if ((0, import_underscore.isFunction)(a) || (0, import_underscore.isFunction)(b)) {
    return (0, import_underscore.isEqual)(a, b);
  }
  let stackIndex = aStack.length;
  while (stackIndex--) {
    if (aStack[stackIndex] === a) {
      return bStack[stackIndex] === b;
    }
  }
  aStack.push(a);
  bStack.push(b);
  let equal;
  if ((0, import_underscore.isFunction)(a?.isEqual)) {
    equal = a.isEqual(b, aStack, bStack);
  } else if ((0, import_underscore.isFunction)(b?.isEqual)) {
    equal = b.isEqual(a, bStack, aStack);
  } else if ((0, import_underscore.isArray)(a) && (0, import_underscore.isArray)(b) && a.length === b.length) {
    equal = true;
    for (let i = 0; i < a.length; i++) {
      const aElement = a[i];
      if (!isEqual_(aElement, b[i], aStack, bStack)) {
        equal = false;
        break;
      }
    }
  } else if ((0, import_underscore.isRegExp)(a) && (0, import_underscore.isRegExp)(b)) {
    equal = (0, import_underscore.isEqual)(a, b);
  } else if ((0, import_underscore.isElement)(a) && (0, import_underscore.isElement)(b)) {
    equal = a === b;
  } else if ((0, import_underscore.isObject)(a) && (0, import_underscore.isObject)(b)) {
    const aCtor = a.constructor;
    const bCtor = b.constructor;
    const aCtorValid = (0, import_underscore.isFunction)(aCtor) && aCtor instanceof aCtor;
    const bCtorValid = (0, import_underscore.isFunction)(bCtor) && bCtor instanceof bCtor;
    if (aCtor !== bCtor && !(aCtorValid && bCtorValid)) {
      equal = false;
    } else {
      let key;
      let aKeyCount = 0;
      equal = true;
      for (key in a) {
        const aValue = a[key];
        if (!(0, import_underscore.has)(a, key)) {
          continue;
        }
        aKeyCount++;
        if (!(0, import_underscore.has)(b, key) || !isEqual_(aValue, b[key], aStack, bStack)) {
          equal = false;
          break;
        }
      }
      if (equal) {
        let bKeyCount = 0;
        for (key in b) {
          if ((0, import_underscore.has)(b, key)) {
            bKeyCount++;
          }
        }
        equal = aKeyCount === bKeyCount;
      }
    }
  } else {
    equal = (0, import_underscore.isEqual)(a, b);
  }
  aStack.pop();
  bStack.pop();
  return equal;
}
var underscore_plus_default = {
  ..._,
  ACRONYMS,
  adviseBefore,
  camelize,
  capitalize,
  compactObject,
  dasherize,
  deepClone,
  deepContains,
  deepExtend,
  endsWith,
  escapeAttribute,
  escapeRegExp,
  humanizeEventName,
  humanizeKey,
  humanizeKeystroke,
  isSubset,
  losslessInvert,
  mapObject,
  multiplyString,
  pluralize,
  remove,
  setValueForKeyPath,
  hasKeyPath,
  spliceWithArray,
  sum,
  titleize,
  uncamelcase,
  undasherize,
  underscore,
  valueForKeyPath,
  isEqual,
  isEqualForProperties
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACRONYMS,
  adviseBefore,
  camelize,
  capitalize,
  compactObject,
  dasherize,
  deepClone,
  deepContains,
  deepExtend,
  endsWith,
  escapeAttribute,
  escapeRegExp,
  hasKeyPath,
  humanizeEventName,
  humanizeKey,
  humanizeKeystroke,
  isEqual,
  isEqualForProperties,
  isSubset,
  losslessInvert,
  mapObject,
  multiplyString,
  pluralize,
  remove,
  setValueForKeyPath,
  spliceWithArray,
  sum,
  titleize,
  uncamelcase,
  undasherize,
  underscore,
  valueForKeyPath,
  ...require("underscore")
});
//# sourceMappingURL=underscore-plus-impl.js.map
