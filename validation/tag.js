const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateTag(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Tag name cannot be blank";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
