const getNewId = (data) => {
  const arrayOfIds = [];
  // get all ids
  data.map((i) => arrayOfIds.push(i.id));
  // find highest number
  const newId = Math.max.apply(null, arrayOfIds);
  console.log("dat", data, arrayOfIds, newId);
  // adds 1 to get new id
  return newId + 1;
};
export default getNewId;
