import { useEffect, useState } from "react";
import { UseFormTrigger } from "react-hook-form";

export const useDebounce = (
  value: string,
  milliSeconds: number,
  trigger: UseFormTrigger<{ search?: string }>,
): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (!value) return;

      const isValid = await trigger("search");
      if (!isValid) {
        return;
      }

      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds, trigger]);

  return debouncedValue;
};
