import { fetchData } from "../02.Async/async";
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};
it("mock callback", () => {
  const mockCalledback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCalledback);
  console.log(mockCalledback.mock.calls);
  expect(mockCalledback.mock.calls.length).toBe(2);
  expect(mockCalledback.mock.calls[0][0]).toBe(0);
  expect(mockCalledback.mock.calls[1][0]).toBe(1);
  expect(mockCalledback.mock.results[0].value).toBe(42);
  expect(mockCalledback.mock.results[1].value).toBe(43);
});
it("mock return", () => {
  const mock = jest.fn();
  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("Hello");
  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("Hello");
});

describe("fetch mocking test", () => {
  fetch = jest.fn();

  it("mock fetch", async () => {
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => {
          return { id: 1, name: "yarchiee" };
        },
      })
    );

    const results = await fetchData();

    console.log(results);

    expect(results.name).toBe("yarchiee");
  });
});
