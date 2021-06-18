const handleList = (data, nextId) => {
  const formatDepartment = () => {
    return data.departments.map((n) => parseInt(n));
  };
  const newData = {
    id: nextId,
    description: data.description,
    "ocurrence-date": data.date,
    departments: formatDepartment(),
    "corrective-actions": [],
  };
  return newData;
};

export default handleList;
