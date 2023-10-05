import './Create.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import useMessageDispatch from '../../hooks/useMessageDispatch';
import useMessageState from '../../hooks/useMessageState';
import useUserState from '../../hooks/useUserState';
import { ValidatorError } from '../../types/messageTypes';

const isValidatorError = (error: any): error is ValidatorError =>
  error && typeof error === 'object' && 'msg' in error;

export type CreateFormTypes = {
  title: string;
  message: string;
};

const Create = () => {
  const { createError, messagesLoading } = useMessageState();
  const { handleCreateMessage } = useMessageDispatch();
  const { username } = useUserState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateFormTypes>();

  const onSubmit: SubmitHandler<CreateFormTypes> = async (formData) => {
    const success = await handleCreateMessage(formData, username);
    if (success) {
      reset();
    }
  };

  return (
    <>
      <h2>Create a new message :-D</h2>
      <form className='create-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='Title'> Title:</label>
        <input
          //   onClick={() => removeLogInError()}
          {...register('title', { required: true })}
        />
        {errors.title && (
          <span className='create-error'>Please provide a title</span>
        )}
        <label htmlFor='Message'> Message:</label>
        <textarea
          {...register('message', {
            required: true,
          })}
          placeholder='Type your message here'
        />
        {errors.message && (
          <span className='create-error'>Please provide a message</span>
        )}
        {Array.isArray(createError) &&
          createError.map((error) => {
            if (isValidatorError(error)) {
              return <span className='create-error'>{error.msg}</span>;
            }
            return null;
          })}
        {!Array.isArray(createError) && createError && (
          <span className='create-error'>
            An internal server error occurred when creating your message, please
            try again or if the issue persists contact the site admin
          </span>
        )}
        <button disabled={messagesLoading} className='create-submit-button'>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
