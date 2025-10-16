import React from 'react';

const Login = () => {
  return (
    <div className='bg-blue-500 h-screen items-center justify-center '>
      <div className='items-center justify-center  '>
        <h2 className=' text-2xl  '>SchCloud</h2>
        <h2>Welcome Back</h2>
        <p>Sign in to your SchCloud account to continue</p>
      </div>
      <div className='items-center justify-center'>
        <form
          action=''
          className='items-center justify-center'
        >
          <label htmlFor='email'>
            Email Address
            <input
              type='email'
              id='email'
            />
          </label>

          <label htmlFor='password'>
            Password
            <input
              type='password'
              id='password'
            />
          </label>
          <div>
            <label htmlFor='checkbox'>
              <input type='checkbox' />
              Remember me
            </label>
            <p>
              <a href=''>Forgot Password?</a>
            </p>
          </div>
          <div></div>
          <button>Sign-in </button>
          <p>
            Don't have an account? <a href='#'>Contact your administrator</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
