const validateList = (values) => {
  const errors = {};

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 4) {
    errors.description = "Description must be at least 4 characters long";
  }

  if (!values.departments) {
    errors.departments = "Required";
  } else if (values.departments.length < 1) {
    errors.departments = "At least one department must be selected";
  }

  if (!values.date) {
    errors.date = "Required";
  } else if (values.date.length !== 10) {
    errors.date = "Dates in the format DD/MM/YYYY";
  }

  return errors;
};

export default validateList;
