import { act, renderHook } from "@testing-library/react";

import { useSwitchSortElement } from "@/pages/Home/SearchInput/hooks/useSwitchSortElement";

describe("useSwitchSortElement", () => {
  test("After init should return default value", () => {
    const { result } = renderHook(useSwitchSortElement);

    expect(result.current.sortChecked).toBeFalsy();
  });

  test("After call onChange should return correct value", () => {
    const { result } = renderHook(useSwitchSortElement);

    expect(result.current.sortChecked).toBeFalsy();
    act(() => result.current.handleOnSortSwitchClick());
    expect(result.current.sortChecked).toBeTruthy();
    act(() => result.current.handleOnSortSwitchClick());
    expect(result.current.sortChecked).toBeFalsy();
  });
});
