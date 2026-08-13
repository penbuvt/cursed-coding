let nothing;

const TRUE = !nothing;
const FALSE = !TRUE;

const n0 = +FALSE;
const n1 = +TRUE;
const n2 = n1 + n1;
const n3 = n2 + n1;
const n4 = n3 + n1;
const n5 = n4 + n1;
const n6 = n5 + n1;
const n7 = n6 + n1;
const n8 = n5 + n3;
const n9 = n8 + n1;
const n10 = n5 + n5;
const n17 = n8 + n8 + n1;
const n18 = n17 + n1;
const n20 = n18 + n2;
const n21 = n20 + n1;
const n22 = n20 + n2;
const n33 = n6 * n5 + n3;
const n34 = n6 * n5 + n4;
const n36 = n6 * n6;
const n72 = n36 * n2;
const n87 = n10 * n8 + n7;
const n101 = n10 * n10 + n1;

const str_undefined = typeof nothing;
const str_string = typeof str_undefined;
const str_number = typeof n0;
const str_boolean = typeof TRUE;

const a = str_boolean[n5];
const b = str_boolean[n0];
const d = str_undefined[n2];
const e = str_boolean[n4];
const i = str_string[n3];
const g = str_string[n5];
const l = str_boolean[n3];
const m = str_number[n2];
const n = str_undefined[n1];
const o = str_boolean[n1];
const r = str_string[n2];
const s = str_string[n0];
const t = str_string[n1];
const u = str_undefined[n0];

const func_string_at = str_string[a+t];

const str_function = typeof func_string_at;

const c = str_function[n3];
const f = str_function[n0];

const str_constructor = c+o+n+s+t+r+u+c+t+o+r

const func_Function = func_string_at[str_constructor];
const str_func_Function = func_Function + str_string;

const func_String = str_string[str_constructor];
const S = (func_String + str_string)[n9];

const h = n101[t+o+S+t+r+i+n+g](n21)[n1];

const SP = str_func_Function[n8];
const LPAREN = str_func_Function[n17];
const RPAREN = str_func_Function[n18];
const LBRACE = str_func_Function[n20];
const RBRACE = str_func_Function[n36];
const LBRACKET = str_func_Function[n22];
const RBRACKET = str_func_Function[n34];

const str_return = r+e+t+u+r+n;

const obj = func_Function(str_return + SP + LBRACE+RBRACE)();

const func_btoa = func_Function(str_return + SP + b+t+o+a)();
const btoa_obj = func_btoa(obj);

const C = btoa_obj[n9];

const func_Object = obj[str_constructor];
const COMMA = (func_Object[e+n+t+r+i+e+s](a+b)[n0] + str_string)[n1];

const func_fromCharCode = func_String[f+r+o+m+C+h+a+r+C+o+d+e];
const H = func_fromCharCode(n72);
const W = func_fromCharCode(n87);
const EXCLAMATION = func_fromCharCode(n33)

const str_console = c+o+n+s+o+l+e;
const str_log = l+o+g;
const func_console = func_Function(str_return + SP + str_console)();

func_console[str_log](H+e+l+l+o + COMMA + SP + W+o+r+l+d + EXCLAMATION);
