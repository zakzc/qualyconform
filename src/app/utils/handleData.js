const handleData = (data) => {
  const newData = {
    "non-conformities": [
      {
        description: data.description,
        "ocurrence-date": data.date,
        department: data.department,
      },
    ],
    correctiveActions: [
      {
        "what-to-do": data.what,
        "why-to-do-it": data.why,
        "how-to-do-it": data.how,
        "where-to-do-it": data.where,
        "until-when": data.until,
      },
    ],
  };
  return newData;
};

export default handleData;
