import './Home.css';
import { useEffect } from 'react';
import useMessageDispatch from '../../hooks/useMessageDispatch';
import useMessageState from '../../hooks/useMessageState';
import MessageCard from '../../components/MessageCard/MessageCard';
import { Message } from '../../types/messageTypes';
import useUserState from '../../hooks/useUserState';

const Home = () => {
  const { getMessages } = useMessageDispatch();
  const { messagesLoading, messages, messagesError } = useMessageState();
  const { isLoggedIn, username } = useUserState();

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
      {isLoggedIn ? <h2>Welcome back {username}</h2> : <h2>Club Messages</h2>}
      {messagesLoading && <span>Page is loading...</span>}
      {messagesError && (
        <span>
          There has been an error with loading this page, please refresh and try
          again or contact the site Admin if the issue persists
        </span>
      )}
      {messages &&
        messages.length > 0 &&
        messages.map((message: Message) => (
          <MessageCard
            key={message._id}
            messageId={message._id}
            username={message.username}
            message={message.message}
            createdAt={message.createdAt}
          />
        ))}
      {messages && messages.length === 0 && (
        <>
          {' '}
          <span className='no-messages'>
            There are currently no messages saved.
            <p>Log in or create an account to start posting messages!</p>
          </span>
        </>
      )}
    </>
  );
};

export default Home;
