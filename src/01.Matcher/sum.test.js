// const sum = require("./sum");
import { sum } from "./sum";
it("should add 1 + 2 to equal 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

describe("testing", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
    expect(result).toBeGreaterThan(2);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThan(2);
    expect(result).toBeLessThanOrEqual(2);
  });
  it("testing add floats", () => {
    const result = 0.1 + 0.2;
    expect(result).toBeCloseTo(0.2999999999999);
  });
  it("testing object", () => {
    const obj = {};
    expect(obj).toBe({});
  });
  it("testing object to equal", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
  it("testing object to StrictEqual", () => {
    const obj = {};
    expect(obj).toStrictEqual({});
  });
  it("testing null", () => {
    const n = null;
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").toMatch(/I/);
  });
});

describe("arrays", () => {
  const nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "kay"];
  expect(nameList).toContain("kay");
});

function testError() {
  throw new Error("there is somthing wrong");
}
describe("error", () => {
  it("testing error", () => {
    expect(() => {
      testError();
    }).toThrow(Error);
  });
});
