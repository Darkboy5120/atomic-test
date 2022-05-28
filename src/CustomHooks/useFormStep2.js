import useInput from './useInput';
import useSubmit from './useSubmit';

function useFormStep2() {
  return {
    phone: useInput(/[^0-9]+/, 10, 10, 'El número'),
    submit: useSubmit(),
  };
}

export default useFormStep2;
