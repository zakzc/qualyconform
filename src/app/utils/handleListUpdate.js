const handleListUpdate = (values, newItem) => {
  let newActions = values["corrective-actions"].map((i) => i);
  newActions.push(parseInt(newItem));
  const updatedValues = {
    id: values.id,
    description: values.description,
    "ocurrence-date": values["ocurrence-date"],
    departments: values.departments,
    "corrective-actions": newActions,
  };
  return updatedValues;
};

export default handleListUpdate;
