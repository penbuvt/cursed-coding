# Something From Nothing

Programming challenges, but we are not allowed to use literals or direct references to built-in values.

## Challenge rules

1. No non-derived values are allowed. This includes literals (numbers, objects, arrays, `null`, `undefined`, etc.), default/global objects (`Object`, `Array`, `String`, `Math`, `this`, `globalThis`, `window`, etc.) and functions (`eval`, `parseInt`, etc.). This also includes creating functions and classes using `function`/`class` statements and expressions.
2. Additional values may be derived directly from nothing or indirectly from other derived values, including the values disallowed in #1. They may be saved to variables for convenience, and the variables may be used and referenced as normal.
3. Any construct and operator may be used for deriving values except for static property access (`obj.prop`) and destructuring. In particular, dynamic property access (`obj[prop]`) is explicitly allowed.

## License

0BSD. See the [LICENSE](./LICENSE) file for details.
