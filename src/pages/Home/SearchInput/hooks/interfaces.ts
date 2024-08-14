import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";

export interface IUseArtworkSuggestionsOptions {
  debouncedInputValue: string;
  inputRef: React.MutableRefObject<HTMLInputElement>;
  nameSortChecked: boolean;
}

export interface IUseArtworkSuggestionsReturn {
  suggestions: IArtworkSearchInfo[];
  setSuggestions: (newValue: IArtworkSearchInfo[]) => void;
}

export interface IUseSortElementReturn {
  sortChecked: boolean;
  handleOnSortSwitchClick: () => void;
}
