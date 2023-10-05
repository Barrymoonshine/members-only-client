import './SignUp.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import useUserState from '../../hooks/useUserState';
import useUserDispatch from '../../hooks/useUserDispatch';
import { Navigate } from 'react-router-dom';
import { ValidatorError } from '../../types/messageTypes';

const isValidatorError = (error: any): error is ValidatorError =>
  error && typeof error === 'object' && 'msg' in error;

export type SignUpFormTypes = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  isAdmin: boolean;
};

const SignUp = () => {
  const { isLoading, isLoggedIn, signUpError } = useUserState();
  const { handleSignUp } = useUserDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormTypes>();

  const onSubmit: SubmitHandler<SignUpFormTypes> = async (formData) => {
    const success = await handleSignUp(formData);
    if (success) {
      reset();
      // Redirect to Home with Navigate via isLoggedIn state
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to='/' />
      ) : (
        <>
          <h2>Sign up!</h2>
          <form className='sign-up-form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='First Name'> First Name:</label>
            <input
              //   onClick={() => removeLogInError()}
              {...register('firstName', { required: true })}
            />
            {errors.firstName && (
              <span className='sign-up-error'>This field is required</span>
            )}
            <label htmlFor='First Name'> Last Name:</label>
            <input
              //   onClick={() => removeLogInError()}
              {...register('lastName', { required: true })}
            />
            {errors.lastName && (
              <span className='sign-up-error'>This field is required</span>
            )}
            <label htmlFor='Username'> Username:</label>
            <input {...register('username', { required: true })} />
            {errors.username && (
              <span className='sign-up-error'>This field is required</span>
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
              <span className='sign-up-error'>
                Please enter a password that is between 8 and 20 characters long
                and contains at least one number, one capital letter and one
                special symbol(!@#$%^&*=+-_)
              </span>
            )}
            <label htmlFor='Admin Status'> Admin:</label>
            <input type='checkbox' {...register('isAdmin')} />
            {errors.isAdmin && (
              <span className='sign-up-error'>This field is required</span>
            )}
            {Array.isArray(signUpError) &&
              signUpError.map((error) => {
                if (isValidatorError(error)) {
                  return <span className='sing-up-error'>{error.msg}</span>;
                }
                return null;
              })}
            {!Array.isArray(signUpError) && signUpError && (
              <span className='sign-up-error'>{signUpError.toString()}</span>
            )}
            <button disabled={isLoading} className='sign-up-submit-button'>
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default SignUp;
