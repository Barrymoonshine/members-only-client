import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ACTIONS from '../utils/ACTIONS';

const useUserDispatch = () => {
  const { dispatch } = useContext(ShopContext);

  return {
    
  };
};

export default useUserDispatch;
