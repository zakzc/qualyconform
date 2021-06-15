import validate from "../utils/validateAction";

const goodEntry = {
  how: "how to do it",
  until: "until ",
  what: "what",
  where: "where",
  why: "why do it",
};

const badEntry = {
  how: "how to do it",
  until: "",
  what: "what",
  where: "where",
  why: "why do it",
};

describe("Tests validation", () => {
  it("Should return false for incorrect entry on until field", () => {
    expect(validate(badEntry)).toStrictEqual({ until: "Required" });
  });
  it("Should return empty object for correct entry", () => {
    expect(validate(goodEntry)).toStrictEqual({});
  });
});
