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
    <div>
      {username}
      {message}
      {createdAt}
    </div>
  );
};

export default MessageCard;
