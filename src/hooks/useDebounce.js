import { useEffect, useRef, useState } from "react";

const DEBOUNCE_NUMBER = 1000;

const useDebounce = (value, delay = DEBOUNCE_NUMBER) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return { debouncedValue, setDebouncedValue };
};

export default useDebounce;
