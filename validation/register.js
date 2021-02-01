const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  debugger;

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";
  data.handle = validText(data.handle) ? data.handle : "";

  if (!Validator.isLength(data.handle, { min: 5, max: 21 })) {
    errors.handle = "Handle must be 5 to 21 characters";
  }

  if (!Validator.isLength(data.password, { min: 5, max: 21 })) {
    errors.password = "Password must be 5 to 21 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle cannot be blank";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email cannot be blank";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password cannot be blank";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password2 cannot be blank";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password = "Passwords must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
