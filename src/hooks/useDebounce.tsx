import { useEffect, useState } from "react";
import { UseFormTrigger } from "react-hook-form";

export const useDebounce = <T,>(
  value: T,
  milliSeconds: number,
  validator?: UseFormTrigger<{ search?: string }>,
): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (value === "") return;

      if (validator) {
        const isValid = await validator("search");
        if (!isValid) {
          return;
        }
      }

      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds, validator]);

  return debouncedValue;
};
