// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Format from "rescript/lib/es6/format.js";
import * as Lexing from "rescript/lib/es6/lexing.js";
import * as $$String from "rescript/lib/es6/string.js";

function styleToString(s) {
  if (s) {
    return "MultiLine";
  } else {
    return "SingleLine";
  }
}

function loc(t) {
  return t.loc;
}

function txt(t) {
  return t.txt;
}

function prevTokEndPos(t) {
  return t.prevTokEndPos;
}

function setPrevTokEndPos(t, pos) {
  t.prevTokEndPos = pos;
  
}

function isSingleLineComment(t) {
  var match = t.style;
  if (match) {
    return false;
  } else {
    return true;
  }
}

function toString(t) {
  return Curry._4(Format.sprintf(/* Format */{
                  _0: {
                    TAG: /* String_literal */11,
                    _0: "(txt: ",
                    _1: {
                      TAG: /* String */2,
                      _0: /* No_padding */0,
                      _1: {
                        TAG: /* String_literal */11,
                        _0: "\nstyle: ",
                        _1: {
                          TAG: /* String */2,
                          _0: /* No_padding */0,
                          _1: {
                            TAG: /* String_literal */11,
                            _0: "\nlines: ",
                            _1: {
                              TAG: /* Int */4,
                              _0: /* Int_d */0,
                              _1: /* No_padding */0,
                              _2: /* No_precision */0,
                              _3: {
                                TAG: /* Char_literal */12,
                                _0: /* '-' */45,
                                _1: {
                                  TAG: /* Int */4,
                                  _0: /* Int_d */0,
                                  _1: /* No_padding */0,
                                  _2: /* No_precision */0,
                                  _3: {
                                    TAG: /* Char_literal */12,
                                    _0: /* ')' */41,
                                    _1: /* End_of_format */0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  _1: "(txt: %s\nstyle: %s\nlines: %d-%d)"
                }), t.txt, t.style ? "MultiLine" : "SingleLine", t.loc.loc_start.pos_lnum, t.loc.loc_end.pos_lnum);
}

function makeSingleLineComment(loc, txt) {
  return {
          txt: txt,
          style: /* SingleLine */0,
          loc: loc,
          prevTokEndPos: Lexing.dummy_pos
        };
}

function makeMultiLineComment(loc, txt) {
  return {
          txt: txt,
          style: /* MultiLine */1,
          loc: loc,
          prevTokEndPos: Lexing.dummy_pos
        };
}

function fromOcamlComment(loc, txt, prevTokEndPos) {
  return {
          txt: txt,
          style: /* MultiLine */1,
          loc: loc,
          prevTokEndPos: prevTokEndPos
        };
}

function trimSpaces(s) {
  var len = s.length;
  if (len === 0) {
    return s;
  }
  if (!(s[0] === " " || s[len - 1 | 0] === " ")) {
    return s;
  }
  var i = 0;
  while(i < len && s[i] === " ") {
    i = i + 1 | 0;
  };
  var j = len - 1 | 0;
  while(j >= i && s[j] === " ") {
    j = j - 1 | 0;
  };
  if (j >= i) {
    return $$String.sub(s, i, (j - i | 0) + 1 | 0);
  } else {
    return "";
  }
}

export {
  styleToString ,
  loc ,
  txt ,
  prevTokEndPos ,
  setPrevTokEndPos ,
  isSingleLineComment ,
  toString ,
  makeSingleLineComment ,
  makeMultiLineComment ,
  fromOcamlComment ,
  trimSpaces ,
  
}
/* Format Not a pure module */