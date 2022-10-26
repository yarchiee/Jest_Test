let nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank"];
beforeAll(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank"];
});
beforeEach(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank"];
});
afterEach(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank"];
});
afterAll(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank"];
});
describe("name array", () => {
  it("add jay to the end", () => {
    nameList.push("jay");
    expect(nameList[nameList.length - 1]).toBe("jay");
  });
  it("add kay to the beginning", () => {
    nameList.unshift("kay");
    expect(nameList[0]).toBe("kay");
  });
  it("to let initial length of 5", () => {
    expect(nameList.length).toBe(5);
  });
  //   it.only("to let initial length of 5", () => {
  //     expect(nameList.length).toBe(5);
  //   });
});
