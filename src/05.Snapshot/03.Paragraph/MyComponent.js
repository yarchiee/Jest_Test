import SubComponent from "./SubComponent";
export default function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  );
}
