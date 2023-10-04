import './JoinUs.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import useUserState from '../../hooks/useUserState';
import useUserDispatch from '../../hooks/useUserDispatch';
import { Navigate } from 'react-router-dom';

export type JoinUsFormTypes = {
  riddle: string;
};

const JoinUs = () => {
  const { isMember, isLoading, userID, joinUsError } = useUserState();
  const { handleJoinUs } = useUserDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JoinUsFormTypes>();

  const onSubmit: SubmitHandler<JoinUsFormTypes> = async (formData) => {
    const success = await handleJoinUs(formData, userID);
    if (success) {
      reset();
      // Redirect to Home with Navigate via isMember state
    }
  };

  return (
    <>
      {isMember ? (
        <Navigate to='/' />
      ) : (
        <>
          <h2>Join the club!</h2>
          <img
            src='./images/door-of-durin.png'
            alt='The Door of Durin'
            className='clue-image'
          />
          <form className='riddle-form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='Riddle'> Speak ...... and enter:</label>
            <input
              //   onClick={() => removeLogInError()}
              {...register('riddle', { required: true })}
            />
            {errors.riddle && (
              <span className='riddle-error'>YOU SHALL NOT PASS!</span>
            )}
            {joinUsError && (
              <span className='riddle-error'>YOU SHALL NOT PASS!</span>
            )}
            <button disabled={isLoading} className='riddle-submit-button'>
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default JoinUs;
