import React from 'react'
export const  Login = () =>{

  return (
    <div className="min-h-screen bg-[#F2F4FE] flex items-center justify-center p-4">
    <div className="max-w-lg">
      <div className="bg-white w-full  p-8 mb-8 shadow-2xl">
        <div className="flex flex-col items-center gap-1 mb-8">
          <img src="/logo.png" width="400" height="50" />
          <p className="text-gray-400 text-sm">
            Ingresa con tu usuario y contraseña
          </p>
        </div>
        <form className="flex flex-col gap-4">
          {/* <div className="relative">
            <input
              type="text"
              name="email"
              id="email"
              className='h-20 w-96 px-6 text-4xl bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200 input-text'
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div> */}
          <label className='relative cursor-pointer'>
            <input type="text" placeholder="Username" className='h-10 w-full px-6 text-1xl text-gray-400 bg-white border-gray-300 border-2 rounded-lg border-opacity-50 outline-none focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
            <span className='text-1xl text-white text-opacity-80 bg-white absolute left-5 top-6 px-1 transition duration-200 input-text'>Username *</span>
          </label>
          <label className='relative cursor-pointer'>
            <input type="password" placeholder="Username" className='h-10 w-full px-6 text-1xl text-gray-400 bg-white border-gray-300 border-2 rounded-lg border-opacity-50 outline-none focus:border-red-400 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
            <span className='text-1xl text-white text-opacity-80 bg-white absolute left-5 top-6 px-1 transition duration-200 input-text'>Password *</span>
          </label>
        
          <div>
            <button
              type="submit"
              className="bg-[#eb0003] w-full py-2 px-4 text-white rounded-md hover:bg-[#fcf0f0] hover:text-gray-600 transition-colors"
            >
              Acceder
            </button>
          </div>
        </form>
      </div>
     
    </div>
  </div>
  )
}


