const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMemeInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title cannot be blank";
  }

  if (Validator.isEmpty(data.tag)) {
    errors.tag = "Tag cannot be blank";
  }
};
