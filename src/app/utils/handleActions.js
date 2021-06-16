const handleActions = (data, newId) => {
  const newAction = {
    id: newId,
    "what-to-do": data.what,
    "why-to-do-it": data.why,
    "how-to-do-it": data.how,
    "where-to-do-it": data.where,
    "until-when": data.until,
  };
  return newAction;
};

export default handleActions;
