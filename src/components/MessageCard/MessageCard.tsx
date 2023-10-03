import './MessageCards.css';

type MessageCardProps = {
  username: string;
  message: string;
  createdAt: string;
};

const MessageCard = ({ username, message, createdAt }: MessageCardProps) => {
  // Conditionals
  // if logged in
  // if admin
  // if member

  return (
    <div className='message-card-container'>
      <span className='username'>{username}</span>
      <span className='message'>{message}</span>
      <span className='created-at'>{createdAt.slice(0, 10)}</span>
    </div>
  );
};

export default MessageCard;
