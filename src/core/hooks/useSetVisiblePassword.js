import { useState } from 'react';

const useSetVisiblePassword = () => {
  const [type, setType] = useState('password');
  const setTypePassword = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };
  return { type, setTypePassword };
};

export default useSetVisiblePassword;
