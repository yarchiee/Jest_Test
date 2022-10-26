import TestRenderer from "react-test-renderer";
import MyComponent from "./MyComponent";
import SubComponent from "./SubComponent";

it("test", () => {
  const testRenderer = TestRenderer.create(<MyComponent />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(SubComponent).props.foo).toBe("bar");
  expect(testInstance.findByProps({ className: "sub" }).children).toEqual([
    "Sub",
  ]);
});
