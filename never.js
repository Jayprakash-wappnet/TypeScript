"use strict";
//if function return error nothing else then it is never data type
function apiError(msg, code) {
    // return "Message:" + msg + "," + "Error code" + code;
    throw { Message: msg, Errorcode: code };
}
console.log(apiError("Api error", 5001));
