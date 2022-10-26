import Counter from "./FireEvent";
import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";

describe("Test <Counter />", () => {
  // 每次測試後將 render 的 DOM 清空
  afterEach(cleanup);
  test("測試點擊功能是否正常", () => {
    // render 畫面
    const { getByText, getByTestId } = render(<Counter />);

    // 首先找到 +1 button
    let addButton = screen.getByText("點我加 1");
    fireEvent.click(addButton);
    expect(screen.getByTestId("display_count").textContent).toBe("點了1下");

    // 接著找到 +2 button
    addButton = screen.getByText("點我加 2");
    fireEvent.click(addButton);
    expect(screen.getByTestId("display_count").textContent).toBe("點了3下");
  });
});
