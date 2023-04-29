import React, { useState } from 'react'

const RegisterForm = ({ }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h1 className='text-center text-indigo-900 my-10 font-semibold text-4xl'>
        Create a New Account
      </h1>
      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='min-w-full px-20 sm:px-32'>
          <div className='mb-4'>
            <label
              className=' text-gray-700 font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='appearance-none border border-indigo-600 rounded-full min-w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='John Doe'
              name='name'
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className=' text-gray-700 font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='appearance-none border border-indigo-600 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='johndoe@example.com'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              className=' text-gray-700 font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='appearance-none border border-indigo-600 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='********'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col items-center justify-between'>
            <button
              className='bg-indigo-700 w-full hover:bg-indigo-500 text-white font-bold py-2 px-5 mt-3 rounded-full focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Register
            </button>
            <button
              className='bg-white  w-full border border-indigo-700 text-indigo-700 font-bold py-2 px-4 mt-3 rounded-full focus:outline-none focus:shadow-outline'
              type='submit'
            >
              {/* <FaGoogle /> */}

              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterForm