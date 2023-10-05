import './MessageCards.css';
import useUserState from '../../hooks/useUserState';
import useMessageDispatch from '../../hooks/useMessageDispatch';
import { useState } from 'react';

type MessageCardProps = {
  messageId: string;
  title: string;
  username: string;
  message: string;
  createdAt: string;
};

type DeleteError = string | boolean;

const MessageCard = ({
  messageId,
  title,
  username,
  message,
  createdAt,
}: MessageCardProps) => {
  const { isAdmin, isMember } = useUserState();
  const { handleDeleteMessage } = useMessageDispatch();
  const [deleteError, setDeleteError] = useState<DeleteError>(false);

  const reqDeleteMessage = async () => {
    const success = await handleDeleteMessage(messageId);
    if (!success) {
      setDeleteError(
        'Unfortunately we were unable to delete this message, please try again  '
      );
    }
  };

  return (
    <div className='message-card-container'>
      <span className='title'>{title}</span>
      <span className='message'>{message}</span>
      {isMember ? (
        <div className='user-details-container'>
          <span className='username'> By: {username}</span>
          <span className='created-at'>{createdAt.slice(0, 10)}</span>
          {isAdmin && (
            <>
              <button
                className='delete-button'
                onClick={() => reqDeleteMessage()}
              >
                <img
                  src='./images/delete.png'
                  width='20px'
                  height='20px'
                  alt='Delete icon'
                />
              </button>
              {deleteError && (
                <span className='delete-error'>{deleteError}</span>
              )}
            </>
          )}
        </div>
      ) : (
        <>
          <span className='member-notice'>
            Become a member to view who created this post and when :~D
          </span>
          {isAdmin && (
            <>
              <button
                className='delete-button'
                onClick={() => reqDeleteMessage()}
              >
                <img
                  src='./images/delete.png'
                  width='20px'
                  height='20px'
                  alt='Delete icon'
                />
              </button>
              {deleteError && (
                <span className='delete-error'>{deleteError}</span>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MessageCard;
