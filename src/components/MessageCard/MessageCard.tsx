import './MessageCards.css';
import useUserState from '../../hooks/useUserState';
import useMessageDispatch from '../../hooks/useMessageDispatch';
import { useState } from 'react';

type MessageCardProps = {
  // title
  messageId: string;
  username: string;
  message: string;
  createdAt: string;
};

type DeleteError = string | boolean;

const MessageCard = ({
  messageId,
  username,
  message,
  createdAt,
}: MessageCardProps) => {
  const { isAdmin, isMember } = useUserState();
  const { reqDeleteMessage } = useMessageDispatch();
  const [deleteError, setDeleteError] = useState<DeleteError>(false);

  const handleDeleteMessage = async () => {
    const success = await reqDeleteMessage(messageId);
    if (!success) {
      setDeleteError(
        'Unfortunately we were unable to delete this message, please try again  '
      );
    }
  };

  return (
    <div className='message-card-container'>
      <span className='title'>Title needed</span>
      <span className='message'>{message}</span>
      {isMember ? (
        <>
          <span className='username'> By: {username}</span>
          <span className='created-at'>{createdAt.slice(0, 10)}</span>
        </>
      ) : (
        <span> Become a member to view who created this post and when :~D</span>
      )}
      {isAdmin && (
        <>
          <button
            className='delete-button'
            onClick={() => handleDeleteMessage()}
          >
            <img
              src='./images/delete.png'
              width='20px'
              height='20px'
              alt='Delete icon'
            />
          </button>
          {deleteError && <span className='delete-error'>{deleteError}</span>}
        </>
      )}
    </div>
  );
};

export default MessageCard;
