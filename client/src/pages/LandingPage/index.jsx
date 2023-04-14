import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='h-screen   flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-8xl font-bold text-bold'>Join <span className='text-blue-950'>YourFitnessPro</span></h1>
        <Link to = '/login' className='block outline outline-2 px-4 py-2 text-2xl font-semibold rounded-xl transition-all duration-150 text-white bg-blue-800 hover:bg-white hover:text-blue-800 hover:outline-blue-800 '>Get Started!</Link>
    </div>
  )
}

export default LandingPage