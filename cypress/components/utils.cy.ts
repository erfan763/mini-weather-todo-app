/// <reference types="cypress" />
import { getModifiedValues } from "../../src/logic/utils";

describe("Utils Function", () => {
  it("returns null if no values are modified", () => {
    const values = { name: "Erfan", age: 25 };
    const initialValues = { name: "Erfan", age: 25 };
    const modifiedValues = getModifiedValues(values, initialValues);
    expect(modifiedValues).to.be.null;
  });

  it("returns the modified values", () => {
    const values = { name: "Erfan", age: 25 };
    const initialValues = { name: "Erfan", age: 30 };
    const modifiedValues = getModifiedValues(values, initialValues);
    expect(modifiedValues).to.deep.equal({ age: 25 });
  });

  it("returns null if values object is empty", () => {
    const values = {};
    const initialValues = { name: "Erfan", age: 25 };
    const modifiedValues = getModifiedValues(values, initialValues);
    expect(modifiedValues).to.be.null;
  });

  it("returns null if values and initialValues are both empty", () => {
    const values = {};
    const initialValues = {};
    const modifiedValues = getModifiedValues(values, initialValues);
    expect(modifiedValues).to.be.null;
  });
});
