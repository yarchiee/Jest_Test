import { fetchData } from "./async";

it("return async", () => {
  fetchData().then((data) => {
    expect(data.length).toBe(30);
    return data;
  });
});
