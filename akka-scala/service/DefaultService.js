'use strict';


/**
 * This api is to allow user log in with a phone and password.
 *
 * body LoginUserRequestFormat Login user details request (optional)
 * returns LoginUserResponseFormat
 **/
exports.loginUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phoneNumber" : "phoneNumber",
  "message" : "message",
  "status" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

