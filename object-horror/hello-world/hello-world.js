function hello() {
  const bool_false = !Object;
  const bool_true = !!Object;

  const zero = +bool_false;
  const one = +bool_true;
  const two = one + one;
  const three = one + two;
  const four = two + two;
  const five = two + three;
  const six = three + three;
  const eight = four + four;
  const nine = eight + one;
  const ten = five + five;
  const eleven = five + six;

  const str_function = typeof Object;
  const str_string = typeof typeof Object;
  const str_object = typeof Object();
  const str_boolean = typeof !Object;
  const str_number = typeof +Object;
  const str_str_object = Object + str_function;

  const b = str_object[one];
  const c = str_function[three];
  const e = str_object[three];
  const f = str_function[zero];
  const g = str_string[five];
  const i = str_string[three];
  const l = str_boolean[three];
  const m = str_number[two];
  const n = str_function[two];
  const o = str_function[six];
  const r = str_string[two];
  const s = str_string[zero];
  const t = str_function[four];
  const u = str_function[one];
  const space = str_str_object[eight];

  const str_constructor = c + o + n + s + t + r + u + c + t + o + r;

  const func_Function = Object[str_constructor];
  const func_String = s[str_constructor];

  const str_funcString = func_String + s;
  const S = str_funcString[nine];

  const str_funcAnon = func_Function() + c;
  const a = str_funcAnon[nine];

  const func_btoa = func_Function(
    r + e + t + u + r + n +
    space +
    b + t + o + a
  )();

  const h = func_btoa(a + a + a)[three];
  const C = func_btoa(Object())[nine];
  const d = func_btoa(Object())[eight];

  const str_fromCharCode = f + r + o + m + C + h + a + r + C + o + d + e;
  const func_String_fromCharCode = func_String[str_fromCharCode];

  const H = func_String_fromCharCode(eight * nine);
  const W = func_String_fromCharCode(nine * ten - three);
  const comma = func_String_fromCharCode(eleven * four);
  const exclamation = func_String_fromCharCode(eleven * three);

  const obj_console = func_Function(
    r + e + t + u + r + n +
    space +
    c + o + n + s + o + l + e
  )();
  const func_console_log = obj_console[l + o + g];

  func_console_log(
    H + e + l + l + o +
    comma + space +
    W + o + r + l + d +
    exclamation
  );
}

module.exports = {
  hello,
};
