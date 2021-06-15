import handleActions from "../utils/handleActions";
import handleList from "../utils/handleList";

const handleData = (values) => {
  const newData = {
    "corrective-actions": handleActions(values),
    "non-conformities": handleList(values, [1, 2]),
  };
  console.log("new data:", newData);
  return newData;
};

export default handleData;
