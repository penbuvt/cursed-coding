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
const n16 = n8 + n8;
const n17 = n8 + n8 + n1;
const n18 = n17 + n1;
const n19 = n18 + n1;
const n20 = n18 + n2;
const n21 = n20 + n1;
const n22 = n20 + n2;
const n31 = n6 * n5 + n1;
const n33 = n6 * n5 + n3;
const n34 = n6 * n5 + n4;
const n35 = n34 + n1;
const n36 = n6 * n6;
const n37 = n6 * n6 + n1;
const n39 = n6 * n6 + n3;
const n43 = n10 * n4 + n3;
const n59 = n10 * n5 + n9;
const n61 = n10 * n6 + n1;
const n72 = n36 * n2;
const n87 = n10 * n8 + n7;
const n100 = n10 * n10;
const n101 = n100 + n1;
const n124 = n100 + n22 + n2;

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
const str_return = r+e+t+u+r+n;

const c = str_function[n3];
const f = str_function[n0];

const str_constructor = c+o+n+s+t+r+u+c+t+o+r

const func_Function = func_string_at[str_constructor];
const func_String = str_string[str_constructor];

const str_func_Function = func_Function + str_string;
const F = str_func_Function[n9];
const SP = str_func_Function[n8];
const LPAREN = str_func_Function[n17];
const RPAREN = str_func_Function[n18];
const LBRACE = str_func_Function[n20];
const RBRACE = str_func_Function[n36];
const LBRACKET = str_func_Function[n22];
const RBRACKET = str_func_Function[n34];

const B = (TRUE[str_constructor] + str_string)[n9];
const S = (func_String + str_string)[n9];

const obj_array = func_Function(str_return + SP + LBRACKET+RBRACKET)();
const func_Array = obj_array[str_constructor];

const str_toString = t+o+S+t+r+i+n+g;
const h = n17[str_toString](n36);
const j = n19[str_toString](n36);
const v = n31[str_toString](n36);
const z = n35[str_toString](n36);

const obj = func_Function(str_return + SP + LBRACE+RBRACE)();
const func_btoa = func_Function(str_return + SP + b+t+o+a)();
const btoa_obj = func_btoa(obj);

const C = btoa_obj[n9];

const func_Object = obj[str_constructor];
const COMMA = (func_Object[e+n+t+r+i+e+s](a+b)[n0] + str_string)[n1];

const func_fromCharCode = func_String[f+r+o+m+C+h+a+r+C+o+d+e];
const PLUS = func_fromCharCode(n43);
const EQUALS = func_fromCharCode(n61);
const BAR = func_fromCharCode(n124);
const PERCENT = func_fromCharCode(n37);
const SEMI = func_fromCharCode(n59);
const APOS = func_fromCharCode(n39);
const LF = func_fromCharCode(n10);

// n+=1;return(s='',n%3||(s+='Fizz'),n%5||(s+='Buzz'),s||(s+=n))
const fizzBuzzSingleBody = n+PLUS+EQUALS+n1+SEMI+r+e+t+u+r+n+LPAREN+s+EQUALS+APOS+APOS+COMMA+n+PERCENT+n3+BAR+BAR+LPAREN+s+PLUS+EQUALS+APOS+F+i+z+z+APOS+RPAREN+COMMA+n+PERCENT+n5+BAR+BAR+LPAREN+s+PLUS+EQUALS+APOS+B+u+z+z+APOS+RPAREN+COMMA+s+BAR+BAR+LPAREN+s+PLUS+EQUALS+n+RPAREN+RPAREN;
const arr_fizzbuzz = func_Array[f+r+o+m](func_Array(n20), func_Function(s, n, fizzBuzzSingleBody));

const str_console = c+o+n+s+o+l+e;
const str_log = l+o+g;
const func_console = func_Function(str_return + SP + str_console)();

func_console[str_log](arr_fizzbuzz[j+o+i+n](LF));
