import useInput from './useInput';
import useSubmit from './useSubmit';

function useFormStep1() {
  return {
    firstname: useInput(/[^A-Za-z0-9]+/, 5, 50, 'El nombre'),
    lastname: useInput(/[^A-Za-z0-9]+/, 5, 50, 'El apellido'),
    submit: useSubmit(),
  };
}

export default useFormStep1;
