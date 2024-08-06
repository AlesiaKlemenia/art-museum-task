export interface IPaginateBarProps {
  pageNumber: number;
  totalPages: number;
  increasePageNumber: () => void;
  decreasePageNumber: () => void;
  selectPage: (pageNumber: number) => void;
  isLoading: boolean;
}
