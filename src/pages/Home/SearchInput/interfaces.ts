import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";

export interface ISearchInputProps {
  loading: boolean;
  options: IArtworkSearchInfo[];
  requests: (word: string) => Promise<void>;
  setOptions: (value: IArtworkSearchInfo[]) => void;
}

export interface ISortParams {
  byName: "desc" | "asc";
}
