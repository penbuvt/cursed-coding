const call = Function`const [, f, ...args] = arguments; return Reflect.apply.call\`\${f}\${this}\${args}\``;
const callThis = Function`const [, f, t, ...args] = arguments; return Reflect.apply.call\`\${f}\${t}\${args}\``;

const n = call`${Number}${process.argv[2] ?? 35}`;

const fizzBuzzSingle = n => {
  return n % 3 === 0 && n % 5 === 0
    ? 'FizzBuzz'
    : n % 3 === 0
    ? 'Fizz'
    : n % 5 === 0
    ? 'Buzz'
    : '' + n;
};

const callSingle = Function`
const { call, fizzBuzzSingle } = arguments[2].functions;
return call\`\${fizzBuzzSingle}\${arguments[1] + 1}\`;
`;

let arr = call`${Array}${n}`;
arr.functions = { call, fizzBuzzSingle };
callThis`${arr.fill}${arr}${0}`;
arr = callThis`${arr.map}${arr}${callSingle}`;

const output = callThis`${arr.join}${arr}${'\n'}`;
call`${console.log}${output}`;
