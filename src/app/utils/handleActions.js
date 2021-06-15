import testList from "../baseData/testList.json";
import getNewId from "../utils/getNewId";

const handleActions = (data) => {
  getNewId(testList["corrective-actions"]);
  const newAction = {
    id: getNewId(testList["corrective-actions"]),
    "what-to-do": data.what,
    "why-to-do-it": data.why,
    "how-to-do-it": data.how,
    "where-to-do-it": data.where,
    "until-when": data.until,
  };
  return newAction;
};

export default handleActions;
