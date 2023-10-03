import './LogIn.css';
import useUserDispatch from '../../hooks/useUserDispatch';
import useUserState from '../../hooks/useUserState';
import { useForm, SubmitHandler } from 'react-hook-form';

type LogInProps = {
  toggleLogInVisibility: () => void;
};

export type LogInFormTypes = {
  username: string;
  password: string;
};

const LogIn = ({ toggleLogInVisibility }: LogInProps) => {
  const { handleLogIn } = useUserDispatch();
  const { logInError, isLoading } = useUserState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LogInFormTypes>();

  const onSubmit: SubmitHandler<LogInFormTypes> = async (formData) => {
    const success = await handleLogIn(formData);
    if (success) {
      reset();
      toggleLogInVisibility();
    }
  };

  return (
    <div
      className='log-in-menu'
      style={{
        right: `0px`,
        top: `90px`,
        width: '200px',
        position: 'fixed',
      }}
    >
      <button onClick={() => toggleLogInVisibility()} className='close-button'>
        &#10006;
      </button>
      <form className='log-in-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='Username'> Username:</label>
        <input {...register('username', { required: true })} />
        {errors.username && (
          <span className='log-in-error'>This field is required</span>
        )}
        <label htmlFor='password'> Password:</label>
        <input
          type='password'
          {...register('password', {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/,
          })}
        />
        {errors.password && (
          <span className='log-in-error'>
            Please enter a password that is between 8 and 20 characters long and
            contains at least one number, one capital letter and one special
            symbol(!@#$%^&*=+-_)
          </span>
        )}
        {logInError && <span className='log-in-error'>{logInError}</span>}
        <button disabled={isLoading} className='log-in-submit-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
