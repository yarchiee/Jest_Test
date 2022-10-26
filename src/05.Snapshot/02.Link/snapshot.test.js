import TestRenderer from "react-test-renderer";
import Link from "./Link";

it("snapshot of button", () => {
  const tree = TestRenderer.create(
    <Link
      page="https://www.facebook.com/%22%3EFacebook"
      children={"facebook"}
    ></Link>
  ).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
