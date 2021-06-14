const validate = (values) => {
  const errors = {};

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 4) {
    errors.description = "Description must be at least 4 characters long";
  }

  if (!values.department) {
    errors.department = "Required";
  } else if (values.department.length < 1) {
    errors.department = "At least one department must be selected";
  }

  if (!values.date) {
    errors.date = "Required";
  } else if (values.date.length !== 10) {
    errors.date = "Dates in the format DD/MM/YYYY";
  }

  if (!values.what) {
    errors.what = "Required";
  } else if (values.what.length < 4) {
    errors.what = "What field must be at least 4 characters long";
  }

  if (!values.why) {
    errors.why = "Required";
  } else if (values.why.length < 4) {
    errors.why = "Why field must be at least 4 characters long";
  }

  if (!values.how) {
    errors.how = "Required";
  } else if (values.how.length < 4) {
    errors.how = "How field must be at least 4 characters long";
  }

  if (!values.where) {
    errors.where = "Required";
  } else if (values.where.length < 4) {
    errors.where = "Where field must be at least 4 characters long";
  }

  if (!values.until) {
    errors.until = "Required";
  } else if (values.until.length < 4) {
    errors.until = "Until when field must be at least 4 characters long";
  }

  return errors;
};

export default validate;
