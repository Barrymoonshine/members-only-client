import './MessageCards.css';

type MessageCardProps = {
  username: string;
  message: string;
  createdAt: string;
};

const MessageCard = ({ username, message, createdAt }: MessageCardProps) => {
  return (
    <div>
      {username}
      {message}
      {createdAt}
    </div>
  );
};

export default MessageCard;
