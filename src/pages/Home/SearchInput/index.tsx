import "./styles.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { ISearchInputProps } from "@/pages/Home/SearchInput/interfaces";
import { validateSchema } from "@/pages/Home/SearchInput/validateScheme";

const SearchInput = ({
  loading,
  options,
  requests,
  setOptions,
}: ISearchInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce(async (newValue: string) => {
      const isValid = await trigger("search");
      if (!isValid) {
        setOptions([]);
        return;
      }
      requests(newValue);
      // eslint-disable-next-line @typescript-eslint/ban-types
    }, 1000) as Function,
    [trigger],
  );

  const updateValue = async (newValue: string): Promise<void> => {
    setInputValue(newValue);
    debouncedSave(newValue);
  };

  const selectValue = async (title: string): Promise<void> => {
    setInputValue(title);
    setOptions([]);
  };

  const handleClick = (value: any): void => {
    selectValue(value.title);
  };

  return (
    <form>
      <input
        type="search"
        placeholder="Search Art, Artist, Work..."
        className="search-input"
        value={inputValue}
        {...register("search", {
          onChange: (input) => updateValue(input.target.value),
        })}
      />
      <p className="error-message">{errors.search?.message}</p>
      <div className="search-results-container">
        <ul className="search-results-column">
          {loading && <ul>Loading...</ul>}
          {options?.length > 0 &&
            !loading &&
            options?.map((value, index) => (
              <ul
                role="menu"
                key={index}
                onClick={handleClick}
                onKeyDown={handleClick}
              >
                {value.title}
              </ul>
            ))}
        </ul>
      </div>
    </form>
  );
};

export default SearchInput;
