import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }

    return initialValue;
  });

  const updateValue = (newValue: T | ((currentValue: T) => T)) => {
    setValue((currentValue) => {
      const valueToStore =
        newValue instanceof Function
          ? newValue(currentValue)
          : newValue;

      localStorage.setItem(key, JSON.stringify(valueToStore));

      return valueToStore;
    });
  };

  return [value, updateValue] as const;
}

export default useLocalStorage;