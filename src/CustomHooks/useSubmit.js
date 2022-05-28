import {useState} from 'react';

function useSubmit() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  return {
    loading,
    setLoading,
    ok,
    setOk,
  };
}

export default useSubmit;
