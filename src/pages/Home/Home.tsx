import './Home.css';
import { useEffect } from 'react';
import useUserDispatch from '../../hooks/useUserDispatch';

const Home = () => {
  const { getMessages } = useUserDispatch();

  // Conditionals
  // if logged in
  // if admin
  // if member

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getMessages();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h2>Hello this is the home page..</h2>
    </>
  );
};

export default Home;
