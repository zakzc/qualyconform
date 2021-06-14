import React from "react";
import Enzyme, { shallow } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import AppLayout from "../../App";

Enzyme.configure({ adapter: new Adapter() });

describe("Main layout component", () => {
  const appLayout = shallow(<AppLayout />);
  describe("Initiates correctly", () => {
    it("renders the app", () => {
      expect(appLayout).toMatchSnapshot();
    });
    it("has the proper navigation import", () => {
      expect(appLayout.find("Navigation")).toBeTruthy();
    });
    it("has the proper routes import", () => {
      expect(appLayout.find("Routes")).toBeTruthy();
    });
  });
});
