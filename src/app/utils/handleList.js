import testList from "../baseData/testList.json";
import getNewId from "../utils/getNewId";

const handleList = (data, actions) => {
  getNewId(testList["corrective-actions"]);
  const newData = {
    id: getNewId(testList["non-conformities"]),
    description: data.description,
    "ocurrence-date": data.date,
    departments: data.departments,
    "corrective-actions": actions,
  };
  return newData;
};

export default handleList;
