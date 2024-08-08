import { useState } from 'react';

const useGlobalVariable = () => {
  const [globalVariable, setGlobalVariable] = useState(1000);
  return [globalVariable, setGlobalVariable];
};

export default useGlobalVariable;
