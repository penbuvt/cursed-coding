# Object Horror

"In JavaScript, everything is an object."

Programming challenges, but the only values we're allowed to use is the Object constructor and anything derived from it.

## Challenge rules

1. The only non-derived value allowed is the `Object` constructor. All other constructors (`Array`, `String`, etc.), literals (numbers, objects, arrays, `null`, `undefined`, etc.) and default/global objects (`this`, `globalThis`, `window`, `Math`, etc.) and functions (`eval`, `parseInt`, etc.) cannot be used as bare references. This also includes creating functions and classes using function/class statements and expressions.
2. Additional values may be derived directly or indirectly from the `Object` constructor, including the values disallowed in #1. They may be saved to `const` variables for convenience, and the variables may be used and referenced as normal.
3. Any construct and operator may be used for deriving values except for static property access (`obj.prop`) and destructuring. In particular, dynamic property access (`obj[prop]`) is explicitly allowed.

## License

MIT. See the [LICENSE](./LICENSE) file for details.
