import validate from "../utils/validate";

const goodEntry = {
  date: "1212-12-12",
  department: ["2", "1"],
  description: "Description",
  how: "how to do it",
  until: "until ",
  what: "what",
  where: "where",
  why: "why do it",
};

const badEntry = {
  date: "1212-12-12",
  department: [],
  description: "Description",
  how: "how to do it",
  until: "until ",
  what: "what",
  where: "where",
  why: "why do it",
};

describe("Tests validation", () => {
  it("Should return false for incorrect entry on department", () => {
    expect(validate(badEntry)).toStrictEqual({
      department: "At least one department must be selected",
    });
  });
  it("Should return empty object for correct entry", () => {
    expect(validate(goodEntry)).toStrictEqual({});
  });
});
