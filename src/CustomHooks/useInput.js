import {useState} from 'react';

function useInput(regex, min, max, logName) {
  const [value, setValue] = useState('');
  const [ok, setOk] = useState();
  const customHook = {
    setValue,
    value,
    ok,
    setOk,
    validation: {
      regex,
      min,
      max,
    },
    logName,
  };
  return customHook;
}

export default useInput;
