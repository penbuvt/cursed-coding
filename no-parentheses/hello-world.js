const call = Function`const [, f, ...args] = arguments; Reflect.apply.call\`\${f}\${null}\${args}\``;

call`${console.log}${"Hello, World!"}`;
