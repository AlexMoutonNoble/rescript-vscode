// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as ErrorHandler from "./ErrorHandler.bs.js";

function notification(s) {
  return [
          s,
          s
        ];
}

var Error1 = {
  notification: notification
};

var MyErrorHandler = ErrorHandler.Make(Error1);

Curry._1(MyErrorHandler.notify, "abc");

export {
  Error1 ,
  MyErrorHandler ,
}
/* MyErrorHandler Not a pure module */
