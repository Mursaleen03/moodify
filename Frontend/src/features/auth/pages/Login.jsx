import React from 'react'

const Login = () => {
  return (
    <main className='flex justify-center items-center h-screen w-screen'>
      <div className='flex flex-col gap-4 p-4 rounded-md'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <form className='flex flex-col gap-4'>
          <input className='p-2 rounded-md' type="email" placeholder='Email' />
          <input className='p-2 rounded-md' type="password" placeholder='Password' />
          <button className='bg-red-500 p-2 rounded-md' type='submit'>Login</button>
        </form>
      </div>
    </main>
  )
}

export default Login
