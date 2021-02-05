import * as APIUtil from "../util/template_api_util";

// catch typos section
export const FETCH_TEMPLATE = "FETCH_TEMPLATE";
export const FETCH_TEMPLATES = "FETCH_TEMPLATES";
export const CREATE_TEMPLATE = "CREATE_TEMPLATE";
export const DELETE_TEMPLATE = "DELETE_TEMPLATE";

// reg actions to reducer
const createTemplate = (payload) => {
  return {
    type: CREATE_TEMPLATE,
    payload,
  };
};

const receiveTemplate = (payload) => {
  return {
    type: FETCH_TEMPLATE,
    payload,
  };
};

const receiveTemplates = (payload) => {
  return {
    type: FETCH_TEMPLATES,
    payload,
  };
};

const removeTemplate = (payload) => {
  return {
    type: DELETE_TEMPLATE,
    payload,
  };
};

// thunk actions to backend API
export const fetchTemplates = () => {
  return (dispatch) => {
    debugger;
    return APIUtil.getTemplates().then((templates) => {
      debugger;
      return dispatch(receiveTemplates(templates));
      // .catch((err) => console.log(err));
    });
  };
};

export const fetchTemplate = (templateId) => {
  return (dispatch) => {
    return APIUtil.getTemplate(templateId).then((template) => {
      return dispatch(receiveTemplate(template));
      // .catch((err) => console.log(err));
    });
  };
};

export const postTemplate = (template) => {
  return (dispatch) => {
    return APIUtil.createTemplate(template).then((template) => {
      return dispatch(createTemplate(template));
      // .catch((err) => console.log(err));
    });
  };
};

export const deleteTemplate = (templateId) => {
  return (dispatch) => {
    return APIUtil.deleteTemplateFromDb(templateId).then((template) => {
      return dispatch(removeTemplate(template.id)).catch((err) =>
        console.log(err)
      );
    });
  };
};
