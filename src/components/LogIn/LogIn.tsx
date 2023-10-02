import './LogIn.css';

type LogInProps = {
  toggleLogInVisibility: () => void;
};

const LogIn = ({ toggleLogInVisibility }: LogInProps) => {
  return (
    <div
      className='log-in-menu'
      style={{
        left: `0px`,
        top: `89px`,
        width: '200px',
        position: 'fixed',
      }}
      onClick={() => toggleLogInVisibility()}
    >
      <form></form>
    </div>
  );
};

export default LogIn;
