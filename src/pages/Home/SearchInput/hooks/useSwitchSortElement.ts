import { useState } from "react";

import { IUseSortElementReturn } from "@/pages/Home/SearchInput/hooks/interfaces";

export const useSwitchSortElement = (): IUseSortElementReturn => {
  const [sortChecked, setSortChecked] = useState<boolean>(false);

  const handleOnSortSwitchClick = (): void => {
    setSortChecked((prev) => !prev);
  };

  return { sortChecked, handleOnSortSwitchClick };
};
