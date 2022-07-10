// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Pervasives from "rescript/lib/es6/pervasives.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function thisSpansSeveralLines(x, y) {
  return x + y | 0;
}

var QQ = {
  thisSpansSeveralLines: thisSpansSeveralLines
};

function thisIsInInterface(x) {
  return x;
}

var AA = {
  thisIsInInterface: thisIsInInterface
};

var Bs_version = {
  version: "7.2.0-dev.4",
  header: "// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE",
  package_name: "bs-platform"
};

function map_split_opt(xs, f) {
  if (!xs) {
    return [
            /* [] */0,
            /* [] */0
          ];
  }
  var match = Curry._1(f, xs.hd);
  var d = match[1];
  var c = match[0];
  var match$1 = map_split_opt(xs.tl, f);
  var ds = match$1[1];
  var cs = match$1[0];
  return [
          c !== undefined ? ({
                hd: Caml_option.valFromOption(c),
                tl: cs
              }) : cs,
          d !== undefined ? ({
                hd: Caml_option.valFromOption(d),
                tl: ds
              }) : ds
        ];
}

var inline_threshold = 10 / 8;

var Inner1 = {
  deadInner1: 0,
  liveInner2: 0
};

var Inner2 = {
  liveInner3: 0
};

var Scope = {
  dead1: 1,
  Inner1: Inner1,
  dead2: 2,
  Inner2: Inner2,
  live3: 3
};

var WithSignature = {
  dead8: 8,
  live9: 9,
  dead10: 10,
  live11: 11
};

var foo = Pervasives.print_int;

var bar = Pervasives.print_int;

var thisHasSemicolons = 3;

var dead4 = 4;

var live5 = 5;

var dead5 = 5;

var live6 = 6;

var dead7 = 7;

export {
  QQ ,
  AA ,
  thisHasSemicolons ,
  Bs_version ,
  map_split_opt ,
  inline_threshold ,
  Scope ,
  dead4 ,
  live5 ,
  dead5 ,
  live6 ,
  dead7 ,
  WithSignature ,
  foo ,
  bar ,
}
/* No side effect */
