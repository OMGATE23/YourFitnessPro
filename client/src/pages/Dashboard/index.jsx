import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

const Dashboard = () => {
    const {user} = useAuthContext()

    console.log(user)
  return (
    <div>Dashboard
        <button onClick={() => console.log(user)} className='outline outline-2'>Get</button>
    </div>
  )
}

export default Dashboard