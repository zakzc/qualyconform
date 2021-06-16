const handleList = (data, nextId) => {
  const newData = {
    id: nextId,
    description: data.description,
    "ocurrence-date": data.date,
    departments: data.departments,
    "corrective-actions": [],
  };
  console.log("handle list: ", newData);
  return newData;
};

export default handleList;
