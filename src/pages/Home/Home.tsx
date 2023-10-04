import './Home.css';
import { useEffect } from 'react';
import useMessageDispatch from '../../hooks/useMessageDispatch';
import useMessageState from '../../hooks/useMessageState';
import MessageCard from '../../components/MessageCard/MessageCard';
import { Message } from '../../types/messageTypes';

const Home = () => {
  const { getMessages } = useMessageDispatch();
  const { messagesLoading, messages, messagesError } = useMessageState();

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
      <h2>Club Messages</h2>
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
