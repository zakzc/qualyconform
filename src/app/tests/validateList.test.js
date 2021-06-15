import validate from "../utils/validateList";

const goodEntry = {
  date: "1212-12-12",
  departments: ["2", "1"],
  description: "Description",
};

const badEntry = {
  date: "1212-12-12",
  departments: [],
  description: "Description",
};

describe("Tests validation", () => {
  it("Should return false for incorrect entry on department", () => {
    expect(validate(badEntry)).toStrictEqual({
      departments: "At least one department must be selected",
    });
  });
  it("Should return empty object for correct entry", () => {
    expect(validate(goodEntry)).toStrictEqual({});
  });
});
