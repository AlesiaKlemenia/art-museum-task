import "./styles.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import paths from "@/constants/paths";
import { useDebounce } from "@/hooks/useDebounce";
import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";
import useArtworkSuggestions from "@/pages/Home/SearchInput/hooks/useArtworkSuggestions";
import { useSwitchSortElement } from "@/pages/Home/SearchInput/hooks/useSwitchSortElement";
import SortToggle from "@/pages/Home/SearchInput/SortToggle";
import { validateSchema } from "@/pages/Home/SearchInput/validateScheme";

const SearchInput = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);
  const {
    register,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    resolver: yupResolver(validateSchema),
  });
  const {
    sortChecked: nameSortChecked,
    handleOnSortSwitchClick: handleOnNameSortSwitchClick,
  } = useSwitchSortElement();
  const debouncedInputValue = useDebounce<string>(inputValue, 250, trigger);
  const debouncedNameSortChecked = useDebounce<boolean>(nameSortChecked, 500);
  const { suggestions, setSuggestions } = useArtworkSuggestions({
    debouncedInputValue,
    inputRef,
    nameSortChecked: debouncedNameSortChecked,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSuggestions([]);
    reset();
    const { value } = event.target;
    setInputValue(value);
    // getSuggestions(value);
    setActiveSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion: IArtworkSearchInfo): void => {
    setInputValue(suggestion.title);
    setSuggestions([]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "ArrowUp") {
      setActiveSuggestion(activeSuggestion - 1);
    } else if (event.key === "ArrowDown") {
      setActiveSuggestion(activeSuggestion + 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        handleSuggestionClick(suggestions[activeSuggestion]);
      }
    }
  };

  return (
    <div className="autocomplete">
      <input
        ref={inputRef}
        autoComplete="off"
        type="search"
        placeholder="Search Art, Artist, Work..."
        value={inputValue}
        {...register("search")}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {errors.search?.message && (
        <p className="error-message">{errors.search?.message}</p>
      )}
      <div className="sort-bar">
        <span className="sort-label">Sort in descending order</span>
        <SortToggle
          value={nameSortChecked}
          setValue={handleOnNameSortSwitchClick}
        />
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((suggestion, index) => (
            <Link
              to={`${paths.detail.info.path}${suggestion.id}`}
              key={index}
              className={index === activeSuggestion ? " active" : ""}
            >
              <div
                role="presentation"
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
