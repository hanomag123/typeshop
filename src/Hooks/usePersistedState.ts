import {useState, useEffect, Dispatch} from 'react'


export function usePersistedState<T>(defaultValue: T, localStorageKey: string): [T, Dispatch<T>] {
  const [value, setValue] = useState<T>(() => {
    const localStorageItem = localStorage.getItem(localStorageKey);
    if (localStorageItem === null) return defaultValue;
    try {
      return JSON.parse(localStorageItem);
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};