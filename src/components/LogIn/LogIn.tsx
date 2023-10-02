import './LogIn.css';
import { useState } from 'react';

type LogInProps = {
  toggleLogInVisibility: () => void;
};

type InputFields = {
  usernameInput: string;
  passwordInput: string;
};

const LogIn = ({ toggleLogInVisibility }: LogInProps) => {
  const [inputField, setInputField] = useState({
    usernameInput: '',
    passwordInput: '',
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputField((prevState: InputFields) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <div
      className='log-in-menu'
      style={{
        right: `0px`,
        top: `100px`,
        width: '200px',
        position: 'fixed',
      }}
    >
      <button onClick={() => toggleLogInVisibility()} className='close-button'>
        &#10006;
      </button>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type='text'
          name='usernameInput'
          value={inputField.usernameInput}
          onChange={(e) => handleInputs(e)}
          minLength={1}
          required
        />
        <label>Password</label>
        <input
          type='password'
          name='passwordInput'
          value={inputField.passwordInput}
          onChange={(e) => handleInputs(e)}
          minLength={8}
          required
        />
        <button className='submit-button'>Submit</button>
      </form>
    </div>
  );
};

export default LogIn;
