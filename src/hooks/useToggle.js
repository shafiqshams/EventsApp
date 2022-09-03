import {useState} from 'react';

export const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const toggleFunction = () => setValue(prev => !prev);

  return [value, toggleFunction];
};
