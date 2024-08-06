import "./styles.scss";

import { IPaginateBarProps } from "@/pages/Home/SpecialGallery/PaginateBar/interfaces";

const PaginateBar = ({
  pageNumber,
  totalPages,
  decreasePageNumber,
  increasePageNumber,
  selectPage,
  isLoading,
}: IPaginateBarProps): JSX.Element => {
  return (
    <div className="paginate-bar">
      {pageNumber !== 1 && (
        <>
          <button
            type="button"
            className="paginate-bar-button"
            onClick={decreasePageNumber}
            disabled={isLoading}
          >
            {"<"}
          </button>
          <button
            type="button"
            className="paginate-bar-button"
            onClick={() => selectPage(pageNumber - 1)}
            disabled={isLoading}
          >
            {pageNumber - 1}
          </button>
        </>
      )}
      <button
        type="button"
        className={`paginate-bar-button ${isLoading ? "" : "active"}`}
        disabled={isLoading}
      >
        {pageNumber}
      </button>

      {pageNumber !== totalPages && (
        <>
          <button
            type="button"
            className="paginate-bar-button"
            onClick={() => selectPage(pageNumber + 1)}
            disabled={isLoading}
          >
            {pageNumber + 1}
          </button>
          <button
            type="button"
            className="paginate-bar-button"
            onClick={increasePageNumber}
            disabled={isLoading}
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default PaginateBar;
