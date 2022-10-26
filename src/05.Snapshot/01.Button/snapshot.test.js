import { create } from "react-test-renderer";
import Button from "./Button";

it("snapshot of button", () => {
  const tree = create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
