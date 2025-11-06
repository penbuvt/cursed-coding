const call = Function`const [, f, ...args] = arguments; return Reflect.apply.call\`\${f}\${this}\${args}\``;
const callThis = Function`const [, f, t, ...args] = arguments; return Reflect.apply.call\`\${f}\${t}\${args}\``;
const callSelfThis = Function`const [, f, ...args] = arguments; return Reflect.apply.call\`\${f}\${f}\${args}\``;

const n = call`${Number}${process.argv[2] ?? 3}`;

const continuation = Function`
  const [n, s, d, p] = arguments;
  return [
    ...this.callThis\`\${this.move}\${this}\${n - 1}\${s}\${p}\${d}\`,
    [s, d],
    ...this.callThis\`\${this.move}\${this}\${n - 1}\${p}\${d}\${s}\`,
  ]
`;

const move = Function`
  const [n, s, d, p] = arguments;
  return n > 0 ? this.callThis\`\${this.continuation}\${this}\${n}\${s}\${d}\${p}\` : [];
`;

const context = {
  call,
  callThis,
  callSelfThis,
  continuation,
  move,
};

const moves = callThis`${move}${context}${n}${1}${3}${2}`;

const formatMove = Function`
  const [s, d] = arguments[0];
  return \`\${s} -> \${d}\`;
`;

const movesList = callThis`${moves.map}${moves}${formatMove}`;
const output = callThis`${movesList.join}${movesList}${'\n'}`;
call`${console.log}${output}`;
