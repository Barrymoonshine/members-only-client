import './Home.css';
import { useEffect } from 'react';
import useUserDispatch from '../../hooks/useUserDispatch';
import useUserState from '../../hooks/useUserState';
import MessageCard from '../../components/MessageCard/MessageCard';
import { Message } from '../../state/reducerTypes';

const Home = () => {
  const { getMessages } = useUserDispatch();
  const { messagesLoading, messages, messagesError } = useUserState();

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
      {messagesLoading && <span>Page is loading...</span>}
      {messagesError && (
        <span>
          There has been an error with loading this page, please refresh and try
          again or contact the site Admin if the issue persists
        </span>
      )}
      {messages &&
        messages.map((message: Message) => (
          <MessageCard
            key={message._id}
            username={message.username}
            message={message.message}
            createdAt={message.createdAt}
          />
        ))}
    </>
  );
};

export default Home;
