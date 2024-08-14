import { useCallback, useEffect, useState } from "react";

import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";
import {
  IUseArtworkSuggestionsOptions,
  IUseArtworkSuggestionsReturn,
} from "@/pages/Home/SearchInput/hooks/interfaces";
import { getApiSuggestions } from "@/utils/requests";

const useArtworkSuggestions = ({
  debouncedInputValue,
  inputRef,
  nameSortChecked,
}: IUseArtworkSuggestionsOptions): IUseArtworkSuggestionsReturn => {
  const [suggestions, setSuggestions] = useState<IArtworkSearchInfo[]>([]);

  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [inputRef]);

  const getSuggestions = useCallback(
    async (word: string): Promise<void> => {
      if (word) {
        const response = await getApiSuggestions(word, {
          byName: nameSortChecked ? "desc" : "asc",
        });
        setSuggestions(response.data);
      } else {
        setSuggestions([]);
      }
    },
    [nameSortChecked],
  );

  useEffect(() => {
    if (!debouncedInputValue) return;
    getSuggestions(debouncedInputValue);
  }, [debouncedInputValue, getSuggestions]);

  return { suggestions, setSuggestions };
};

export default useArtworkSuggestions;
